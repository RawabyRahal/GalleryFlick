$(document).ready(function () {
    const $pages = $('.page')
    const $flips = $('.flip')
    let currentPage = 0

    function flipPage() {
        if (currentPage < $pages.length - 1) {
            currentPage++
        } else {
            currentPage = 0
        }

        $pages.each(function (index) {
            if (index === currentPage) {
                $(this).css('animation', 'nextPage 5s infinite steps(1)');
            } else {
                $(this).css('animation', 'none');
            }
        });
    }

    function flipImages() {
        $flips.each(function (index) {
            $(this).css('animation', `nextFlip${index + 1} 5s infinite steps(1)`);
        });
    }

    setTimeout(function () {
        flipPage();
        flipImages();
    }, 1000);

    setInterval(flipPage, 5000);
});
