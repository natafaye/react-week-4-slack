import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link, Route, Routes } from 'react-router-dom'
import ChannelPage from './ChannelPage'
import { CHANNELS } from './data'
import HomePage from './HomePage'
import Sidebar from './Sidebar'
import NotFoundPage from './NotFoundPage'

export default function App() {
  
  const [channels, setChannels] = useState(CHANNELS);

  const handleAddChannel = (newChannel) => {
    setChannels( curChannels => curChannels.concat([ newChannel ]) );
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <div className="container">
          <Navbar.Brand href="#home">Slack</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-4 bg-light">
            <Sidebar channels={channels} />
          </div>
          <div className="col">
            <Routes>
              <Route path="/" element={<HomePage onAddChannel={handleAddChannel} channels={channels} />} />
              <Route path="channels/:channelId" element={<ChannelPage channels={channels} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

