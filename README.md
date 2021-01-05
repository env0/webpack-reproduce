# Reproducing Webpack issue
`!new.target.isInitialized` is bundled as `true`

To reproduce:
1. `npm i`
2. `npm run webpack`

**Expected behavior**
`if(!new.target.isInitialized)` should be bundled as `if(!new.target.isInitialized)`

**Actual behavior**
`if(!new.target.isInitialized)` is bundled as `if(true)`