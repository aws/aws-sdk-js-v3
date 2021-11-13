import { lstatSync, readdirSync } from "fs";
import { join } from "path";

export interface NpmSize {
  publishSize: number;
  installSize: number;
}

/**
 * Replicate the same config of PackagePhobia
 */
export const calculateNpmSize = (packageDir: string, packageName: string): NpmSize => {
  const nodeModules = join(packageDir, "node_modules");
  const installFiles = new Set<number>();
  const installSize = getDirSize(nodeModules, installFiles);
  const publishFiles = new Set<number>();
  const publishSize = getDirSize(join(nodeModules, packageName), publishFiles);
  return {
    installSize,
    publishSize,
  };
};

const getDirSize = (root: string, seen: Set<number>): number => {
  const stats = lstatSync(root);

  if (seen.has(stats.ino)) {
    return 0;
  }

  seen.add(stats.ino);

  if (!stats.isDirectory()) {
    return stats.size;
  }

  return readdirSync(root)
    .map((file) => getDirSize(join(root, file), seen))
    .reduce((acc, num) => acc + num, 0);
};
