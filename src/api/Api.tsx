import axios from "axios";

const apiPath = "https://api.thesneakerdatabase.com/v1/sneakers";
const apiOffline = "/newReleases.json";

export type gender = 'men' | 'women' | 'child' | 'infant' | 'preschool' | 'toddler' | 'unisex' | 'youth'

export interface SneakerSpecs {
  gender: gender
  sort: string
  releaseYear: number
  page: number
}

/**
 * ?brand=Nike&releaseYear=2021&name=air+force+1
 * @param specs 
 * @returns AxiosResponse<any>
 */
export const getProducts = (specs: SneakerSpecs) =>
  axios
    .get(
      (`${apiPath}
        ?limit=20
        &brand=Nike
        &name=air+force+1
        &releaseYear=${specs.releaseYear}
        ${specs.gender && ("&gender=" + specs.gender)}
        &page=${specs.page}`).replace(/\s/g, '')
    ).then((response) => ({response, error: undefined}))
    .catch((error) => ({response: undefined, error}));

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
    .get(`${apiPath}/${productID}`)
    .then((response) => ({response, error: undefined}))
    .catch((error) => ({response: undefined, error}));