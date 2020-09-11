import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div  className="storyReel">
            <Story image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
            profileSrc="https://avatars2.githubusercontent.com/u/24712956?=400&u=b7152e605ae1b748fc2d4157a842ee427ad44&v=4"
            title="Sonny Sangha" />
           <Story  image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQi0jEyMDd9&w=1000&=80"
            profileSrc="https://pbs.twing.com/profile_images/806970003941527552/sF8UtACd_400x400.jpg"
            title="Blessing Joe" />
             <Story image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
            profileSrc="https://unsplash.com/photos/r85XIZkq6Pc"
            title="Martha Akinwa" />
             <Story image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQi0jEyMDd9&w=1000&=80"
            profileSrc="https://unsplash.com/photos/r85XIZkq6Pc"
            title="Deborah Oluwagbe" />
             <Story image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
            profileSrc="https://unsplash.com/photos/r85XIZkq6Pc"
            title="Dorcas A" />
        </div>
    )
}

export default StoryReel
