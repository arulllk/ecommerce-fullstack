type ProductPageProps = {
    params:{
        slug:string
    }
}

export default function ProductDetails({params}:ProductPageProps) {
    return <h1>Product details comes here {params.slug}</h1>
}