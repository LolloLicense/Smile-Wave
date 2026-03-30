const contactModal = () => {

const button = document.querySelector('#contact-button')
const closeButton= document.querySelector('#contact-close')
const modal = document.querySelector('#contact-dialog')

// open
const openModal = () =>{

     modal.showModal()

}
// close
const closeModal =() => {
    modal.close() 
}

// event
button.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)

}

contactModal()