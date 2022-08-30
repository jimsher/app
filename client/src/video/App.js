import App from "../App";
import "./App.css";
import VideoJS from "./VideoJS";
import video from "./video.mp4";


const App = () => {
const videoJsOptions = {
    controls: true,
    sources: [{
        src: video,
        type: "video/mp4"
    }]
}

return (
<div className="app">
<VideoJS options={videoJsOptions} />
</div>

);
}

export default App;