import { homedir } from "os";
import { sep } from "path";

/**
 * Get the HOME directory for the current runtime.
 *
 * @internal
 */
export const getHomeDir = (): string => {
  const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${sep}` } = process.env;

  if (HOME) return HOME;
  if (USERPROFILE) return USERPROFILE;
  if (HOMEPATH) return `${HOMEDRIVE}${HOMEPATH}`;

  return homedir();
};
