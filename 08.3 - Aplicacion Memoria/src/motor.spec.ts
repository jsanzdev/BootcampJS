import { cartas, tablero } from "./model";
import {
  barajarCartas,
  sePuedeVoltearLaCarta,
  voltearLaCarta,
  sonPareja,
  esPartidaCompleta,
  iniciaPartida,
} from "./motor";

describe("Chequeamos Operaciones de cartas.", () => {
  it("barajarCartas deberia barajar las cartas. El array inicial debe ser diferente al de despues de bajar las cartas.", () => {
    const shuffled = barajarCartas([...cartas]);
    expect(shuffled).not.toEqual(cartas);
  });

  it("sePuedeVoltearLaCarta deberia devolver true si la carta se puede voltear.", () => {
    tablero.estadoPartida = "CeroCartasLevantadas";
    expect(sePuedeVoltearLaCarta(tablero, 0)).toBe(true);
  });

  it("voltearLaCarta no deberia dejar voltear la carta si el estado de la partida es DosCartasLevantadas", () => {
    tablero.estadoPartida = "DosCartasLevantadas";

    voltearLaCarta(tablero, 0);

    expect(tablero.cartas[0].estaVuelta).toBe(false);
  });

  it("sonPareja deberia devolver true si las cartas on pareja", () => {
    expect(sonPareja(0, 1, tablero)).toBe(true);
  });
});

describe("Chequeamos el estado de la partida.", () => {
  it("esPartidaCompleta deberia devolver true si todas las cartas son encontradas.", () => {
    const cartasEncontradas = cartas.map((carta) => ({
      ...carta,
      encontrada: true,
    }));
    tablero.cartas = cartasEncontradas;
    expect(esPartidaCompleta(tablero)).toBe(true);
  });

  it('iniciaPartida debe barajar las cartas y setear la partida en "CeroCartasLevantadas"', () => {
    iniciaPartida(tablero);
    expect(tablero.cartas).not.toEqual(cartas);
    expect(tablero.estadoPartida).toBe("CeroCartasLevantadas");
  });
});
