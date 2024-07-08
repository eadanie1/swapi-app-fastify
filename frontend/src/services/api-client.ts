import axios, { AxiosError, CanceledError } from "axios";

export default axios.create({
  baseURL: 'https://swapi-app-fastify-production.up.railway.app/api/people'
});

export { AxiosError, CanceledError };