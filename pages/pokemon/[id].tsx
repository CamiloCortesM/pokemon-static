import { Layout } from '@/components/layouts';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

interface Props {
  // pokemon: any;
  id: string;
  name: string;
}

const PokemonPage: NextPage<Props> = ({ id, name }) => {
  const router = useRouter();

  return (
    <Layout title="Algun pokemon">
      <h1>
        {id} - {name}
      </h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      {
        params: { id: '1' },
      },
      {
        params: { id: '2' },
      },
      {
        params: { id: '3' },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  return {
    props: {
      id: 1,
      name: 'bulbasaur',
    },
  };
};

export default PokemonPage;
