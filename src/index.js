document.addEventListener("DOMContentLoaded", () => {
    loadRamens();
})
function loadRamens(){
    fetch("http://localhost:4000/ramens").then(res => res.json()).then(ramens => {
            ramens.forEach(ramen => loadRamen(ramen))
        })
}
function loadRamen(ramen){
    const ramenImg = document.createElement('img')
    const ramenDiv = document.createElement('div')
    const ramenMenu = document.getElementById('ramen-menu')
    
    ramenImg.src = ramen.image;

    ramenMenu.append(ramenDiv)
    ramenDiv.append(ramenImg)

    ramenImg.addEventListener('click', () => {
        const detailImage = document.querySelector('.detail-image')
        const detailName = document.querySelector('.name')
        const detailRestaurant = document.querySelector('.restaurant')
        const detailRating = document.getElementById('rating-display')
        const detailComment = document.getElementById('comment-display')
    
        detailImage.src = ramen.image
        detailName.textContent = ramen.name
        detailRestaurant.textContent = ramen.restaurant
        detailRating.textContent = ramen.rating
        detailComment.textContent = ramen.comment
    })
}

const newRamen = document.getElementById('new-ramen')
newRamen.addEventListener('submit', (e) => {
    e.preventDefault()

    function postARamen(){
        fetch()
    }
})