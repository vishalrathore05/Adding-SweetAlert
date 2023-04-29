window.addEventListener('turbo:load', () => {
  const form = document.querySelector('.success-alertbox');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, submit it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '🎉 Success!',
          html: 'Your post has been successfully created! 🚀',
          icon: 'success',
          timerProgressBar: true,
          timer: 3000,
          showConfirmButton: false,
          timerProgressBar: true,
          onBeforeOpen: () => {
            Swal.showLoading()
          },
          onClose: () => {
            form.submit();
          }
        });
      }
    });
  });
});
