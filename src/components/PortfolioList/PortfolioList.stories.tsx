import * as React from 'react';
import PortfolioList from './PortfolioList';
import Portfolio from '../../interfaces/Portfolio';

export default {
  title: 'PortfolioList',
};

const portfolios: Portfolio[] = Array(10)
  .fill('')
  .map((_, i) => ({
    id: i.toString(),
    siteImageUrl: 'https://via.placeholder.com/180',
    user: {
      name: `user${i}`,
      profession: i % 3 === 0 ? 'Software Engineer'
       : i % 2 === 0 ? 'Designer' : 'Hardware Engineer',
    },
    portfolioSite: 'https://material-ui.com/',
  }));
export const list = () => <PortfolioList portfolios={portfolios} />;
export const nodata = () => <PortfolioList portfolios={[]} />;
