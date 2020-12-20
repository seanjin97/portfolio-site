import { Container, Row, Col } from 'reactstrap';
import './SocialDrawer.css';

export default function SocialDrawer() {
	return (
		<Container className='d-flex justify-content-center animate__animated animate__fadeInUp animate__delay-3s'>
			<Row>
				<Col>
					<a
						href='https://www.linkedin.com/in/leeseanjin/'
						target='_blank'
						rel='noopener noreferrer'
						title='LinkedIn'
					>
						<i className='fab fa-linkedin'></i>
					</a>
				</Col>
				<Col>
					<a
						href='https://github.com/seanjin97'
						target='_blank'
						rel='noopener noreferrer'
						title='GitHub'
					>
						<i className='fab fa-github'></i>
					</a>
				</Col>
				<Col>
					<a
						href='https://codepen.io/seanjin97'
						target='_blank'
						rel='noopener noreferrer'
						title='CodePen'
					>
						<i className='fab fa-codepen'></i>
					</a>
				</Col>
			</Row>
		</Container>
	);
}
