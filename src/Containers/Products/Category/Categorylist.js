import React, {useState} from 'react'
import Structure from '../../../Components/Structure'
import AddCategory from './AddCategory'
import EditCategory from './EditCategory'
import swal from 'sweetalert';





const categories = [
    {id:"kukflkajdsf", name:"Mobile", parent:"Electronics"},
    {id:"asdf", name:"Mobile", parent:"Electronics"},
    {id:"fee", name:"Mobile", parent:"Electronics"},
    {id:"kukasdflkajdsf", name:"Mobile", parent:"Electronics"},
    {id:"kukdfflkajdsf", name:"Mobile", parent:"Electronics"},
    {id:"kuefkflkajdsf", name:"Mobile", parent:"Electronics"},
    {id:"kukgdflkajdsf", name:"Mobile", parent:"Electronics"},
]

export default function Categorylist() {
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
                                <th scope="col">Parent Category</th>
                                <th scope="col">actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map(category =>{
                                return(<tr key={category.id}>
                                    <th scope="row">1</th>
                                    <td>Mobile</td>
                                    <td>Electronics</td>
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
                                                text: "You really want to delete this category ?",
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
                {showAddForm && <AddCategory/>}
                {showEditForm && <EditCategory/>}
            </div>
            
            </div>


          
        </Structure>
    )
}