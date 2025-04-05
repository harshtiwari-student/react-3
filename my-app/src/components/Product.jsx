export default async function Product()
{
    let response =await fetch('https://dummyjson.com/products')
    let data=response.json()
    console.log(data)

    return(
        <>
        <h1>product: {data} </h1>
        </>
    )
}