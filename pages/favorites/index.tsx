import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { localFavorites } from '@/utils';
import { useEffect, useState } from 'react';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favorites">
      <NoFavorites />
    </Layout>
  );
};

export default FavoritesPage;
