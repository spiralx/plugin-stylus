'use strict'

import path from 'path'
import url from 'url'


// ----------------------------------------------------------------------------

const paths = {}


export default function resolvePath(request, urlBase) {
  return new Promise((resolve, reject) => {

    if (request.current.startsWith('jspm:')) {
      System.normalize(request.current.substr(5) + '.styl')
        .then(file => resolve(file.replace(/\.(js|ts)$/, '')))
        .catch(err => reject(err))
    }
    else {
      const previous = request.previous,
            prevBase = path.dirname(previous) + '/',
            base = previous === 'stdin' ? urlBase : paths[previous] || prevBase

      const resolved = url.resolve(base, request.current)

      if (previous !== 'stdin') {
        paths[request.current] = path.dirname(resolved) + '/'
      }

      resolve(`${resolved}.styl`)
    }
  })
}
