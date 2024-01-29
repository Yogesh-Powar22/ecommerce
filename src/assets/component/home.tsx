import axios from 'axios';
import { useEffect, useState } from 'react'
import HelmetTitle from './isHelmetTitle';

interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    category: string;
}


const Home = () => {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);

    const addToCart = (productId: number) => {
        // Find the product with the matching ID
        const selectedProduct = products.find((product) => product.id === productId);

        if (selectedProduct) {
            // Access the entire data of the selected product
            console.log("Selected Product:", selectedProduct);

            // Implement your addToCart logic here
            console.log(`Product with ID ${productId} added to cart`);
        };
    }

    useEffect(() => {
        setLoading(true);
        axios.get("https://fakestoreapi.com/products/").then((resp) => {
            setProducts(resp.data as Product[]);
        });
        setLoading(false);
    }, [])

    return (
        <>
            <HelmetTitle title='PLASHOE' />
            {loading ? (
                <h2>loading</h2>
            ) : (
                <div>
                    <h2 className="font-medium text-lg mb-2 mt-4">Mens</h2>
                    <div className="main-home masonry-layout">
                        {products.map((product) => (
                            product.category === `men's clothing` && (
                                <div key={product.id} className='card'>
                                    <div>
                                        <img className='product-img' src={product.image} alt="" />
                                        <h2 className='product-title vertical-ellipsis-3' title={product.title}>{product.title}</h2>
                                        <p className='vertical-ellipsis product-description' title={product.description}>{product.description}</p>
                                    </div>
                                    <div className='card-footer-section'>
                                        <h2 className='product-price'>${product.price}</h2>
                                        <input onClick={() => addToCart(product.id)} type='button' value='add to cart' />
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    <h2 className='font-medium text-lg mb-2 mt-4'>Womens</h2>
                    <div className="main-home masonry-layout">
                        {products.map((product) => (
                            product.category === `women's clothing` && (
                                <div key={product.id} className='card'>
                                    <div>
                                        <img className='product-img' src={product.image} alt="" />
                                        <h2 className='product-title vertical-ellipsis-3' title={product.title}>{product.title}</h2>
                                        <p className='vertical-ellipsis product-description' title={product.description}>{product.description}</p>
                                    </div>
                                    <div className='card-footer-section'>
                                        <h2 className='product-price'>${product.price}</h2>
                                        <input onClick={() => addToCart(product.id)} type='button' value='add to cart' />
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    <h2 className='font-medium text-lg mb-2 mt-4'>Jewellery</h2>
                    <div className="main-home masonry-layout">
                        {products.map((product) => (
                            product.category === `jewelery` && (
                                <div key={product.id} className='card'>
                                    <div>
                                        <img className='product-img' src={product.image} alt="" />
                                        <h2 className='product-title vertical-ellipsis-3' title={product.title}>{product.title}</h2>
                                        <p className='vertical-ellipsis product-description' title={product.description}>{product.description}</p>
                                    </div>
                                    <div className='card-footer-section'>
                                        <h2 className='product-price'>${product.price}</h2>
                                        <input onClick={() => addToCart(product.id)} type='button' value='add to cart' />
                                    </div>
                                </div>
                            )
                        ))}
                    </div>

                    <h2 className='font-medium text-lg mb-2 mt-4'>Electronics</h2>
                    <div className="main-home masonry-layout">
                        {products.map((product) => (
                            product.category === `electronics` && (
                                <div key={product.id} className='card'>
                                    <div>
                                        <img className='product-img' src={product.image} alt="" />
                                        <h2 className='product-title vertical-ellipsis-3' title={product.title}>{product.title}</h2>
                                        <p className='vertical-ellipsis product-description' title={product.description}>{product.description}</p>
                                    </div>
                                    <div className='card-footer-section'>
                                        <h2 className='product-price'>${product.price}</h2>
                                        <input onClick={() => addToCart(product.id)} type='button' value='add to cart' />
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

export default Home;
