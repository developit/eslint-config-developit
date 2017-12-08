import { Component } from 'preact';
import { h } from 'preact';

export class A extends Component {
	renderBlah() {}

	handleClick() {}

	render() {
		<div onClick={handleClick.bind(this, 'a')}>hello</div>
	}
}