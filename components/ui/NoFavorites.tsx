import { Container, Text } from '@nextui-org/react';
import Image from 'next/image';

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Text h1>There are no favorites</Text>
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
        alt="pokemon"
        width={250}
        height={250}
        style={{
          opacity: 0.1,
        }}
      />
    </Container>
  );
};
