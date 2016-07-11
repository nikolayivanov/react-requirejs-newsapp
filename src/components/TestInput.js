define(['react', 'react-dom'], function(React, ReactDOM) {
  var TestInput = React.createClass({displayName: "TestInput",
    getInitialState: function() {
      return {
        myValue: ""
      };
    },
    authorOnChange: function(e) {
      this.setState({myValue: e.target.value})
    },
    btnOnClick: function (e) {
      //alert('Значение отправлено: ' + this.state.myValue);
      var item = [{
        author: ReactDOM.findDOMNode(this.refs.author).value,
        text: ReactDOM.findDOMNode(this.refs.comment).value,
        bigText: ReactDOM.findDOMNode(this.refs.comment).value
      }];

      window.ee.emit('News.add', item);
    },
    render: function() {
      return (React.createElement("p", null, 
                React.createElement("input", {type: "text", defaultValue: "", ref: "author"}), 
                React.createElement("textarea", {defaultValue: "", ref: "comment"}), 
                React.createElement("input", {onClick: this.btnOnClick, type: "button", value: "Отправить"})
              )
            );
    }
  });

  return TestInput;
});