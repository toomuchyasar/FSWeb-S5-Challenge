import axios from 'axios';

const Card = (makale) => {
  const kart = document.createElement("div");
  kart.setAttribute("class", "card");

  const headline = document.createElement("div");
  headline.setAttribute("class", "headline");
  headline.textContent = makale.anabaslik;
  kart.append(headline);

  const author = document.createElement("div");
  author.setAttribute("class", "author");
  kart.append(author);

  const imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "img-container");
  author.append(imgContainer);

  const img = document.createElement("img");
  img.setAttribute("src", makale.yazarFoto);
  imgContainer.append(img);

  const authorName = document.createElement("span");
  authorName.textContent = `${makale.yazarAdi} tarafından`;
  author.append(authorName);

  kart.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });

  return kart;
};


const cardEkleyici = (secici) => {
  const hedef = document.querySelector(secici);

  axios
    .get("http://localhost:5001/api/makaleler")
    .then((response) => {
      console.log("response : " , response)
      const data = response.data;
      console.log("response data: " , data)

      for (const kategori in data.makaleler) {
        for (const makale of data.makaleler[kategori]) {
          console.log("makale :   ", makale)
          const kart = Card({
          anabaslik: makale.anabaslik,
          yazarFoto: makale.yazarFoto,
          yazarAdi: makale.yazarAdi,
        });
        kart.addEventListener("click", () => {
          console.log("makale basliği: ", makale.anabaslik);
        });
        hedef.appendChild(kart);
        }
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return hedef;
};



export { Card, cardEkleyici }
