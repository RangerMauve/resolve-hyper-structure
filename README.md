# resolve-hyper-structure
Library for resolving a `hyper://` URL to a hypercore-protocol based data structure

## How it will work (TODO)

- Get a constructor for `hypercore`
- Get an optional `resolveName` API for dat-dns support
- Get an optional hint for which datastructure should be assumed
- Resolve the `hyper://` URL to a hypercore (the metadata feed)
- Check for a hypercore header in the `0` index.
- If the `length` is `0`, wait for a peer to get some data
- If you get some data and `0` isn't a header, assume it's a regular hypercore
- Try to map the header to the datastructure and pass in the hypercore
- Assume that `hypertrie` with a `metadata` of 64 bytes is a Hyperdrive
- Support [hyperbee](https://github.com/mafintosh/hyperbee/blob/master/index.js#L264)
- Try to get [this](https://github.com/hypercore-protocol/hyperdrive/issues/294) merged to make life easier.-
- Support `version` in the URL

## API

```js
const resolveHyperStrucutre = require('resolve-hyper-structure')
const resolve = resolveHyperStructure({
  hypercore,
  resolveName,
})

const dirve = resolve('hyper://key here')
```

