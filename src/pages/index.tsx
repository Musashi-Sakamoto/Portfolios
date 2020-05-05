import Link from 'next/link';
import Layout from '../components/Layout';
import useSWR from 'swr';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import PortfolioList from '../components/PortfolioList/PortfolioList';
import Portfolio from '../interfaces/Portfolio';

type IndexProps = {
  portfolios: Portfolio[],
};

const IndexPage = ({ portfolios }: IndexProps) => {
  const { data } = useSWR('/portfolios', { initialData: portfolios });
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <PortfolioList portfolios={data} />
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<IndexProps> = async (_) => {
  const res = await axios.get('/portfolios');
  const portfolios = res.data;
  return { props: { portfolios } };
};

export default IndexPage;
