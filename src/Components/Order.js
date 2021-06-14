import React from 'react'

export default function Order() {
    return (
        <>

            <div className="col-md-12  shadow-box py-3 px-5 my-3">

                <div className="border-bottom d-flex justify-content-between align-items-baseline">
                    <div>
                        <p className="mb-0">#95686</p>
                        <p className="small mt-0">
                            <i class="fa fa-clock"></i>12-05-2021 04:40:32
          </p>
                    </div>
                    <div>
                        <button className="btn btn-outline-primary">Mark as Delivered</button>
                    </div>
                </div>
                <div className="d-flex py-2 mt-2 item">
                    <div>
                        <img src="https://via.placeholder.com/50"></img>
                    </div>
                    <div className=" ml-3 ">
                        <p className="h6">Product Title will be here</p>
                        <p className="small">By Product brand</p>
                        <div className="d-flex justify-content-between">
                            <p className="small">MRP : 123</p>
                            <p className="small">Price : 100</p>

                        </div>
                    </div>
                </div>



                <div className="border-top d-flex justify-content-between ">
                    <div className="mt-2">
                        <p className="small mt-0">
                        <i class="fa fa-user"></i><span className="ml-3">Suyash Kumar</span><br></br>
                        <i class="fa fa-map"></i><span className="ml-3">
                            F303 Prabhdeep 11 Indrapuri Bhanwarkua Indore 452001 (MP) </span><br></br>

                            <i class="fa fa-phone"></i><span className="ml-3">9898989898</span>
          </p>
                    </div>

                </div>



            </div>
        </>
    )
}