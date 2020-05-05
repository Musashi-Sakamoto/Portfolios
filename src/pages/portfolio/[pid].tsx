import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

import axios, { AxiosResponse } from 'axios';

import Layout from '../../components/Layout';
import Portfolio from '../../interfaces/Portfolio';

axios.defaults.baseURL = 'http://localhost:4001';

type Props = {
  portfolio?: Portfolio
  errors?: string,
};

export default class StaticPropsDetail extends React.Component<Props> {
  render() {
    const { portfolio, errors } = this.props;

    if (errors) {
      return (
        <Layout title={'Error | Next.js + TypeScript Example'}>
          <p>
            <span style={{ color: 'red' }}>Error:</span> {errors}
          </p>
        </Layout>
      );
    }

    return (
      <Layout
        title={`${
          portfolio ? portfolio.portfolioSite : 'User Detail'
        } | Next.js + TypeScript Example`}
      >
        {portfolio && <pre>{JSON.stringify(portfolio, null, 4)}</pre>}
      </Layout>
    );
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const res: AxiosResponse<Portfolio[]> = await axios.get('/portfolios');
  const paths = res.data.map(portfolio => ({
    params: { pid: portfolio.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.pid;
    const res: AxiosResponse<Portfolio> = await axios.get(`/portfolios/${id}`);
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { portfolio: res.data } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
