module.exports = `var Timer = React.createClass({
  getInitialState: function() {
    return {
      seconds: 0
    };
  },
  tick: function() {
    this.setState({
      seconds: this.state.seconds + 1
    });
  },
  componentDidMount: function() {
    this.interval = setInterval(
      this.tick,
      1000
    );
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>
        Seconds Elapsed:
        {this.state.seconds}
      </div>
    );
  }
});

ReactDOM.render(<Timer />, mountNode);
`;
