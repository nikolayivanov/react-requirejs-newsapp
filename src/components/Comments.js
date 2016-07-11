define(['react'], function(React) {
	var Comments = React.createClass({displayName: "Comments",
	  render: function() {
	    return (
	      React.createElement("div", {className: "comments"}, 
	        "Нет новостей - комментировать нечего"
	      )
	    );
	  }
	});

	return Comments;
});