import axios from 'axios';


const Tablar = (konu) => {

  const topicler = document.createElement("div");
  topicler.setAttribute("class", "topics");

  if (!Array.isArray(konu)) {
    throw new Error("Konu parametresi bir dizi olmalıdır!");
  } else {

  for (let i = 0; i < konu.length; i++) {
    const tab = document.createElement("div");
    tab.setAttribute("class", "tab");
    tab.textContent = konu[i];
    topicler.append(tab);
  }

  return topicler;
}
}


const tabEkleyici = (secici) => {
  const seciciTAB = document.querySelector(secici);

  axios.get('http://localhost:5001/api/konular')
    .then(response => {
      const data = response.data;
      const konular = data.konular;
      
      const topicsDiv = Tablar(konular);
      
      seciciTAB.appendChild(topicsDiv);
    })
    .catch(error => console.error(error));

  return seciciTAB;
}


export { Tablar, tabEkleyici }
