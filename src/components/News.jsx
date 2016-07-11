define(['react', 'Article'], function(React, Article) {

  var News = React.createClass({
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
  		      <div key={index}>
  		        <Article data={item} />
  		      </div>
  		    )
  	    });
  	}
  	else
  	{
  		var newsTemplate = (<p>К сожалению новостей нет</p>);
  	}

  	var newsCount = (<p onClick={this.newscountClick} className="{last_news.length > 0 ? '' : 'none'}">{counter} Количество новостей: {last_news.length}</p>);

      return (
        <div className="news">
          {newsTemplate}
          {newsCount}
        </div>
      );
    }
  });
  return News;

});