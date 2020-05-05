import * as React from 'react';
import PortfolioDetail from './PortfolioDetail';
import Portfolio from '../../interfaces/Portfolio';

export default {
  title: 'PortfolioDetail',
};

const portfolios: Portfolio[] = Array(10)
  .fill('')
  .map((_, i) => ({
    id: i.toString(),
    siteImageUrl: 'https://via.placeholder.com/180',
    user: {
      name: `user${i}`,
      profession: i % 3 === 0 ?
        'Software Engineer' : i % 2 === 0 ?
        'Designer' : 'Hardware Engineer',
    },
    portfolioSite: 'https://material-ui.com/',
  }));

export const index = () => <PortfolioDetail portfolio={portfolios[0]} />;
