const API_KEY="34c23ff679f4425183e726d536b14013"
const URL ="https://newsapi.org/v2/everything?q="
window.addEventListener('load',()=>fetchNews("India"));

async function fetchNews(query){ //here as async so promise will be returned//
    const res=await fetch(`${URL}${query}&apiKey=${API_KEY}`); //take the api url in coplete format here
    const data = await res.json();
    console.log(data);

    //bind all the data
    bindData(data.articles);

    function bindData(articles){
        const cardcontainers=document.getElementById('card-containers')
        const newstemplatecard = document.getElementById('template-news-card')
        cardcontainers.innerHTML=""; //we set as if we dont how many times we binddata lot of cards will be coming down one after other so whenever binddata is called we will empty first and then binddata is called

        articles.forEach(article => {
            if(!article.urlToImage) return; //means in some article the urltoimage is not there then we dont show in card
            const cardclone=newstemplatecard.content.cloneNode(true);
            fillDataincard(cardclone, article)
            cardcontainers.appendChild(cardclone);
            
        });

    }

    function fillDataincard(cardclone,article)
    {
        const newsImg = cardclone.querySelector('#news-img')
        const newsTitle = cardclone.querySelector('#news-title')
        const newsSource = cardclone.querySelector('#news-source')
        const newsdesc = cardclone.querySelector('#news-desc')

        newsImg.src = article.urlToImage;
        newsTitle.innerHTML=article.title;
        newsdesc.innerHTML=article.description;
        newsSource.innerHTML=`${article.source.name}`;
        cardclone.firstElementChild.addEventListener("click",()=>{
            window.open(article.url, "_blank"); //_blank means new tab
        })
    }

}
let currentSelectedNav=null;

function onNavItemClick(id){
    fetchNews(id);
    const navItem=document.getElementById(id);
    currentSelectedNav?.classList.remove("active");
    currentSelectedNav=navItem;
    currentSelectedNav.classList.add("active");
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () =>{
    const query = searchText.value;
    if(!query) return;
    fetchNews(query);
    currentSelectedNav?.classList.remove("active");
    currentSelectedNav=null;



});


