import React ,{useRef,useState} from 'react'

const VideoPlay = () => {
    let [video,setVideo]=useState(null);
    let videoRef=useRef();
    let PlayOrPause=()=>{
        videoRef.current.play();
        videoRef.current.style.width="100%"
        videoRef.current.style.height="100vh"
    }
    return (
        <div>
            <video width="20px" height="20px" src="master.mp4"onClick={PlayOrPause}ref={videoRef}></video>
        </div>
    )
}

export default VideoPlay


// play back
// import React ,{useRef,useState} from 'react'
// import "./video.css"
// const VideoPlay = () => {
//     let [play,setPlay]=useState(true);
//     let [mute,setMute]=useState(true);
//     let videoRef=useRef();
//     let PlayOrPause=()=>{
//         setPlay(!play)
//         if(play===true){
//             videoRef.current.play();
//             videoRef.current.muted=true
//         }else{
//             videoRef.current.pause();
//             videoRef.current.muted=false
//         }
//         // play?videoRef.current.play():videoRef.current.pause();
//     }
//     let MuteOrUnmute=()=>{
//         setMute(!mute)
//         mute?(videoRef.current.muted=true):(videoRef.current.muted=false)
//     }
//     return (
//         <div >
//             <video src="master.mp4" ref={videoRef}></video>
//             <span className="videoBlock">
//                 <button onClick={PlayOrPause}>{play===true?"play":"pause"}</button>
//                 <span onClick={MuteOrUnmute}>
//             {mute?(<i class="fas fa-volume-off"></i>):(<i class="fas fa-volume-mute"></i>)}
//             </span>
            
//             </span>
            
//         </div>
//     )
// }

// export default VideoPlay
