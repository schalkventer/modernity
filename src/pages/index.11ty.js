const html = require('html-template-tag');
const { button } = require('../components/index');

module.exports = html`
  <div>
    <p>
      $${button}
    </p>
  </div>
`;
