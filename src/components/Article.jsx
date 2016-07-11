define(['react'], function(React) {
  var Article = React.createClass({
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
        <div className="Article">
  	     <p className="news__author">{author}:</p>
  	     <p className="news__text">{text}</p>
  	     <a href="#" onClick={this.readmoreClick} className={'news__readmore ' + (visible ? 'none': '')}> Подробнее </a>
      	 <p className={'news__big-text ' + (visible ? '': 'none')}>{bigText}</p>
  	   </div>
      );
    }
  });

  return Article;
});