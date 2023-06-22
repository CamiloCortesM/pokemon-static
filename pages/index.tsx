import { Layout } from '@/components/layouts';
import { Button } from '@nextui-org/react';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Layout title="Pokemon">
      <Button color={'gradient'}>Hello world</Button>
    </Layout>
  );
};

export default Home;
