import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

function MyApp() {
    return (
        <div>
            <h1>hi there , hope you are doing well</h1>
        </div>
    )
}

const anotherUser = "chai aur react" 

// it is parsed and viewed as a react element 
// this is an experiment to test why can't we write react elements directly instead of the function to save some time 
// it is so bcoz it .render() expects a certain type of argument only
const ReactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const anotherElement = (
    <a href="http://google.com" target='_blank'>google</a>
)

const reactElementone = React.createElement(
    'a',
    {
        href: 'http://google.com',
        target: '_blank'
    },
    'Click me to visit google',
    anotherUser
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <App/>
    </React.StrictMode>
);
 