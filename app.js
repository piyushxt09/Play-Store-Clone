let section = document.querySelector('.section');
const Contentapp1 = document.querySelector('.Content-app1');
const Contentapp2 = document.querySelector('.Content-app2');
const arrow = document.querySelector('.fa-arrow-right');
const arrow2 = document.querySelector('.fa-arrow-left');
arrow.addEventListener('click', () => {
    Contentapp1.style.display = 'none';
    Contentapp2.style.display = 'block';
})
arrow2.addEventListener('click', () => {
    Contentapp1.style.display = 'flex';
    Contentapp2.style.display = 'none';
})

Contentapp1.addEventListener('click', () => {
    window.location.href = 'https://play.google.com/store/apps/eventdetails/4830414918948503386?hl=en_IN&gl=US';
})
Contentapp2.addEventListener('click', () => {
    window.location.href = 'https://play.google.com/store/apps/eventdetails/4831025444104617460?hl=en_IN&gl=US';
})
section.addEventListener('mouseover', () => {
    if (Contentapp2.style.display === 'block') {
        arrow2.style.visibility = 'visible'
    }
    else {
        arrow.style.visibility = 'visible';
    }
})
section.addEventListener('mouseout', () => {
    arrow.style.visibility = 'hidden';
    arrow2.style.visibility = 'hidden'

})


// fetch data 
fetch('http://localhost:3000/app', {
    method: 'GET'
}).then(function (response) {
    response.json().then(function (data) {
        const Apps = document.getElementById('Apps');
        const off = document.querySelector('.fa-toggle-off');
        const on = document.querySelector('.fa-toggle-on');
        const icons = document.querySelectorAll('.fa-solid');
        let navbar = document.getElementById('navbar');
        let title = document.querySelector('nav h2');
        let h5 = document.querySelector('h5');
        let navlinks = document.querySelectorAll('ul li a');
        const dataApp = data.organic_results[0];
        let AppData = dataApp.items;
        AppData.forEach(element => {
            if (element) {
                const containerApp = document.createElement('div');
                containerApp.classList.add('containerApp');
                Apps.appendChild(containerApp);
                if (localStorage.getItem("darkMode") === 'isDarkMode') {
                    document.body.style.backgroundColor = 'black';
                    containerApp.classList.add('active');
                    containerApp.classList.add('colorBack');
                    navbar.style.backgroundColor = '#8080eb';
                    title.style.color = 'white'
                    h5.style.color = 'white';
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
                    containerApp.classList.remove('active');
                    containerApp.classList.remove('colorBack');
                    document.body.style.backgroundColor = 'white';
                    navbar.style.backgroundColor = 'white';
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
                    containerApp.classList.add('active');
                    containerApp.classList.add('colorBack');
                    navbar.style.backgroundColor = '#8080eb';
                    title.style.color = 'white'
                    h5.style.color = 'white';
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
                    containerApp.classList.remove('active');
                    containerApp.classList.remove('colorBack');
                    document.body.style.backgroundColor = 'white';
                    navbar.style.backgroundColor = 'white';
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
                //event lister on click
                containerApp.addEventListener("click", () => {
                    window.location.href = `${element.link}`;
                })

                const imgApp = document.createElement('div');
                imgApp.classList.add('imgApp');
                imgApp.style.backgroundImage = `url('${element.thumbnail}')`;
                const titlehead = document.createElement('div');
                titlehead.classList.add('titlehead');
                containerApp.appendChild(imgApp);
                containerApp.appendChild(titlehead);


                const h2 = document.createElement('h2');
                h2.innerHTML = element.title;
                titlehead.appendChild(h2);

                const p = document.createElement('p');
                p.innerHTML = element.description;
                titlehead.appendChild(p);

                const rating = document.createElement('h6');
                rating.innerHTML = `${element.rating}⭐`;
                titlehead.appendChild(rating);
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
