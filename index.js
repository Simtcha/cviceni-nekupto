/*
Všimněte si, že v souboru index.js jsou uloženy údaje k jednotlivým produktům. 
Budeme chtít obsah naší stránky vygenerovat z těchto dat místo abychom je měli natvrdo zadrátované v HTML kódu.
Otevřete si soubor index.html a zkopírujte si HTML obsah prvního produktu a vytvořte z něj řetězec v přiloženém JavaScriptovém souboru. 
Váš kód může vypadat třeba takto.
const product1HTML = `
  <img class="card-img-top" src="images/destniklobouk.jpg" alt="Card image cap">
  <div class="card-body">
    <h2 class="card-title">Deštníklobouk</h2>
    <p class="card-text">Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
`;
Obsah prvního produktu v souboru index.html můžeme nyní smazat. Výsledné HTML pak bude vypadat takto.
<div id="product1" class="card mb-4 box-shadow"></div>
Pomocí interpolace řetězců předělejte váš JavaScriptový kód tak, že do vašeho řetězce s produktem vložíte obsah vlastností image, name a description.
Do nějaké proměnné si uložte element prvního produktu a nastavte jeho innerHTML na váš sestavený řetězec. Tímto na stránku vložíme obrázek prvního produktu.
Opakujte tento postup pro všechny ostatní produkty. Na konci byste měli dospět do stavu, kdy soubor index.html vůbec neosahuje
 vnitřek karet pro jednotlivé produkty. Jejich obsah je celý vyroben JavaScriptem z připravených dat.
*/


//definice produktů

const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
  alt: "Card image cap",
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
  alt: "Slepičkabelka",
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
  alt: "Anatoplavky",
};

//backtick v promenne
const product1HTML = `
  <img class="card-img-top" src=${product1.image} alt=${product1.alt}>
  <div class="card-body">
    <h2 class="card-title">${product1.name}</h2>
    <p class="card-text">${product1.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
  `;
  prvniProduktObsah = document.querySelector("#product1")
  prvniProduktObsah.innerHTML = product1HTML
  

  const product2HTML = `
  <img class="card-img-top" src=${product2.image} alt=${product2.alt}>
  <div class="card-body">
    <h2 class="card-title">${product2.name}</h2>
    <p class="card-text">${product2.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
  `;
  druhyProduktObsah = document.querySelector("#product2")
  druhyProduktObsah.innerHTML = product2HTML


  const product3HTML = `
  <img class="card-img-top" src=${product3.image} alt=${product3.alt}>
  <div class="card-body">
    <h2 class="card-title">${product3.name}</h2>
    <p class="card-text">${product3.description}</p>
  </div>
  <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
  `;
  tretiProduktObsah = document.querySelector("#product3")
  tretiProduktObsah.innerHTML = product3HTML


/*
V souboru index.js si na posledním řádku do proměnné uložte kartu s prvním produktem. 
Pomocí metody classList.add přidejte na tento element třídu border-primary, abychom první produkt na stránce zvýraznili.
Do jiné proměnné si uložte tlačítko na druhé kartě. Pomocí metody classList.remove odeberte třídu btn-primary a podívejte se, 
jak se tlačítko vizuálně změnilo.
Do další proměnné si uložte element s třídou card-title posledního produktu. 
Pomocí voláni metody classList.toggle přidejte na tento element třídu text-center. Text by se měl tímto zarovnat na střed. 
Vyzkoušejte si, že když tuto metodu zavoláte znova, třída se z prvku odstraní. Takto můžete přepínat mezi přidáním a odebráním třídy pomocí opakovaného volání této metody.
Na konci by stránka v prohlížeči měla vypadat jako na obrázku níže: */

const karta1 = document.querySelector("#product1")
karta1.classList.add("border-primary")

const tlacitko = document.querySelector("#product2 button") //tohle je blbe porad
tlacitko.classList.remove("btn-primary")

const nazev3 = document.querySelector(".card-title")
nazev3.classList.toggle("text-center")
