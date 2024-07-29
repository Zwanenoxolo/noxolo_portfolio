let menu = document.querySelector('#menu-bars');
    let header = document.querySelector('header');
    menu.onclick = () =>{
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
    }
    window.onscroll = () =>{
        menu.classList.remove('fa-times');
        header.classList.remove('active');
    }
    var typed = new TypeError(".info",{
        strings:["Software Developer"],
        typeSpeed:100,
        backSpeed:100,
        backDelay:100,
        loop:true
    });
    document.addEventListener('DOMContentLoaded', function() {
        const modeToggle = document.getElementById('modeToggle');
        const body = document.body;
    
        // Check for saved user preference, if any, on load of the website
        const currentMode = localStorage.getItem('mode');
        if (currentMode) {
            body.classList.add(currentMode);
        }
    
        modeToggle.addEventListener('click', function() {
            body.classList.toggle('dark-mode');
    
            // Save the user's preference in local storage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('mode', 'dark-mode');
            } else {
                localStorage.removeItem('mode');
            }
        });
    });
    