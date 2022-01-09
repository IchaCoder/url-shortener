const form = document.querySelector('.form');
const linkInput = document.getElementById('link');
const newLink = document.querySelector('.new-link');
const icon = document.querySelector('.fa');
let shortLink;


form.addEventListener('submit', async (e)=> {
    e.preventDefault();
    const originalLink = linkInput.value;
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${originalLink}`;

    try {
        const res = await fetch(apiUrl);
        const generated = await res.json();
        shortLink = generated.result.full_short_link;
        newLink.textContent = shortLink;
        console.log(shortLink);
        
    } catch (error) {
        console.log(error);
    }
})


icon.addEventListener("click", ()=> {
    navigator.clipboard.writeText(shortLink);
})
