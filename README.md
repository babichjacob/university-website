# My University Website
This is a micro-project for my personal domain at my university's web server.

TODO:

```js
const modules = import.meta.glob('')
const rawModules = {}
for (const path in modules) {
  rawModules[path] = () => import(`${path}?raw`)
}

// or

const modules = import.meta.glob('../models/docs/*/*.md')
const docs = modules.map( path => {
  return () => import(`${path}?raw`)
})
```
Then you should have an object called rawModules that has all the proper urls to import them as a string
