import React from 'react'
import Header from '../Components/Header'
import Leftnav from '../Components/Leftnav'

export default function Structure(props) {
    return (
        <div className="container-fluid">
            <Header/>
            <div className='row'>
                <div className='col-md-2'>
                <Leftnav/>

                </div>
                <div className='col-md-10'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}