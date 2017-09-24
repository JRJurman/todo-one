const Tram = require('tram-one')
const html = Tram.html()

const doneStyle = `
  text-decoration: line-through
`

module.exports = (attrs, children) => {
  return html`
    <li style=${doneStyle}>
      ${children}
    </li>
  `
}
