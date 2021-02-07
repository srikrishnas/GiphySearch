document.querySelector('.buttons').addEventListener('click', (e) => {
    document.querySelector('.row').innerHTML = "";
    e.preventDefault()
    var searchText = document.querySelector('.search').value;
    console.log(searchText);
    getGIFY(searchText);
});

function getGIFY(searchText){
    let APIKEY = 'CSkAHh6g0NtjVEl36oFrkKYy0Sq8ZbgU';
    let URL = 'https://api.giphy.com/v1/stickers/search?api_key='+APIKEY+'&q='+searchText+'&limit=25&offset=0&rating=g&lang=en';
    fetch(URL)
    .then(data => data.json())
    .then( (content) => {
        console.log(content.data.length)

        for(let i=0;i<content.data.length;i++)
        {
            var rowHolder = document.querySelector('.cardHolder');

            var card = document.createElement('div');
            card.class = "card";
            card.style = "border: 2px solid red;margin: 10px";

            var img = document.createElement('img');
            img.class = "card-img-top";
            img.src = content.data[i].images.downsized.url;
            img.style = "height: 100px;width: 150px";

            var cardBody = document.createElement('div');
            cardBody.class ="card-body";
            var p = document.createElement('p');
            p.class = "card-text";
            p.innerHTML = content.data[i].title;
            
            cardBody.append(p);
            card.append(img,cardBody);
            rowHolder.append(card);
        }
    })
}
