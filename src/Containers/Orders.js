import React from 'react'
import Structure from '../Components/Structure'
import Order from '../Components/Order'


export default function Orders() {
    return (
        <Structure>
            <div className="row">
                <div className="col-md-12">
                    Orders
                </div>

                <div className="col-md-12">
                    <Order />
                    <Order />
                   
                </div>
            </div>
        </Structure>
    )
}