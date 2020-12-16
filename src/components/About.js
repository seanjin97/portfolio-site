import { Container, Row, Col, Media } from 'reactstrap';
import './About.css';

export default function About() {
	return (
		<div className='about-section'>
			<Row
				id='about'
				fluid
				className='d-flex flex-column-reverse flex-lg-row justify-content-between'
			>
				<Col md='5'>
					<h1 className='aboutme'>About</h1>
					<p>
						Sean Jin is an enthusiast for all things tech and aspires to be a
						full stack developer. His strength is in critical thinking and
						problem solving. Although his core interest lies in software and
						applications development, he always tries to go beyond that to have
						hands-on experience in other domains of technology such as Machine
						Learning, Analytics and Robotics.
					</p>
				</Col>
				<Col md='5'>
					<Media
						className='aboutme-img img-fluid rounded shadow'
						src='https://i.ibb.co/NFmmXxM/headshot.jpg'
					></Media>
				</Col>
			</Row>
		</div>
	);
}
