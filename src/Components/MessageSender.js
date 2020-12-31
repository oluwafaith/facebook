import React from 'react'
import { Avatar } from '@material-ui/core'
import  VideocamIcon  from '@material-ui/icons/Videocam'
import  PhotoLibraryIcon  from '@material-ui/icons/PhotoLibrary'
import  InsertEmoticonIcon  from '@material-ui/icons/InsertEmoticon'
import './MessageSender.css'

function MessageSender() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input className="messageSender_input" placeholder={`what's on your mind?`}/>
                    <input placeholder="image URL (Optional)"/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender_bottom">
            <div className="messageSender_option">
                <VideocamIcon style={{ color: "red" }} />
                <h3>Live video</h3>
            </div>
            <div className="messageSender_option">
                <PhotoLibraryIcon style={{ color: "green" }} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option">
                <InsertEmoticonIcon style={{ color: "orange" }} />
                <h3>Feeling/Activity</h3>
            </div>
            </div>
        </div>
    )
}

export default MessageSender
