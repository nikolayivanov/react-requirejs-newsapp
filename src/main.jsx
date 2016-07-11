'use strict';
requirejs.config({
    baseUrl: './',
    paths: {        
        'app': './src/components/App',
        'TestInput': './src/components/TestInput',        
        'News': './src/components/News',
        'Comments': './src/components/Comments',
        'Article': './src/components/Article',
        'react': '../libs/react/react',
        'react-dom': '../libs/react/react-dom',
        'babel': '../libs/react/browser.min',
        'eventemitter': './src/EventEmitter'
    }
});

requirejs(['react', 'react-dom', 'babel', 'eventemitter', 'app'], function(React, ReactDom, Babel, EventEmitter, App) {
    // main - emntry point component
    ReactDom.render(
        <App />,
        document.getElementById('root')
      );
});