'use strict'

import stylus from 'stylus'

import { import path from 'path' } from './includes'


// ----------------------------------------------------------------------------

function replace_imports(deps, root) {
  return build_import_block(deps, root)
    .then()
}

export function translate(load) {
  const deps = stylus.deps(load.source)

  return build_import_block(deps, load.address)


  return Promise.all([
    expand_text({source: load.source, address: load.address}),
    get_runtime_loc(__moduleName)
  ])
    .then(function (values) {
      let [text, runtime_loc] = values
      // Note: mask "require" by separating from  left parenthesis to prevent
      // dependency processing on module load.
      //
      return 'var jade = require' + '("' + runtime_loc + '");\n\n' +
        'module.exports = ' + Jade.compileClient(text)
    })
}

@media print {
  * { visibility: invisible }
  #print-area * { visibility: visible }
}
