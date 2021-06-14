import React from 'react'
import Structure from '../../Components/Structure'
import {Link} from 'react-router-dom'


export default function Customer() {
    return (
        <Structure>
            <div className="row">

                <div className="col-md-12 pl-0 d-flex ">
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">name</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                                <th scope="col">Handle</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <Link to="/customer-info" href="/Customerinfo" className="btn btn-outline-primary m-2">details</Link>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <Link to="/customer-info"  className="btn btn-outline-primary m-2">details</Link>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <Link to="/customer-info" className="btn btn-outline-primary m-2">details</Link>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <Link to="/customer-info" className="btn btn-outline-primary m-2">details</Link>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                <Link to="/customer-info" className="btn btn-outline-primary m-2">details</Link>
                            </tr>
                        </tbody>
                    </table>




                </div>





            </div>


        </Structure>
    )
}