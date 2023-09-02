//mostrar imagem escolhida
document.addEventListener('DOMContentLoaded', function () {
    const productImageInput = document.getElementById('product_image');
    const imagePreview = document.getElementById('image-preview');
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

// mostrar/esconder o sidebar
document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.querySelector('.btn-menu');
    const btnclose = document.querySelector('.btn-close');
    const sidebar = document.querySelector('.sidebar');

    // abre o sidebar
    btnMenu.addEventListener('click', function () {
        sidebar.classList.toggle('sidebar-open');
    });

    // fecha o sidebar
    btnclose.addEventListener('click', function () {
        sidebar.classList.remove('sidebar-open');
    });
});

// fazer desaparecer a primeira linha da caixa de queries
const customSelect = document.getElementById("custom-select");
let isFirstSelection = true;

customSelect.addEventListener("change", function () {
    if (isFirstSelection) {
        const option = customSelect.querySelector("option[value='0']");
        option.disabled = true;
        option.selected = false;
        isFirstSelection = false;
    }
});


// Se o utilizador for um admin (TypeID = 2), mostra a admin-section
var userTypeID = 0;

if (userTypeID === 2) {
    var adminSection = document.getElementById('admin-section');
    if (adminSection) {
        adminSection.style.display = 'flex';
    }
} else {
    var adminSection = document.getElementById('admin-section');
    if (adminSection) {
        adminSection.style.display = 'none';
    }
}




