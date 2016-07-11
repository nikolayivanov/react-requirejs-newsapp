define(['react', 'react-dom', 'eventemitter', 'TestInput', 'News', 'Comments'], function(React, ReactDom, EventEmitter, TestInput, News, Comments) {
  window.ee = new EventEmitter();

  var my_news = [{
        author: 'Саша Печкин',
        text: 'В четчерг, четвертого числа...',
        bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    }, {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    }, {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }];

      var App = React.createClass({displayName: "App",
        getInitialState: function() {
          return {
            news: my_news
          };
        },
        componentDidMount: function() {
          var self = this;
          window.ee.addListener('News.add', function(item) {
            var nextNews = item.concat(self.state.news);
            self.setState({news: nextNews});
          });
      },
      componentWillUnmount: function() {
        window.ee.removeListener('News.add');
      },
        render: function() {
          return (
            React.createElement("div", {className: "app"}, 
              React.createElement(TestInput, null), 
              React.createElement("h2", null, "Новости"), 
              React.createElement(News, {last_news: this.state.news}), " ", /*  data добавлен */
              React.createElement(Comments, null)
            )
          );
        }
      });

    return App;
});