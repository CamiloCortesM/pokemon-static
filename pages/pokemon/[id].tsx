import { Layout } from '@/components/layouts';
import { useRouter } from 'next/router';

interface Props {
  pokemon: any;
}

const PokemonPage = () => {
  const router = useRouter();

  return (
    <Layout title="Algun pokemon">
      <h1>Hola mundo</h1>
    </Layout>
  );
};

export default PokemonPage;
