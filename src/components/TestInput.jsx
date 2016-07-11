define(['react', 'react-dom'], function(React, ReactDOM) {
  var TestInput = React.createClass({
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
      return (<p>
                <input type="text" defaultValue='' ref='author'/>
                <textarea defaultValue='' ref='comment'/>
                <input onClick={this.btnOnClick} type="button" value="Отправить"/>
              </p>
            );
    }
  });

  return TestInput;
});