import Axios, { AxiosError } from "axios";
import { Personaje } from "./model";

const $ApiURL = "http://localhost:3000/";

const personajesEndpoint = $ApiURL + "personajes";

export const getPersonajes = async (): Promise<Personaje[]> => {
  try {
    const { data } = await Axios.get<Personaje[]>(personajesEndpoint);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      console.error(axiosError.response.data);
    } else {
      console.error(axiosError.message);
    }
    return [];
  }
};
