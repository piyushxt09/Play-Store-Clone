fetch('http://localhost:3000/movies', {
    method: 'GET'
}).then(function (response) {
    response.json().then(function (data) {
        const off = document.querySelector('.fa-toggle-off');
        const on = document.querySelector('.fa-toggle-on');
        const icons = document.querySelectorAll('.fa-solid');
        let navbar = document.getElementById('navbar');
        let title = document.querySelector('nav h2');
        let h5 = document.querySelector('h5');
        let navlinks = document.querySelectorAll('ul li a');
        const DataResult = data.organic_results;
        const Data1 = DataResult[0].items;
        const Data2 = DataResult[1].items;
        const Data3 = DataResult[2].items;
        const moviesResult = document.getElementById('moviesResult');
        const moviesResult2 = document.getElementById('moviesResult2');
        Data1.forEach(element => {
            if (element.thumbnail) {
                const MovieContent = document.createElement('div')
                MovieContent.classList.add('MovieContent');
                moviesResult.appendChild(MovieContent);

                const movieThumbnail = document.createElement('div');
                movieThumbnail.addEventListener('click', () => {
                    window.location.href = element.link;
                })
                movieThumbnail.classList.add('movieThumbnail');
                movieThumbnail.style.backgroundImage = `url('${element.thumbnail}')`
                const movieTitle = document.createElement('div');
                movieTitle.classList.add('movieTitle');
                MovieContent.appendChild(movieThumbnail)
                MovieContent.appendChild(movieTitle);

                const p = document.createElement('p');
                const ratingDiv = document.createElement('div');
                ratingDiv.classList.add('ratingDiv');
                p.innerHTML = element.title;
                movieTitle.appendChild(p)
                movieTitle.appendChild(ratingDiv);

                const p2 = document.createElement('p');
                if (localStorage.getItem("darkMode") === 'isDarkMode') {
                    document.body.style.backgroundColor = 'black';
                    document.body.style.color = 'white';
                    document.documentElement.classList.add('active');
                    navbar.style.backgroundColor = '#8080eb';
                    title.style.color = 'white'
                    h5.style.color = 'white';
                    MovieContent.style.backgroundColor = 'black';
                    MovieContent.style.color = 'white';
                    MovieContent.addEventListener('mouseover', () => {
                        MovieContent.style.backgroundColor = 'rgb(128, 128, 235)';
                    })
                    MovieContent.addEventListener('mouseout', () => {
                        MovieContent.style.backgroundColor = 'black';
                    })
                    icons.forEach(el => {
                        el.style.color = 'white';
                    })
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
                    navbar.style.backgroundColor = 'white';
                    MovieContent.style.backgroundColor = 'white';
                    MovieContent.style.color = 'black';
                    MovieContent.addEventListener('mouseover', () => {
                        MovieContent.style.backgroundColor = '#ebebeb';
                    })
                    MovieContent.addEventListener('mouseout', () => {
                        MovieContent.style.backgroundColor = 'white';
                    })
                    title.style.color = 'black'
                    h5.style.color = 'black';
                    icons.forEach(el => {
                        el.style.color = 'black';
                    })
                    navlinks.forEach(Element => {
                        Element.style.color = 'black';
                        Element.addEventListener('mouseover', () => {
                            Element.style.color = '#cd0a0a';
                        })
                        Element.addEventListener('mouseout', () => {
                            Element.style.color = 'black';
                        })
                    })


                }
                off.addEventListener('click', () => {
                    document.body.style.backgroundColor = 'black';
                    document.body.style.color = 'white';
                    document.documentElement.classList.add('active');
                    navbar.style.backgroundColor = '#8080eb';
                    title.style.color = 'white'
                    h5.style.color = 'white';
                    MovieContent.style.backgroundColor = 'black';
                    MovieContent.style.color = 'white';
                    MovieContent.addEventListener('mouseover', () => {
                        MovieContent.style.backgroundColor = 'rgb(128, 128, 235)';
                    })
                    MovieContent.addEventListener('mouseout', () => {
                        MovieContent.style.backgroundColor = 'black';
                    })
                    icons.forEach(el => {
                        el.style.color = 'white';
                    })
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
                    MovieContent.style.backgroundColor = 'white';
                    MovieContent.style.color = 'black';
                    MovieContent.addEventListener('mouseover', () => {
                        MovieContent.style.backgroundColor = '#ebebeb';
                    })
                    MovieContent.addEventListener('mouseout', () => {
                        MovieContent.style.backgroundColor = 'white';
                    })
                    title.style.color = 'black'
                    h5.style.color = 'black';
                    icons.forEach(el => {
                        el.style.color = 'black';
                    })
                    navlinks.forEach(Element => {
                        Element.style.color = 'black';
                        Element.addEventListener('mouseover', () => {
                            Element.style.color = '#cd0a0a';
                        })
                        Element.addEventListener('mouseout', () => {
                            Element.style.color = 'black';
                        })
                    })


                })
                if (element.rating) {
                    p2.innerHTML = `${element.rating}<i class="fa-regular fa-star"></i>`;
                    ratingDiv.appendChild(p2)

                }
                const price = document.createElement('p');
                price.innerHTML = element.price;
                ratingDiv.appendChild(price);

            }
        });
        Data2.forEach(element => {
            if (element.thumbnail) {
                const MovieContent = document.createElement('div')
                MovieContent.classList.add('MovieContent');
                moviesResult2.appendChild(MovieContent);
                if (localStorage.getItem("darkMode") === 'isDarkMode') {
                    MovieContent.style.color = 'white';
                    MovieContent.style.backgroundColor = 'black';
                    MovieContent.addEventListener('mouseover', () => {
                        MovieContent.style.backgroundColor = 'rgb(128, 128, 235)';
                    })
                    MovieContent.addEventListener('mouseout', () => {
                        MovieContent.style.backgroundColor = 'black';
                    })
                }
                else {
                    MovieContent.style.color = 'black';
                    MovieContent.style.backgroundColor = 'white';
                    MovieContent.addEventListener('mouseover', () => {
                        MovieContent.style.backgroundColor = '#ebebeb';
                    })
                    MovieContent.addEventListener('mouseout', () => {
                        MovieContent.style.backgroundColor = 'white';
                    })
                }
                off.addEventListener('click', () => {
                    MovieContent.style.color = 'white';
                    MovieContent.style.backgroundColor = 'black';
                    MovieContent.addEventListener('mouseover', () => {
                        MovieContent.style.backgroundColor = 'rgb(128, 128, 235)';
                    })
                    MovieContent.addEventListener('mouseout', () => {
                        MovieContent.style.backgroundColor = 'black';
                    })
                })
                on.addEventListener('click', () => {
                    MovieContent.style.color = 'black';
                    MovieContent.style.backgroundColor = 'white';
                    MovieContent.addEventListener('mouseover', () => {
                        MovieContent.style.backgroundColor = '#ebebeb';
                    })
                    MovieContent.addEventListener('mouseout', () => {
                        MovieContent.style.backgroundColor = 'white';
                    })
                })
                const movieThumbnail = document.createElement('div');
                movieThumbnail.addEventListener('click', () => {
                    window.location.href = element.link;
                })
                movieThumbnail.classList.add('movieThumbnail');
                movieThumbnail.style.backgroundImage = `url('${element.thumbnail}')`
                const movieTitle = document.createElement('div');
                movieTitle.classList.add('movieTitle');
                MovieContent.appendChild(movieThumbnail)
                MovieContent.appendChild(movieTitle);

                const p = document.createElement('p');
                const ratingDiv = document.createElement('div');
                ratingDiv.classList.add('ratingDiv');
                p.innerHTML = element.title;
                movieTitle.appendChild(p)
                movieTitle.appendChild(ratingDiv);
                if (element.rating) {
                    const p = document.createElement('p');
                    p.innerHTML = `${element.rating}<i class="fa-regular fa-star"></i>`;
                    ratingDiv.appendChild(p)
                }
                const price = document.createElement('p');
                price.innerHTML = element.price;
                ratingDiv.appendChild(price);

            }
        });


    })
})

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#navbar');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) { // Adjust this value as needed
        navbar.classList.add('navScroll');
    } else {
        navbar.classList.remove('navScroll');
    }
});