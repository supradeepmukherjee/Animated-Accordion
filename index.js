const item = document.getElementsByClassName('item')
const iconOpen = document.getElementsByClassName('iconOpen')
const iconClose = document.getElementsByClassName('iconClose')

for (let i = 0; i < item.length; i++) {
    const element = item[i];
    iconClose[i].style.display = 'none'
    element.addEventListener('click', () => {
        const result = element.classList.toggle('active')
        if (result) {
            iconClose[i].style.display = 'block'
            iconOpen[i].style.display = 'none'
        } else {
            iconClose[i].style.display = 'none'
            iconOpen[i].style.display = 'block'
        }
    })
}