import Axios, { AxiosError } from "axios";
import { Personaje } from "./model";

export const getPersonajes = async (apiURL: string): Promise<Personaje[]> => {
  const personajesEndpoint = apiURL + "personajes";
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
