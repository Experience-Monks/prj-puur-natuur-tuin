export type EntryIdentifier<Type extends string = string> = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  __typename: Type;
  id: string;
};
