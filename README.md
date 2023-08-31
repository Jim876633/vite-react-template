# Vite React template

This template use the Vite + Typescript + swc for Basic React project.

## Dependencies

- [react](https://reactjs.org/)(18.2.0)
- [react-dom](https://reactjs.org/docs/react-dom.html)(18.2.0)
- [react-router-dom](https://reactrouter.com/web/guides/quick-start)(6.15.0)
- [react-redux](https://react-redux.js.org/)(8.1.2)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)(1.9.5)

## Dev Dependencies

### build

- [vite](https://vitejs.dev/)(4.4.5)
- [typescript](https://www.typescriptlang.org/)(5.0.2)

### style

- [sass](https://sass-lang.com/)(1.66.1)

### format

- [husky](https://typicode.github.io/husky/#/)(8.0.3)
- [lint-staged](https://github.com/okonet/lint-staged)(14.0.1)
- [eslint](https://eslint.org/)(8.45.0)
- [prettier](https://prettier.io/)(3.0.2)
- [stylelint](https://stylelint.io/)(15.10.3)

### conventional commit

- [@commitlint/cli](https://commitlint.js.org/#/)(17.7.1)
- [commitizen](https://commitizen-tools.github.io/commitizen/)(4.3.0)
- [cz-customizable](https://www.npmjs.com/package/cz-customizable)(7.0.0)

### test

- [vitest](https://vitest.dev/)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)(14.0.0)
- [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/)(6.1.2)
- [@testing-library/user-event](https://testing-library.com/docs/ecosystem-user-event/)(14.4.3)

## Usage

### Install

```bash
npm install
```

### Start

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```

### commit

use commitizen to commit

```bash
npm run commit
```

### Deploy

If use **github-page** to deploy just push the code to github and enable github-page use **GitHub Actions** in setting.

![Github Action](/public/github-action.png)

And change the baseUrl in src/constants/index.ts to your repo name

```ts
export const baseUrl = "your-repo-name";
```
