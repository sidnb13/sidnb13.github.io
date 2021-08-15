function toggleDarkMode() {
    //localStorage.theme === 'dark' || (!('theme' in localStorage) && matchMedia('(prefers-color-scheme: dark)').matches)
    localStorage.setItem('theme', localStorage.getItem('theme') === 'light' ? 'dark' : 'light')

    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    var icon = document.getElementById('sunmoon')
    var back = document.getElementById('backbutton')

    icon.src = localStorage.theme === 'light' ? '/img/icons/light-mode.svg' : '/img/icons/dark-mode.svg'
    back.src = localStorage.theme === 'light' ? '/img/icons/navigate-light.svg' : '/img/icons/navigate-light.svg'
}

//on page load
if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}