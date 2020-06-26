(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-open-modal]'),
      closeModalBtn: document.querySelector('[data-close-modal]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("open-modal");
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  