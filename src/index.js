import React from 'react';
import ReactDOM from 'react-dom';
import Firebase, { FirebaseContext } from 'shared/api/firebase';
import App from './app';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);
