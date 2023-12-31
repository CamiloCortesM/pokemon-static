import { FC, ReactNode } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'PokemonApp'}</title>
        <meta name="author" content="Camilo Cortes" />
        <meta
          name="description"
          content={`Information about the pokemon ${title}`}
        />
        <meta name="keywords" content={`${title},pokemon,pokedex`} />

        <meta property="og:title" content={`information about ${title}`} />
        <meta
          property="og:description"
          content={`this is the page about ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>

      <Navbar />
      <main
        style={{
          padding: '0px 20px',
        }}
      >
        {children}
      </main>
    </>
  );
};
