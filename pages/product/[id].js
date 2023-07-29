import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

const ProductItem = () => {
    const router = useRouter();
    const [product, setProduct] = useState();

    const {query:{
        id
    },} = useRouter();

    useEffect(()=>{
      window
      .fetch(`/api/avo/${id}`)
      .then(response => response.json())
      .then(({data, length}) =>{
        setProduct(data)
      })
    },[])
  return (
    <div>
      El nombre del producto es:
      {product?.name}
    </div>
  )
}

export default ProductItem;
