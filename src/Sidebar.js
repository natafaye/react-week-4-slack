import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Sidebar({ channels }) {
    return (
        <div>
            <Nav className="flex-column">
                { channels.map(c => <Nav.Link as={Link} key={c.id} to={ "/channels/" + c.id } > #{ c.name } </Nav.Link> ) }
            </Nav>
        </div>
    )
}
