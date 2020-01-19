import React from 'react';
import ReactDOM from 'react-dom';
import Snow from './Snow';

it('Snow renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Snow />, div);
  ReactDOM.unmountComponentAtNode(div);
});

