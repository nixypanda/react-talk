module.exports = `var HM = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
  <HM name="awesome"/>,
  mountNode
);
`;
