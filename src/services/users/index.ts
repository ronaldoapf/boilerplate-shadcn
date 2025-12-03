import { rickAndMortyClient } from '../rick-and-morty-client'

export const UsersApi = {
  getUsers: async () => {
    const { data } = await rickAndMortyClient.get("/character");
    return data
  }
}