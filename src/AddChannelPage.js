import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddChannelPage({ onSubmit }) {
    const navigate = useNavigate();

    const onSubmitButtonClicked = () => {
        // hard coding for demonstration
        const newChannel = {
            id: 5,
            name: "my-new-channel"
        }
        onSubmit(newChannel);
        navigate("/channels/" + newChannel.id)
    }

  return (
    <div>
        AddChannelPage
        <button onClick={onSubmitButtonClicked}>Submit</button>
    </div>
  )
}
