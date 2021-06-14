import React from 'react'

export default function Orderinfo() {
    return (
        <div >
                <p className="h4 border-bottom  p-2 h3">orders</p>
                    <div className="col-md-12   d-flex  shadow bg-white">
                        <div className=" col-md-2 item-img p-3 ">
                        <img src="http://source.unsplash.com/random/100x100"></img>

                        </div>
                        <div className=" col-md-3 item-detail p-3">
                        <p className="h5"> MI Smart TV (M37647)</p>
                                    <p>by MI</p>
                                    <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Price : 9999</p>
                                    
                        </div>
                      
                        <div className=" col-md-3 item-status p-3">
                        <p>Order Date : <span>06-05-2021</span></p>
                                    <p>Delivered</p>
                        </div>
                    </div>
              
                    <div className="col-md-12  mt-3  d-flex  shadow bg-white">
                        <div className=" col-md-2 item-img p-3 ">
                        <img src="http://source.unsplash.com/random/100x100"></img>

                        </div>
                        <div className=" col-md-3 item-detail p-3">
                        <p className="h5"> MI Smart TV (M37647)</p>
                                    <p>by MI</p>
                                    <p> MRP : <strike>12344</strike> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Order Price : 9999</p>
                                    
                        </div>
                      
                        <div className=" col-md-3 item-status p-3">
                        <p>Order Date : <span>06-05-2021</span></p>
                                    <p>Delivered</p>
                        </div>
                    </div>
        </div>
    )
}