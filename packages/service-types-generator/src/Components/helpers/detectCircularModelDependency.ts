import { TreeModel, TreeModelMember } from "@aws-sdk/build-types";

/**
 * A map recording the names of the shapes that have circular dependency.
 * keys are shape names and values are dependencies' name that contains
 * circular dependency.
 */
export type CircularDependenciesMap = { [key: string]: Set<string> };

/**
 * Do DFS on input and output shape of each operation of given model searching for
 * circular dependencies in models
 * @param model Service tree model
 */
export function detectCircularModelDependency(
  model: TreeModel
): CircularDependenciesMap {
  const { operations } = model;
  let circularDependencies: CircularDependenciesMap = {};
  for (const name of Object.keys(operations)) {
    const operation = operations[name];
    const ioShape: Array<"input" | "output"> = ["input", "output"];
    for (const io of ioShape) {
      const ioMember = operation[io];
      circularDependencies = mergeDependencyMap(
        circularDependencies,
        detectCircularDependencyFromIO(ioMember)
      );
    }
  }
  return circularDependencies;
}

function detectCircularDependencyFromIO(
  member: TreeModelMember,
  visitedMember: Set<string> = new Set()
): CircularDependenciesMap {
  if (member.shape.type === "map") {
    return detectCircularDependencyFromMap(member, visitedMember);
  } else if (member.shape.type === "structure") {
    return detectCircularDependencyFromStructure(member, visitedMember);
  } else if (member.shape.type === "list") {
    return detectCircularDependencyFromList(member, visitedMember);
  } else {
    return {};
  }
}

function detectCircularDependencyFromMap(
  member: TreeModelMember,
  visitedMember: Set<string> = new Set()
): CircularDependenciesMap {
  if (member.shape.type !== "map")
    throw new Error("cannot parse non-Map shaped member.");
  const backwardsDependencies: Set<string> = new Set();
  let circularDependencies: CircularDependenciesMap = {};
  const kv: Array<"key" | "value"> = ["key", "value"];
  for (const kvEntry of kv) {
    const kvMember = member.shape[kvEntry];
    const {
      shape: { name: kvMemberName }
    } = kvMember;
    if (visitedMember.has(kvMemberName)) {
      backwardsDependencies.add(kvMemberName);
    } else {
      visitedMember.add(kvMemberName);
      const circularDependencyFromKV = detectCircularDependencyFromIO(
        kvMember,
        visitedMember
      );
      visitedMember.delete(kvMemberName);
      circularDependencies = mergeDependencyMap(
        circularDependencies,
        circularDependencyFromKV
      );
    }
  }
  if (backwardsDependencies.size > 0) {
    circularDependencies = mergeDependencyMap(circularDependencies, {
      [member.shape.name]: backwardsDependencies
    });
  }
  return circularDependencies;
}

function detectCircularDependencyFromStructure(
  member: TreeModelMember,
  visitedMember: Set<string> = new Set()
): CircularDependenciesMap {
  if (member.shape.type !== "structure")
    throw new Error("cannot parse non-Structure shaped member.");
  const backwardsDependencies: Set<string> = new Set();
  let circularDependencies: CircularDependenciesMap = {};
  for (const name of Object.keys(member.shape.members)) {
    const subMember = member.shape.members[name];
    const subMemberName = subMember.shape.name;
    if (visitedMember.has(subMemberName)) {
      backwardsDependencies.add(subMember.shape.name);
    } else {
      visitedMember.add(subMemberName);
      const circularDependencyFromSub = detectCircularDependencyFromIO(
        subMember,
        visitedMember
      );
      visitedMember.delete(subMemberName);
      circularDependencies = mergeDependencyMap(
        circularDependencies,
        circularDependencyFromSub
      );
    }
  }
  if (backwardsDependencies.size > 0) {
    circularDependencies = mergeDependencyMap(circularDependencies, {
      [member.shape.name]: backwardsDependencies
    });
  }
  return circularDependencies;
}

function detectCircularDependencyFromList(
  member: TreeModelMember,
  visitedMember: Set<string> = new Set()
): CircularDependenciesMap {
  if (member.shape.type !== "list")
    throw new Error("cannot parse non-List shaped member.");
  let circularDependencies: CircularDependenciesMap = {};
  const listMember = member.shape.member;
  const {
    shape: { name: listMemberName }
  } = listMember;
  if (!visitedMember.has(listMemberName)) {
    visitedMember.add(listMemberName);
    circularDependencies = detectCircularDependencyFromIO(
      member.shape.member,
      visitedMember
    );
    visitedMember.delete(listMemberName);
  } else {
    const {
      shape: { name: listMemberName }
    } = member.shape.member;
    const backwardsDependencies: Set<string> = new Set([listMemberName]);
    circularDependencies = mergeDependencyMap(circularDependencies, {
      [member.shape.name]: backwardsDependencies
    });
  }
  return circularDependencies;
}

function mergeDependencyMap(
  mapA: CircularDependenciesMap,
  mapB: CircularDependenciesMap
): CircularDependenciesMap {
  const toReturn = { ...mapA };
  for (const Bkey of Object.keys(mapB)) {
    const Bvalue = mapB[Bkey];
    if (Object.keys(toReturn).indexOf(Bkey) >= 0) {
      const updatedAvalue = new Set([
        ...toReturn[Bkey]!.values(),
        ...Bvalue.values()
      ]);
      toReturn[Bkey] = updatedAvalue;
    } else {
      toReturn[Bkey] = Bvalue;
    }
  }
  return toReturn;
}
