// fixar footer quando a altura da página é mínima. libertar quando há necessidade de scroll
window.addEventListener('DOMContentLoaded', function() {
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
});

