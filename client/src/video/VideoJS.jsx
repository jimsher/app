import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import './customTheme.scss';


// City
// import '@videojs/themes/dist/city/index.css'

// fantasiy
// import '@videojs/themes/dist/fantasy/index.css'

//forest
 import '@videojs/themes/dist/forest/index.css'

// sea
// import '@videojs/themes/dist/sea/index.css';

const VideoJS =({ Option, themeName='forest' }) => {

    const videoRef = useRef(null);
    const playerRef = useRef(null);

    useEffect(() => {
        const player = playerRef.current;

        if (!player) {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        playerRef.current = videojs(videoElement, Option);
    };
    
    return () => {
        if (player) {
            player.dispose();
            playerRef.current = null;
        }
    };
    
}, [Option, videoRef, playerRef]);

    return (
        <div data-vjs-player>
            <video ref={videoRef} className={`video-js vjs-big-play-centered vjs-theme-${themeName}`} />
        </div>
    );
}


export default VideoJS;