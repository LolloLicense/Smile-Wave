const headerScroll = () => {

    const header = document.querySelector('.site-header')
    const responsiveMenu = document.querySelector('.responsive-menu')

    // Where
    let prevScrollPosition = window.scrollY
    // Hide / Show menu
    const toggleHeader = () => {
       
        const currentScrollPostition = window.scrollY
   
        if(prevScrollPosition > currentScrollPostition){
            header.classList.remove('site-header--hide')
        }else {  

            if ( !responsiveMenu.classList.contains('responsive-menu--open') ) {
                header.classList.add('site-header--hide')

            }

        }
 
        prevScrollPosition = currentScrollPostition
 
    }


    window.addEventListener('scroll', toggleHeader)


} 

headerScroll()