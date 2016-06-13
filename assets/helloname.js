module.exports = `"use strict";

var HM = React.createClass({
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
});

ReactDOM.render(
  React.createElement(HM, {name: "Tech Social"}),
  mountNode
);
`;
