import User from './User';

type Portfolio = {
  id: string;
  portfolioSite: string;
  siteImageUrl: string;
  user: Pick<User, 'name' | 'profession'>;
};

export default Portfolio;
