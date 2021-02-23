//Make next list of elements appear on click and appear

var moreLatest = document.querySelector('#more-latest')
var latestStrains = document.querySelector('#latest-strains')

moreLatest.addEventListener('click', () => {
    if (latestStrains.classList.contains('hidden')) {
        latestStrains.classList.remove('hidden');
    }
})