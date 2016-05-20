module.exports = `"use strict";

var HelloMessage = React.createClass({
  render: function render() {
    return React.createElement(
      "div",
      null,
      "Hello World!!"
    );
  }
});

ReactDOM.render(
  React.createElement(HelloMessage, null),
  mountNode
);
`;
