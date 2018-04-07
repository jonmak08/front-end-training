'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './TodoProgressBar.soy.js';

class TodoProgressBar extends Component {
}

TodoProgressBar.STATE = {
};

Soy.register(TodoProgressBar, templates);

export default TodoProgressBar;