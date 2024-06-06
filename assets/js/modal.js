// How To Play Rules Modal 

// Delcare variables
const modal = document.querySelector('#modal');
const openModal = document.querySelector('.open-button');
const closeModal = document.querySelector('.close-button');

// Open Modal
openModal.addEventListener('click', () => {
    modal.showModal();
});

// Close Modal
closeModal.addEventListener('click', () => {
    modal.close();
});