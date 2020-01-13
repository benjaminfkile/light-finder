import React from 'react';
import ReactDOM from 'react-dom';
import Snow from './Snow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Snow />, div);
  ReactDOM.unmountComponentAtNode(div);
});

