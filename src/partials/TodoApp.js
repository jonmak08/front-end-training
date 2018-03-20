'use strict';

import Component from 'metal-component';
import Soy from 'metal-soy';

import templates from './TodoApp.soy.js';

class TodoApp extends Component {

	handleTodoClick(event) {
		this.toggleTodo(event.index);
		this.percentageCalc();
	}

	percentageCalc() {
		var doneNumber = 0;

		for (var i = 0; i < this.todos.length; i++) {
			if (this.todos[i].done == true) {
				doneNumber++;
			}
		}

		this.percentage = (doneNumber / this.todos.length) * 100;
	}

	toggleTodo(clickedIndex) {
		this.todos = this.todos.map(
			(todo, index) => {
				if ((clickedIndex == index)) {
					todo.done = !todo.done;
				}
				return todo;
			}
		);
	}

	addTodo(url) {
		const OCTOKIT = require('@octokit/rest')();

		var urlArray = url.split('/');

		var pullNumber = urlArray[6];
		var repo = urlArray[4];
		var username = urlArray[3];

		var comments = [];
		var commentUrls = [];
		var diff = [];

		OCTOKIT.pullRequests.getComments(
			{
				number: pullNumber,
				owner: username,
				repo: repo
			}
		).then(
			({data}) => {
				data.forEach(
					function(element) {
						comments.push(element.body);
						commentUrls.push(element.html_url);
						diff.push(element.diff_hunk);
					}
				);
			}
		);

		var instance = this;

		var commentSetter = setTimeout(
			function() {
				for (var j = 0; j < comments.length; j++) {
					var temp = comments[j];
					var tempDiff = diff[j];
					var tempUrl = commentUrls[j];

					instance.addTodoItem(temp, tempUrl, tempDiff);
				}

				clearInterval(commentSetter);
			},
			1000);
	}

	addTodoItem(words, commentUrl, diff) {
		this.todos = [...this.todos, {
			diff: diff,
			done: false,
			title: words,
			url: commentUrl
		}];
	}

	handleTodoAdd(event) {
		this.addTodo(event.title);
	}
}

TodoApp.STATE = {
	todos: {
		value: ''
	},

	percentage: {
		value: ''
	}
};

Soy.register(TodoApp, templates);

export default TodoApp;