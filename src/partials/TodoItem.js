'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './TodoItem.soy.js';

class TodoItem extends Component {

	// we are creating an event called todoClick, and it sends an event object called index, set here.

	handleClick(event) {
		this.emit(
			'todoClick',
			{
				index: this.index
			}
		);
	}
}

TodoItem.STATE = {
	index: {
		value: null
	},

	todo: {
		value: null
	}
};

Soy.register(TodoItem, templates);

export default TodoItem;