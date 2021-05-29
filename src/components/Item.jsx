import React from 'react'

export default function Item(props) {
    // console.log(props);
    const product = props.product;
    return (
        <div className="product border col-12 col-sm-6 col-md-4 col-lg-3 px-2 py-2">
            <img className="col-12" src={`/images/Products/${product.productImage}`} alt={`${product.productName}`} />
            {
                (product.isSale) 
                ? 
                <div className="product__status is__danger text-center col-3">
                    <p className="my-0">Sale</p>
                </div>
                :
                (product.isExclusive) 
                ?
                <div className="product__status is__success text-center col-4">
                    <p className="my-0">Exclusive</p>
                </div>
                : 
                <div className="product__status">&nbsp;</div>
            }
            <div className="mt-3">
                <p className="my-0"><small><strong>Size available:</strong> {product.size.map((size) => size + ' ')}</small></p>
            </div>
            <div className="d-flex align-items-center mx-0 mt-3">
                <div className="col-7 px-0">
                    <p className="product__name">{product.productName}</p>
                </div>
                <div className="col-5 px-0">
                    <p className="product__price">{product.price}</p>
                </div>
            </div>
        </div>
    )
}
