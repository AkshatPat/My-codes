import React from 'react'

export default function Editbrand() {
    return (
       <div className="border p-5">
       <p className="h4 text-primary text-center mt-2">Edit</p>
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