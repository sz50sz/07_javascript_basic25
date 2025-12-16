const resylt = document.querySelector('.resyltFetch');

const loadNews = function () {
    fetch('./news.json')
        .then(function (result) {
            return response.json();
        })
        .then(function (json) {
            result.innerHTML = `<p>${json.news}</p>`;
        })
        .catch(function (error) {
            console.log(error)
        })
}

loadNews();

const Btn = document.querySelector('.loadAjaxBtn');
Btn.addEventListener('click', function () {
    loadNews();
});