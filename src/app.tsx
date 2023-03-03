import { useState } from 'preact/hooks';
import Content from './Components/Content';
import Hero from './Components/Hero';
import './app.css';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Hero />
			<Content />
		</>
	);
}
