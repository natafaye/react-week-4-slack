import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { NavLink, Route, Routes } from 'react-router-dom'
import AddChannelPage from './AddChannelPage'
import ChannelViewPage from './ChannelViewPage'
import { CHANNELS } from './data'
import HomePage from './HomePage'
import NotFoundPage from './NotFoundPage'
import SettingsPage from './SettingsPage'
import Sidebar from './Sidebar'

export default function App() {
  const [channelList, setChannelList] = useState(CHANNELS);

  const addChannel = (newChannel) => {
    setChannelList(currChannelList => [...currChannelList, newChannel] )
  }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/settings">Settings</Nav.Link>
          </Nav>
        </div>
      </Navbar>
      <div className="container">
        <div className="row">
          <div className="col-4 bg-dark text-white">
            <Sidebar channelList={channelList} />
          </div>
          <div className="col">
            <Routes>
              <Route path="/settings" element={<SettingsPage />}/>
              <Route path="/" element={<HomePage />}/>
              <Route path="/channels/:channelId" element={<ChannelViewPage channelList={channelList} />} />
              <Route path="/channels/new" element={<AddChannelPage onSubmit={addChannel} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}
