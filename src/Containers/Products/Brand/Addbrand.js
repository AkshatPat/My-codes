import React from 'react'

export default function Addbrand() {
    return (
       <div className="border p-5">
       <p className="h4 text-primary text-center mt-2">Add New Brand</p>
        <div class="form-group mt-3">
          <label for="exampleFormControlInput1">Brand Name</label>
          <input type="text" class="form-control"  />
        </div>
       
        <div class="d-flex justify-content-end">
       <button class="btn btn-primary">Save</button>

        </div>
     
    </div>
    )
}