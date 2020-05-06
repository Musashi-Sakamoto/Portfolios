import Portfolio from './Portfolio';

type Work = {
  id: string;
  title: string;
  siteUrl: string;
  imageUrl: string;
  portfolio: Partial<Portfolio>;
};

export default Work;
