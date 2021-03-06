import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import  HomeContainer  from './containers/homeContainer'

//Styles
import './App.scss';

export default class App extends Component {
	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={HomeContainer} />
				</Switch>
			</div>
		);
	}
}
