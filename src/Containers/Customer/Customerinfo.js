import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Orderinfo from "./Orderinfo";
import Personalinfo from "./Personalinfo";
import Wishinfo from "./Wishinfo";
import Structure from "../../Components/Structure";

export default function Customerinfo() {
    const [showprsnl, changeShowpersonaldetail] = useState(true)
    const [showorder, changeShoworderdetail] = useState(false)
    const [showwish, changeShowwishdetail] = useState(false)
    return (
        <Structure>
         
           
            <div className="d-flex ">
                <div className=" border-right">
                    
                    <p className="mt-5">
                        <a class="btn btn-outline-Dark   w-100 text-left" data-bs-toggle="collapse" href="#collapsecategori" role="button" aria-expanded="false" aria-controls="collapsecategori"
                            onClick={() => {

                                changeShoworderdetail(false)
                                changeShowwishdetail(false)
                                changeShowpersonaldetail(true)
                            }}>
                            Account Informantion
                        </a>
                    </p>
                





                    <p className="">
                        <a class="btn btn-outline-Dark   w-100 text-left" data-bs-toggle="collapse" href="#collapsecategori" role="button" aria-expanded="false" aria-controls="collapsecategori"
                            onClick={() => {

                                changeShoworderdetail(true)
                                changeShowwishdetail(false)
                                changeShowpersonaldetail(false)
                            }}>
                             Orders
                        </a>
                    </p>
                   
                    <p className="">
                        <a class="btn btn-outline-Dark   w-100 text-left" data-bs-toggle="collapse" href="#collapsecategori" role="button" aria-expanded="false" aria-controls="collapsecategori"
                            onClick={() => {

                                changeShoworderdetail(false)
                                changeShowwishdetail(true)
                                changeShowpersonaldetail(false)
                            }}>
                            Whishlist
                        </a>
                    </p>
                </div>

                <div className="col-md-9 offset-md-1 ">
                    {showorder && <Orderinfo />}
                    {showwish && <Wishinfo />}
                    {showprsnl && <Personalinfo />}
                </div>
            </div>
    
            </Structure>
              
    )
}