import hljs from 'highlight.js'
import 'highlight.js/styles/github.css' // 필요하면 스타일도 임포트

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre code').forEach((block) => {
    hljs.highlightElement(block)
  })
})
