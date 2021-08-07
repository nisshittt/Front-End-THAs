export const Username = (input) => {
  return {
    type: "USERNAME",
    payload: input
  };
};

export const Email = (input) => {
  return {
    type: "EMAIL",
    payload: input
  };
};
