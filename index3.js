//creating sweet alert to the add btn
function add_button(){
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The selected books has been added',
        showConfirmButton: false,
        timer: 1500
      })
}
// creating table row for the books
function books_table_row(book) {
    for (let i = 0; i < book.items.length; i++) {
        $('#addBooks').append(`<tr id="tr_${i}"><td><input class="form-check-input checkbow_border" type="checkbox" value="" id="flexCheckDefault" 
                                        onchange="closest('tr').classList.toggle('table-row-selected')"></td>
                                   <td>${book.items[i].volumeInfo.title}</td>
                                   <td>${book.items[i].volumeInfo.authors}</td>
                                   <td>${book.items[i].volumeInfo.publishedDate}</td>
                                   <td>${`<img class="card-img-top img" src="${book.items[i].volumeInfo.imageLinks.thumbnail}">`}</td></tr>`)
    }
}

//clearing the table to search again
function remove_rows(){
    try {
         //to find out how many rows there are in a table:
         let rows_num = document.getElementById("addBooks").rows.length;
        for (let i = 0; i < rows_num; i++) {
            $(`#tr_${i}`).remove()
        } 
    }
    catch (err) {
        console.log(err);
    }
}



// search filter for data fetched from an API
document.getElementById("searchBox").addEventListener("click", get_api_data);
async function get_api_data() {
    remove_rows()
    try {
        const books_number = 8
        const books_subject = document.getElementById("searchSubject")
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${(books_subject).value}&maxResults=${books_number}&printType=books&orderBy=newest`)
        const result = await response.json();
        books_table_row(result);
    }
    catch (err) {
        console.log(err)
    }
}


