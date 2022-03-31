import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage({ onAddChannel, channels }) {
    const navigate = useNavigate();
    
    const onCreateChannel = () => {
        const newChannel = {
            id: channels[channels.length - 1].id + 1, // little hack to get an id that nothing else has
            name: "new-channel"
        }
        onAddChannel(newChannel);
        navigate("channels/" + newChannel.id);
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={onCreateChannel}>Make New Channel</button>
        </div>
    )
}
