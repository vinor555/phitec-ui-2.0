// eslint-disable-next-line
/* eslint-disable */
import axios from "axios";

export async function pruebaAPI() {
  const response = await axios.get(`/1`);
  return response.data.episode;
}

export function pruebaQuemada() {
  const response = [
    {
      text: "Q",
      value: 1,
    },
    {
      value: 2,
      text: "$",
    },
  ];
  return response;
}

export async function getCatalog(uri){
  try{
    let response = await axios.get(uri);
    console.log(response);
    return response.data;
  } catch (e) {
    // lanzar error
    return [];
  }
}
