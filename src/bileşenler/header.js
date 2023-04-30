const Header = (baslik, tarih, yazi) => {
  const headerTAB = document.createElement("div");
  headerTAB.setAttribute("class", "header");

  const tarihTAB = document.createElement("span");
  tarihTAB.setAttribute("class", "date");
  tarihTAB.textContent = tarih;
  headerTAB.append(tarihTAB);

  const baslikTAB = document.createElement("h1");
  baslikTAB.textContent = baslik;
  headerTAB.append(baslikTAB);

  const yaziTAB = document.createElement("span");
  yaziTAB.setAttribute("class", "temp");
  yaziTAB.textContent = yazi;
  headerTAB.append(yaziTAB);



  return headerTAB;
}


const headerEkleyici = (secici) => {
  const header1 =  Header("Arthur", "28.03.2021", "Kedim bu tarihte doğdu.");
  const seciciTAB = document.querySelector(secici);  
  seciciTAB.append(header1) ;

  return seciciTAB
 
}

export { Header, headerEkleyici }
