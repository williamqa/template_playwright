const { Component } = require('./_component')

class HeaderComponent extends Component {
  constructor(page) {
    super(page, 'div[data-elementor-type="header"]')
  }
}

module.exports = { HeaderComponent }
