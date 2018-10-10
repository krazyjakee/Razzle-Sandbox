import './App.css';
import { format } from 'date-fns';

import React from 'react';
const App = () => <div>Welcome to Razzle. {format(new Date(), 'Do MMM, YYYY')}</div>;

export default App;
