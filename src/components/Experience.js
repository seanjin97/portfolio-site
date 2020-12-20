import { Row } from 'reactstrap';
import './Experience.css';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Experience() {
	return (
		<div id='experience' className='exp-section'>
			<h1 className='exp-header'>Experience</h1>
			<Row className='d-flex justify-content-center'></Row>
			<VerticalTimeline>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentArrowStyle={{ borderRight: '7px solid  black' }}
					date='Sep 2020 - Dec 2020'
					iconStyle={{ background: '#000000', color: '#ffffff' }}
				>
					<h3 className='vertical-timeline-element-title'>
						Data & Tech Intern
					</h3>
					<h4 className='vertical-timeline-element-subtitle text-muted'>
						Ministry of Social & Family Development
					</h4>
					<p>
						● Implemented robust model (RandomForest Regressor) to predict the
						duration of new cases undertaken by social workers.
						<br></br>● Enhanced business processes and optimised of manpower and
						resource planning processes through using the model. <br></br>●
						Improved the model by approximately 20% through iteratively
						conducting feature selection, feature engineering and model tuning.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentArrowStyle={{ borderRight: '7px solid  black' }}
					date='Dec 2019 - Jan 2020'
					iconStyle={{ background: '#363636', color: '#ffffff' }}
				>
					<h3 className='vertical-timeline-element-title'>
						Product Management Intern
					</h3>
					<h4 className='vertical-timeline-element-subtitle text-muted'>
						DataSpark Analytics
					</h4>
					<p>
						● Analysed geospatial data from Singapore and Australia to verify
						the accuracy of proprietary algorithms and to provide data-driven
						justifications to shift the business direction. <br></br>● Performed
						Extraction, Transformation and Loading (ELT) of geospatial data
						through Hadoop and AWS S3 for visualisation using Python, R and
						QGIS. <br></br>● Conducted internal training sessions to share about
						geospatial data visualisation and manipulation techniques focused
						around the QGIS software.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className='vertical-timeline-element--work'
					contentArrowStyle={{ borderRight: '7px solid  black' }}
					date='May 2019 - Aug 2019'
					iconStyle={{ background: '#646464', color: '#ffffff' }}
				>
					<h3 className='vertical-timeline-element-title'>
						Technology Risk Management Intern
					</h3>
					<h4 className='vertical-timeline-element-subtitle text-muted'>
						Ernst & Young
					</h4>
					<p>
						● Performed technology related research and IT due diligence for the
						APAC region to identify and recommend industry best practices to the
						clients. <br></br>● Assisted in the documentation of various
						applications to ensure the smooth transition of merging
						applications. <br></br>● Verification of documentation to ensure
						that industry standards are followed strictly. <br></br> ● Prepared
						reports for daily stand-ups to track project progress.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</div>
	);
}
