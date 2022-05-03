// // import React ,{useRef,useState} from 'react'

// // const VideoPlay = () => {
// //     let [video,setVideo]=useState(null);
// //     let videoRef=useRef();
// //     let PlayOrPause=()=>{
// //         videoRef.current.play();
// //         videoRef.current.style.width="100%"
// //         videoRef.current.style.height="100vh"
// //     }
// //     return (
// //         <div>
// //             <video width="20px" height="20px" src="master.mp4"onClick={PlayOrPause}ref={videoRef}></video>
// //         </div>
// //     )
// // }

// // export default VideoPlay

// // import React,{useState,useRef} from 'react'
// // import Json from "./video.json"
// // // import './assignment.css'
// // const VideoPlay = () => {
// //  let [vid,setVid]=useState(Json);
// //  let [Play, setPlay]=useState(true);
// // //  let [mute, setMute]=useState(true);
// //  let viedeosRef=useRef();
// //  let PlayOrPause =()=>{
// //  setPlay(!Play);
// //  Play?(viedeosRef.current.play()):( viedeosRef.current.pause());
// //  }
// // //  let MuteOrUnmute = ()=>{
// // //  setMute(!mute)
// // //  mute?(viedeosRef.current.muted=true):(viedeosRef.current.muted=false)
// // //  }
// //  let LargePlayOrPause=()=>{
// //  // viedeo.play();
// //  viedeosRef.current.style.width='100%'
// //  viedeosRef.current.style.height='100vh'
// //  }
// //  return (
 
// //  <div className='videoBlock'>
// //  {vid.map(v=>( 
// //  <video src={v.go} key={v.go} ref={viedeosRef} className='video' onClick={PlayOrPause}></video>
// //  ))}
// //   <div id='buttons' >
// //  {/* <span>
// //  <button onClick={PlayOrPause}>{Play?'Play':'Pause'}</button>
// //  </span> */}
// //  {/* <div onClick={MuteOrUnmute}>
// //  {mute===true? <i className="fas fa-volume-up"></i> : <i className="far fa-volume-slash"></i>}
// //  </div>  */}
// //   </div> 
 
// //  </div>
// //  )
// // }

// // export default VideoPlay


// import React,{ useState } from 'react'
// import JSON from"./video.json"
// import Video from './Video'


// const VideoPlay = () => {
//     let[link,setlink]= useState(JSON)
    
//     return (
//         <div>
//             {
//                link.map(data =>{
//                    return <Video key={data.id}  songattr={data}/>
                  
//                })
//            }
//         </div>
//     )
// }

// export default VideoPlay


import React from 'react'
import Video from './Video';

const VideoPlay = () => {
    let video={
        src:['master.mp4','video2.mp4','video3.mp4','video4.mp4','video5.mp4','video6.mp4',
    'video7.mp4','video8.mp4','video9.mp4','video10.mp4']
    }
    return (
        <div>
            {
                video.src.map(c=>{
                    return<Video send={c}/>
                })
            }
        </div>
    )
}

export default VideoPlay
