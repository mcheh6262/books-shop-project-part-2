// function more() {
//     Swal.fire({
//         title: 'name: <br/> phone: <br/> adress:', 
//         input: 'text',
//         inputAttributes: {
//           autocapitalize: 'off'
//         },
//         showCancelButton: true,
//         confirmButtonText: 'OK',
//         showLoaderOnConfirm: true,
//         preConfirm: (login) => {
//           return fetch(`//api.github.com/users/${login}`)
//             .then(response => {
//               if (!response.ok) {
//                 throw new Error(response.statusText)
//               }
//               return response.json()
//             })
//             .catch(error => {
//               Swal.showValidationMessage(
//                 `Request failed: ${error}`
//               )
//             })
//         },
//         allowOutsideClick: () => !Swal.isLoading()
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire({
//             title: `${result.value.login}'success`,
//             imageUrl: result.value.success_url
//           })
//         }
//       })


// }

function delet() {
     Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'The order has been deleted!',
         footer: '<a href="">Why did you remove the book?</a>'
      })
    
 }


