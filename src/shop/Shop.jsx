import React, { useState } from 'react'
import SharedBanner from '../components/SharedBanner'
import Data from '../products.json'
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCategory from './ShopCategory';

const showResults = "Showing 01-12 of 189 results";
const Shop = () => {
    const [gridList, setGridList] = useState(true);
    const [product, setProduct] = useState(Data);

    const [currentPage, setCurrentPage] = useState(1);
    const productPerPage = 12;

    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => {setCurrentPage(pageNumber);

    }

    const [selectedCategory, setSelectedCategory] = useState("All");

    const menuItems = [
        ...new Set(Data.map((val) => val.category)),
    ];

    const filterItem = (curcat) => {
        const newItems = Data.filter((newVal) => {
            return newVal.category === curcat;
        })
        setSelectedCategory(newItems);
        setProduct(newItems);
    }
    
  return (
    <div>
        <SharedBanner title="Our Shop Page" curPage="Shop" />
        <div className="shop-page padding-tb">
            <div className='container'>
            <div className="row justify-content-center">
                {/* left side */}
                <div className="col-lg-8 col-12">
                    <article>
                        <div className='shop-title d-flex flex-wrap justify-content-between'>
                           <p>{showResults}</p>
                           <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                            <a className='grid' onClick={() => setGridList(!gridList)}>
                                <i className='icofont-ghost'></i>
                            </a>
                            <a className='list' onClick={() => setGridList(!gridList)}>
                                <i className='icofont-listine-dots'></i>
                            </a>
                           </div>
                        </div>
                        <div>
                            <ProductCards gridlist={gridList} product={currentProducts} />
                        </div>
                        {/* pagination */}
                        <Pagination 
                        productPerPage={productPerPage} totalProducts={product.length} paginate={paginate} 
                        activePage={currentPage}
                        />
                    </article>
                </div>
                {/* right side */}
                <div className="col-lg-4 col-12">
                    <aside>
                        <Search products ={product} GridList ={gridList} />
                        <ShopCategory 
                        filterItem={filterItem} menuItems={menuItems} 
                        setItems={setProduct} setProduct={setProduct} selectedCategory={selectedCategory}
                        />
                    </aside>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Shop