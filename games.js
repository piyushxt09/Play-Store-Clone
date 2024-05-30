fetch('http://localhost:3000/data', {
    method: 'GET'
}).then(function (response) {
    response.json().then(function (data) {
        const result = document.getElementById('ResultDiv');
        const off = document.querySelector('.fa-toggle-off');
        const on = document.querySelector('.fa-toggle-on');
        let Title = document.querySelector('nav h2');
        let navlinks = document.querySelectorAll('ul li a');
        let h5 = document.querySelector('h5');
        const items_highlight = [data.items_highlight];
        const organic_results = data.organic_results[0];
        organic_results.items.forEach(item => {

            if (item.video) {


                const gamediv = document.createElement('div');
                gamediv.classList.add('gameDiv');
                result.appendChild(gamediv);

                const video = document.createElement('div');
                video.classList.add('video');
                const thumbnail = document.createElement('div');
                thumbnail.classList.add('thumbnail');
                gamediv.appendChild(video);
                gamediv.appendChild(thumbnail);
                thumbnail.addEventListener('click', () => {
                    window.location.href = item.link;
                })

                const image = document.createElement('div');
                image.classList.add('image');
                image.style.backgroundImage = `url('${item.thumbnail}')`;
                const content = document.createElement('div');
                content.classList.add('content');
                thumbnail.appendChild(image)
                thumbnail.appendChild(content);

                const title = document.createElement('h2');
                title.innerHTML = item.title;
                const rating = document.createElement('p');
                rating.innerHTML = `${item.rating}⭐`;
                const downloads = document.createElement('p');
                downloads.innerHTML = `${item.downloads}`;
                content.appendChild(title);
                content.appendChild(rating);
                content.appendChild(downloads);

                const buttonplay = document.createElement('button');
                buttonplay.classList.add('btn');
                buttonplay.innerHTML = `<i class="fa-solid fa-play"></i>`;
                buttonplay.addEventListener('click', () => {
                    window.location.href = item.video;
                })

                video.appendChild(buttonplay);
                video.style.backgroundImage = `url('${item.thumbnail}')`

                if (localStorage.getItem("darkMode") === 'isDarkMode') {
                    document.body.style.backgroundColor = 'black';
                    document.body.style.color = 'white';
                    navbar.style.backgroundColor = '#8080eb';
                    h5.style.color = 'white';
                    off.style.display = 'none';
                    on.style.display = 'block';
                    on.style.color = 'white';
                    Title.style.color = 'white'
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
                    gamediv.addEventListener('mouseover', () => {
                        gamediv.style.backgroundColor = 'rgb(128, 128, 235)';
                    })
                    gamediv.addEventListener('mouseout', () => {
                        gamediv.style.backgroundColor = 'black';
                    })
                    gamediv.style.color = 'white';
                    gamediv.style.backgroundColor = 'black'
                }
                else {
                    document.body.style.backgroundColor = 'white';
                    navbar.style.backgroundColor = 'white';
                    h5.style.color = 'black';
                    off.style.display = 'block';
                    on.style.display = 'none';
                    on.style.color = 'black';
                    Title.style.color = 'black'
                    navlinks.forEach(Element => {
                        Element.style.color = 'black';
                        Element.addEventListener('mouseover', () => {
                            Element.style.color = '#cd0a0a';
                        })
                        Element.addEventListener('mouseout', () => {
                            Element.style.color = 'black';
                        })
                    })
                    gamediv.addEventListener('mouseover', () => {
                        gamediv.style.backgroundColor = '#f3f3f3';
                    })
                    gamediv.addEventListener('mouseout', () => {
                        gamediv.style.backgroundColor = 'white';
                    })
                    gamediv.style.color = 'black';
                    gamediv.style.backgroundColor = 'white'



                }
                off.addEventListener('click', () => {
                    document.body.style.backgroundColor = 'black';
                    localStorage.setItem("darkMode", 'isDarkMode');
                    document.body.style.color = 'white';
                    document.documentElement.classList.add('active');
                    navbar.style.backgroundColor = '#8080eb';
                    Title.style.color = 'white'
                    h5.style.color = 'white';
                    off.style.display = 'none';
                    on.style.display = 'block';
                    on.style.color = 'white';
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
                    gamediv.addEventListener('mouseover', () => {
                        gamediv.style.backgroundColor = 'rgb(128, 128, 235)';
                    })
                    gamediv.addEventListener('mouseout', () => {
                        gamediv.style.backgroundColor = 'black';
                    })
                    gamediv.style.color = 'white';
                    gamediv.style.backgroundColor = 'black'


                })
                on.addEventListener('click', () => {
                    document.body.style.backgroundColor = 'white';
                    localStorage.setItem("darkMode", 'isLightMode');
                    navbar.style.backgroundColor = 'white';
                    Title.style.color = 'black'
                    h5.style.color = 'black';
                    off.style.display = 'block';
                    on.style.display = 'none';
                    on.style.color = 'black';
                    navlinks.forEach(Element => {
                        Element.style.color = 'black';
                        Element.addEventListener('mouseover', () => {
                            Element.style.color = '#cd0a0a';
                        })
                        Element.addEventListener('mouseout', () => {
                            Element.style.color = 'black';
                        })
                    })
                    gamediv.addEventListener('mouseover', () => {
                        gamediv.style.backgroundColor = '#f3f3f3';
                    })
                    gamediv.addEventListener('mouseout', () => {
                        gamediv.style.backgroundColor = 'white';
                    })
                    gamediv.style.color = 'black';
                    gamediv.style.backgroundColor = 'white'

                })
            }

        })
    })

})
//search bar  
let icon = document.querySelector('.icon');
let list = document.querySelector('.list ul');
let removeBar = document.querySelector('.removeBar');
let searchBar = document.querySelector('.search-fields');
icon.addEventListener('click', e => {
    searchBar.classList.add('active');
    list.classList.add('list-active');
    icon.style.visibility = 'hidden';
    checkBar.innerHTML = "";
})
removeBar.addEventListener('click', () => {
    document.querySelector('.searchBar').value = "";
})

//if searchbar is null and you click outside the searchbar
const checkBar = document.querySelector('.searchBar');
document.addEventListener('mousedown', function (event) {
    var targetElement = event.target; // Element clicked
    if (targetElement !== checkBar && targetElement !== removeBar) {
        icon.style.visibility = 'visible';
        list.classList.remove('list-active');
        searchBar.classList.remove('active');
        checkBar.value = "";
    }
});

// result of searching 
const searchbar = document.querySelector('.searchBar');
searchbar.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        // Example code to search for apps on the Google Play Store using SerpApi
        // Process the search results
        middleSection.innerHTML = 'welcome'

    }
});


//scroll bar then navbar behavior
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('#navbar');
    const scrollPosition = window.scrollY;
    if (scrollPosition > 50) { // Adjust this value as needed
        navbar.classList.add('navScroll');
    } else {
        navbar.classList.remove('navScroll');
    }
});
