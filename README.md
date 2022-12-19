### Electron React MD

[App Preview](/public/app-preview.png)

This is a boilerplate project consisting the following 

1. [codemirror](https://codemirror.net/) for markdown editing pane
2. [unified](https://unifiedjs.com) + [remark-parse](https://github.com/remarkjs/remark/tree/main/packages/remark-parse) plugin to convert markdown text on the codemirror pane to a "remark-parse" syntax tree
3. [remark-rehype](https://github.com/remarkjs/remark-rehype) to convert remark syntax trees to rehype tree for enabling further conversion pipeline
4. [rehype-highlight](https://github.com/rehypejs/rehype-highlight) plugin to add syntax highlighting classes (using [highlight.js](https://highlightjs.org) class nomenclature)
5. [rehype-react](https://github.com/rehypejs/rehype-react) to convert rehype tree to convert rehype syntax tree to react dom
6. highlight js css imports to convert rehype-hihgliht syntax classes to actual color values.
7. [vite](https://vitejs.dev/) for building src files, dev server with hot reloading and hot module replacement 
8. [electron-forge](https://www.electronforge.io/) for the stable electron building and packaging workflow
9. typescript+react for everything
10. [concurrently](https://www.npmjs.com/package/concurrently) to make vite server and electron start happens at the same time and not one after the other as in dev environment electron loads vite localhost port for all its views. 
11. [cross-env](https://www.npmjs.com/package/cross-env) to pass a development flag to electron app.js
