import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Pokemon">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/id.svg
  const pokemons: SmallPokemon[] = data.results.map<SmallPokemon>(
    (pokemon, i): SmallPokemon => ({
      id: i + 1,
      name: pokemon.name,
      url: pokemon.url,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        i + 1
      }.svg`,
    })
  );

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
