import { hashSync, compareSync } from "bcrypt";

const saltOrRounds = 10;

export function bcryptHash(input: string) {
  return hashSync(input, saltOrRounds);
}

export function bcryptCompare(data: string, encrypted: string) {
  return compareSync(data, encrypted);
}
