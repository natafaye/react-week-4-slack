import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Sidebar({ channelList }) {
    const navigate = useNavigate();
    return (
        <div>
            <button className="btn btn-primary" onClick={() => navigate("/channels/new")}>+</button>
            <ul className="list-unstyled">
                {channelList.map(channel => (
                    <li key={channel.id}>
                        <NavLink to={"/channels/" + channel.id}> #{channel.name} </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}
