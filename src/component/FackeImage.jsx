import React from 'react'
import faker from "faker/locale/en_IND"
const FackeImage = () => {
    let [image,setImage]=useState(faker)
    return (
        <div>
            <img src={image} alt="photo" />
        </div>
    )
}

export default FackeImage
