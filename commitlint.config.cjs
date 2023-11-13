module.exports = {
  extends: ["cz", "gitmoji"],
  rules: {
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "chore",
        "docs",
        "style",
        "refactor",
        "test",
        "revert",
        "update",
      ],
    ],
    "type-min-length": [2, "always", 3],
    "subject-empty": [2, "never"],
  },
};
