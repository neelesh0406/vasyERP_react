import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';

const data = [
    {
        id: 0,
        name: "Hoodie without logo",
        price: 200,
        stock: 345,
        imgurl: "https://pixabay.com/get/g51d0dfd632cf651bcc79eaedc9f73b5a96edce32ee8cb5f7a05016de2bb74729db00a9d3e138969915de30a3b6ff46fc_340.jpg"
    },
    {
        id: 1,
        name: "Hoodie ",
        price: 200,
        stock: 345,
        imgurl: "https://pixabay.com/get/g51d0dfd632cf651bcc79eaedc9f73b5a96edce32ee8cb5f7a05016de2bb74729db00a9d3e138969915de30a3b6ff46fc_340.jpg"

    },
    {
        id: 2,
        name: "Cap",
        price: 200,
        stock: 345,
        imgurl: "https://pixabay.com/get/gc298cee28a64cf1e0a61644c2430788f68b60e64c495f0c1a29d8a74333ef417db2d042cffc2de6109e374c4b7b773b5_340.png"

    },
    {
        id: 3,
        name: "Cap",
        price: 200,
        stock: 345,
        imgurl: "https://pixabay.com/get/gc298cee28a64cf1e0a61644c2430788f68b60e64c495f0c1a29d8a74333ef417db2d042cffc2de6109e374c4b7b773b5_340.png"

    },
    {
        id: 4,
        name: "Cap",
        price: 200,
        stock: 345,
        imgurl: "https://pixabay.com/get/gc298cee28a64cf1e0a61644c2430788f68b60e64c495f0c1a29d8a74333ef417db2d042cffc2de6109e374c4b7b773b5_340.png"

    },
    {
        id: 5,
        name: "Sneakers",
        price: 20,
        stock: 345,
        imgurl: "https://pixabay.com/get/g39d562129d1143bca6ba5e9116edbb5ff9f0531776cd88d63667050760be7a04a4ba537d893e9dd7934223fd3096d696_340.png"
    },

]


export default function Main() {
    const [cartState, setCartState] = useState([]);
    const [total, setTotal] = useState(0);

    const handleAdd = (item) => {
        const price = item.price;

        setCartState([...cartState, item]);
        setTotal(total + price);
    }

    const handleDelete = (number) => {
        console.log("Del: ", number);
        const newArr = cartState.filter((i, index) => {
            if (index === number) {
                setTotal(total - i.price);
                return false;
            }
            return true;
        })

        setCartState(newArr);
    }

    const handleSubmit = () => {
        // console.log("submit", JSON.stringify(cartState));
        const newObj = {
            orderID: Math.floor(Math.random() * 90000) + 10000,
            orderAmount: total,
            orderItems: [...cartState]
        }
        console.log("Submit json: ", JSON.stringify(newObj));
    }

    useEffect(() => {
        console.log(cartState);
        console.log("price", total);
    }, [cartState]);

    return (
        <div className='main'>
            <div className="products">
                {data.map((item) => {
                    return <div className='item' key={item.id}>
                        <p className='item-add' onClick={() => handleAdd(item)}>+</p>
                        <img src={item.imgurl} className='item-logo' />
                        <div className="item-right">
                            <p className="item-name">{item.name}</p>
                            <p className="item-price">${item.price}</p>
                            <p className="item-stock">In Stock({item.stock})</p>
                        </div>
                    </div>
                })}
            </div>
            <div className='cart'>
                {cartState.length > 0 ?
                    <div className='items-cart'>
                        {cartState.map((i, index) => {
                            return <CartItem i={i} key={index} index={index} handleDelete={handleDelete} />
                        })}
                    </div>
                    :
                    <div>No products found</div>
                }
                <div className="cart-total">
                    <span>Total:</span>
                    <span>{total}</span>
                </div>
                <div className="cart-submit" onClick={handleSubmit}>
                    PAY
                    <p>${total}</p>
                </div>
            </div>
        </div>
    )
}
