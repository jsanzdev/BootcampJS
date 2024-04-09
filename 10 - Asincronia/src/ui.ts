import { getPersonajes } from "./personajes";
import { Personaje } from "./model";

const searchInput = document.getElementById("search");
const ApiURL = "http://localhost:3000/";

const fetchData = async (): Promise<Personaje[]> => {
  let data = await getPersonajes(ApiURL);

  // Get the search query
  const searchQuery = (document.getElementById("search") as HTMLInputElement)
    .value;

  // Filter the data based on the search query
  data = data.filter((personaje) =>
    personaje.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return data;
};

const loadData = async (data: Personaje[]) => {
  // Select the div where the cards will be appended
  const personajeList = document.getElementById("personajes-list");

  // Clear the previous data
  if (personajeList && personajeList instanceof HTMLDivElement) {
    personajeList.innerHTML = "";
  }
  // Draw the cards
  data.forEach((personaje) => {
    const imgUrl = `http://localhost:3000/${personaje.imagen}`;

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = imgUrl;
    card.appendChild(img);

    const nombre = document.createElement("h2");
    nombre.textContent = personaje.nombre;
    card.appendChild(nombre);

    const apodo = document.createElement("p");
    apodo.textContent = `Apodo: ${personaje.apodo}`;
    card.appendChild(apodo);

    const habilidades = document.createElement("ul");
    habilidades.textContent = "Habilidades:";
    personaje.habilidades.forEach((habilidad) => {
      const li = document.createElement("li");
      li.textContent = habilidad;
      habilidades.appendChild(li);
    });
    card.appendChild(habilidades);

    // Append the card to the selected div
    if (personajeList && personajeList instanceof HTMLDivElement) {
      personajeList.appendChild(card);
    }
  });
};

export const init = () => {
  fetchData().then((data) => {
    loadData(data);
  });

  if (searchInput && searchInput instanceof HTMLInputElement) {
    searchInput.addEventListener("input", () => {
      fetchData().then((data) => {
        loadData(data);
      });
    });
  }
};
