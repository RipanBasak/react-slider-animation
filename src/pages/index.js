import React from 'react';
import { render } from 'react-dom'; // eslint-disable-line import/no-extraneous-dependencies
import Header from './components/Header';
import styles from './styles.css';
import Custom from './components/Custom';

function App() {
	return (
		<div className={styles.page}>
			<Header />
			<Custom />
		</div>
	);
}

render(<App />, document.getElementById('app'));
