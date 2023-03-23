  // modal

  function modalWindow() {
    const modalTrigger = document.querySelectorAll('[data-modal]');
    const close = document.querySelector('[data-close]');
  
    const modal = document.querySelector('.modal');
  
    modalTrigger.forEach(item => {
        item.addEventListener('click', openModal);
    });
  
    function closeModal() {
        modal.style.display = "none";
        document.body.style.overflow = '';
    }
  
    function openModal() {
        modal.style.display = "block";
        document.body.style.overflow = 'hidden';
    }
  
    close.addEventListener('click', closeModal);
  
    modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            closeModal();
        }
    });
  }

export default modalWindow;