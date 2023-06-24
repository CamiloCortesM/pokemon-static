import { useEffect, useState } from 'react';
import { localFavorites } from '@/utils';
import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { FavoritePokemons } from '@/components/pokemon/FavoritePokemons';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
