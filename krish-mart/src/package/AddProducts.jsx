import React from 'react'
import img5 from './components/assets/pro.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddProducts() {
    const [product, setProduct] = useState({
        image: '',
        name: '',
        description: '',
        id: '',
        price: '',
        discount: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Product Data:', product);
    };
    return (

        <div className='flex flex-col flex-auto w-full h-screen'>
            <div className='h-full' >
                <div className='grid grid-cols-3 h-full'>
                    <div className='bg-[#09ef83] h-screen' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 10px #08d775', transition: 'box-shadow 0.3s' }}>
                        <img src={img5} style={{ width: '500px', transition: 'transform 0.3s', cursor: 'pointer', borderRadius: '10px' }} />
                    </div>

                    <div className='col-span-2 flex justify-center items-center'>
                        <div className='w-[600] px-8'>
                            <div className='mb-8'>
                                <div className='flex items-center'>
                                    <h1 className='text-3xl font-semibold'>Add Products</h1>
                                    <img src={img5} className="h-10 mr-3 mt-1" />
                                </div>
                                <div>

                                    <form onSubmit={handleSubmit}>
                                        <div>
                                            <label className='font-medium mb-2 flex'>Product Image URL:</label>
                                            <input
                                                type="text"
                                                name="image"
                                                value={product.image}
                                                onChange={handleInputChange}
                                                style= {{padding: '30px'}}
                                            />
                                        </div>
                                        <div>
                                            <label className='font-medium mb-2 flex'>Product Name:</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={product.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label className='font-medium mb-2 flex'>Product Description:</label>
                                            <textarea
                                                name="description"
                                                value={product.description}
                                                onChange={handleInputChange}
                                                style= {{padding: '30px'}}
                                            />
                                        </div>
                                        <div>
                                            <label className='font-medium mb-2 flex p-0'>Product ID:</label>
                                            <input
                                                type="text"
                                                name="id"
                                                value={product.id}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label className='font-medium mb-2 flex'>Product Price:</label>
                                            <input
                                                type="number"
                                                name="price"
                                                value={product.price}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div>
                                            <label className='font-medium mb-2 flex'>Product Discount:</label>
                                            <input
                                                type="number"
                                                name="discount"
                                                value={product.discount}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <Link to='/products'>
                                        <button className='block bg-[#09ef83] text-white w-auto py-2 px-2 rounded-md mt-2' type="submit">Add Product</button>
                                        </Link>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
