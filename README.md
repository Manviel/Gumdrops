# hello-com

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Storybook

This repository includes a dedicated Storybook workspace package for developing and previewing UI components.

Run Storybook (recommended — from the repo root so workspace links are resolved):

```bash
# install dependencies (if you haven't already)
npm install

# start Storybook for the storybook package
npm --workspace @gumdrops/storybook run storybook
```

Or run from the storybook package folder directly:

```bash
cd src/packages/storybook
npm install
npm run storybook
```

Notes

- The storybook package imports components from `@gumdrops/core` (local file link). If Storybook fails to start, make sure you installed dependencies from the repository root so the local package link is available.
- Storybook runs on port 6006 by default. Open http://localhost:6006/ after starting it.
