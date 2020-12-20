import {
	CardImg,
	Card,
	CardTitle,
	Row,
	Col,
	CardBody,
	CardSubtitle,
	Button,
	CardText,
	Container,
} from 'reactstrap';
import './Projects.css';
import data from '../services/data';

export default function Projects() {
	return (
		<Container
			fluid
			className='animate__animated animate__fadeIn animate__delay-4s'
		>
			<h1 className='section-header'>Projects</h1>
			<Row fluid className='d-flex justify-content-between'>
				{data.projects.map((project) => (
					<Col key={project.id} lg='4' className='project-item-container'>
						<Card className='project-item shadow rounded'>
							<CardImg
								top
								src={project.imageSrc}
								alt={project.title}
								title={project.title}
								className={'project-img'}
							/>
							<CardBody className='d-flex flex-column'>
								<CardTitle tag='h5'>{project.title}</CardTitle>
								<CardText>{project.para}</CardText>
								<CardSubtitle tag='h6' className='mb-2 text-muted'>
									Tools used: {project.skills}
								</CardSubtitle>
								<Button
									href={project.url}
									target='__blank'
									rel='noopener noreferrer'
									className='align-self-end ml-auto mt-auto'
								>
									View More
								</Button>
							</CardBody>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}
