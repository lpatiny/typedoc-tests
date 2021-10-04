/**
 * function that say the name
 * @param options - an object containing first and last name
 */

export function sayName({
  first,
  last = 'Smith',
}: {
  /** The person first name */
  first: string;
  /** The person last name */
  last?: string;
}): void {
  const name = `${first} ${last}`;
  console.log(name);
}
