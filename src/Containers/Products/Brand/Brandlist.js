import React, {useState} from 'react'
import Structure from '../../../Components/Structure'
import Addbrand from './Addbrand'
import Editbrand from './Editbrand'
import swal from 'sweetalert';





const brands = [
    {id:"kukflkajdsf", name:"Apple"},
    {id:"asdf", name:"Apple"},
    {id:"fee", name:"Apple"},
    {id:"kukasdflkajdsf", name:"Apple"},
    {id:"kukdfflkajdsf", name:"Apple"},
    {id:"kuefkflkajdsf", name:"Apple"},
    {id:"kukgdflkajdsf", name:"Apple"},
]

export default function Brandlist() {
    const [showAddForm, changeShowAddForm] = useState(false)
    const [showEditForm, changeShowEditForm] = useState(false)
    return (
        <Structure>
            <div className="row">
                <div className="col-md-6">
                    <div className="d-flex justify-content-end">
                    <button type="button" 
                    className="btn btn-sm btn-outline-primary  my-3"
                    onClick={()=>{
                        changeShowAddForm(true)
                        changeShowEditForm(false)

                    }}
                    >+ add new</button>

                    </div>
                    <table class="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Category</th>
                                <th scope="col">actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {brands.map(category =>{
                                return(<tr key={category.id}>
                                    <th scope="row">1</th>
                                    <td>Mobile</td>
                                    <td className="d-flex justify-content-around" >
                                        <button type="button" 
                                        class="btn btn-sm btn-primary" 
                                        onClick={()=>{
                                            changeShowEditForm(true)
                                            changeShowAddForm(false)
                                        }}
                                        >
                                            <i class="fa fa-edit"></i>
                                        </button>
    
    
                                        <button type="button" 
                                        class="btn btn-sm btn-danger"
                                        onClick={()=>{
                                            swal({
                                                title: "Are you sure?",
                                                text: "You really want to delete this brand ?",
                                                icon: "warning",
                                                buttons: true,
                                                dangerMode: true,
                                              })
                                              .then((willDelete) => {
                                                if (willDelete) {
                                                  swal("Successfully Deleted.", {
                                                    icon: "success",
                                                  });
                                                } 
                                              });
                                          
                                        }}
                                        >
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>

                   
                </div>
            
            <div className="col-md-5  ml-5 mt-5">
                {showAddForm && <Addbrand/>}
                {showEditForm && <Editbrand/>}
            </div>
            
            </div>


          
        </Structure>
    )
}