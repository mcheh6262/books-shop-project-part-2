//creating sweet alert to the delete btn
function delete_button() {
    Swal.fire({
        title: 'Are you sure you want to delete this order?',
        text: "if you delete this order, it will be gone forever!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your order has been deleted.',
                'success'
            )
        }
    })
} 

//creating sweet alert to the edit btn
function edit_button() {
    Swal.fire({
        icon: 'success',
        title: 'successfully edited',
        showConfirmButton: false,
        timer: 1500
      })
}



function orders() {
    const data = [{
        ID: 1,
        CUSTOMER_FNAME: 'Mary',
        CUSTOMER_LNAME: 'Brown',
        BOOK_CODE: 20
    },
    {
        ID: 2,
        CUSTOMER_FNAME: 'Linda',
        CUSTOMER_LNAME: 'Miller',
        BOOK_CODE: 36

    },
    {
        ID: 3,
        CUSTOMER_FNAME: 'James',
        CUSTOMER_LNAME: 'Taylor',
        BOOK_CODE: 13

    },
    {
        ID: 4,
        CUSTOMER_FNAME: 'Robert',
        CUSTOMER_LNAME: 'Williams',
        BOOK_CODE: 42

    },
    {
        ID: 5,
        CUSTOMER_FNAME: 'Daniel',
        CUSTOMER_LNAME: 'Davis',
        BOOK_CODE: 25

    }]

    for (let i = 0; i < data.length; i++) {
        $('#orders').append(`<tr><td>${data[i].ID}</td>
                                 <td>${data[i].CUSTOMER_FNAME}</td>
                                 <td>${data[i].CUSTOMER_LNAME}</td>
                                 <td>${data[i].BOOK_CODE}</td>
                                 <td> <button class="btn btn-outline-success" type="button" data-toggle="tooltip"
                                 data-placement="top" title="Edit" data-bs-toggle="modal" data-bs-target="#myModal"><i class="fa fa-edit"></i></button>
                                 <div class="modal" id="myModal">
                                 <div class="modal-dialog ">
                                     <div class="modal-content">
                                         <div class="modal-header divmodalbody">
                                             <h2 class="modal-title">Edit Your Order</h2>
                                         </div>
                                         <!-- Modal body -->
                                         <div class="modal-body divmodalbody" >
                                                 <form>
                                                     <div class="form-container form-outline">
                                                         <div>
                                                             <label for="typeName">Name :-</label>
                                                             <input class="input" type="text" id="typeName"
                                                                 class="form-control form-control-lg" />
                                                         </div><br>
                                                         <div>
                                                             <label for="typeText">Phone :-</label>
                                                             <input class="input" type="text" id="typeText"
                                                                 class="form-control form-control-lg" minlength="12"
                                                                 maxlength="12" />
                                                         </div><br>
                                                         <div>
                                                             <label for="typeName">Address :-</label>
                                                             <input class="input" type="text" id="typeName"
                                                                 class="form-control form-control-lg" />
                                                         </div><br>
                                                         <div>
                                                         <label for="emails">Email :-</label>
                                                             <input class="input" type="email" id="emails" name="emails" multiple
                                                                 class="form-control form-control-lg" />
                                                         </div><br>
                                                     </div>
                                                 </form>
                                             </div>
                                         <!-- Modal footer -->
                                         <div class="modal-footer">
                                             <button type="button" class="btn btn-outline-success"
                                                 data-bs-dismiss="modal" onclick="edit_button()">EDIT</button>
                                             <button type="button" class="btn btn-outline-danger"
                                                 data-bs-dismiss="modal">Cancel</button>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                                 <button class="btn btn-outline-danger" type="button" data-toggle="tooltip"
                                 data-placement="top" title="Delete" onclick="delete_button()"><i class="fa fa-trash"></i></button></td></tr>`

        )
    }
}
orders()