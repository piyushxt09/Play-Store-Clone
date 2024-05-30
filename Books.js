const leftBtn = document.querySelector('.fa-caret-left')
const rightBtn = document.querySelector('.fa-caret-right');
const booksContent = document.getElementById('Books');
booksContent.addEventListener('mouseover', () => {
    rightBtn.style.visibility = 'visible'

    leftBtn.style.visibility = 'visible'

})
booksContent.addEventListener('mouseout', () => {
    leftBtn.style.visibility = 'hidden';
    rightBtn.style.visibility = 'hidden';
})
rightBtn.addEventListener('mouseover', () => {
    rightBtn.style.visibility = 'visible';
})
rightBtn.addEventListener('mouseout', () => {
    rightBtn.style.visibility = 'hidden';
})
leftBtn.addEventListener('mouseover', () => {
    leftBtn.style.visibility = 'visible';
})
leftBtn.addEventListener('mouseout', () => {
    leftBtn.style.visibility = 'hidden';
})

rightBtn.addEventListener('click', () => {
    const booksContent = document.getElementById('Books');
    leftBtn.style.visibility = 'visible';
    booksContent.scrollTo({
        left: booksContent.scrollLeft + 1150,
        behavior: 'smooth'
    });
})
leftBtn.addEventListener('click', () => {
    const booksContent = document.getElementById('Books');
    rightBtn.style.visibility = 'visible';
    booksContent.scrollTo({
        left: booksContent.scrollLeft - 1150,
        behavior: 'smooth'
    });
})

// books fetch
fetch('http://localhost:3000/books', {
    method: 'GET'
}).then(function (response) {
    response.json().then(function (data) {
        const result = data.organic_results[0].items;
        const Booksh2 = document.querySelector('.Booksh2');
        const leftBtn = document.querySelector('.fa-caret-left')
        const rightBtn = document.querySelector('.fa-caret-right');
        const off = document.querySelector('.fa-toggle-off');
        const on = document.querySelector('.fa-toggle-on');
        // const icons = document.querySelectorAll('.fa-solid');
        let navbar = document.getElementById('navbar');
        let title = document.querySelector('nav h2');
        let h5 = document.querySelector('h5');
        let navlinks = document.querySelectorAll('ul li a');
        const Books = document.getElementById('Books');
        result.forEach(element => {
            const BooksContent = document.createElement('div');
            BooksContent.classList.add('BooksContent');
            Books.appendChild(BooksContent);
            BooksContent.addEventListener('click', () => {
                window.location.href = element.link;
            })
            const booksThumbnail = document.createElement('div');
            booksThumbnail.classList.add('booksThumbnail');
            booksThumbnail.style.backgroundImage = `url('${element.thumbnail}')`;
            BooksContent.appendChild(booksThumbnail);
            const booksTitle = document.createElement('div');
            booksTitle.classList.add('booksTitle');
            BooksContent.appendChild(booksTitle);

            const h2 = document.createElement('h2');
            h2.innerHTML = element.title;
            booksTitle.appendChild(h2)

            const div = document.createElement('div');
            booksTitle.appendChild(div);
            if (element.rating) {
                const rating = document.createElement('p');
                rating.innerHTML = `${element.rating}⭐`;
                div.appendChild(rating);
            }
            const price = document.createElement('p');
            price.innerHTML = element.price;
            div.appendChild(price);

            if (localStorage.getItem("darkMode") === 'isDarkMode') {
                Booksh2.style.color = 'white';
                document.body.style.backgroundColor = 'black';
                BooksContent.style.backgroundColor = 'white';
                BooksContent.addEventListener('mouseover', () => {
                    BooksContent.style.backgroundColor = 'rgb(128, 128, 235)';
                })
                BooksContent.addEventListener('mouseout', () => {
                    BooksContent.style.backgroundColor = 'white';
                })
                navbar.style.backgroundColor = '#8080eb';
                title.style.color = 'white'
                h5.style.color = 'white';
                navlinks.forEach(Element => {
                    Element.style.color = 'white';
                    Element.classList.add('dark')
                    Element.addEventListener('mouseover', () => {
                        Element.style.color = '#cd0a0a';
                    })
                    Element.addEventListener('mouseout', () => {
                        Element.style.color = 'white';
                    })
                })

            }
            else {
                document.body.style.backgroundColor = 'white';
                Booksh2.style.color = 'black'
                navbar.style.backgroundColor = 'white';
                title.style.color = 'black'
                h5.style.color = 'black';
                navlinks.forEach(Element => {
                    Element.style.color = 'black';
                    Element.addEventListener('mouseover', () => {
                        Element.style.color = '#cd0a0a';
                    })
                    Element.addEventListener('mouseout', () => {
                        Element.style.color = 'black';
                    })
                })
                BooksContent.style.backgroundColor = 'white';
                BooksContent.addEventListener('mouseover', () => {
                    BooksContent.style.backgroundColor = 'rgb(235 235 235)';
                })
                BooksContent.addEventListener('mouseout', () => {
                    BooksContent.style.backgroundColor = 'white';
                })
            }
            off.addEventListener('click', () => {
                BooksContent.style.backgroundColor = 'white';
                Booksh2.style.color = 'white'
                BooksContent.addEventListener('mouseover', () => {
                    BooksContent.style.backgroundColor = 'rgb(128, 128, 235)';
                })
                BooksContent.addEventListener('mouseout', () => {
                    BooksContent.style.backgroundColor = 'white';
                })
                leftBtn.style.color = 'black';
                rightBtn.style.color = 'black';
                document.body.style.backgroundColor = 'black';
                navbar.style.backgroundColor = '#8080eb';
                title.style.color = 'white'
                h5.style.color = 'white';
                navlinks.forEach(Element => {
                    Element.style.color = 'white';
                    Element.classList.add('dark')
                    Element.addEventListener('mouseover', () => {
                        Element.style.color = '#cd0a0a';
                    })
                    Element.addEventListener('mouseout', () => {
                        Element.style.color = 'white';
                    })
                })

            })
            on.addEventListener('click', () => {
                document.body.style.backgroundColor = 'white';
                navbar.style.backgroundColor = 'white';
                title.style.color = 'black'
                h5.style.color = 'black';
                Booksh2.style.color = 'black'
                navlinks.forEach(Element => {
                    Element.style.color = 'black';
                    Element.addEventListener('mouseover', () => {
                        Element.style.color = '#cd0a0a';
                    })
                    Element.addEventListener('mouseout', () => {
                        Element.style.color = 'black';
                    })
                })
                BooksContent.style.backgroundColor = 'white';
                BooksContent.addEventListener('mouseover', () => {
                    BooksContent.style.backgroundColor = 'rgb(235 235 235)';
                })
                BooksContent.addEventListener('mouseout', () => {
                    BooksContent.style.backgroundColor = 'white';
                })


            })
        });
    })
})