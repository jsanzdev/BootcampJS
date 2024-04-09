import { extractImages } from "./motor";

describe("We test that the images are getting extracted from the string", () => {
  it("should return an URL", () => {
    // Arrange
    const html = `<img src="http://localhost:3000/./director-general.webp" />`;
    // Act

    const images = extractImages(html);

    // Assert
    expect(images).toEqual(["http://localhost:3000/./director-general.webp"]);
  });

  it("should return multiple URL", () => {
    // Arrange
    const html = `<div class="card">
    <img src="http://localhost:3000/./irma.webp" />
    <div class="container-description">
      <h2><span>Nombre: </span>Señorita Irma</h2>
      <p><span>Especialidad: </span>Agente encubierta</p>
      <p>
        <span>Habilidades: </span>Cambios de apariencia, Seducción, Manejo
        de armas
      </p>
    </div>
  </div>
  <div class="card">
    <img src="http://localhost:3000/./director-general.webp" />
    <div class="container-description">
      <h2><span>Nombre: </span>Director General de la T.I.A.</h2>
      <p><span>Especialidad: </span>Gestión estratégica</p>
      <p>
        <span>Habilidades: </span>Toma de decisiones, Planificación,
        Coordinación
      </p>
    </div>
  </div>`;
    // Act

    const images = extractImages(html);

    // Assert
    expect(images).toEqual([
      "http://localhost:3000/./irma.webp",
      "http://localhost:3000/./director-general.webp",
    ]);
  });
});
