const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=btn-change-theme]")

// captura o estilo inicial das variaveis html 
// dentro de style.css existem: 
//--bg,--bg-panel,--color-headings,--color-text
const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)
const transformKey = key => `--${key.replace(/([A-Z])/, "-$1").toLowerCase()}`

const themes = {
    white: {
        bg: getStyle(html, "--bg"),
        bgPanel: getStyle(html, "--bg-panel"),
        colorHeadings: getStyle(html, "--color-headings"),
        colorText: getStyle(html, "--color-text"),
    },
    dark: {
        bg: "#333333",
        bgPanel: "#434343",
        colorHeadings: "#3664FF",
        colorText: "#B5B5B5"
    }
}

const changeTheme = theme => {
    
    const keys = Object.keys(theme)
    
    keys.map(key => {
        html.style.setProperty(transformKey(key), theme[key])
    })
}

checkbox.addEventListener("change", ({target}) => {
    changeTheme(target.checked ? themes.dark : themes.white)
})
