const url = window.location.href
if (url.includes('github')) {
    window.location.href ='https://portfolio-sigma-eight-91.vercel.app/'
} else {
    document.querySelector('#url_git').classList.add('hidden')
}
