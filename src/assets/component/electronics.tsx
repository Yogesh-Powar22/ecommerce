import { useGlobalContext } from './context/globalContext';

const Electronics = () => {
  const { products } = useGlobalContext();

  // Filter products based on some condition specific to Mens category
  const mensProducts = products.filter(product => (
    product.category === `electronics`));

  function addToCart(_id: number): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <h2 className="font-medium text-lg mb-2 mt-4">Electronics</h2>
      <div className="card-container">
        <div className="main-home masonry-layout">
          {mensProducts.map((product) => (

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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Electronics;

