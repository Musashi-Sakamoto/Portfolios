import User from './User';

type Portfolio = {
  id: string;
  portfolioSite: string;
  siteImageUrl: string;
  user: Partial<User>;
};

export default Portfolio;
