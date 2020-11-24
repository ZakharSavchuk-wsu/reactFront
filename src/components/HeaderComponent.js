import React, { Component } from 'react';
import { Navbar, Jumbotron, NavbarToggler, Nav, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';


class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <>
                <Navbar dark expand='md' >
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>

                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <span className='fa fa-home fa-lg'></span> Home
                               </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutus'>
                                        <span className='fa fa-info fa-lg'></span> About Project
                               </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/steps'>
                                        <span className='fa fa-shoe-prints fa-lg'></span> Steps
                               </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>


                <Jumbotron>
                    <div className='container container-fluid'>
                        <h1 className="display-4">Fuzzy Logic Project</h1>
                        <p className="lead">This project presents an approach of structuring fuzzy knowledge base in the format of logical rules, taking into account the transformation of numerical values into terms of linguistic variables and the use of optimal methods for formatting conflicting and duplicate rules under consideration of their logical inter-connections. For visualization of these logical rules to use the metagraph theory apparatus as a method of graphical analysis of complex logical structures has been used.</p>
                    </div>
                </Jumbotron>
            </>
        );
    }
}
export default HeaderComponent;