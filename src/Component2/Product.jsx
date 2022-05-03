import React from 'react'
import "./Product.css"
const Product = (props) => {
    let {name,description,author,price,type,img,inCart,catogoty}=props.itemAttr
    return (
       <section id="playerBlock">
           <article>
           <img src={img} alt={name} />
           <h2>{name}</h2>
           <h3>{description.slice(0,40)+"..." }</h3>
           <h3>{author}</h3>
           <h3>{price}</h3>
           <h3>{type}</h3>
           <button className={inCart===true ?"addcart":"outofStock"} >{inCart===true?(<strong>Add to cart</strong>):(<strong>out of stock</strong>)}</button>{inCart}
           <h3>{catogoty}</h3>
           </article>
       </section>
           
    
    )
}

export default Product
