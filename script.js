document.getElementById("show").addEventListener('click', async function () {
  document.getElementById("show").style="display:none";
 // const apiKey = 'b07800262e824a91ad6ea12c70c4519b';
  const apiUrl = `https://api.cricapi.com/v1/currentMatches?apikey=52e1e9d7-0913-4089-b054-c263f7b2714c&offset=0`;
  
  return await fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          const newsList = document.getElementById('news-list');
          const newsdet = document.getElementById('det');
          (data.data || []).forEach(article => {
              const newsItem = document.createElement('div');
              newsItem.classList.add('news-item');
              const enter=document.createElement('br');
              const title = document.createElement('li');
              title.classList.add('news-title');
              title.textContent = article.name;

              const description = document.createElement('div');
              description.classList.add('news-description');
              description.textContent = article.status;
              title.appendChild(enter);
              newsdet.appendChild(title);
              
              newsdet.appendChild(description);

              newsList.appendChild(newsItem);
          });
      })
      
});


