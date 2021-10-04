export interface Options {
  /** The person first name */
  first: string;
  /** The person last name
   * @default 'Smith
   */
  last?: string;
}

/**
 * function that say the name
 * @param options - an object containing first and last name
 */

export function interfaceName({ first, last = 'Smith' }: Options): void {
  const name = `${first} ${last}`;
  console.log(name);
}
