const Tram = require('tram-one')
const html = Tram.html()

const todoStyle = `
  cursor: pointer;
`

module.exports = (attrs, children) => {
  return html`
    <li style=${todoStyle} onclick=${attrs.onclick}>
      ${children}
    </li>
  `
}
