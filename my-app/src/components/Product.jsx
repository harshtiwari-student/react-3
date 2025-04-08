import { useEffect, useState } from "react"

export default function product()
{   
    let [products,setproducts]=useState(null);
    console.log(products);

    async function fetchproduct()
    {
        let response = await fetch('https://dummyjson.com/products')
        let data= await response.json()
        console.log(data)
        setproducts(data.products)
    }
    useEffect(()=>{
        fetchproduct()
    },[])
    return(
        <div className="container">
            <div className="row">

            {
            
            products && products.map((products,index)=>
            {
                return (
                <div className="col-lg-3 mb-3" alt={products.title}>

                    <div className="card" style={{width: 15+"rem"}}>
                <img src={products.thumbnail} class="card-img-top" alt={products.title}/>
                <div className="card-body">
                    <h5 className="card-title">{products.title.slice(0,20)}</h5>
                    <p className="card-text">{products.description.slice(0,50)}</p>
                    <p className="card-text">price:{products.price}$</p>
                    <a href="#" className="btn btn-primary">view details</a>
                </div>
                </div>
                </div>
                )
        })
        }
        </div>
        </div>
    )
}
