import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ChannelPage({ channels }) {
    const params = useParams();
    const channelId = parseInt(params.channelId);
    const navigate = useNavigate();
    
    const channel = channels.find(c => c.id === channelId);

    useEffect(() => {
        if(!channel) {
            navigate("/notfound");
        }
    }, [channel, navigate])
    
    if(!channel) {
        return <div/>
    }

    return (
        <div>
            <h3>{ channel.name }</h3>
        </div>
    )
}
