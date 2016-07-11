define(['react'], function(React) {
	var Comments = React.createClass({
	  render: function() {
	    return (
	      <div className="comments">
	        Нет новостей - комментировать нечего
	      </div>
	    );
	  }
	});

	return Comments;
});