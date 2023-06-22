import { FC, ReactNode } from 'react';

import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="author" content="Camilo Cortes" />
        <meta
          name="description"
          content={`Informacion sobre el pokemon ${title}`}
        />
        <meta name="keywords" content={`${title},pokemon,pokedex`} />
      </Head>

      {/* Navbar */}
      <main>{children}</main>
    </>
  );
};
