### Electron React MD

This is a boilerplate project consisting the following 

1. codemirror6 for markdown editing pane
2. unified + remark-parse plugin to convert markdown text on the codemirror pane to a "remark-parse" syntax tree
3. remark-rehype to convert remark syntax trees to rehype tree for enabling further conversion pipeline
4. rehype-highlight plugin to add syntax highlighting classes (using highlight.js class nomenclature)
5. rehype-react to convert rehype tree to convert rehype syntax tree to react dom
6. highlight js css imports to convert rehype-hihgliht syntax classes to actual color values.
7. vite for building src files, dev server with hot reloading and hot module replacement 
8. electron-forge for the stable electron building and packaging workflow
9. Typescript and react components for entire src tree
10. concurrently to make vite server and electron start happens at the same time and not one after the other as in dev environment electron loads vite localhost port for all its views. 
11. cross-env to pass a development flag to electron app.js