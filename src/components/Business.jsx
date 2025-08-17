import React, { useEffect } from 'react'

const Business = () => {
  const API_KEY = '49ac1a95e4f8486890d4378f00297389';
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY} `

  useEffect(()=>{
    async function showdata(){
      const response = await fetch(url);
      const result =  await response.json();
      console.log(result);

      const arrayofarticles = result.articles;
      arrayofarticles.map((element)=>{
        const getcard = document.getElementById('card');
      const card = document.createElement("div");
  card.className = "bg-white rounded-lg shadow-md overflow-hidden w-64"; // Tailwind styling

  // Image
  const img = document.createElement("img");
  img.src = element.urlToImage; // your image URL
  img.alt = "News Image";
  img.className = "w-full h-36 object-cover";

  
  const paragraph = document.createElement("p");
  paragraph.className = "flex";
  paragraph.textContent = element.description;
  paragraph.className = "p-4 text-gray-700";

  const footer =   document.createElement("div");
  const atag = document.createElement("a");
  atag.href = element.url;
  atag.textContent = "Read here";
  atag.className = "text-right px-4 pb-4 text-blue-600 font-semibold cursor-pointer"
  const author = document.createElement("div");
  author.textContent = `By ${element.author}`;
  author.className = "px-4 pb-4 text-right  font-semibold ";
  footer.appendChild(atag)
  footer.appendChild(author);
  
  card.appendChild(img);
  card.appendChild(paragraph);
  card.appendChild(footer);
  getcard.append(card);
      })
      
    }
    showdata();
  })
  return (
    <div>
      <div id='card' className='mt-3 p-3 grid grid-cols-2 gap-3 max-md:grid-cols-1 justify-items-center'>
        
      </div>
    </div>
  )
}

export default Business


