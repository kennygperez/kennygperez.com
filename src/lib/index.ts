import { v4 as uuidv4 } from 'uuid';

/**
 * Svelte AFAIK does not have this, so im using a UUID 3rd party package to generate unique ids!
 * making the function follow the react use*() pattern 💀
 *
 * @see https://react.dev/reference/react/useId
 */
export function useId(): string {
  return uuidv4();
}
