import { NextPage, GetStaticProps } from 'next';
import { Layout } from '@/components/layouts';

const Home: NextPage = (props) => {
  console.log(props);
  return (
    <Layout title="Pokemon">
      <ul>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
        <li>Pokémon</li>
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log('Hello world');

  return {
    props: {},
  };
};

export default Home;
