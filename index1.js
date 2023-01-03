function books_data(book) {
    for (let i = 0; i < book.items.length; i++) {
        $(`#img${i}`).append(`<img class="card-img-top" src="${book.items[i].volumeInfo.imageLinks.thumbnail}">`)
        $(`#title${i}`).append(book.items[i].volumeInfo.title)
        $(`#author${i}`).append(book.items[i].volumeInfo.authors)
        
    }
}

function shopping_cart_modal(book){
    for (let i = 0; i < book.items.length; i++) {
    $(`#btn${i}`).append(`<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal${i}">Buy
    now <i class="fa fa-shopping-cart"></i></button> 
    <!-- cart modal to books -->
    <div class="modal" id="myModal${i}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">Shopping cart checkout</h2>
                </div>
                <!-- Modal body -->
                <div class="modal-body">
                    <div class="modal-body">
                        <table class="table table-image" id="table">
                            <thead>
                                <tr>
                                    <th scope="col">cover</th>
                                    <th scope="col">BOOK</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><img class="card-img-top" src="${book.items[i].volumeInfo.imageLinks.thumbnail}"></td>
                                <td>${book.items[i].volumeInfo.title}</td>
                                <td>${document.getElementById(`price${i}`).innerHTML}</td>
                                <td><input type="text" class="form-control" id="input1" value=""></td>
                            </tr>
                           </tbody>
                        </table>
                        <hr>
                        <form>
                            <h3>Payment</h3>
                            <label for="fname">Accepted Cards</label>
                            <div class="icon-container">
                                <i class="fa fa-cc-visa" style="color:navy;"></i>
                                <i class="fa fa-cc-amex" style="color:blue;"></i>
                                <i class="fa fa-cc-mastercard" style="color:red;"></i>
                                <i class="fa fa-cc-discover" style="color:orange;"></i>
                            </div>
                            <div class="form-container form-outline">
                                <div>
                                    <label for="typeName">Name on card</label>
                                    <input type="text" id="typeName"
                                        class="form-control form-control-lg" />
                                </div><br>
                                <div>
                                    <label for="typeText">Card Number</label>
                                    <input type="text" id="typeText"
                                        class="form-control form-control-lg" minlength="19"
                                        maxlength="19" />
                                </div><br>
                                <div class="field-container">
                                    <label for="expirationdate">Expiration (mm/yy)</label>
                                    <input id="expirationdate" type="text"
                                        class="form-control form-control-lg"/>
                                </div>
                                <div>
                                    <label for="typeText">Cvv</label>
                                    <input type="password" id="typeText"
                                        class="form-control form-control-lg" minlength="3"
                                        maxlength="3" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-success"
                        data-bs-dismiss="modal">Buy</button>
                    <button type="button" class="btn btn-outline-danger"
                        data-bs-dismiss="modal">Cancel</button>
                </div>
          </div>  
     </div>
 </div>
 <br>
 <div class="card-footer">
                    <small class="text-muted">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </small>
                </div>`)
    }
}


// to get books data from api into the cards
async function books_list() {
    try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=9&printType=books&orderBy=newest')
        const result = await response.json();
        books_data(result);
        shopping_cart_modal(result);
    }
    catch (err) {
        console.log(err)
    }
}
books_list()