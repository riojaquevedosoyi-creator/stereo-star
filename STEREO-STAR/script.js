// STEREO STAR - Sistema de favoritos

console.log("Bem-vindo ao STEREO STAR!");

function favoritar(botao) {
  const card = botao.closest(".card-album");

  const linkAlbum = card.querySelector('a[href*="album.html"]');
  const parametros = new URL(linkAlbum.href).searchParams;
  const id = parametros.get("album");

  const album = {
    id: id,
    nome: card.querySelector("h4").textContent,
    artista: card.querySelector("p").textContent,
    imagem: card.querySelector("img").getAttribute("src"),
    informacao: card.querySelector("small").textContent,
  };

  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  const jaFavoritado = favoritos.some((item) => item.id === id);

  if (jaFavoritado) {
    favoritos = favoritos.filter((item) => item.id !== id);
    botao.innerHTML = "♡ FAVORITAR";
    botao.classList.remove("favoritado");
  } else {
    favoritos.push(album);
    botao.innerHTML = "♥ FAVORITADO";
    botao.classList.add("favoritado");
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
}

// PÁGINA DE DETALHES DO ÁLBUM

const parametros = new URLSearchParams(window.location.search);
const albumEscolhido = parametros.get("album");

const albuns = [
  {
    id: "white-pony",
    nome: "White Pony",
    artista: "Deftones",
    ano: "2000",
    genero: "Alternative Metal",
    imagem: "imagens/white-pony.jpg",
    spotify: "https://open.spotify.com/embed/album/5LEXck3kfixFaA3CqVE7bC",
  },
  {
    id: "ok-computer",
    nome: "OK Computer",
    artista: "Radiohead",
    ano: "1997",
    genero: "Alternative Rock",
    imagem: "imagens/ok-computer.jpg",
    spotify: "https://open.spotify.com/embed/album/6dVIqQ8qmQ5GBnJ9shOYGE",
  },
  {
    id: "around-the-fur",
    nome: "Around the Fur",
    artista: "Deftones",
    ano: "1997",
    genero: "Alternative Metal",
    imagem: "imagens/around-the-fur.jpg",
    spotify: "https://open.spotify.com/embed/album/7o4UsmV37Sg5It2Eb7vHzu",
  },
  {
    id: "adrenaline",
    nome: "Adrenaline",
    artista: "Deftones",
    ano: "1995",
    genero: "Alternative Metal",
    imagem: "imagens/adrenaline.jpg",
    spotify: "https://open.spotify.com/embed/album/30YN03R4Bjl8Qwz8wPRoXG",
  },
  {
    id: "de-chava-deluxe",
    nome: "De Chava Deluxe",
    artista: "Yeri Mua",
    ano: "2024",
    genero: "Reggaeton",
    imagem: "imagens/de-chava.jpg",
    spotify: "https://open.spotify.com/embed/album/2POWzkq5gUJckg3lZmfz8g",
  },
  {
    id: "chupon",
    nome: "Chupón",
    artista: "Yeri Mua",
    ano: "2023",
    genero: "Reggaeton",
    imagem: "imagens/chupon.jpg",
    spotify: "https://open.spotify.com/embed/track/7v4JGOsUkblqcvOJ0YpNUU",
  },
  {
    id: "femme-fatale",
    nome: "Femme Fatale",
    artista: "Mon Laferte",
    ano: "2024",
    genero: "Pop",
    imagem: "imagens/femme-fatale.jpg",
    spotify: "https://open.spotify.com/embed/album/7q2GxttTFDWOihvnSWdwWw",
  },
  {
    id: "mon-laferte-vol-1",
    nome: "Mon Laferte, Vol. 1",
    artista: "Mon Laferte",
    ano: "2015",
    genero: "Pop / Rock",
    imagem: "imagens/mon-laferte-vol1.jpg",
    spotify: "https://open.spotify.com/embed/album/5sG9v1V0gjNbQQiXkYKWe0",
  },
  {
    id: "la-trenza",
    nome: "La Trenza",
    artista: "Mon Laferte",
    ano: "2017",
    genero: "Pop / Rock Latino",
    imagem: "imagens/la-trenza.jpg",
    spotify: "https://open.spotify.com/embed/album/7CgbWo8K9pQx823YTI17zE",
  },
  {
    id: "america",
    nome: "America",
    artista: "America",
    ano: "1971",
    genero: "Folk Rock",
    imagem: "imagens/america.jpg",
    spotify: "https://open.spotify.com/embed/album/0E5IKYhiKgbYQkmfsFonbZ",
  },
  {
    id: "am",
    nome: "AM",
    artista: "Arctic Monkeys",
    ano: "2013",
    genero: "Indie Rock",
    imagem: "imagens/am.jpg",
    spotify: "https://open.spotify.com/embed/album/78bpIziExqiI9qztvNFlQu",
  },
  {
    id: "un-verano-sin-ti",
    nome: "Un Verano Sin Ti",
    artista: "Bad Bunny",
    ano: "2022",
    genero: "Reggaeton",
    imagem: "imagens/un-verano-sin-ti.jpg",
    spotify: "https://open.spotify.com/embed/album/3RQQmkQEvNCY4prGKE6oc5",
  },
  {
    id: "twilight",
    nome: "Twilight",
    artista: "Bôa",
    ano: "2001",
    genero: "Alternative Rock",
    imagem: "imagens/twilight.jpg",
    spotify: "https://open.spotify.com/embed/album/7sGYAV0xv7ZfAMzIpMl8m1",
  },
  {
    id: "close-to-you",
    nome: "Close to You",
    artista: "Carpenters",
    ano: "1970",
    genero: "Soft Rock / Pop",
    imagem: "imagens/close-to-you.jpg",
    spotify: "https://open.spotify.com/embed/album/5z8MFnoVUIfVo6MQW0uIul",
  },
  {
    id: "cry",
    nome: "Cry",
    artista: "Cigarettes After Sex",
    ano: "2019",
    genero: "Dream Pop",
    imagem: "imagens/cry.jpg",
    spotify: "https://open.spotify.com/embed/album/63yRRBtLX8eqbOLD6f0y9U",
  },
  {
    id: "currents",
    nome: "Currents",
    artista: "Tame Impala",
    ano: "2015",
    genero: "Psychedelic Pop / Indie Rock",
    imagem: "imagens/currents.jpg",
    spotify: "https://open.spotify.com/embed/album/79dL7FLiJFOO0EoehUHQBv",
  },
  {
    id: "el-dorado",
    nome: "El Dorado",
    artista: "Shakira",
    ano: "2017",
    genero: "Latin Pop",
    imagem: "imagens/el-dorado.jpg",
    spotify: "https://open.spotify.com/embed/album/6bUxh58rYTL67FS8dyTKMN",
  },
  {
    id: "french-exit",
    nome: "French Exit",
    artista: "TV Girl",
    ano: "2014",
    genero: "Indie Pop",
    imagem: "imagens/french-exit.jpg",
    spotify: "https://open.spotify.com/embed/album/4Hai0uVzRbyTSaTPzxTY4e",
  },
  {
    id: "ladies-gentlemen",
    nome: "Ladies & Gentlemen",
    artista: "George Michael",
    ano: "1998",
    genero: "Pop",
    imagem: "imagens/ladies-gentlemen.jpg",
    spotify: "https://open.spotify.com/embed/album/0IJcpy0eM4o63J43qij68g",
  },
  {
    id: "grace",
    nome: "Grace",
    artista: "Jeff Buckley",
    ano: "1994",
    genero: "Alternative Rock",
    imagem: "imagens/grace.jpg",
    spotify: "https://open.spotify.com/embed/album/7yQtjAjhtNi76KRu05XWFS",
  },
  {
    id: "love-deluxe",
    nome: "Love Deluxe",
    artista: "Sade",
    ano: "1992",
    genero: "Soul / R&B",
    imagem: "imagens/love-deluxe.jpg",
    spotify: "https://open.spotify.com/embed/album/2PfGKHtqEX58bHtkQxJnWG",
  },
  {
    id: "death-of-a-party-girl",
    nome: "Death of a Party Girl",
    artista: "TV Girl",
    ano: "2018",
    genero: "Indie Pop",
    imagem: "imagens/death-of-a-party-girl.jpg",
    spotify: "https://open.spotify.com/embed/album/5kFjYk3umY8Pu1lymIJLVy",
  },
  {
    id: "flower-boy",
    nome: "Flower Boy",
    artista: "Tyler, The Creator",
    ano: "2017",
    genero: "Alternative Hip-Hop",
    imagem: "imagens/flower-boy.jpg",
    spotify: "https://open.spotify.com/embed/album/2nkto6YNI4rUYTLqEwWJ3o",
  },
  {
    id: "here-comes-the-cowboy",
    nome: "Here Comes the Cowboy",
    artista: "Mac DeMarco",
    ano: "2019",
    genero: "Indie Rock",
    imagem: "imagens/here-comes-the-cowboy.jpg",
    spotify: "https://open.spotify.com/embed/album/67PsnkYVPNpEsZffyTWGgW",
  },
  {
    id: "deathmental",
    nome: "Deathmental",
    artista: "Pachiko",
    ano: "—",
    genero: "—",
    imagem: "imagens/death-metal.jpg",
    spotify: "https://open.spotify.com/embed/album/2jU2aMrXPNNeSGJqWRNoIY",
  },
  {
    id: "broken-girl",
    nome: "Broken Girl",
    artista: "Julie",
    ano: "—",
    genero: "—",
    imagem: "imagens/broken-girl.jpg",
    spotify: "https://open.spotify.com/embed/album/02zGqoK00H1Rx5T5A9dUXI",
  },
  {
    id: "euphoria-of-self-destruction",
    nome: "Euphoria of Self-Destruction",
    artista: "Blade and Bath",
    ano: "—",
    genero: "—",
    imagem: "imagens/euphoria-of-self-destruction.jpg",
    spotify: "https://open.spotify.com/embed/album/5lw9JFG1fQ4JGGzBt9RR8k",
  },
  {
    id: "the-gold-experience",
    nome: "The Gold Experience",
    artista: "Prince",
    ano: "1995",
    genero: "Pop / Funk",
    imagem: "imagens/the-gold-experience.jpg",
    spotify: "https://open.spotify.com/embed/album/7JdnQ7zCfqETcLgS94d3ks",
  },
  {
    id: "dynasty",
    nome: "Dynasty",
    artista: "KISS",
    ano: "1979",
    genero: "Hard Rock",
    imagem: "imagens/dynasty.jpg",
    spotify: "https://open.spotify.com/embed/album/4FA68GsblSfvKZZRfM1tI1",
  },
  {
    id: "odisea",
    nome: "Odisea",
    artista: "Ozuna",
    ano: "2017",
    genero: "Reggaeton",
    imagem: "imagens/odisea.jpg",
    spotify: "https://open.spotify.com/embed/album/4s05NbwGgw5SO42AdsN5Oo",
  },
  {
    id: "primera-musa",
    nome: "Primera Musa",
    artista: "Omar Courtz",
    ano: "2024",
    genero: "Reggaeton",
    imagem: "imagens/primera-musa.jpg",
    spotify: "https://open.spotify.com/embed/album/3C5uwdRE5QRoXSGPPxpDd4",
  },
  {
    id: "cosa-nuestra",
    nome: "Cosa Nuestra",
    artista: "Rauw Alejandro",
    ano: "2024",
    genero: "Latin R&B / Reggaeton",
    imagem: "imagens/cosa-nuestra.jpg",
    spotify: "https://open.spotify.com/embed/album/0aX0UXrHG2ceYIxTQcqJdA",
  },
  {
    id: "data",
    nome: "DATA",
    artista: "Tainy",
    ano: "2023",
    genero: "Reggaeton / Latin Electronic",
    imagem: "imagens/data.jpg",
    spotify: "https://open.spotify.com/embed/album/2X6WyzpxY70eUn3lnewB7d",
  },
  {
    id: "jose",
    nome: "JOSE",
    artista: "J Balvin",
    ano: "2021",
    genero: "Reggaeton",
    imagem: "imagens/jose.jpg",
    spotify: "https://open.spotify.com/embed/album/11GmvpYnbgK0rSryPaV5BP",
  },
  {
    id: "energia",
    nome: "Energía",
    artista: "J Balvin",
    ano: "2016",
    genero: "Reggaeton / Latin Pop",
    imagem: "imagens/energia.jpg",
    spotify: "https://open.spotify.com/embed/album/2G24iquUtWrS3H36y5T1HO",
  },
  {
    id: "romance",
    nome: "Romance",
    artista: "Luis Miguel",
    ano: "1991",
    genero: "Bolero / Pop Latino",
    imagem: "imagens/romance.jpg",
    spotify: "https://open.spotify.com/embed/album/4MjzdTkEmTwPAlVwDSSivP",
  },
  {
    id: "originales-20-exitos",
    nome: "Originales – 20 Éxitos",
    artista: "Jeanette",
    ano: "—",
    genero: "Pop / Balada",
    imagem: "imagens/originales-20-exitos.jpg",
    spotify: "https://open.spotify.com/embed/album/5xaZwiFGYT273Zk40sen9o",
  },
  {
    id: "the-show-after-party",
    nome: "The Show, the After Party, the Hotel",
    artista: "Jodeci",
    ano: "1995",
    genero: "R&B / New Jack Swing",
    imagem: "imagens/the-show-after-party.jpg",
    spotify: "https://open.spotify.com/embed/album/5tincGtQaRD1QoXAT0PELz",
  },
  {
    id: "pretty-boy-dirty-boy",
    nome: "Pretty Boy, Dirty Boy",
    artista: "Maluma",
    ano: "2015",
    genero: "Reggaeton / Latin Pop",
    imagem: "imagens/pretty-boy-dirty-boy.jpg",
    spotify: "https://open.spotify.com/embed/album/3PomvFR694SrCSZzDWMWV7",
  },
  {
    id: "mala-mia",
    nome: "Mala Mía",
    artista: "Fuerza Regida",
    ano: "—",
    genero: "Regional Mexicano",
    imagem: "imagens/mala-mia.jpg",
    spotify: "https://open.spotify.com/embed/album/5utxE1ImIDJFXRHf137hoy",
  },
  {
    id: "mis-manos",
    nome: "Mis Manos",
    artista: "Camilo",
    ano: "2021",
    genero: "Pop Latino",
    imagem: "imagens/mis-manos.jpg",
    spotify: "https://open.spotify.com/embed/album/1PuH88Md0tzB8UrnBfboJA",
  },
  {
    id: "homerun",
    nome: "Homerun",
    artista: "Paulo Londra",
    ano: "2019",
    genero: "Latin Trap / Hip-Hop",
    imagem: "imagens/homerun.jpg",
    spotify: "https://open.spotify.com/embed/album/0qJkFmVwwNXP6fvSemDZqn",
  },
  {
    id: "stone-cold-classics",
    nome: "Stone Cold Classics",
    artista: "Queen",
    ano: "2006",
    genero: "Rock",
    imagem: "imagens/stone-cold-classics.jpg",
    spotify: "https://open.spotify.com/embed/album/7C2DKB8C12LqxMkfJRwTo9",
  },
  {
    id: "3x3",
    nome: "3x3",
    artista: "Odetari",
    ano: "2023",
    genero: "Electronic / Hip-Hop",
    imagem: "imagens/3x3.jpg",
    spotify: "https://open.spotify.com/embed/album/32BvlHf3nCW7cOTH970V7t",
  },
  {
    id: "dice-and-roll",
    nome: "Dice and Roll",
    artista: "Odetari",
    ano: "2023",
    genero: "Electronic / Hip-Hop",
    imagem: "imagens/dice-and-roll.jpg",
    spotify: "https://open.spotify.com/embed/album/6UoAL4iKvmjbmwfOb1eXHu",
  },
  {
    id: "these-things-happen",
    nome: "These Things Happen",
    artista: "G-Eazy",
    ano: "2014",
    genero: "Hip-Hop / Rap",
    imagem: "imagens/these-things-happen.jpg",
    spotify: "https://open.spotify.com/embed/album/6wDc63NhKy2PyXdbhkRmrl",
  },
  {
    id: "anxiety",
    nome: "Anxiety",
    artista: "G-Eazy",
    ano: "2020",
    genero: "Hip-Hop / Rap",
    imagem: "imagens/anxiety.jpg",
    spotify: "https://open.spotify.com/embed/album/4CzCtsPM1jOgMW2grZHah6",
  },
  {
    id: "ultraviolence",
    nome: "Ultraviolence",
    artista: "Lana Del Rey",
    ano: "2014",
    genero: "Dream Pop / Alternative Rock",
    imagem: "imagens/ultraviolence.jpg",
    spotify: "https://open.spotify.com/embed/album/1ORxRsK3MrSLvh7VQTF01F",
  },
  {
    id: "we-fell-in-love",
    nome: "we fell in love in october",
    artista: "girl in red",
    ano: "2018",
    genero: "Indie Pop",
    imagem: "imagens/we-fell-in-october.jpg",
    spotify: "https://open.spotify.com/embed/album/7vud0sY43VTv28MbWiglDa",
  },
  {
    id: "sweet-boy",
    nome: "Sweet Boy",
    artista: "Malcolm Todd",
    ano: "—",
    genero: "Indie Pop",
    imagem: "imagens/sweet-boy.jpg",
    spotify: "https://open.spotify.com/embed/album/2jX6yKrWw9bY7JAYHhhtqZ",
  },
  {
    id: "back-to-me",
    nome: "Back to Me",
    artista: "The Marías",
    ano: "—",
    genero: "Indie Pop",
    imagem: "imagens/back-to-me.jpg",
    spotify: "https://open.spotify.com/embed/album/3y8LtE30zPfQ4sXYRKvt2e",
  },
  {
    id: "metallica",
    nome: "Metallica (Remastered Deluxe Box Set)",
    artista: "Metallica",
    ano: "1986",
    genero: "Heavy Metal",
    imagem: "imagens/metallica.jpg",
    spotify: "https://open.spotify.com/embed/album/7h5xn0Olvx2p0eQcSt1Osy",
  },
  {
    id: "better-late-than-never",
    nome: "Better Late Than Never",
    artista: "ARTISTA",
    ano: "—",
    genero: "—",
    imagem: "imagens/better.jpg",
    spotify: "https://open.spotify.com/embed/album/2Kw4Hh3xAkcROBNPuKnh4t",
  },
  {
    id: "atrevido",
    nome: "Atrevido",
    artista: "Eddy Herrera",
    ano: "—",
    genero: "Merengue",
    imagem: "imagens/ajena.jpg",
    spotify: "https://open.spotify.com/embed/album/4DKgafmoXFZmhi73FJ0UQt",
  },
  {
    id: "love-and-sex",
    nome: "Love and Sex",
    artista: "Plan B",
    ano: "—",
    genero: "Reggaeton",
    imagem: "imagens/love-and-sex.jpg",
    spotify: "https://open.spotify.com/embed/album/04NPh9S2gPzYveqlJYQ0V8",
  },
  {
    id: "el-rey",
    nome: "El Rey Del Trap Haitiano",
    artista: "MatysitoFlowBakan0",
    ano: "—",
    genero: "Trap",
    imagem: "imagens/el-rey.jpg",
    spotify: "https://open.spotify.com/embed/album/3lqiBDvAsjjyTiE5HKq5VT",
  },
  {
    id: "cuando-la-cama",
    nome: "Cuando la Cama Me Da Vueltas",
    artista: "Arena Ash",
    ano: "—",
    genero: "—",
    imagem: "imagens/cama.jpg",
    spotify: "https://open.spotify.com/embed/album/5fx4IhLlE95ojWxOI0K968",
  },
  {
    id: "hatful-of-hollow",
    nome: "Hatful of Hollow",
    artista: "The Smiths",
    ano: "1984",
    genero: "Alternative Rock",
    imagem: "imagens/hatful.jpg",
    spotify: "https://open.spotify.com/embed/album/1j57Q5ntVi7crpibb0h4sv",
  },
  {
    id: "porque-quise",
    nome: "Porque Quise (Deluxe)",
    artista: "FLVCKKA",
    ano: "—",
    genero: "—",
    imagem: "imagens/porque-quise.jpg",
    spotify: "https://open.spotify.com/embed/album/78Ok3vPNjR0K0WKVz4wYNm",
  },
  {
    id: "frenia",
    nome: "Frenia",
    artista: "La Santa Grifa",
    ano: "—",
    genero: "Rap",
    imagem: "imagens/frenia.jpg",
    spotify: "https://open.spotify.com/embed/album/6DtziobPePcdasV0uUycOn",
  },
  {
    id: "santos-grifos-vol1",
    nome: "Santos Grifos Vol. 1",
    artista: "La Santa Grifa",
    ano: "—",
    genero: "Rap",
    imagem: "imagens/santos-grifos.jpg",
    spotify: "https://open.spotify.com/embed/album/1vJm0PP19mjHS2BQfzZP3H",
  },
  {
    id: "dauntless-manifesto",
    nome: "Dauntless Manifesto",
    artista: "CupcakKe",
    ano: "—",
    genero: "Rap",
    imagem: "imagens/dauntless.jpg",
    spotify: "https://open.spotify.com/embed/album/2g8S9vqA5k6Xb6Yvjldya3",
  },
  {
    id: "modjo",
    nome: "Modjo",
    artista: "Modjo",
    ano: "2001",
    genero: "French House",
    imagem: "imagens/modjo.jpg",
    spotify: "https://open.spotify.com/embed/album/0vwDxngkhZuwNbcxzebCXI",
  },
  {
    id: "femme-fatale-britney",
    nome: "Femme Fatale",
    artista: "Britney Spears",
    ano: "2011",
    genero: "Dance Pop",
    imagem: "imagens/femme.jpg",
    spotify: "https://open.spotify.com/embed/album/4uxzT5LmTxYP0JNxjQGBNs",
  },
  {
    id: "be-the-cowboy",
    nome: "Be the Cowboy",
    artista: "Mitski",
    ano: "2018",
    genero: "Indie Rock",
    imagem: "imagens/be-the-cowboy.jpg",
    spotify: "",
  },
  {
    id: "electra-heart",
    nome: "Electra Heart",
    artista: "Marina",
    ano: "2012",
    genero: "Indie Pop",
    imagem: "imagens/electra.jpg",
    spotify: "https://open.spotify.com/embed/album/49kf7gWWtReFwPcCNsvyUf",
  },
];

const album = albuns.find((item) => item.id === albumEscolhido);

const areaDetalhes = document.getElementById("detalhes-album");

if (areaDetalhes && album) {
  areaDetalhes.innerHTML = `
        <img src="${album.imagem}" alt="Capa de ${album.nome}" class="imagem-album">

        <h2>${album.nome}</h2>
        <h4>${album.artista}</h4>

        <p>${album.ano} • ${album.genero}</p>

<iframe
    src="${album.spotify}"
    width="100%"
    height="352"
    style="border-radius:12px; border:0; margin-top:20px;"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy">
</iframe>

<a href="albuns.html" class="btn btn-danger">
    VOLTAR AOS ÁLBUNS
</a>
    `;
}
// MOSTRAR OS ÁLBUNS FAVORITOS
document.addEventListener("DOMContentLoaded", function () {
  const lista = document.getElementById("lista-favoritos");

  if (!lista) return;

  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    lista.innerHTML = `
            <div class="col-12">
                <p>Você ainda não tem álbuns favoritos! ♡</p>
                <a href="albuns.html" class="btn btn-danger">
                    EXPLORAR ÁLBUNS
                </a>
            </div>`;
    return;
  }

  favoritos.forEach((album) => {
    lista.innerHTML += `
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="card-album">
                    <img src="${album.imagem}" alt="Capa de ${album.nome}" class="imagem-album">
                    <h4>${album.nome}</h4>
                    <p>${album.artista}</p>
                    <small>${album.informacao}</small>

                    <button class="botao-favorito" onclick="removerFavorito('${album.id}')">
                        ♥ REMOVER DOS FAVORITOS
                    </button>

                    <a href="album.html?album=${album.id}" class="btn btn-danger mt-2">
                        ♫ VER ÁLBUM
                    </a>
                </div>
            </div>`;
  });
});

function removerFavorito(id) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  favoritos = favoritos.filter((album) => album.id !== id);

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  location.reload();
}
// ATUALIZAR O ESTADO DOS BOTÕES DE FAVORITOS
document.addEventListener("DOMContentLoaded", function () {
  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  const botoes = document.querySelectorAll(".card-album .botao-favorito");

  botoes.forEach((botao) => {
    const card = botao.closest(".card-album");
    const linkAlbum = card.querySelector('a[href*="album.html"]');

    if (!linkAlbum) return;

    const parametros = new URL(linkAlbum.href).searchParams;
    const id = parametros.get("album");

    const jaFavoritado = favoritos.some((album) => album.id === id);

    if (jaFavoritado) {
      botao.innerHTML = "♥ FAVORITADO";
      botao.classList.add("favoritado");
    }
  });
});
// PESQUISAR ÁLBUNS
document.addEventListener("DOMContentLoaded", function () {
  const campoPesquisa = document.getElementById("pesquisa-album");

  if (!campoPesquisa) return;

  campoPesquisa.addEventListener("input", function () {
    const pesquisa = campoPesquisa.value.toLowerCase().trim();

    const cards = document.querySelectorAll(".card-album");

    cards.forEach((card) => {
      const nome = card.querySelector("h4").textContent.toLowerCase();
      const artista = card.querySelector("p").textContent.toLowerCase();

      if (nome.includes(pesquisa) || artista.includes(pesquisa)) {
        card.parentElement.style.display = "";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });
});
// FILTRAR ÁLBUNS PELO ARTISTA SELECIONADO
document.addEventListener("DOMContentLoaded", function () {
  const parametros = new URLSearchParams(window.location.search);
  const artistaSelecionado = parametros.get("artista");

  if (!artistaSelecionado) return;

  const cards = document.querySelectorAll(".card-album");

  cards.forEach((card) => {
    const artista = card.querySelector("p").textContent.trim();

    if (artista.toLowerCase() === artistaSelecionado.toLowerCase()) {
      card.parentElement.style.display = "";
    } else {
      card.parentElement.style.display = "none";
    }
  });
});
