import Breadcrumb from "../components/Breadcrumb";
import ProductTile from "../components/ProductTile";
import SortFilterBar from "../components/SortFilterBar";

 


async function getProducts () {
    const res = await fetch('http://localhost:4000/api/v1/product',{
        cache:'force-cache'
    });
    return res.json();    
}

export default async function ProductList () {
    const data = await getProducts();
    console.log('data ', data.data)
    return (
        <>
            <Breadcrumb />
            <div className="max-w-7xl mx-auto">
                <SortFilterBar className="mt-12 mb-7" />

                <div className="mb-30 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {data.data.products.map(({_id,image, title, mrp, sellingPrice, category}:any)=>{
                        return(
                            <ProductTile
                                key={_id}
                                image={image}
                                name={title}
                                price={sellingPrice}
                                originalPrice={mrp}
                                discount="20%"
                                label="SALE"
                                rating={4}                       
                            />
                        )
                    })}
                </div>
            </div>
        </>
    );
}