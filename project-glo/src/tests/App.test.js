/**
* @Author: Denzil Brade <dbrade>
* @Date:   2016-12-06T16:27:27+00:00
* @Last modified by:   dbrade
* @Last modified time: 2016-12-12T15:44:28+00:00
*/



// import react deps
import React from 'react';
import ReactDOM from 'react-dom';

// import components
import App from '../components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
