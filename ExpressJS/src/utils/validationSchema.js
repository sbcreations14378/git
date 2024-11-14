export const createUserValidation = {
  username: {
    isString: {
      errorMessage: "should be String",
    },
    notEmpty: {
      errorMessage: "should not be Empty",
    },
    isLength: {
      options: { min: 3, max: 15 },
      errorMessage: "length should  be 3-15 chars",
    },
  },
  displayname: {
    isString: {
      errorMessage: "should be String",
    },
    notEmpty: {
      errorMessage: "should not be Empty",
    },
    isLength: {
      options: { min: 3, max: 15 },
      errorMessage: "length should  be 3-15 chars",
    },
  },
};

export const getUserFilterValidation = {
  filter: {
    isString: {
      errorMessage: "should be String",
    },
    notEmpty: {
      errorMessage: "should not be Empty",
    },
    isLength: {
      options: { min: 3, max: 15 },
      errorMessage: "length should  be 3-15 chars",
    },
  },
  value: {
    isString: {
      errorMessage: "should be String",
    },
    notEmpty: {
      errorMessage: "should not be Empty",
    },
  },
};
