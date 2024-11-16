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
  displayName: {
    isString: {
      errorMessage: "should be String",
    },
    notEmpty: {
      errorMessage: "should not be Empty",
    },
    isLength: {
      options: { min: 3, max: 30 },
      errorMessage: "length should  be 3-30 chars",
    },
  },
  password: {
    isString: {
      errorMessage: "should be Alphanumeric",
    },
    notEmpty: {
      errorMessage: "should not be Empty",
    },
    isLength: {
      options: { min: 3, max: 15 },
      errorMessage: "length should be 8-15 chars",
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
