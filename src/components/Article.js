define(['react'], function(React) {
  var Article = React.createClass({displayName: "Article",
    propTypes: {
      data: React.PropTypes.shape({
        author: React.PropTypes.string.isRequired,
        text: React.PropTypes.string.isRequired,
        bigText: React.PropTypes.string.isRequired
      })
    },
    getInitialState: function() {
      return {
        visible: false
      };
    },
    readmoreClick: function(e) {
      e.preventDefault();
      this.setState({visible: true});
    },
    render: function() {
    	var author = this.props.data.author;
      var text = this.props.data.text;
      var bigText = this.props.data.bigText;
  	var visible = this.state.visible; // считываем значение переменной из состояния компонента

      return (
        React.createElement("div", {className: "Article"}, 
  	     React.createElement("p", {className: "news__author"}, author, ":"), 
  	     React.createElement("p", {className: "news__text"}, text), 
  	     React.createElement("a", {href: "#", onClick: this.readmoreClick, className: 'news__readmore ' + (visible ? 'none': '')}, " Подробнее "), 
      	 React.createElement("p", {className: 'news__big-text ' + (visible ? '': 'none')}, bigText)
  	   )
      );
    }
  });

  return Article;
});