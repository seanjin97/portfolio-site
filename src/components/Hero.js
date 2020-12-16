import './Hero.css';
import { Container, Jumbotron } from 'reactstrap';
import SocialDrawer from './SocialDrawer';

export default function Hero() {
	return (
		<div className='hero-div'>
			<Jumbotron fluid className='hero'>
				<Container fluid className='hero-text'>
					<p className='lead intro'>Hi, I'm Sean Jin. 👋</p>
					<div className='heading-wrapper'>
						<h1>Passion to deliver</h1>
						<h1>smart solutions</h1>
						<h1>for the community</h1>
					</div>

					<p className='lead'>
						Junior Dev | Tech Enthusiast | SMU Information Systems
					</p>
					<SocialDrawer />
				</Container>
			</Jumbotron>
		</div>
	);
}
