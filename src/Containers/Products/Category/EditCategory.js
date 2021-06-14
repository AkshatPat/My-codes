import React from 'react'

export default function EditCategory() {
    return (
       <div className="border p-5">
       <p className="h4 text-primary text-center mt-2">Edit</p>
        <div class="form-group mt-3">
          <label for="exampleFormControlInput1">Category Name</label>
          <input type="text" class="form-control"  />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Parent Category</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Electronics</option>
            <option>Fashion</option>
          </select>
        </div>
        <div class="d-flex justify-content-end">
       <button class="btn btn-primary">Save</button>

        </div>
     
    </div>
    )
}