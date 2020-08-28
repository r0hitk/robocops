import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import robots from './RoboDetails'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <Card id={robots[0].id} name={robots[0].name} type={robots[0].type}/>
    <Card id={robots[3].id} name={robots[3].name} type={robots[3].type}/>
    <Card id={robots[4].id} name={robots[4].name} type={robots[4].type}/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
