import { Container, Row } from 'reactstrap';
import './StudentLife.css';
import 'react-vertical-timeline-component/style.min.css';
import data from '../services/data';

export default function StudentLife() {
	return (
		<Container fluid id='studentlife' className='studentlife-section'>
			<h1 className='studentlife-header'>Student Life</h1>
			<Row fluid>
				{data.studentlife.map((studentlife) => (
					<Container fluid className='mb-3'>
						<h2>{studentlife.club}</h2>
						<h4 className='text-muted'>{studentlife.position}</h4>
						<p>{studentlife.description[0]}</p>
						<p>{studentlife.description[1]}</p>
						<p>{studentlife.description[2]}</p>
						<p>{studentlife.description[3]}</p>
						<p>{studentlife.description[4]}</p>
						{studentlife.events ? (
							<p className='text-muted'>Projects: {studentlife.events}</p>
						) : null}
						{/* <p className='text-muted'>Projects: {studentlife.events}</p> */}
					</Container>
				))}
			</Row>
		</Container>
	);
}
