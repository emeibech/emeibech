import { nanoid } from 'nanoid';

export function generateKeys(list: unknown[]): string[] {
  return list.map(() => nanoid());
}
