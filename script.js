// fixar footer quando a altura da página é mínima. libertar quando há necessidade de scroll
/* window.addEventListener('DOMContentLoaded', function () {
    const contentWrapper = document.querySelector('.content_wrapper');
    const footerSection = document.querySelector('.footer_section');

    function updateFooterPosition() {
        if (contentWrapper.clientHeight <= window.innerHeight) {
            footerSection.classList.add('fixed');
        } else {
            footerSection.classList.remove('fixed');
        }
    }

    window.addEventListener('resize', updateFooterPosition);
    updateFooterPosition();
}); */

//mostrar imagem escolhida
document.addEventListener('DOMContentLoaded', function () {
    const productImageInput = document.getElementById('product_image');
    const imagePreview = document.getElementById('image_preview');
    const defaultImage = document.getElementById('default_image');

    productImageInput.addEventListener('change', function () {

        if (productImageInput.files && productImageInput.files[0]) {
            const reader = new FileReader();

            reader.onload = function (e) {
                if (defaultImage) {
                    defaultImage.style.display = 'none';
                }
                const imageElement = document.createElement('img');
                imageElement.src = e.target.result;
                imageElement.style.maxWidth = '100%';
                imagePreview.innerHTML = '';
                imagePreview.appendChild(imageElement);
            };

            reader.readAsDataURL(productImageInput.files[0]);
        }
    });
    if (imagePreview.innerHTML.trim() === '') {
        defaultImage.style.display = 'block';
    }
});
