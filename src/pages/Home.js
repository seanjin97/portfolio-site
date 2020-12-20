import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import About from '../components/About';
import Experience from '../components/Experience';
import StudentLife from '../components/StudentLife';
function Home() {
	return (
		<div>
			<Hero />
			<Projects />
			<About />
			<Experience />
			<StudentLife />
		</div>
	);
}

export default Home;
