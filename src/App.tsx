import * as React from 'react';

// TODO: add scss
import './styles/flexboxgrid.scss';
import './styles/main.scss';
import './styles/normalize.scss';

import { In } from './In';
import { Out } from './Out';

const isIn = true;

const App = () => isIn ? <In /> : <Out />;

export default App;
