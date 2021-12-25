import React from 'react'

export default function CartItem({ i, handleDelete, index }) {
    return (
        <div className="cart-item">
            <img src={i.imgurl} className="cart-item-img" />
            <div className="cart-item-details">
                <p>{i.name}</p>
                <p>${i.price}x{i.quantity}</p>
            </div>
            <div className="cart-item-right">
                <p className='cart-item-price'>${i.price * i.quantity}</p>
                <button className='cart-item-delete' onClick={() => handleDelete(index)}>DEL</button>
            </div>
        </div>
    )
}
