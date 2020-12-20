import { useState } from 'react';
import './Navvy.css';

import {
	Navbar,
	Nav,
	NavItem,
	NavLink,
	NavbarBrand,
	NavbarToggler,
	Collapse,
} from 'reactstrap';

export default function Navvy({ props }) {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className='navvy'>
			<Navbar color='faded' light expand='md'>
				<NavbarBrand href='/'>
					<b>Sean Jin.</b>
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem>
							<NavLink href='/Blog'>Blog</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/#about'>About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/#experience'>Experience</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='/#studentlife'>Student Life</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
}
