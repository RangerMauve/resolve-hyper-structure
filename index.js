
const {Header} = require('./messages')

async function resolveHyperStructure(core) {
  try {
  const data = await core.get(0)

  const {type, metadata} = Header.parse(data)

  if(type === 'hypertrie' && metadata) return {type: 'hyperdrive', metdata}

  return {type, metadata}
  } catch(e) {
    return {type: 'hypercore'}
  }
}
