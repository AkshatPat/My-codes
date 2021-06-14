import React from 'react'
import { Link } from 'react-router-dom'


export default function Leftnav() {
    return (
        <div>
            <ul className="list-group left-nav">
                <li class="list-group-item">
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li class="list-group-item" data-toggle="collapse" data-target="#productCollapse" aria-expanded="false" aria-controls="productCollapse">Products
                    <ul className="list-group collapse submenu" id="productCollapse">
                        <li class="list-group-item">
                            <Link to="/categories">Categories</Link>

                        </li>
                        <li class="list-group-item">
                            <Link to="/brands">Brands</Link>
                        </li>
                        <li class="list-group-item">
                            <Link to="/all-products">All Products</Link>
                        </li>

                    </ul>
                </li>


                <li class="list-group-item">
                    <Link to="/orders">Orders</Link></li>
                <li class="list-group-item">
                    <Link to="/customers">Customers</Link></li>
                <li class="list-group-item">
                    <Link to="/reports">Reports</Link></li>
                <li class="list-group-item">
                    <Link to="/settings">Settings</Link></li>



            </ul>
        </div>
    )
}