import './Hero.css';
import { Container, Jumbotron } from 'reactstrap';
import SocialDrawer from './SocialDrawer';

export default function Hero() {
	return (
		<div className='hero-div'>
			<Jumbotron fluid className='hero'>
				<Container fluid className='hero-text'>
					<p className='lead intro animate__animated animate__fadeInDown'>
						Hi, I'm Sean Jin. 👋
					</p>
					<div className='heading-wrapper animate__animated animate__slideInLeft animate__delay-2s'>
						<h1>Passion to deliver</h1>
						<h1>smart solutions</h1>
						<h1>for the community</h1>
					</div>

					<p className='lead animate__animated animate__fadeInUp animate__delay-2s'>
						Junior Dev | Tech Enthusiast | SMU Information Systems
					</p>
					<SocialDrawer />
				</Container>
			</Jumbotron>
		</div>
	);
}
