import Link from 'next/link';
import Layout from '../components/Layout';
import useSWR from 'swr';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import PortfolioList, { PortfolioData } from '../components/PortfolioList/PortfolioList';
import { Box } from '@material-ui/core';

type IndexProps = {
  portfolios: PortfolioData[],
};

const IndexPage = ({ portfolios }: IndexProps) => {
  const { data } = useSWR('/portfolios', { initialData: portfolios });
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <Box width={800} marginRight="auto" marginLeft="auto">
        <h1>Hello Next.js 👋</h1>
        <PortfolioList portfolios={data} />
        <p>
          <Link href="/about">
            <a>About</a>
          </Link>
        </p>
      </Box>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async (_) => {
  const res = await axios.get('/portfolios');
  const portfolios = res.data;
  return { props: { portfolios } };
};

export default IndexPage;
