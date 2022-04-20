import React from 'react'
import { useParams } from 'react-router-dom';

export default function ChannelViewPage({ channelList }) {
    const params = useParams();
    const channelId = parseInt(params.channelId);
    const channel = channelList.find(c => c.id === channelId);

    // TODO: redirect if the channel isn't there
    if(!channel) {
        <div>There is no channel with that id</div>
    }

    return (
        <div>
            <h2>{ channel.name }</h2>
        </div>
    )
}
