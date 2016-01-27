'use strict'

import path from 'path'
import stylus from 'stylus'


// ----------------------------------------------------------------------------

function end_with_newline(source) {
  source = source.replace(/\r\n/g, '\n')
  if (!source.endsWith('\n')) {
    source += '\n'
  }
  return source
}


// ----------------------------------------------------------------------------

export function fetch_all(paths, root='./') {
  root = path.dirname(root) + '/'
  root = root.replace(/^(.+\/)*(.*)$/, '$1')

  return Promise.all(
    paths.map(path => {
      return System.import(`${root}${path}!text`)
        .then(end_with_newline)
        .then(source => {
          return {
            source,
            path
          }
        })
    })
  )
}


// ----------------------------------------------------------------------------

function replace_imports(source, address) {
  const deps = stylus.deps(source)
}

// ----------------------------------------------------------------------------

const import_format = imp => `
# ${'-'.repeat(78)}
# ${imp.path.replace(/^(.+\/)*(.+)$/, "$2")}.styl

${imp.source}
`

export function build_import_block(paths, root='./') {
  return fetch_all(paths, root)
    .then(importeds => importeds.map(import_format).join('\n\n'))
}
