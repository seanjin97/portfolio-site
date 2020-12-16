import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Experience from '../components/Experience';
function Home() {
	return (
		<div>
			<Hero />
			<Projects />
			<About />
			<Experience />
		</div>
	);
}

export default Home;
