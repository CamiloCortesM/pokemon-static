import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);

    const { name, id, sprites } = data;

    return {
      id,
      name,
      sprites,
    };
  } catch (error) {
    return null;
  }
};
