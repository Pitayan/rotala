import marked from 'marked'
import Prism from 'prismjs'

marked.setOptions({
  highlight(code, lang) {
    if (!Prism.languages[lang]) return code

    Prism.hooks.add('before-highlightall', env => {
      if (env.tag == 'code') {
        env.attributes += `data-lang=${lang}`
      }
    })

    return Prism.highlight(code, Prism.languages[lang], lang)
  }
})

export default marked
