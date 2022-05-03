import React ,{useState} from 'react'

const HandellingFiles = () => {
    let [state,setstate]=useState({uploadfile:""},);
    let {name}=state;

    let handleFileChange=e=>{
        setstate(e.target.files[0]);
    };
    let handleSubmit=e=>{
        e.preventDefault();
        console.log(name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="file" onChange={handleFileChange}/>
                <button>uploadfile</button>
            </form>
        </div>
    )
}

export default HandellingFiles


// controled component

// import React ,{useState} from 'react'

// const HandellingFiles = () => {
//     let [state,setstate]=useState({uploadfile:""},);
//     let {uploadfile}=state;
//     let handleFileChange=e=>{

//         setstate(e.target.files[0]);
//         console.log(uploadfile);
//     };
//     let handleSubmit=e=>{
//         e.preventDefault();
//         let file=uploadfile.current.filelist
//         console.log(file);
//     }
//     return (
//         <div>
//             <form onSubmit={handleSubmit} >
//                 <input type="file" onChange={handleFileChange}/>
//                 <button onSubmit={handleSubmit}>uploadfile</button>
//             </form>
//         </div>
//     )
// }

// export default HandellingFiles
