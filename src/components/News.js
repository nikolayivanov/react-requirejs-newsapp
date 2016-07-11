define(['react', 'Article'], function(React, Article) {

  var News = React.createClass({displayName: "News",
    getInitialState: function() {
      return {
        counter: 0
      };
    },
    newscountClick: function(e) {
      e.preventDefault();
      this.setState({counter: ++this.state.counter});
    },
    render: function() {
      var last_news = this.props.last_news;
      var counter = this.state.counter;

      if (last_news.length > 0)
      {
  	    var newsTemplate = last_news.map(function(item, index) {
  	      // return (
  	      //   <div key={index}>
  	      //     <p className="news__author">{item.author}:</p>
  	      //     <p className="news__text">{item.text}</p>
  	      //   </div>
  	      // )

  		    return (
  		      React.createElement("div", {key: index}, 
  		        React.createElement(Article, {data: item})
  		      )
  		    )
  	    });
  	}
  	else
  	{
  		var newsTemplate = (React.createElement("p", null, "К сожалению новостей нет"));
  	}

  	var newsCount = (React.createElement("p", {onClick: this.newscountClick, className: "{last_news.length > 0 ? '' : 'none'}"}, counter, " Количество новостей: ", last_news.length));

      return (
        React.createElement("div", {className: "news"}, 
          newsTemplate, 
          newsCount
        )
      );
    }
  });
  return News;

});