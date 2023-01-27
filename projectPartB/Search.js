function add() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'The book has been added to the order',
        showConfirmButton: false,
        timer: 1500
      })
}
function added() {

    let x = document.getElementById('table').rows.length
    if(x <= 40) {
      fetch("https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=9&printType=books&orderBy=newest")  
      .then(effect => effect.json())
      .then(effect => {
        $('#table').append(`<tr id="table1" class="table table-success table-striped">
          <td>${effect.items[0].volumeInfo.id}</td>
          <td>${effect.items[0].volumeInfo.title}</td>
          <td>${effect.items[0].volumeInfo.publishedDate}</td>
          <td>${effect.items[0].volumeInfo.authors}</td></tr>`)
      })
    }

  }























// const data = {
//     kind: "books#volumes",
//     totalItems: 755,
//     items: [
//       {
//         kind: "books#volume",
//         id: "WSUuEAAAQBAJ",
//         etag: "vMJfnYbB3HY",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/WSUuEAAAQBAJ",
//         volumeInfo: {
//           title: "Structure and Interpretation of Computer Programs",
//           subtitle: "JavaScript Edition",
//           authors: ["Harold Abelson", "Gerald Jay Sussman"],
//           publisher: "MIT Press",
//           publishedDate: "2022-05-03",
//           description:
//             "A new version of the classic and widely used text adapted for the JavaScript programming language. Since the publication of its first edition in 1984 and its second edition in 1996, Structure and Interpretation of Computer Programs (SICP) has influenced computer science curricula around the world. Widely adopted as a textbook, the book has its origins in a popular entry-level computer science course taught by Harold Abelson and Gerald Jay Sussman at MIT. SICP introduces the reader to central ideas of computation by establishing a series of mental models for computation. Earlier editions used the programming language Scheme in their program examples. This new version of the second edition has been adapted for JavaScript. The first three chapters of SICP cover programming concepts that are common to all modern high-level programming languages. Chapters four and five, which used Scheme to formulate language processors for Scheme, required significant revision. Chapter four offers new material, in particular an introduction to the notion of program parsing. The evaluator and compiler in chapter five introduce a subtle stack discipline to support return statements (a prominent feature of statement-oriented languages) without sacrificing tail recursion. The JavaScript programs included in the book run in any implementation of the language that complies with the ECMAScript 2020 specification, using the JavaScript package sicp provided by the MIT Press website.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9780262367622",
//             },
//             {
//               type: "ISBN_10",
//               identifier: "0262367629",
//             },
//           ],
//           readingModes: {
//             text: true,
//             image: false,
//           },
//           pageCount: 640,
//           printType: "BOOK",
//           categories: ["Computers"],
//           averageRating: 5,
//           ratingsCount: 1,
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: true,
//           contentVersion: "1.2.2.0.preview.2",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=WSUuEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=WSUuEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=WSUuEAAAQBAJ&pg=PP1&dq=javascript&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=WSUuEAAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Structure_and_Interpretation_of_Computer.html?hl=&id=WSUuEAAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: true,
//           },
//           pdf: {
//             isAvailable: true,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=WSUuEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "YJqVzQEACAAJ",
//         etag: "B1gErjw6EFs",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/YJqVzQEACAAJ",
//         volumeInfo: {
//           title: "JavaScript Coding for Teens",
//           subtitle: "A Beginner's Guide to Developing Websites and Games",
//           authors: ["Andrew Yueh"],
//           publisher: "Rockridge Press",
//           publishedDate: "2021-08-10",
//           description:
//             "Everything teens need to get started with JavaScript Have you ever wanted to make your own game? How about an awesome website? Then JavaScript Coding for Teens is the book for you! It doesn't matter if you're not sure what a variable is, are stumped about syntax, or don't even know how to use JavaScript on your computer! This simple guide to coding for beginners walks you through every part of the process with easy-to-understand language and straightforward directions. You'll be coding like a pro in no time! JavaScript Coding for Teens includes: Beginner-friendly lessons--This guide to coding for teens starts out with the basics, providing the perfect foundation for coding novices. A variety of uses--Stretch your skills and discover how amazingly flexible and powerful JavaScript is as you learn to use it for programming websites and games. Practical practice--Gain confidence with exercises that test your ability to modify existing programs or create new ones. Build computer skills that will last a lifetime with JavaScript Coding for Teens.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "1648761119",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781648761119",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=YJqVzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=YJqVzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=YJqVzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=YJqVzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/JavaScript_Coding_for_Teens.html?hl=&id=YJqVzQEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=YJqVzQEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This ... guide to coding for beginners walks you through every part of the process with easy-to-understand language and straightforward directions&quot;--Amazon.com.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "vxygzgEACAAJ",
//         etag: "/UAKX6DJsUw",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/vxygzgEACAAJ",
//         volumeInfo: {
//           title: "Getting the Most Out of Node.js Frameworks",
//           subtitle: "The Essential Tools and Libraries",
//           authors: ["Sufyan Bin Uzayr"],
//           publisher: "CRC Press",
//           publishedDate: "2022",
//           description:
//             "Gain the knowledge you need to navigate your way confidently through the ever-expanding landscape of modern JavaScript technologies.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "103206756X",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781032067568",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 168,
//           printType: "BOOK",
//           categories: ["Internet programming"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=vxygzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=vxygzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=vxygzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=3&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=vxygzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Getting_the_Most_Out_of_Node_js_Framewor.html?hl=&id=vxygzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=vxygzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "Gain the knowledge you need to navigate your way confidently through the ever-expanding landscape of modern JavaScript technologies.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "z7D2DwAAQBAJ",
//         etag: "YtlPGUYhTRU",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/z7D2DwAAQBAJ",
//         volumeInfo: {
//           title: "The Complete JavaScript Course From Zero to Expert!",
//           subtitle:
//             "JavaScript from A to Z : Learn The JavaScript Programming Language Completely From Scratch",
//           authors: ["Be Sure Academy"],
//           publisher: "Be Sure Academy",
//           publishedDate: "2021-08-01",
//           description:
//             "The Complete JavaScript Course From Zero to Expert! The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one! What you'll learn Become an advanced, confident, and modern JavaScript developer from scratch Build 6 beautiful real-world projects for your portfolio (not boring toy apps) Become job-ready by understanding how JavaScript really works behind the scenes How to think and work like a developer: problem-solving, researching, workflows JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc. JavaScript Modules and more! Requirements Any computer will work: Windows, macOS or Linux Who wants to learn JavaScript",
//           readingModes: {
//             text: false,
//             image: true,
//           },
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: true,
//           contentVersion: "1.1.2.0.preview.1",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=z7D2DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=z7D2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=z7D2DwAAQBAJ&printsec=frontcover&dq=javascript&hl=&as_pt=BOOKS&cd=4&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=z7D2DwAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/The_Complete_JavaScript_Course_From_Zero.html?hl=&id=z7D2DwAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "PARTIAL",
//           embeddable: true,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: true,
//             acsTokenLink:
//               "http://books.google.com/books/download/The_Complete_JavaScript_Course_From_Zero-sample-pdf.acsm?id=z7D2DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=z7D2DwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "SAMPLE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet: "The Complete JavaScript Course From Zero to Expert!",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "Iwk1EAAAQBAJ",
//         etag: "BtLDzMn5btY",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/Iwk1EAAAQBAJ",
//         volumeInfo: {
//           title: "JavaScript for Web Warriors",
//           authors: ["Patrick Carey", "Sasha Vodnik"],
//           publisher: "Cengage Learning",
//           publishedDate: "2021-07-06",
//           description:
//             "Learn to use JavaScript, the popular scripting language that allows web page authors to develop interactive web pages and sites. Carey/Vodnik's JAVASCRIPT FOR WEB WARRIORS, Seventh Edition introduces a variety of techniques that focus on what you need to know to begin using JavaScript right away. Step-by-step tasks within each chapter focus on particular techniques essential for building actual JavaScript programs. Guided activities reinforce skills and build in complexity as you progress. You also study debugging techniques. This edition's text is embedding with JavaScript coding exercises that let you read and immediately practice to strengthen your understanding of new programming concepts and their applications. Learning objectives, summaries, review and key terms highlight major concepts while reinforcement exercises let you further practice new techniques. After completing this course, you will able to use JavaScript to build professional quality web applications. Important Notice: Media content referenced within the product description or the product text may not be available in the ebook version.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9780357638033",
//             },
//             {
//               type: "ISBN_10",
//               identifier: "0357638034",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: true,
//           },
//           pageCount: 736,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "0.3.2.0.preview.1",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=Iwk1EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=Iwk1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=Iwk1EAAAQBAJ&pg=PP1&dq=javascript&hl=&as_pt=BOOKS&cd=5&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=Iwk1EAAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/JavaScript_for_Web_Warriors.html?hl=&id=Iwk1EAAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "PARTIAL",
//           embeddable: true,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=Iwk1EAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "SAMPLE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "You also study debugging techniques. This edition&#39;s text is embedding with JavaScript coding exercises that let you read and immediately practice to strengthen your understanding of new programming concepts and their applications.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "AT-yzgEACAAJ",
//         etag: "69cKUHRHqOY",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/AT-yzgEACAAJ",
//         volumeInfo: {
//           title: "HTML CSS and JavaScript",
//           authors: ["Hanumanth Ladwa"],
//           publisher: "Independently Published",
//           publishedDate: "2021-10-03",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798488815360",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 590,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=AT-yzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=AT-yzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=AT-yzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=6&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=AT-yzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/HTML_CSS_and_JavaScript.html?hl=&id=AT-yzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=AT-yzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "xujAzQEACAAJ",
//         etag: "sgb2Fs+PGjw",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/xujAzQEACAAJ",
//         volumeInfo: {
//           title: "Begin to Code with JavaScript",
//           authors: ["Rob Miles"],
//           publisher: "Microsoft Press",
//           publishedDate: "2021-09-03",
//           description:
//             "This full-color book will inspire beginner JavaScript learners to start solving problems and creating programs with JavaScript, even with absolutely no programming experience. It is not just friendly and easy: it is the first JavaScript guide for beginners that puts readers in control of their own learning and empowers them to build unique programs to solve problems they care about. Begin to Code with JavaScript is packed with innovations, including its Snaps library of pre-built operations that are easy to combine with their own unique programs, Cookie Cutter templates that give them a flying start, and Make Something Happen projects that help them build skills by creating their own programs.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "0136870724",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9780136870722",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 0,
//           printType: "BOOK",
//           categories: ["Computer games"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=xujAzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=xujAzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=xujAzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=7&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=xujAzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Begin_to_Code_with_JavaScript.html?hl=&id=xujAzQEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=xujAzQEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This full-color book will inspire beginner JavaScript learners to start solving problems and creating programs with JavaScript, even with absolutely no programming experience.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "Vm6WzgEACAAJ",
//         etag: "mAt/yuj978o",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/Vm6WzgEACAAJ",
//         volumeInfo: {
//           title: "The Practical JavaScript",
//           subtitle:
//             "100+ Practical JavaScript Programming Practices And Projects",
//           authors: ["Ejike Ifeanyichukwu", "Emenwa Global"],
//           publishedDate: "2021-08-05",
//           description:
//             'Welcome to 100+ practical JavaScript programming best practices for absolute beginner! Learning JavaScript programming language and understanding JavaScript programming language are two different things. Almost every student enjoy learning JavaScript programming language. But, only a few number of these students actually understand JavaScript programming language afterwards. This is where the remaining students are left behind and kept wandering from one course to another over the internet to get the best knowledge on understanding JavaScript programming language with cups of coffee on their table everyday. 100+ Python programming best practices for absolute beginner is a comprehensive and concise guide that is designed to pick up every interested student from the state of "zero-knowledge" to a state of "Hero-knowledge" in JavaScript programming with lots of practical JavaScript projects.Why Must I Take This Course?Emenwa Global instructors are industry experts with years of practical, real-world experience building software at industry leading companies. They are sharing everything they know to teach thousands of students around the world, just like you, the most in-demand technical and non-technical skills (which are commonly overlooked) in the most efficient way so that you can take control of your life and unlock endless exciting new career opportunities in the world of technology, no matter your background or experience.',
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798450498041",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 234,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=Vm6WzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=Vm6WzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=Vm6WzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=8&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=Vm6WzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/The_Practical_JavaScript.html?hl=&id=Vm6WzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=Vm6WzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This is where the remaining students are left behind and kept wandering from one course to another over the internet to get the best knowledge on understanding JavaScript programming language with cups of coffee on their table everyday. ...",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "4NA4EAAAQBAJ",
//         etag: "VIN/LXsrqF8",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/4NA4EAAAQBAJ",
//         volumeInfo: {
//           title: "JavaScript Cookbook",
//           authors: ["Adam D. Scott", "Matthew MacDonald", "Shelley Powers"],
//           publisher: '"O\'Reilly Media, Inc."',
//           publishedDate: "2021-07-16",
//           description:
//             "Why reinvent the wheel every time you run into a problem with JavaScript? This cookbook is chock-full of code recipes for common programming tasks, along with techniques for building apps that work in any browser. You'll get adaptable code samples that you can add to almost any project--and you'll learn more about JavaScript in the process. The recipes in this book take advantage of the latest features in ECMAScript 2020 and beyond and use modern JavaScript coding standards. You'll learn how to: Set up a productive development environment with a code editor, linter, and test server Work with JavaScript data types, such as strings, arrays, and BigInts Improve your understanding of JavaScript functions, including arrow functions, closures, and generators Apply object-oriented programming concepts like classes and inheritance Work with rich media in JavaScript, including audio, video, and SVGs Manipulate HTML markup and CSS styles Use JavaScript anywhere with Node.js Access and manipulate remote data with REST, GraphQL, and Fetch Get started with the popular Express application-building framework Perform asynchronous operations with Promises, async/await, and web workers",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9781492055709",
//             },
//             {
//               type: "ISBN_10",
//               identifier: "1492055700",
//             },
//           ],
//           readingModes: {
//             text: true,
//             image: false,
//           },
//           pageCount: 538,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: true,
//           contentVersion: "1.1.1.0.preview.2",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=4NA4EAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=4NA4EAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=4NA4EAAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&cd=9&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=4NA4EAAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/JavaScript_Cookbook.html?hl=&id=4NA4EAAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: true,
//           },
//           pdf: {
//             isAvailable: true,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=4NA4EAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "The recipes in this book take advantage of the latest features in ECMAScript 2020 and beyond and use modern JavaScript coding standards.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "2T6MzgEACAAJ",
//         etag: "U3JRZlrp6oo",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/2T6MzgEACAAJ",
//         volumeInfo: {
//           title: "Javascript",
//           subtitle: "Javascript Basics for Beginners",
//           authors: ["Andy Vickler"],
//           publishedDate: "2021-07-13",
//           description:
//             "This book is written in a practical and easy way and offers theory and plenty of practical material. Now is your chance to delve into Javascript basics with this easy to follow guide.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "1955786224",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781955786225",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 240,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=2T6MzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=2T6MzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=2T6MzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=10&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=2T6MzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Javascript.html?hl=&id=2T6MzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=2T6MzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This book is written in a practical and easy way and offers theory and plenty of practical material. Now is your chance to delve into Javascript basics with this easy to follow guide.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "A4uBzgEACAAJ",
//         etag: "FgcHmwroZ3M",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/A4uBzgEACAAJ",
//         volumeInfo: {
//           title: "JavaScript Programming for Beginners",
//           subtitle:
//             "How to Learn JavaScript in Less Than 7 Days. The Revolutionary Step-by-Step Crash Course From Novice to Advance Programmer",
//           authors: ["John Clark"],
//           publishedDate: "2021-06-04",
//           description:
//             "Do you want to learn JavaScript? Do you want to find out how does Javascript work? Do you want to exploit what JavaScript programming offers? Quite frankly, JavaScript is vital in web development. Furthermore, due to the increasing user bases of current development frameworks, its popularity has grown. If you're new to JavaScript and don't need a detailed guide, this book is worth looking at. Learn how to use JavaScript Visually uses a creative, visual approach to help beginners understand simple concepts. It's a short book, so it's a good weekend read for somebody who's just starting up with JavaScript. Picking up a 1,000-page book with nothing but boring text inside is more miserable, frustrating, and discouraging for a new coder. Not only is the presentation appealing, but it is also organized well. It layers logically and adequately progresses to the advanced concepts. It isn't a JavaScript book in the traditional sense. It's an introduction to programming that uses JavaScript, as the title suggests. It's excellent for this reason. A student who does not understand how to write a JavaScript program is widespread. It's common to come across a developer who can code JavaScript but has no background in computer science. Java Script Programming will help develop a strong computer science base (its prime purpose). Here's what you're going to discover in the pages of JAVASCRIPT PROGRAMMING: Basics of Javascript Working of Javascript Basic rules and practical applications Make your Javascript program Mistakes to avoid with Javascript ...and more! So what are you waiting for? Get this book now and start your journey to learning JavaScript",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "1802030263",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781802030266",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 104,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=A4uBzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=A4uBzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=A4uBzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=11&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=A4uBzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/JavaScript_Programming_for_Beginners.html?hl=&id=A4uBzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=A4uBzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "So what are you waiting for? Get this book now and start your journey to learning JavaScript",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "rRd-zgEACAAJ",
//         etag: "uWcMBVxi8jA",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/rRd-zgEACAAJ",
//         volumeInfo: {
//           title: "JavaScript Crash Course",
//           subtitle:
//             "The Only Guide to Quickly Learn JavaScript, the Most Used Programming Language",
//           publishedDate: "2021-05-28",
//           description:
//             "Exploit the Power of Modern JavaScript and Avoid the Pitfalls JavaScript was originally designed for small-scale programming in web browsers, but modern JavaScript is radically different. Nowadays, JavaScript programmers actively embrace functional, object-oriented, and asynchronous programming while deprecating error-prone concepts from the past. Modern JavaScript is a complete yet concise guide to JavaScript E6 and beyond. Rather than first requiring you to learn and transition from older versions, it helps you quickly get productive with today's far more powerful versions and rapidly move from languages such as Java, C#, C, or C++. Bestselling programming author Doctor Lucas J. Loan covers all you need to know, provided in small chunks organized for quick access and easy understanding. Horstmann's practical insights and sample code help you take advantage of all that's new, avoid common pitfalls and obsolete features, and make the most of modern JavaScript's robust toolchains and frameworks. Quickly master modern JavaScript's implementation of fundamental programming constructs. Avoid legacy techniques that create unnecessary complexity and risk Make the most of functional, object-oriented, and asynchronous techniques Use modules to organize and run complex programs efficiently Write more powerful, flexible, and concise programs with metaprogramming Extend JavaScript's power via JavaScript libraries, frameworks, and platforms Whether you're just getting started with JavaScript or you're an experienced developer, this guide will help you write tomorrow's most robust, efficient, and secure JavaScript code.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "1801567824",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781801567824",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 740,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=rRd-zgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=rRd-zgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=rRd-zgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=12&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=rRd-zgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/JavaScript_Crash_Course.html?hl=&id=rRd-zgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=rRd-zgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "Nowadays, JavaScript programmers actively embrace functional, object-oriented, and asynchronous programming while deprecating error-prone concepts from the past. Modern JavaScript is a complete yet concise guide to JavaScript E6 and beyond.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "EnplzgEACAAJ",
//         etag: "U6Ijs1cJRcA",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/EnplzgEACAAJ",
//         volumeInfo: {
//           title: "React to Python",
//           subtitle: "Creating React Front-End Web Applications with Python",
//           authors: ["John Sheehan"],
//           publisher: "Jennasys",
//           publishedDate: "2021-05",
//           description:
//             "Create responsive front-end web applications in Python using the React and Material-UI JavaScript libraries, without having to program in JavaScript, by using the Transcrypt transpiler that turns your Python code into JavaScript.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "1736574701",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781736574706",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 420,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=EnplzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=EnplzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=EnplzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=13&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=EnplzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/React_to_Python.html?hl=&id=EnplzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=EnplzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "Create responsive front-end web applications in Python using the React and Material-UI JavaScript libraries, without having to program in JavaScript, by using the Transcrypt transpiler that turns your Python code into JavaScript.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "En5JEAAAQBAJ",
//         etag: "XC6jSf5apB0",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/En5JEAAAQBAJ",
//         volumeInfo: {
//           title: "Dasar Pemrograman Web",
//           subtitle: "HTML, CSS dan JavaScript",
//           authors: ["Ach. Khozaimi"],
//           publisher: "Media Nusa Creative (MNC Publishing)",
//           publishedDate: "2020-12-16",
//           description:
//             "Hypertext Markup Language (HTML) merupakan standard bahasa yang diaplikasikan dalam penampilan halaman web dan terdiri dari beberapa elemen yang diwakili oleh beberapa tag. HTML dapat digunakan sebagai berikut:  Mempublikasikan halaman web secara online  Pembuatan tabbel pada halaman website  Gambar (canvas) dapat ditampilkan pada halaman browser  Pembuatan form untuk transaksi dan registrasi online  Menambahkan beberapa objek pada halaman website seperti : animasi, audio, video, gambar, dan java applet  Mengatur tampilan halaman web dan seisinya.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9786024625597",
//             },
//             {
//               type: "ISBN_10",
//               identifier: "6024625596",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: true,
//           },
//           pageCount: 132,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "0.0.1.0.preview.1",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=En5JEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=En5JEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//           },
//           language: "id",
//           previewLink:
//             "http://books.google.com/books?id=En5JEAAAQBAJ&printsec=frontcover&dq=javascript&hl=&as_pt=BOOKS&cd=14&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=En5JEAAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Dasar_Pemrograman_Web.html?hl=&id=En5JEAAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "PARTIAL",
//           embeddable: true,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: true,
//             acsTokenLink:
//               "http://books.google.com/books/download/Dasar_Pemrograman_Web-sample-pdf.acsm?id=En5JEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=En5JEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "SAMPLE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "Hypertext Markup Language (HTML) merupakan standard bahasa yang diaplikasikan dalam penampilan halaman web dan terdiri dari beberapa elemen yang diwakili oleh beberapa tag.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "hj9xzgEACAAJ",
//         etag: "chXkTjugxKw",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/hj9xzgEACAAJ",
//         volumeInfo: {
//           title: "Computer Programming ( Edition 4 )",
//           subtitle:
//             "The Fundamentals of Programming Terms to Learn Essential Computer Science Concepts and Coding Techniques to Kick-Start Your Programming Career.",
//           authors: ["Tom Clark"],
//           publishedDate: "2021-04-27",
//           description:
//             "55 % discount for bookstores ! Now At $42.99 instead of $ 66.63 $ Your customers will never stop reading this guide !!! C++ C++ is an object orientated computer language created by remarkable computer scientist Bjarne Stroustrup as a part of the evolution of the C family of languages. A few call C++ \"C with Classes\" because it introduces object orientated programming principles, including using defined classes, to C program language period framework. C++ is stated \"see-plus-plus.\" In object orientated programming, an object is a facts kind that has each records and capabilities inherent in its design. Previous to the arrival of object orientated programming, programmers or users usually noticed a codebase as composed of individual command line commands. The identity of objects with functions and data constructed in brought about a brand-new way of packaging and automating code work. JAVASCRIPT Understanding degree is a significant piece of learning any programming language. The presentation of let aligns JavaScript with most other current dialects. While JavaScript isn't the main language to help terminations, it is one of the first mainstream (nonacademic) dialects to do as such. The JavaScript people group has utilized terminations to incredible impact, and it's a significant piece of current JavaScript improvement. There's a great deal of force and adaptability incorporated into the JavaScript's Array class, yet it can once in a while be overwhelming to know which technique to utilize when. Article arranged writing computer programs is a hugely well-known worldview, and for great reason. PYTHON applications in a wide assortment of areas. It is free, convenient, amazing, and astoundingly simple and amusing to utilize. Developers from each edge of the product business have discovered Python's attention on designer efficiency and programming quality to be an essential benefit in projects both enormous and little. html HTML is changing so quick it's practically difficult to stay aware of improvements. XHTML is HTML 4.0 revised in XML; it gives the exactness of XML while holding the adaptability of HTML. HTML and XHTML: The Definitive Guide, fourth Edition, unites everything. It's the most exhaustive book accessible on HTML and XHTML today. It covers Netscape Navigator 6.0, Internet Explorer 5.0, HTML 4.01, XHTML 1.0, JavaScript, Style sheets, Layers, and the entirety of the highlights upheld by the mainstream internet browsers. SQL The truth is: SQL is an abbreviation for Structured Query Language. It is one of the most sought after and simple programming languages of our age. SQL is lost behind a crowd of other, more popular programming languages such as C++, Python, Java etc. There are many people who have used SQL and discarded its legitimacy as a programming language simply because of its user friendly interface and a limited number of functions. However, all true computer wiz's must know that no matter how developed and advanced third level programming languages such as C++ and Python are, it doesn't change the fact that SQL is also a programming language - a very resourceful one at that. Buy it Now and let your customers get addicted to this amazing book !!!",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "1802262849",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781802262841",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 626,
//           printType: "BOOK",
//           categories: ["Business & Economics"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=hj9xzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=hj9xzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=hj9xzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=15&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=hj9xzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Computer_Programming_Edition_4.html?hl=&id=hj9xzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=hj9xzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "HTML and XHTML: The Definitive Guide, fourth Edition, unites everything. It&#39;s the most exhaustive book accessible on HTML and XHTML today.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "jOUbEAAAQBAJ",
//         etag: "wLvSlThHU0g",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/jOUbEAAAQBAJ",
//         volumeInfo: {
//           title: "Client Side Scripting",
//           authors: ["Anuradha A. Puntambekar"],
//           publisher: "Technical Publications",
//           publishedDate: "2020-12-01",
//           description:
//             "JavaScript is an important scripting language for almost every modern web application. It is simple for beginners but complex when you build a full-scale application. The book is extremely user-friendly. It assumes no programming experience and helps the students to learn the JavaScript in step by step manner with the help of illustrative examples. The first two units cover the fundamental concepts of JavaScript such as variables, operators, control structures, arrays, functions and strings. In the third unit, the concept of form and event handling is discussed. This feature of JavaScript help us to design the interactive web page with graphical user interface. In the next subsequent chapter, the book demonstrates how to create and manage cookies, how to create browser history, implementation of form validation with the help of regular expressions, creating rollover effects and creating and handling frames. At the end, the book illustrates creation of banner, management of status bar and creation of slideshows using JavaScript. This book serves the purpose of teaching JavaScript in the simplest and easiest manner.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9789333223874",
//             },
//             {
//               type: "ISBN_10",
//               identifier: "9333223878",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: true,
//           },
//           pageCount: 164,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=jOUbEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=jOUbEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=jOUbEAAAQBAJ&printsec=frontcover&dq=javascript&hl=&as_pt=BOOKS&cd=16&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=jOUbEAAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Client_Side_Scripting.html?hl=&id=jOUbEAAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "PARTIAL",
//           embeddable: true,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: true,
//             acsTokenLink:
//               "http://books.google.com/books/download/Client_Side_Scripting-sample-pdf.acsm?id=jOUbEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=jOUbEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "SAMPLE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "At the end, the book illustrates creation of banner, management of status bar and creation of slideshows using JavaScript. This book serves the purpose of teaching JavaScript in the simplest and easiest manner.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "K-hozgEACAAJ",
//         etag: "4Y/OZL2+th4",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/K-hozgEACAAJ",
//         volumeInfo: {
//           title: "Mastering TypeScript - Fourth Edition",
//           subtitle:
//             "Build Enterprise-ready, Modular Web Applications Using TypeScript 4 and Modern Frameworks",
//           authors: ["Nathan Rozentals"],
//           publishedDate: "2021-04-23",
//           description:
//             "Master the TypeScript language and its latest features, explore modern web application frameworks, and build modular systems using industry standard architectural principles and design patterns. Key Features: Explore TypeScript 4's key elements and advanced language features Use TypeScript with modern frameworks such as Angular, Vue, React, RxJS and Node Understand TDD, serverless techniques, micro frontends, and other industry-standard best practices to create high-quality and modular apps Book Description: TypeScript is both a language and a set of tools to generate JavaScript. It was designed by Anders Hejlsberg at Microsoft to help developers write enterprise-scale JavaScript. Using a fast-paced, but easy-to-follow set of code samples, this fourth edition will get you up and running with Typescript quickly, introduce core concepts, and then build on this knowledge to understand, and then apply more advanced language features. Mastering TypeScript, Fourth Edition also covers a variety of modern JavaScript and TypeScript frameworks and compares their respective strengths and weaknesses. As you advance through this TypeScript book, you'll explore Angular, React, Vue, RxJs, Express, Node and others. You'll get up to speed with unit and integration testing, data transformation, serverless technologies, and asynchronous programming. You'll also learn how to integrate with existing JavaScript libraries, control your compiler options, and use decorators and generics. By the end of the book, you will have built a comprehensive set of web applications using Angular, React and Vue, finally integrating them into a single cohesive website, using micro frontend techniques. Mastering TypeScript, Fourth Edition is about learning the language, understanding when to apply its features, and then selecting the right framework that is the perfect fit for your real-world project. What You Will Learn: Gain insights into core and advanced TypeScript language features Integrate with existing JavaScript libraries and third-party frameworks Build full working applications using JavaScript frameworks, such as Angular, React, Vue and more Create test suites for your application with Jest and Selenium Apply industry standard design patterns to build modular code Develop web server solutions using Node and Express Design and implement serverless API solutions Explore micro front-end technologies and techniques Who this book is for: This book serves as a guide for beginners, as well as providing practical insights and techniques for experienced JavaScript and TypeScript programmers. No prior knowledge of JavaScript is required. If you are keen to learn TypeScript, this book will give you all the necessary knowledge and skills to tackle any TypeScript project. It will also give you an understanding of what application frameworks are out there, and which one to choose for your next project. If you are already an experienced JavaScript or TypeScript developer, then this book will take your skills to the next level.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "1800564732",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781800564732",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 538,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=K-hozgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=K-hozgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=K-hozgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=17&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=K-hozgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Mastering_TypeScript_Fourth_Edition.html?hl=&id=K-hozgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=K-hozgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "If you are already an experienced JavaScript or TypeScript developer, then this book will take your skills to the next level.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "BVtnzgEACAAJ",
//         etag: "Zi9+VQ6KsaY",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/BVtnzgEACAAJ",
//         volumeInfo: {
//           title: "Programming for Beginners",
//           subtitle:
//             "The Complete Guide to Learning the Basics in Programming Languages for Beginners",
//           authors: ["Tom Clark"],
//           publisher: "Tom Clark",
//           publishedDate: "2021-04-09",
//           description:
//             "55 % discount for bookstores ! Now At $44.99 instead of $ 69.73 $ Your customers will never stop reading this guide !!! HTML The HTML world had settled serenely into variant 4.0. In any case, only minutes after the World Wide Web Consortium, put a bow on HTML 4.0, it concluded that greater measured quality, greater adaptability, and more extensive capacities were required. In this way, in spite of the fact that HTML 4.0 might be the finish of one long street to normalization, it has dispatched another excursion for web creators that starts with XHTML 1.0. C++ C++ is an object orientated computer language created by remarkable computer scientist Bjarne Stroustrup as a part of the evolution of the C family of languages. A few call C++ \"C with Classes\" because it introduces object orientated programming principles, including using defined classes, to C program language period framework. C++ is stated \"see-plus-plus.\" JAVASCRIPT Understanding degree is a significant piece of learning any programming language. The presentation of let aligns JavaScript with most other current dialects. While JavaScript isn't the main language to help terminations, it is one of the first mainstream (nonacademic) dialects to do as such. The JavaScript people group has utilized terminations to incredible impact, and it's a significant piece of current JavaScript improvement. There's a great deal of force and adaptability incorporated into the JavaScript's Array class, yet it can once in a while be overwhelming to know which technique to utilize when. Article arranged writing computer programs is a hugely well-known worldview, and for great reason. For some genuine issues, it supports association and embodiment of code such that makes it simple to look after, investigate, and fix. JavaScript's execution of OOP has numerous pundits some even venture to such an extreme as to say that it doesn't meet the meaning of an OO language (normally on account of the absence of information access controls). SQL The truth is: SQL stands for Structured Query Language. Many people scoff dubiously when it is announced that SQL is, indeed, a programming language. When people think of programming languages, all that comes to their mind are C++, Python, Java etc, . People disregard SQL as a programming language because of its interface structure and limited functionality. However, they fail to understand that while C++, Python are third level programming languages, and hence more developed, it doesn't change the fact that SQL falls under the umbrella of programming languages. Python Would you like to learn the hard core of Python coding? You are the type of genius the great eBook in the next few lines is dedicated to, check it out. Learning the complex processes of Python Programming is a tough task most people don't want to try. Even Computer, Engineering, Tech and related fields do not want to, to even imagine the interest of a non-tech related fan. Why? It is for the same reason, it is complicated! It has different stages that can be easily mixed up. It also contains so many lessons and tasks that can overwhelm you right before you start. Buy it Now and let your customers get addicted to this amazing book!!",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "1802261990",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781802261998",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 550,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=BVtnzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=BVtnzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=BVtnzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=18&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=BVtnzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Programming_for_Beginners.html?hl=&id=BVtnzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=BVtnzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "55 % discount for bookstores ! Now At $44.99 instead of $ 69.73 $ Your customers will never stop reading this guide !!! HTML The HTML world had settled serenely into variant 4.0.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "o_hWzgEACAAJ",
//         etag: "L0VEQ90U4Fw",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/o_hWzgEACAAJ",
//         volumeInfo: {
//           title: "Javascript",
//           subtitle: "Javascript Front End Programming",
//           authors: ["Andy Vickler"],
//           publishedDate: "2021-03-08",
//           description:
//             "Gain a deep understanding of front-end programming using JavaScript with this handy book! Are you interested in learning front-end development with JavaScript? Then you have chosen the right book. Front-end development is all about the browser and putting your applications out there to the biggest possible audience. This guide will walk you through the concepts you need to know for front-end development. Focusing on React JS, this guide is aimed at those who already have a programming background and some experience in programming for the web but need to brush up on their skills and learn new ones. In this book, you will: Learn how to set up your React JS environment. Discover what ReactJS is all about. Read in depth about the React JS components. Find out about the React JS props, state, and lifecycle. Investigate React JS forms, events, and refs. Learn about React JS Keys. Understand the React JS Router. Explore React JS Flux and animations. Learn about React JS Higher Order Components. Discover the React JS best practice guide. And so much more! This book will provide you with plenty of examples along the way, and each chapter is self-contained, discussing the concepts and the APIs as you learn your way around React JS and how to use it. By the end of the guide, you will have a deep understanding of how to build your website and web applications with ease. So, what are you waiting for? Don't waste time! Click the Buy Now button to get your copy of this book and get started on your journey of discovery and development.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798718877632",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 246,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=o_hWzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=o_hWzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=o_hWzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=19&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=o_hWzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Javascript.html?hl=&id=o_hWzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=o_hWzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "Gain a deep understanding of front-end programming using JavaScript with this handy book! Are you interested in learning front-end development with JavaScript? Then you have chosen the right book.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "SrIlEAAAQBAJ",
//         etag: "yiydMxXB4LU",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/SrIlEAAAQBAJ",
//         volumeInfo: {
//           title: "Learn to Code With JavaScript",
//           authors: ["Darren Jones"],
//           publisher: "SitePoint",
//           publishedDate: "2021-03-16",
//           description:
//             "A hands-on, practical Introduction to coding! Do you want to learn to code? Perhaps you want to learn how to build the next social media sensation or blockbuster game? Or perhaps you just want to get some valuable coding experience under your belt? This easy-to-follow, practical, and fun guide is the perfect place to start on your coding journey. You'll be learning to program with JavaScript - the most popular programming language on Earth. And it runs in web browsers, making it particularly suited to creating web-based apps and games. But the principles and techniques that you'll learn will provide you with a foundation to go on and learn many other languages, too. You'll learn: Programming basics, including data types, variables and more How to use logic to control the flow of a program How to use loops to repeat code over and over again How to write functions that can be used to store code in reusable blocks How to store data in collections such as arrays, sets and maps How to create objects that store properties and actions And much more! Along the way, you'll build a collection of fun applications, including games and interactive web pages. Start learning to code today!",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9781098124786",
//             },
//             {
//               type: "ISBN_10",
//               identifier: "1098124782",
//             },
//           ],
//           readingModes: {
//             text: true,
//             image: false,
//           },
//           pageCount: 404,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "0.2.2.0.preview.2",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=SrIlEAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=SrIlEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=SrIlEAAAQBAJ&pg=PP1&dq=javascript&hl=&as_pt=BOOKS&cd=20&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=SrIlEAAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Learn_to_Code_With_JavaScript.html?hl=&id=SrIlEAAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: true,
//           },
//           pdf: {
//             isAvailable: true,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=SrIlEAAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "nZnpDwAAQBAJ",
//         etag: "A6/PhL4xPYs",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/nZnpDwAAQBAJ",
//         volumeInfo: {
//           title: "Building Single Page Applications in .NET Core 3",
//           subtitle: "Jumpstart Coding Using Blazor and C#",
//           authors: ["Michele Aponte"],
//           publisher: "Apress",
//           publishedDate: "2020-06-05",
//           description:
//             "Attention .NET developers who no longer want to use JavaScript for your front end. Quickly and efficiently learn how to use C# for your single-page application (SPA) thanks to Blazor. Today’s reality is that most modern applications are web-based and if you want the same user experience as a desktop application, you need to be able to create a single-page application. While there are multiple frameworks and libraries to choose from (including Angular, React, and VueJS), you still need to know how to code in JavaScript. But now there is another option from Microsoft. Blazor is an open-source framework that enables developers to create web applications using C# and HTML, and everything you need to get started is covered in this guide. You will learn the steps, through build-along coding examples, that will allow you to use the same language for both the front end and the back end of your application. This book is designed to get you comfortable creating a single-page application in the shortest time possible. Get ready to create a complete business application that teaches and reinforces the skills you need in a Blazor production environment. What You Will Learn Develop the front end of an application using C# and .NET Core Use this quick-start for .NET developers who need to improve their application with a single-page front end Take a code-first approach that models an actual business application Gain insights for developing a high-functioning and maintainable applicationStudy guidance on repurposing your .NET skill set Who This Book Is For C# and .NET developers who have some experience in web development",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9781484257470",
//             },
//             {
//               type: "ISBN_10",
//               identifier: "1484257472",
//             },
//           ],
//           readingModes: {
//             text: true,
//             image: true,
//           },
//           pageCount: 110,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "1.1.1.0.preview.3",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=nZnpDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=nZnpDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=nZnpDwAAQBAJ&pg=PP1&dq=javascript&hl=&as_pt=BOOKS&cd=21&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=nZnpDwAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Building_Single_Page_Applications_in_NET.html?hl=&id=nZnpDwAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "PARTIAL",
//           embeddable: true,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: true,
//             acsTokenLink:
//               "http://books.google.com/books/download/Building_Single_Page_Applications_in_NET-sample-epub.acsm?id=nZnpDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
//           },
//           pdf: {
//             isAvailable: true,
//             acsTokenLink:
//               "http://books.google.com/books/download/Building_Single_Page_Applications_in_NET-sample-pdf.acsm?id=nZnpDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=nZnpDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "SAMPLE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This book is designed to get you comfortable creating a single-page application in the shortest time possible.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "GpvnDwAAQBAJ",
//         etag: "0lQoys5463s",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/GpvnDwAAQBAJ",
//         volumeInfo: {
//           title: "Building REST API Services using Deno and PostgreSQL",
//           authors: ["Rully Yulian MF"],
//           publisher: "Native Enterprise",
//           publishedDate: "2020-05-28",
//           description:
//             "Get a 65% discount starting today until 31 December 2020. Only for the 100 buyers. Use this code DNSPSSKULJNSP to redeem. Take advantage of this limited opportunity. This book learns about developing web services based on REST architecture using Deno. Deno is the latest server runtime environment for typescript and javascript in addition to node.js which is well known to date. Yes, deno was created by Ryan Dahl who created node.js itself, will deno be the next node.js successor? Of course there are reasons behind developing a new runtime for executing typescript and javascript. Architecturally, for deno runtime javascript it still uses Google Engine V8 just like the previous node.js, but this time the deno was built using Rust and TypeScript languages, while node.js was built with C ++ and JavaScript. For asynchronous runtime and event driven deno use the open source library, Tokio. Deno support typescript built-in or out of the box in the sense can be used directly without having to first configure settings, unlike node.js. The use of javascript is also supported in addition to typescript. Deno is more secure than node.js, because by default deno cannot access files, environment access, network, without explicit declaration. What is discussed in this book? Here are the points: - Introduction and installation of deno along with visual studio code as a code editor - Use standard modules for http servers - Use of third party modules such as oak to handle requests, responses, and routing - Creating a controller and routing for CRUD functionality for the postgresql database - Using Denon to automate the compilation and deno project running - Implementation of middleware for authentication - Implement bcrypt module for password hashing - Implementation of authentication using JWT - Implementation of https server - Refactoring module - Repository pattern - Access user defined functions and stored procedures in postgresql - Bundling project - The use of PM2 as monitoring tools - The use of denoDB ORM Hopefully this book can be another alternative as a source of learning exercises, tutorials, or references for those who want to learn Deno programming.",
//           readingModes: {
//             text: false,
//             image: true,
//           },
//           pageCount: 119,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: true,
//           contentVersion: "1.7.5.0.preview.1",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=GpvnDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=GpvnDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=GpvnDwAAQBAJ&printsec=frontcover&dq=javascript&hl=&as_pt=BOOKS&cd=22&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=GpvnDwAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Building_REST_API_Services_using_Deno_an.html?hl=&id=GpvnDwAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "PARTIAL",
//           embeddable: true,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: true,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=GpvnDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "SAMPLE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This book learns about developing web services based on REST architecture using Deno.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "NPbkDwAAQBAJ",
//         etag: "z4B3NTFANLo",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/NPbkDwAAQBAJ",
//         volumeInfo: {
//           title: "JavaScript: The Definitive Guide",
//           subtitle: "Master the World's Most-Used Programming Language",
//           authors: ["David Flanagan"],
//           publisher: '"O\'Reilly Media, Inc."',
//           publishedDate: "2020-05-14",
//           description:
//             "For web developers and other programmers interested in using JavaScript, this bestselling book provides the most comprehensive JavaScript material on the market. The seventh edition represents a significant update, with new information for ECMAScript 2020, and new chapters on language-specific features. JavaScript: The Definitive Guide is ideal for experienced programmers who want to learn the programming language of the web, and for current JavaScript programmers who want to master it.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9781491951989",
//             },
//             {
//               type: "ISBN_10",
//               identifier: "1491951982",
//             },
//           ],
//           readingModes: {
//             text: true,
//             image: true,
//           },
//           pageCount: 807,
//           printType: "BOOK",
//           categories: ["Computers"],
//           averageRating: 5,
//           ratingsCount: 1,
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: true,
//           contentVersion: "1.1.1.0.preview.3",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=NPbkDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=NPbkDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=NPbkDwAAQBAJ&pg=PP1&dq=javascript&hl=&as_pt=BOOKS&cd=23&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=NPbkDwAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/JavaScript_The_Definitive_Guide.html?hl=&id=NPbkDwAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "PARTIAL",
//           embeddable: true,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: true,
//           },
//           pdf: {
//             isAvailable: true,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=NPbkDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "SAMPLE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "JavaScript: The Definitive Guide is ideal for experienced programmers who want to learn the programming language of the web, and for current JavaScript programmers who want to master it.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "UzXfDwAAQBAJ",
//         etag: "RTOOMVJzOFM",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/UzXfDwAAQBAJ",
//         volumeInfo: {
//           title: "Your First Week With Node.js",
//           authors: [
//             "James Hibbard",
//             "Craig Buckler",
//             "Mark Brown",
//             "Nilson Jacques",
//             "James Kolce",
//             "Paul Orac",
//             "M. David Green",
//             "Florian Rappl",
//           ],
//           publisher: "SitePoint",
//           publishedDate: "2020-04-24",
//           description:
//             "While there have been quite a few attempts to get JavaScript working as a server-side language, Node.js (frequently just called Node) has been the first environment that's gained any traction. It's now used by companies such as Netflix, Uber and Paypal to power their web apps. Node allows for blazingly fast performance; thanks to its event loop model, common tasks like network connection and database I/O can be executed very quickly indeed. From a beginner's point of view, one of Node's obvious advantages is that it uses JavaScript, a ubiquitous language that many developers are comfortable with. If you can write JavaScript for the client-side, writing server-side applications with Node should not be too much of a stretch for you. This book offers aselection of beginner-level tutorials to privide you with an introduction to Node and its related technologies, and get you under way writing your first Node applications. It contains: What Is Node and When Should I Use It? Build a Simple Page Counter Service with Node.js Understanding module.exports and exports in Node.js Forms, File Uploads and Security with Node.js and Express Working with Databases in Node How to Build and Structure a Node.js MVC Application Local Authentication Using Passport in Node.js How to Debug a Node App Node Testing for Beginners How to Use SSL/TLS with Node.js Configuring NGINX and SSL with Node.js Using Docker for Node.js Development",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9781098122829",
//             },
//             {
//               type: "ISBN_10",
//               identifier: "1098122828",
//             },
//           ],
//           readingModes: {
//             text: true,
//             image: true,
//           },
//           pageCount: 192,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "1.1.1.0.preview.3",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=UzXfDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=UzXfDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=UzXfDwAAQBAJ&pg=PP1&dq=javascript&hl=&as_pt=BOOKS&cd=24&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=UzXfDwAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Your_First_Week_With_Node_js.html?hl=&id=UzXfDwAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "PARTIAL",
//           embeddable: true,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: true,
//           },
//           pdf: {
//             isAvailable: true,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=UzXfDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "SAMPLE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This book offers aselection of beginner-level tutorials to privide you with an introduction to Node and its related technologies, and get you under way writing your first Node applications.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "D1ZYzgEACAAJ",
//         etag: "dOt7x2jul2o",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/D1ZYzgEACAAJ",
//         volumeInfo: {
//           title: "Javascript",
//           subtitle: "Javascript Back End Programming",
//           authors: ["Andy Vickler"],
//           publishedDate: "2021-03-08",
//           description:
//             "Take a deep dive into Node.js to learn more about this complex web-development application. Do you want to learn how to build scalable web applications? If you said yes, then this is the book you have been searching for! Node.js is the number one choice for server-side web development, as it allows you to build both client and server-side software using the same paradigms and tools. This book will take you through the important concepts involved in using Node.js to build your server-side applications. Each chapter is self-contained with its own practical but simple examples to show you how it works. By the end of this book, you will have all the knowledge you need to put together your own web application. In this book, you will: Learn how to set up your Node.js environment. Explore everything about the REPL Terminal. Read about the Node.js package manager. Discover Node.js callbacks and asynchronous JS. Find out about Node.js events, buffers, streams, and the file system. Investigate Node.js global objects and the global object - they are different. Learn about Node.js modules, utility modules, the web module, and more. Find out about the Express framework. Learn RESTful API. Discover how to scale applications. Find out how to package applications. And so much more! Node.js one part of your toolkit in building server and client-side applications. Click on the Buy Now button to get your copy of this book and dive into Node.js and back-end JavaScript development today!",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798718946819",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 230,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=D1ZYzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=D1ZYzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=D1ZYzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=25&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=D1ZYzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Javascript.html?hl=&id=D1ZYzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=D1ZYzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "By the end of this book, you will have all the knowledge you need to put together your own web application. In this book, you will: Learn how to set up your Node.js environment. Explore everything about the REPL Terminal.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "qovWDwAAQBAJ",
//         etag: "Iie4p9nYvlQ",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/qovWDwAAQBAJ",
//         volumeInfo: {
//           title: "Buku Pintar JavaScript",
//           authors: ["Vivian Siahaan", "Rismon Hasiholan Sianipar"],
//           publisher: "BALIGE PUBLISHING",
//           publishedDate: "2020-03-14",
//           description:
//             "Buku ini menyuguhkan lebih dari 100 kasus yang diimplementasikan langkah demi langkah. Buku ini ditujukan baik untuk pemula maupun pembelajar berpengalaman, yang hanya memfokuskan dan mendalami hanya pada elemen-elemen penting JavaScript. Buku ini merupakan buku “untuk semua kalangan”, yang didedikasikan untuk mereka yang menginginkan keseimbangan antara sisi teknis bahasa dan elemen-elemen menyenangkan. Buku ini menjelaskan bagaimana bahasa ini diterapkan dimulai dari contoh-contoh yang paling mendasar sampai yang lebih kompleks, dengan progres yang memandu Anda contoh demi contoh sampai Anda menguasainya. Kebutuhan akan contoh-contoh yang baik sangat diperlukan untuk mendapatkan hasil yang baik. Kami berharap bahwa Anda menikmati buku bahasa pemrograman Web ini dengan cara yang menyenangkan.",
//           readingModes: {
//             text: false,
//             image: true,
//           },
//           pageCount: 201,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "1.2.2.0.preview.1",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=qovWDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=qovWDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
//           },
//           language: "id",
//           previewLink:
//             "http://books.google.com/books?id=qovWDwAAQBAJ&printsec=frontcover&dq=javascript&hl=&as_pt=BOOKS&cd=26&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=qovWDwAAQBAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Buku_Pintar_JavaScript.html?hl=&id=qovWDwAAQBAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "PARTIAL",
//           embeddable: true,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: true,
//             acsTokenLink:
//               "http://books.google.com/books/download/Buku_Pintar_JavaScript-sample-pdf.acsm?id=qovWDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=qovWDwAAQBAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "SAMPLE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "Buku ini menyuguhkan lebih dari 100 kasus yang diimplementasikan langkah demi langkah.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "cSNYzgEACAAJ",
//         etag: "YatCBFZue+g",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/cSNYzgEACAAJ",
//         volumeInfo: {
//           title: "Javascript",
//           subtitle:
//             "This Book Includes: Javascript Basics For Beginners + Javascript Front End Programming + Javascript Back End Programming",
//           authors: ["Andy Vickler"],
//           publishedDate: "2021-03-08",
//           description:
//             "This Book includes: Javascript Basics For Beginners Javascript Front End Programming Javascript Back End Programming Gain a deep understanding of Basics, front-end programming and back-end programming using JavaScript with this handy book! This book is written in a practical and easy way and offers theory and plenty of practical material. There are explanations and practical examples that help beginners learn fast. Instead of diving deeper into lengthy and boring texts, I tried to get straight to the point for each topic. I have defined each topic and added an easy to understand explanation to help you understand the concepts and the main keywords that will do the magic in the code. Coupled with the explanation, you will find a code snippet for each topic that is custom written and has been tested for errors. You can copy them and load them up on a web browser to see the results, or you can simply edit them and customize them to understand them well. The choice is yours. First book is written in an orderly form with beginner-level topics and progressively tougher topics later on. Second book is focusing on React JS, this guide is aimed at those who already have a programming background and some experience in programming for the web but need to brush up on their skills and learn new ones. Third book will take you through the important concepts involved in using Node.js to build your server-side applications. Each chapter is self-contained with its own practical but simple examples to show you how it works. By the end of this book, you will have all the knowledge you need to put together your own web application!Here is a rundown of the contents of the book. JavaScript Use Cases Variables Constants Prompts Conditionals Arrays Strings JavaScript For and While Loops Functions Objects Classes Learn how to set up your React JS environment. Discover what ReactJS is all about. Read in depth about the React JS components. Find out about the React JS props, state, and lifecycle. Investigate React JS forms, events, and refs. Learn about React JS Keys. Understand the React JS Router. Explore React JS Flux and animations. Learn about React JS Higher Order Components. Discover the React JS best practice guide. Learn how to set up your Node.js environment. Explore everything about the REPL Terminal. Read about the Node.js package manager. Discover Node.js callbacks and asynchronous JS. Find out about Node.js events, buffers, streams, and the file system. Investigate Node.js global objects and the global object - they are different. Learn about Node.js modules, utility modules, the web module, and more. Find out about the Express framework. Learn RESTful API. Discover how to scale applications. Find out how to package applications. And so much more! Now is your chance to delve into Javascript basics with this easy to follow guide. With the many examples and code snippets, you'll have everything you need at your fingertips. Click the Buy Now button to get started today!",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798718960556",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 716,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=cSNYzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=cSNYzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=cSNYzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=27&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=cSNYzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Javascript.html?hl=&id=cSNYzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=cSNYzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This Book includes : Javascript Basics For Beginners Javascript Front End Programming Javascript Back End Programming Gain a deep understanding of Basics, front-end programming and back-end programming using JavaScript with this handy book!",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "-uxTzgEACAAJ",
//         etag: "wQ5UU53T4CM",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/-uxTzgEACAAJ",
//         volumeInfo: {
//           title: "Complete Guide to Modern JavaScript",
//           subtitle:
//             "Learn Everything from the Basics of JavaScript to the New ES2021 Features. Practice with More Than 50 Quizzes and Dive Into the Basics of TypeScript.",
//           authors: ["Alberto Montalesi"],
//           publishedDate: "2021-03-07",
//           description:
//             "Whether you are a complete beginner or you have some knowledge of JavaScript, this book will guide you from the basics of the language to all the new features introduced until 2021. At the end of each chapter test your knowledge with quizzes.Included in the book is an introduction to TypeScript, a must-know for every JavaScript developer.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798717719643",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 324,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=-uxTzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=-uxTzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=-uxTzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=28&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=-uxTzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Complete_Guide_to_Modern_JavaScript.html?hl=&id=-uxTzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=-uxTzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "[ FIFTH EDITION IS NOW OUT - IT INCLUDES A NEW CHAPTER FOR ES2022 PLEASE DON&#39;T PURCHASE THIS EDITION - JUST SEARCH FOR &#39; Complete Guide to Modern JavaScript ES2022&#39; ] Whether you are a complete beginner or you have some knowledge of ...",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "xRFCzgEACAAJ",
//         etag: "03wnvQLF9xA",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/xRFCzgEACAAJ",
//         volumeInfo: {
//           title: "JavaScript Simplified",
//           subtitle: "JavaScript Simplified And Turned To Fun",
//           authors: ["O a Marcus"],
//           publishedDate: "2021-02-05",
//           description:
//             "This book is simplified version to make you fully understand JavaScript. This book is simple enough to make you fully understand JavaScript and ES6 without wasting your time and buggle your brain with complex theories or explanations. This book is fully practical in nature and simplified JavaScript for easy consumption. If you want to start your carrier as Frontend Web Developer in the most easiest way, this is a good way to start. Infact, a 10 year old can easily follow our guides without any problem.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798704820246",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 96,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=xRFCzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=xRFCzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=xRFCzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=29&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=xRFCzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/JavaScript_Simplified.html?hl=&id=xRFCzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=xRFCzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This book is simplified version to make you fully understand JavaScript. This book is simple enough to make you fully understand JavaScript and ES6 without wasting your time and buggle your brain with complex theories or explanations.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "zihozgEACAAJ",
//         etag: "G+CcgyXviIg",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/zihozgEACAAJ",
//         volumeInfo: {
//           title: "Learning PHP, MySQL and JavaScript",
//           subtitle: "A Step-By-Step Guide to Creating Dynamic Websites",
//           authors: ["Robin Nixon"],
//           publisher: "O'Reilly Media",
//           publishedDate: "2021-08-31",
//           description:
//             "Build interactive, data-driven websites with the potent combination of open source technologies and web standards, even if you have only basic HTML knowledge. With the latest edition of this popular hands-on guide, you'll tackle dynamic web programming using the most recent versions of today's core technologies: PHP, MySQL, JavaScript, CSS, HTML5, and the powerful React and React Native libraries. Web designers will learn how to use these technologies together while picking up valuable web programming practices along the way--including how to optimize websites for mobile devices. Finally, you'll put everything together to build a fully functional social networking site suitable for both desktop and mobile browsers. Explore MySQL from database structure to complex queries Use the MySQL PDO extension, PHP's improved MySQL interface Create dynamic PHP web pages that tailor themselves to the user Manage cookies and sessions and maintain a high level of security Enhance JavaScript with the React and React Native libraries Use Ajax calls for background browser server communication Style your web pages by acquiring CSS skills Implement HTML5 features, including geolocation, audio, video, and the canvas Reformat your websites into mobile web apps",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "1492093823",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781492093824",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 832,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=zihozgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=zihozgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=zihozgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=30&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=zihozgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Learning_PHP_MySQL_and_JavaScript.html?hl=&id=zihozgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=zihozgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "&quot;... now including React, PHP 8 &amp; MySQL 8&quot;--Cover.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "h49lzQEACAAJ",
//         etag: "nkSpIdwuqdA",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/h49lzQEACAAJ",
//         volumeInfo: {
//           title: "JavaScript",
//           subtitle:
//             "The Ultimate Guide to Understand JavaScript Code and Its Fundamentals. Discover Literal and Control Flow. Learn Variables, Functions, Object and the Best JQuery.",
//           authors: ["Mark Graph"],
//           publishedDate: "2020-02",
//           description:
//             "Do you want to learn how JavaScript and the major markup languages work? If yes, then keep reading... Hypertext Markup Language (HTML) is part of the three major elements of modern web pages. The other two are Cascading Style Sheets (CSS) and JavaScript. HTML defines the structure of web pages. HTML contains a lot of features and instructs the browser on how to display content. CSS is responsible for styling while JavaScript is a prototype-based language with top-notch functions utilized by web page authors to control element actions. The three major markup languages concepts are explained further in the book. Cascading Style Sheets (CSS) is an excellent way of designing web pages. With CSS, you determine the color of an element, angle, visibility, size, and position, and more. CSS can be utilized either within the document or as an independent file which must be referenced by the HTML document. CSS is a standard way of styling an individual or group of elements at once. There are many parts and tasks that come with the JavaScript language, and we are going to take some time to explore these a bit more. This will make it easier for us to see how this language works and what we can do with it. From learning how to write our own objects, expressions, operators, and more, this guidebook has all of the tools that you need in order to get started with writing some of our own codes in JavaScript. Working with a coding language can seem hard to work with. This is not always as easy to choose as the others, but the number of features and capabilities that come with this language compared to some of the other options, especially when we are talking about using this on web pages, then JavaScript is the right choice for you. When you are ready to learn more about the JavaScript language and what you are able to do with it, make sure to check out this guidebook to help you get started. JavaScript is capable of acting on or influencing web pages. JavaScript enhances web user interface by confirming actions taken by the user on the client-side. JavaScript contains three data types, which are number, Boolean, and string. With JavaScript, you can describe the functions of your own. In this book, you will learn more about: Fundamental JavaScript Concepts HTML Overview JavaScript's Control Flow Statements The Different Types of Loops in JavaScript Syntax Enabling JavaScript in Browsers Placement of JavaScript in Files Popup Message JavaScript Variables JavaScript ECMAScript Standard Working With JavaScript: A Brief HTML Guide for Beginners Changing the content of HTML elements using DOM Changing CSS using DOM Pointers Expressions and Operators What Are Some Of The JavaScript Variables? Variables, data types & constants Closures and Callbacks in JavaScript Apply, call, and bind methods in JavaScript Events Arrays in JavaScript Values, Types, and Operators Definition of Arrays in JavaScript ... AND MORE!!! What are you waiting for? Don't wait anymore, press the buy now button and get started.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798606604463",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 258,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=h49lzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=h49lzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=h49lzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=31&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=h49lzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/JavaScript.html?hl=&id=h49lzQEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=h49lzQEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This is not always as easy to choose as the others, but the number of features and capabilities that come with this language compared to some of the other options, especially when we are talking about using this on web pages, then ...",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "VGEgzgEACAAJ",
//         etag: "ii73USD2VUI",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/VGEgzgEACAAJ",
//         volumeInfo: {
//           title: "Java Script Basic and Advance",
//           subtitle:
//             "A Step by Step Guide for Beginner;s to Learn in ( 7 Days): Core Concept of Javascript",
//           authors: ["Susanta Bouri"],
//           publishedDate: "2020-12-10",
//           description:
//             "Written especially for beginners.JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.I wrote the book and exercises especially for people who are new to programming. Making no assumptions about what you already know, I walk you through JavaScript slowly, patiently. I explain every little thing in sixth-grade English. I avoid unnecessary technical jargon like the plague. (Face it, fellow authors, it is the plague.)The exercises keep you focused, give you extra practice where you're shaky, and prepare you for each next step. Every lesson is built on top of a solid foundation that you and I have carefully constructed. Each individual step is small. But If you're an accomplished programmer already, my book may be too elementary for you. (Do you really need to be told what a variable is?) But if you're new to programming, more than a thousand five-star reviews are pretty good evidence that my book may be just the one to get you coding JavaScript successfully. Understand the essential elements of programming, including syntax, control, and data- Organize and clarify your code with object-oriented and functional programming techniques- Script the browser and make basic web applications- Use the DOM effectively to interact with browsers- Harness Node.js to build servers and utilities",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798579435835",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 354,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=VGEgzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=VGEgzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=VGEgzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=32&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=VGEgzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Java_Script_Basic_and_Advance.html?hl=&id=VGEgzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=VGEgzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.I wrote the book and exercises especially for people who are new to programming.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "RBkIzgEACAAJ",
//         etag: "g9B2ddGCbIc",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/RBkIzgEACAAJ",
//         volumeInfo: {
//           title: "Node.js",
//           subtitle: "Build Web APIs and Applications with Node.js",
//           authors: ["Mem Lnc", "Rufus Stewart"],
//           publishedDate: "2020-10-17",
//           description:
//             "There are plenty of definitions to be found online. Let's take a look at a couple of the more popular ones. This is what the project's home page has to say: - Node.js(R) is a JavaScript runtime built on Chrome's V8 JavaScript engine.And this is what Stack Overflow has to offer: - Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.Hmmm, \"event-based\", \"non-blocking\", \"asynchronous I/O\" - that's quite a lot to digest in one go. So let's approach this from a different angle and begin by focusing on the other detail that both descriptions mention - the V8 JavaScript engine.Node Is Built on Google Chrome's V8 JavaScript EngineThe V8 engine is the open-source JavaScript engine that runs in Google Chrome and other Chromium-based web browsers, including Brave, Opera, and Vivaldi. It was designed with performance in mind and is responsible for compiling JavaScript directly to native machine code that your computer can execute.However, when we say that Node is built on the V8 engine, we don't mean that Node programs are executed in a browser. They aren't. Rather, the creator of Node (Ryan Dahl) took the V8 engine and enhanced it with various features, such as a file system API, an HTTP library, and a number of operating system-related utility methods.This means that Node.js is a program we can use to execute JavaScript on our computers. In other words, it's a JavaScript runtime.How Do I Install Node.js?In this next section, we'll install Node and write a couple of simple programs. We'll also look at npm, a package manager that comes bundled with Node.Node Binaries vs Version ManagerMany websites will recommend that you head to the official Node download page and grab the Node binaries for your system. While that works, I would suggest that you use a version manager instead. This is a program that allows you to install multiple versions of Node and switch between them at will. There are various advantages to using a version manager. For example, it negates potential permission issues when using Node with npm and lets you set a Node version on a per-project basis.If you fancy going the version manager route, please consult our quick tip: Install Multiple Versions of Node.js using nvm. Otherwise, grab the correct binaries for your system from the link above and install those.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798699079995",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 130,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=RBkIzgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=RBkIzgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=RBkIzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=33&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=RBkIzgEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Node_js.html?hl=&id=RBkIzgEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=RBkIzgEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "And this is what Stack Overflow has to offer: - Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google&#39;s V8 JavaScript engine and libuv library.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "ip3dzQEACAAJ",
//         etag: "GNLDD47XlCc",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/ip3dzQEACAAJ",
//         volumeInfo: {
//           title: "300 JavaScript Interview Mastery Questions",
//           subtitle:
//             "Dive Deep Into JavaScript Theory, Syntax, and APIs, and Interview with Confidence",
//           authors: ["Jonathan Middaugh"],
//           publishedDate: "2020-09-26",
//           description:
//             'This book contains questions covering JavaScript syntax, rules, functionality, and theory. It is designed to help you improve upon your JavaScript knowledge as well as expose you to some edge cases and unusual situations in JavaScript. I find that these are the types of examples that really solidify a developer\'s understanding of this fun language.The book has a few questions specific to JavaScript running in the browser, but most questions are agnostic of environment. A few questions also include TypeScript, but they will be designated as such. The book is organized into 4 "tests", and the answers to the questions are in the back of the book.***BONUS*** Two additional links in the book link to Medium.com articles that provide another 50 JavaScript interview questions and 50 TypeScript interview questions. Altogether this means 400 interview questions!',
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798690636630",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 488,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=ip3dzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=ip3dzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=ip3dzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=34&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=ip3dzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/300_JavaScript_Interview_Mastery_Questio.html?hl=&id=ip3dzQEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=ip3dzQEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This book contains questions covering JavaScript syntax, rules, functionality, and theory.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "b5G4zAEACAAJ",
//         etag: "wmqD56ARlX8",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/b5G4zAEACAAJ",
//         volumeInfo: {
//           title: "JavaScript: the Definitive Guide",
//           subtitle: "Master the World's Most-Used Programming Language",
//           authors: ["David Flanagan"],
//           publisher: "O'Reilly Media",
//           publishedDate: "2020-06-02",
//           description:
//             "JavaScript is the programming language of the web and is used by more software developers today than any other programming language. For nearly 25 years this best seller has been the go-to guide for JavaScript programmers. The seventh edition is fully updated to cover the 2020 version of JavaScript, and new chapters cover classes, modules, iterators, generators, Promises, async/await, and metaprogramming. You'll find illuminating and engaging example code throughout. This book is for programmers who want to learn JavaScript and for web developers who want to take their understanding and mastery to the next level. It begins by explaining the JavaScript language itself, in detail, from the bottom up. It then builds on that foundation to cover the web platform and Node.js. Topics include: Types, values, variables, expressions, operators, statements, objects, and arrays Functions, classes, modules, iterators, generators, Promises, and async/await JavaScript's standard library: data structures, regular expressions, JSON, i18n, etc. The web platform: documents, components, graphics, networking, storage, and threads Node.js: buffers, files, streams, threads, child processes, web clients, and web servers Tools and language extensions that professional JavaScript developers rely on",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "1491952024",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781491952023",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 706,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=b5G4zAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=b5G4zAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=b5G4zAEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=35&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=b5G4zAEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/JavaScript_the_Definitive_Guide.html?hl=&id=b5G4zAEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=b5G4zAEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This book is for programmers who want to learn JavaScript and web developers ready to take their understanding and mastery of the language to the next level. -- Provided by publisher.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "3RDGzQEACAAJ",
//         etag: "K2OC0MByMSU",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/3RDGzQEACAAJ",
//         volumeInfo: {
//           title:
//             "Java Script for Web Designers and Web Developers a Basics and Advanced Coding Techniques",
//           authors: ["Andrew Faulkner"],
//           publishedDate: "2020-08-24",
//           description:
//             "JavaScript has become one of the most widely used scripting languages in existence. Today, virtually every personal computer on the planet has a JavaScript engine on it, whether it's a Mac, Windows PC, or Linux computer. It helps developers create rich user experiences on the web, and is a contributing factor to the development of the Internet as a viable platform for business applications.This book is intended to be more than a simple collection of Basic material. It's meant to be a comprehensive and accurate resource for both new and experienced developers. It's the kindof book you'll want to keep next to your computer at all times to flip through to remind yourself of techniques, browser compatibility, and in-depth explanation on some of the most bleeding-edge features of the language You can jump to any point in the material, and provided you have at least some understanding of the preceding chapters, you should be able to jump right in This book is aimed at three groups of readers: >Experienced developers familiar with object-oriented programming who are looking to learn JavaScript as it relates to traditional OO languages such as Java and C++>Web application developers attempting to enhance the usability of their web sites and web applications>Novice JavaScript developers aiming to better understand the language So Buy This Book Now",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798678352262",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 596,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=3RDGzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=3RDGzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=3RDGzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=36&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=3RDGzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Java_Script_for_Web_Designers_and_Web_De.html?hl=&id=3RDGzQEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=3RDGzQEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "It&#39;s the kindof book you&#39;ll want to keep next to your computer at all times to flip through to remind yourself of techniques, browser compatibility, and in-depth explanation on some of the most bleeding-edge features of the language You can ...",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "PLSxzQEACAAJ",
//         etag: "FGZrqB0XVuc",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/PLSxzQEACAAJ",
//         volumeInfo: {
//           title: "Node. Js Design Patterns",
//           subtitle:
//             "Design and Implement Production-Grade Node. Js Applications Using Proven Patterns and Techniques, 3rd Edition",
//           authors: ["Mario Casciaro", "Luciano Mammino"],
//           publishedDate: "2020-07-28",
//           description:
//             "Learn proven patterns, techniques, and tricks to take full advantage of the Node.js platform. Master well-known design principles to create applications that are readable, extensible, and that can grow big. Key Features Learn how to create solid server-side applications by leveraging the full power of Node.js 14 Understand how Node.js works and learn how to take full advantage of its core components as well as the solutions offered by its ecosystem Avoid common mistakes and use proven patterns to create production grade Node.js applications Book Description In this book, we will show you how to implement a series of best practices and design patterns to help you create efficient and robust Node.js applications with ease. We kick off by exploring the basics of Node.js, analyzing its asynchronous event driven architecture and its fundamental design patterns. We then show you how to build asynchronous control flow patterns with callbacks, promises and async/await. Next, we dive into Node.js streams, unveiling their power and showing you how to use them at their full capacity. Following streams is an analysis of different creational, structural, and behavioral design patterns that take full advantage of JavaScript and Node.js. Lastly, the book dives into more advanced concepts such as Universal JavaScript, scalability and messaging patterns to help you build enterprise-grade distributed applications. Throughout the book, you'll see Node.js in action with the help of several real-life examples leveraging technologies such as LevelDB, Redis, RabbitMQ, ZeroMQ, and many others. They will be used to demonstrate a pattern or technique, but they will also give you a great introduction to the Node.js ecosystem and its set of solutions. What you will learn Become comfortable with writing asynchronous code by leveraging callbacks, promises, and the async/await syntax Leverage Node.js streams to create data-driven asynchronous processing pipelines Implement well-known software design patterns to create production grade applications Share code between Node.js and the browser and take advantage of full-stack JavaScript Build and scale microservices and distributed systems powered by Node.js Use Node.js in conjunction with other powerful technologies such as Redis, RabbitMQ, ZeroMQ, and LevelDB Who this book is for This book is for developers and software architects who have some prior basic knowledge of JavaScript and Node.js and now want to get the most out of these technologies in terms of productivity, design quality, and scalability. Software professionals with intermediate experience in Node.js and JavaScript will also find valuable the more advanced patterns and techniques presented in this book. This book assumes that you have an intermediate understanding of web application development, databases, and software design principles.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "1839214112",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781839214110",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 660,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=PLSxzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=PLSxzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=PLSxzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=37&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=PLSxzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Node_Js_Design_Patterns.html?hl=&id=PLSxzQEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=PLSxzQEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "In this book, we will show you how to implement a series of best practices and design patterns to help you create efficient and robust Node.js applications with ease.",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "CK29zQEACAAJ",
//         etag: "0FHOWj0Qack",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/CK29zQEACAAJ",
//         volumeInfo: {
//           title: "Node.js",
//           subtitle:
//             "The Ultimate Beginner's Guide to Learn Node.js Step by Step - 2020",
//           authors: ["Mem Lnc", "John Bach"],
//           publishedDate: "2020-07-25",
//           description:
//             "There are plenty of definitions to be found online. Let's take a look at a couple of the more popular ones. This is what the project's home page has to say: - Node.js(R) is a JavaScript runtime built on Chrome's V8 JavaScript engine.And this is what Stack Overflow has to offer: - Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.Hmmm, \"event-based\", \"non-blocking\", \"asynchronous I/O\" - that's quite a lot to digest in one go. So let's approach this from a different angle and begin by focusing on the other detail that both descriptions mention - the V8 JavaScript engine.Node Is Built on Google Chrome's V8 JavaScript EngineThe V8 engine is the open-source JavaScript engine that runs in Google Chrome and other Chromium-based web browsers, including Brave, Opera, and Vivaldi. It was designed with performance in mind and is responsible for compiling JavaScript directly to native machine code that your computer can execute.However, when we say that Node is built on the V8 engine, we don't mean that Node programs are executed in a browser. They aren't. Rather, the creator of Node (Ryan Dahl) took the V8 engine and enhanced it with various features, such as a file system API, an HTTP library, and a number of operating system-related utility methods.This means that Node.js is a program we can use to execute JavaScript on our computers. In other words, it's a JavaScript runtime.How Do I Install Node.js?In this next section, we'll install Node and write a couple of simple programs. We'll also look at npm, a package manager that comes bundled with Node.Node Binaries vs Version ManagerMany websites will recommend that you head to the official Node download page and grab the Node binaries for your system. While that works, I would suggest that you use a version manager instead. This is a program that allows you to install multiple versions of Node and switch between them at will. There are various advantages to using a version manager. For example, it negates potential permission issues when using Node with npm and lets you set a Node version on a per-project basis.If you fancy going the version manager route, please consult our quick tip: Install Multiple Versions of Node.js using nvm. Otherwise, grab the correct binaries for your system from the link above and install those.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798669424008",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 86,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=CK29zQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=CK29zQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=CK29zQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=38&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=CK29zQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Node_js.html?hl=&id=CK29zQEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=CK29zQEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This is what the project&#39;s home page has to say: - Node.js(R) is a JavaScript runtime built on Chrome&#39;s V8 JavaScript engine.And this is what Stack Overflow has to offer: - Node.js is an event-based, non-blocking, asynchronous I/O runtime ...",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "YaSmxAEACAAJ",
//         etag: "/8G1QVCpYkQ",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/YaSmxAEACAAJ",
//         volumeInfo: {
//           title: "HTML, CSS and JavaScript in Easy Steps",
//           authors: ["Mike McGrath"],
//           publisher: "In Easy Steps",
//           publishedDate: "2020-06-25",
//           description:
//             "A comprehensive guide to everything the reader will need to get to grips with HTML, CSS and JavaScript - all in easy steps!",
//           industryIdentifiers: [
//             {
//               type: "ISBN_10",
//               identifier: "184078878X",
//             },
//             {
//               type: "ISBN_13",
//               identifier: "9781840788785",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 480,
//           printType: "BOOK",
//           categories: ["Computers"],
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=YaSmxAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=YaSmxAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=YaSmxAEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=39&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=YaSmxAEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/HTML_CSS_and_JavaScript_in_Easy_Steps.html?hl=&id=YaSmxAEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=YaSmxAEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "HTML, CSS &amp; JavaScript in easy steps is a comprehensive guide to everything the reader will need to get to grips with HTML, CSS and JavaScript - all in easy steps!",
//         },
//       },
//       {
//         kind: "books#volume",
//         id: "rQGYzQEACAAJ",
//         etag: "IbfdOLZCDag",
//         selfLink: "https://www.googleapis.com/books/v1/volumes/rQGYzQEACAAJ",
//         volumeInfo: {
//           title: "Node.js",
//           subtitle:
//             "The Ultimate Beginner's Guide to Learn Node.js Step by Step - 2020",
//           authors: ["Mem Lnc", "John Bach"],
//           publishedDate: "2020-06-25",
//           description:
//             "There are plenty of definitions to be found online. Let's take a look at a couple of the more popular ones. This is what the project's home page has to say: - Node.js(R) is a JavaScript runtime built on Chrome's V8 JavaScript engine.And this is what Stack Overflow has to offer: - Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library.Hmmm, \"event-based\", \"non-blocking\", \"asynchronous I/O\" - that's quite a lot to digest in one go. So let's approach this from a different angle and begin by focusing on the other detail that both descriptions mention - the V8 JavaScript engine.Node Is Built on Google Chrome's V8 JavaScript EngineThe V8 engine is the open-source JavaScript engine that runs in Google Chrome and other Chromium-based web browsers, including Brave, Opera, and Vivaldi. It was designed with performance in mind and is responsible for compiling JavaScript directly to native machine code that your computer can execute.However, when we say that Node is built on the V8 engine, we don't mean that Node programs are executed in a browser. They aren't. Rather, the creator of Node (Ryan Dahl) took the V8 engine and enhanced it with various features, such as a file system API, an HTTP library, and a number of operating system-related utility methods.This means that Node.js is a program we can use to execute JavaScript on our computers. In other words, it's a JavaScript runtime.How Do I Install Node.js?In this next section, we'll install Node and write a couple of simple programs. We'll also look at npm, a package manager that comes bundled with Node.Node Binaries vs Version ManagerMany websites will recommend that you head to the official Node download page and grab the Node binaries for your system. While that works, I would suggest that you use a version manager instead. This is a program that allows you to install multiple versions of Node and switch between them at will. There are various advantages to using a version manager. For example, it negates potential permission issues when using Node with npm and lets you set a Node version on a per-project basis.If you fancy going the version manager route, please consult our quick tip: Install Multiple Versions of Node.js using nvm. Otherwise, grab the correct binaries for your system from the link above and install those.",
//           industryIdentifiers: [
//             {
//               type: "ISBN_13",
//               identifier: "9798656988179",
//             },
//           ],
//           readingModes: {
//             text: false,
//             image: false,
//           },
//           pageCount: 110,
//           printType: "BOOK",
//           maturityRating: "NOT_MATURE",
//           allowAnonLogging: false,
//           contentVersion: "preview-1.0.0",
//           panelizationSummary: {
//             containsEpubBubbles: false,
//             containsImageBubbles: false,
//           },
//           imageLinks: {
//             smallThumbnail:
//               "http://books.google.com/books/content?id=rQGYzQEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             thumbnail:
//               "http://books.google.com/books/content?id=rQGYzQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//           },
//           language: "en",
//           previewLink:
//             "http://books.google.com/books?id=rQGYzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&cd=40&source=gbs_api",
//           infoLink:
//             "http://books.google.com/books?id=rQGYzQEACAAJ&dq=javascript&hl=&as_pt=BOOKS&source=gbs_api",
//           canonicalVolumeLink:
//             "https://books.google.com/books/about/Node_js.html?hl=&id=rQGYzQEACAAJ",
//         },
//         saleInfo: {
//           country: "IL",
//           saleability: "NOT_FOR_SALE",
//           isEbook: false,
//         },
//         accessInfo: {
//           country: "IL",
//           viewability: "NO_PAGES",
//           embeddable: false,
//           publicDomain: false,
//           textToSpeechPermission: "ALLOWED",
//           epub: {
//             isAvailable: false,
//           },
//           pdf: {
//             isAvailable: false,
//           },
//           webReaderLink:
//             "http://play.google.com/books/reader?id=rQGYzQEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
//           accessViewStatus: "NONE",
//           quoteSharingAllowed: false,
//         },
//         searchInfo: {
//           textSnippet:
//             "This is what the project&#39;s home page has to say: - Node.js(R) is a JavaScript runtime built on Chrome&#39;s V8 JavaScript engine.And this is what Stack Overflow has to offer: - Node.js is an event-based, non-blocking, asynchronous I/O runtime ...",
//         },
//       },
//     ],
//   };
  
//   presentData(data.items);
  