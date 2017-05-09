import React from 'react';
import ReactDOM from 'react-dom';
//import HelloWorld from './components/Main';

//ReactDOM.render(<HelloWorld/>,document.querySelector('#root'))

var image = React.createElement('img', {
    src: 'https://carlosazaustre.es/blog/content/images/2016/09/ejemplo-jsx.png',
    className: 'icon-image'
});

var container = React.createElement('div', {
    className: 'icon-container'
}, image);

var icon = React.createElement('Icon', {
    className: 'avatarContainer'
}, container);

ReactDOM.render(
    icon,
    document.getElementById('root')
);


var Icon = (
    <div className='icon-container'>
        <img
            src='icon-react.png'
            className='icon-image'
        />
    </div>);

ReactDOM.render(Icon, document.getElementById('app'));
