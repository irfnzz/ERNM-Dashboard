import React from 'react'
import { Button,Navbar,Nav,Form,FormControl,NavDropdown} from 'react-bootstrap';
import './styles.scss'


const Topnav = () => {
  return (
  <Navbar
    className='page-header navbar-custom'
      sticky='top'
      collapseOnSelect
      expand='lg'
      variant='dark'>
      <Navbar.Brand >Dashboard Intern</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'></Nav>
        <Nav>
          <Form inline>
            <FormControl
              type='text'
              placeholder='Search'
              className='mr-sm-2'
            />
            <Button variant='outline-primary' className='nav__space'>
              Search
            </Button>
          </Form>
          <NavDropdown alignRight  title='Profile' id='collasible-nav-dropdown'>
            <NavDropdown.Item href='/UserProfile'>Profile</NavDropdown.Item>
            <NavDropdown.Item href='#action/3.2'>
              Account Setting
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href='#action/3.4'>Sign Out</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link eventKey={2} href='#FAQ'>
            FAQ
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
   
  )
}

export default Topnav
