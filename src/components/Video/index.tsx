import React from 'react';

import { Wrapper } from './styles';

const Video = () => (
    <Wrapper className="Video_videoComponent__fkFbV">
        <video autoPlay playsInline muted>
            <source
                src="https://res.cloudinary.com/dxaba9fug/video/upload/v1649336558/video_vkggoc.mp4"
                type="video/mp4"
            />
        </video>
    </Wrapper>
);

export default Video;
