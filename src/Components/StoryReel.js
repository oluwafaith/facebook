import React from 'react'
import "./StoryReel.css"
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
          <Story 
          image="images/faitho.jpg"
          profileSrc="images/faitho.jpg"
          title= "Faith Oni"
          />  
          <Story 
          image="images/faitho.jpg"
          profileSrc="images/faitho.jpg"
          title= "Faith Oni"
          />  
          <Story 
          image="images/faitho.jpg"
          profileSrc="images/faitho.jpg"
          title= "Faith Oni"
          />  
          <Story 
          image="images/faitho.jpg"
          profileSrc="images/faitho.jpg"
          title= "Faith Oni"
          />  
          <Story 
          image="images/faitho.jpg"
          profileSrc="images/faitho.jpg"
          title= "Faith Oni"
          />  
        </div>
    )
}

export default StoryReel