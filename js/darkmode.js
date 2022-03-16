function toggleDarkMode() {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    }
}

// on load action

if (localStorage.getItem('theme') === 'dark')
    document.documentElement.classList.add('dark')
else
    document.documentElement.classList.remove('dark')