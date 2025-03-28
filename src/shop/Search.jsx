import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Search = ({products, GridList}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div className='widget widget-search'>
        <form className='search-wrapper mb-3'>
           <input type="text" name='search' id='search' placeholder='Search here...' defaultValue={searchTerm} 
           onChange={(e) => setSearchTerm(e.target.value)}/>
           <button type='submit'>
            <i><i className="icofont-search-2"></i></i>
           </button>
        </form>
        {/* mapping products */}
        <div>
            {
                searchTerm && filteredProducts.map((product, i) =>(
                    <Link key={i} to={`/shop/${product.id}`}>
                        <div className="d-flex gap-3 p-2">
                            <div>
                                <div className="pro-thumb h-25">
                                    <img src={product.img} alt="" width={70} className='flex-{grow|shrink}' />
                                </div>
                            </div>
                            {/* displaying other product details */}
                            <div className='product-content'>
                                <p>
                                    <Link to={`/shop/${product.id}`}>{product.name}</Link>
                                </p>
                                <h6>${product.price}</h6>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Search