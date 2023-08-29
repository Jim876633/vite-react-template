module.exports = {
  extends: ["cz", "gitmoji"],
  rules: {
    "type-empty": [2, "never"],
    "type-min-length": [2, "always", 3],
    "subject-empty": [2, "never"],
  },
};
