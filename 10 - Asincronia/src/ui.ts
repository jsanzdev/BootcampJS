import { getPersonajes } from "./personajes";

export async function fetchData() {
  let data = await getPersonajes();

  // Get the search query
  const searchQuery = (document.getElementById("search") as HTMLInputElement)
    .value;

  // Filter the data based on the search query

  data = data.filter((personaje) =>
    personaje.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Select the div where the cards will be appended
  const personajeList = document.getElementById("personajes-list");

  // Clear the previous data
  if (personajeList && personajeList instanceof HTMLDivElement) {
    personajeList.innerHTML = "";
  }

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
}
