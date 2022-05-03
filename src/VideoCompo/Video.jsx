// // import React from 'react'

// // const Video = (props) => {
// //     let [video1,video2,video3,video4,video5,video6,video7,video8,video9,video10]=props.itemAttr
// //     return (
// //         <div>
// //             <video src={video10}></video>
// //         </div>
// //     )
// // }

// // export default Video

// import React, { useRef,useState  } from 'react'


// const Video = (props) => {
//     let{go}=props.songattr
//     let[play,setvideo] = useState(false)
//      let videoref1 = useRef()

//      let playorp=()=>{
//         setvideo(!play)
//            if(play ===true){
//                videoref1.current.play()
//            }
//            else{
//             videoref1.current.pause()
//            }
    
//        }
        
       
//         let playorpause=()=>{
//             videoref1.current.play();
//             videoref1.current.style.width="100%"
//             videoref1.current.style.height="100vh"
            
            
//         };
//         return (
//             <media>
//                 <video src={go} ref={videoref1}  onClick={playorpause} height={200} width={200}>{name}</video>
//                <span> <button onClick={playorp}>{play ===true?"play":"pause"}</button></span>
//             </media>
//     )
// }

// export default Video



import React, {useState,useRef} from 'react'

const Video = (props) => {
    // let[a,b,c,d,e,f,g,h,i,j]=props.
    let[v,setVi]=useState(true)

    let videoRef=useRef()
    let playOrPause=()=>{
        setVi(!v)
        if(v){
            
            videoRef.current.play();
            videoRef.current.style.width="100%"
            videoRef.current.style.height="100vh"
        }else{
            videoRef.current.pause()
            videoRef.current.style.width="200px"
            videoRef.current.style.height="200px"
        }
    }
    return (
        <div>
            <video src={props.send} onClick={playOrPause} ref={videoRef} ></video>
        </div>
    )
}

export default Video
