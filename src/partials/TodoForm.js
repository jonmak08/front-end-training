'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './TodoForm.soy.js';

class TodoForm extends Component {

	handleSubmit(event) {
		event.preventDefault();

		if (this.value) {
			this.emit(
				'todoAdd',
				{
					title: this.value
				}
			);

			this.value = '';
		}
	}

	handleChange(event) {
		this.value = event.target.value;
	}
}

TodoForm.STATE = {
	value: {
		value: ''
	}
};

Soy.register(TodoForm, templates);

export default TodoForm;