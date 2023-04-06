export const assertIsNode: (e: EventTarget | null) => asserts e is Node = (
  e: EventTarget | null
) => {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`);
  }
};
