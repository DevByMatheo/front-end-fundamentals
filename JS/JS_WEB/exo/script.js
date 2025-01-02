/*
loader -> pagraphe avec ecrit chargement

https://jsonplaceholder.typicode.com/posts?_limit=5
-> recup les articles 
résultat obtenue
    -> suppression loader
    -> création liste article
        -> h2 -> titre
        -> p ->
        -> tous dans une balise article
*/ 

const wrapper = document.querySelector("#lastPosts")
const loader = document.createElement("p");
loader.textContent = "Attendez le chargement des données json"

wrapper.append(loader);

const divArticles = document.createElement("div");
wrapper.append(divArticles);

async function fetchArticle() {
    try {
        const r = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
            method: "GET",
            headers: {
                "Accept": "application/json",
            }
        });
        
        if(!r.ok) {
            throw new Error(`Erreur HTTP: ${r.status}`);
        };
    
        const articles = await r.json();
        articles.forEach(element => {
            const article = document.createElement("article");

            const h2 = document.createElement("h2");
            h2.textContent = element.title;

            const p = document.createElement("p");
            p.textContent = element.body;
        
            article.append(h2, p);
            divArticles.append(article);
        });
        loader.remove();
    } 
    catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
        loader.textContent = "Impossible de charger les articles. Veuillez réessayer plus tard.";
        loader.style.color = 'red'
    };
};

fetchArticle()

spoilers = document.querySelectorAll('.spoiler')

function revealSpoiler () {
    spoilers.forEach(spoiler => spoiler.classList.remove("spoiler"))
}
spoilers.forEach(spoiler => { 
    spoiler.addEventListener('click', revealSpoiler)})
