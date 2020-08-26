# resolve-hyper-structure
Library for resolving a `hyper://` URL to a hypercore-protocol based data structure

## How it will work (TODO)

- Check for a hypercore header in the `0` index.
- If the `length` is `0`, wait for a peer to get some data? (MAYBE)
- If you get some data and `0` isn't a header, assume it's a regular hypercore
- Try to map the header to the datastructure and pass in the hypercore
- Assume that `hypertrie` with a `metadata` of 64 bytes is a Hyperdrive
- Try to get [this](https://github.com/hypercore-protocol/hyperdrive/issues/294) merged to make life easier.-

## API

```js
const resolveHyperStrucutre = require('resolve-hyper-structure')

const {type, metadata} = await resolveHyperStrucutre(hypercore)
```

