// 參考：https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js
module.exports = {
  // 配置 type 的選項，限制只能提交以下類型
  types: [
    {
      value: ":sparkles: feat",
      name: "feat: 新增功能",
    },
    {
      value: ":bug: fix",
      name: "fix: 解決 bug 或 issue",
    },
    {
      value: ":package: chore",
      name: "chore: 修改架構/套件等配置",
    },
    {
      value: ":page_facing_up: docs",
      name: "docs: 更新文件",
    },
    {
      value: ":art: style",
      name: "style: 修改樣式",
    },
    {
      value: ":hammer: refactor",
      name: "refactor: 對程式碼進行重構",
    },
    {
      value: ":test_tube: test",
      name: "test: 新增或修改測試",
    },
    {
      value: ":wastebasket: revert",
      name: "revert: 回退到上一次提交",
    },
    {
      value: ":rocket: update",
      name: "update: 更動程式碼",
    },
  ],

  // 配置 scope 可選的選項，限制只能提交以下範圍
  // scopes: ['global', 'scope1', 'scope2'],

  // 每一步的提示信息
  messages: {
    type: "請選擇提示訊息",
    scope: "請選擇 scope（選填）",
    subject: "請輸入 commit 內容（必填）",
    body: "請輸入 commit description，可透過 & 換行（選填）",
    breaking: "列出任何 BREAKING CHANGES（重大修改）(選填)",
    footer: "請輸入相關的的 issue（跟 issue 有關的 commit）(選填)",
    confirmCommit: "確定提交此 commit 嗎？",
  },

  // 是否允許客製化 scopes
  allowCustomScopes: true,
  // 允許 BREAKING CHANGE 的項目
  allowBreakingChanges: ["feat", "fix"],

  // 跳過要求的步驟
  skipQuestions: ["scope", "breaking", "footer"],

  // limit subject length
  subjectLimit: 100,
  // commit description 換行符號
  breaklineChar: "&",
  // footer prefix
  footerPrefix: "ISSUES CLOSED:",

  // 是否一開始就要求有 BREAKING CHANGE
  askForBreakingChangeFirst: false,
};
