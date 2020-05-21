import superagent from 'superagent'

export default class FetchManager {
  static fetching = {}

  static fetch(path, omitCache = false) {
    if (!FetchManager.fetching[path] || omitCache) {
      FetchManager.fetching[path] = new Promise((resolve, reject) => {
        superagent.get(path).end((error, result) => {
          if (error) reject(error)
          else resolve(result.body)
        })
      })
    }
    return FetchManager.fetching[path]
  }
}
