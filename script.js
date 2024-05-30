const nav = document.querySelectorAll('.nav');
nav.forEach(Element => {
    Element.addEventListener('click', () => {
        Element.classList.add('active');

    })
})


let icons = document.querySelector('.icon');
let list = document.querySelector('.list ul');
let removeBar = document.querySelector('.removeBar');
let searchBar = document.querySelector('.search-fields');
icons.addEventListener('click', e => {
    searchBar.classList.add('active');
    list.classList.add('list-active');
    icons.style.visibility = 'hidden';
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
        icons.style.visibility = 'visible';
        list.classList.remove('list-active');
        searchBar.classList.remove('active');
        checkBar.value = "";
    }
});

// result of searching 
const searchbar = document.querySelector('.searchBar');
searchbar.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        console.log('working')
    }
});

//dark mode 
const off = document.querySelector('.fa-toggle-off');
const on = document.querySelector('.fa-toggle-on');
off.addEventListener('click', () => {
    off.style.display = 'none';
    on.style.display = 'block';
    on.style.color = 'white';
    localStorage.setItem("darkMode", 'isDarkMode');
})
on.addEventListener('click', () => {
    localStorage.setItem("darkMode", 'isLightMode');
    off.style.display = 'block';
    on.style.display = 'none';
    on.style.color = 'black';
})

if(localStorage.getItem("darkMode") === 'isDarkMode')
{
    off.style.display = 'none';
    on.style.display = 'block';
    on.style.color = 'white';
}
else{
    off.style.display = 'block';
    on.style.display = 'none';
    on.style.color = 'black';
}