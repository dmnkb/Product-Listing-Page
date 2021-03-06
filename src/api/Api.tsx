import axios from "axios";

const apiPath = "https://api.thesneakerdatabase.com/v1/sneakers";
const apiOffline = "/newReleases.json";

export type gender = 'all' | 'men' | 'women' | 'child' | 'infant' | 'preschool' | 'toddler' | 'unisex' | 'youth'

export interface SneakerSpecs {
  gender: gender
  sort: string
  releaseYear: number
  page: number
}

/**
 * 
 * @param specs 
 * @returns AxiosResponse<any>
 */
export const getProducts = (specs: SneakerSpecs) => {
  let gender = (specs.gender === 'all') ? "" : "&gender=" + specs.gender
  return axios
    .get(
      (`${apiPath}
        ?limit=12
        &brand=Nike
        &name=air+force+1
        &releaseYear=${specs.releaseYear}
        ${gender}
        &page=${specs.page}`).replace(/\s/g, '')
    ).then((response) => ({response, error: undefined}))
    .catch((error) => ({response: undefined, error}));
}

/**
 * Fallback method in case of API issues
 * @returns AxiosResponse<any>
 */
export const getProductsOffline = () =>
  axios
    .get(`${apiOffline}`)
    .then((response) => ({response, error: undefined}))
    .catch((error) => ({response: undefined, error}));

/**
 * 
 * @param productID 
 * @returns AxiosResponse<any>
 */
export const getProductById = (productID: string) => 
  axios
    .get(`${apiPath}/${productID}?limit=12`)
    .then((response) => ({response, error: undefined}))
    .catch((error) => ({response: undefined, error})); 