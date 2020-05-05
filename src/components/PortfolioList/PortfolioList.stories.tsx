import * as React from "react";
import PortfolioList, { PortfolioData } from "./PortfolioList";

export default {
  title: "PortfolioList"
};

const portfolios: PortfolioData[] = [
  {
    siteImageUrl: "https://via.placeholder.com/180",
    userName: "user1",
    userProfession: "Software Engineer",
    portfolioSiteUrl: "https://material-ui.com/",
  },
  {
    siteImageUrl: "https://via.placeholder.com/180",
    userName: "user2",
    userProfession: "Hardware Engineer",
    portfolioSiteUrl: "https://material-ui.com/",
  },
  {
    siteImageUrl: "https://via.placeholder.com/180",
    userName: "user3",
    userProfession: "Designer",
    portfolioSiteUrl: "https://material-ui.com/",
  },
  {
    siteImageUrl: "https://via.placeholder.com/180",
    userName: "user1",
    userProfession: "Software Engineer",
    portfolioSiteUrl: "https://material-ui.com/",
  },
  {
    siteImageUrl: "https://via.placeholder.com/180",
    userName: "user2",
    userProfession: "Hardware Engineer",
    portfolioSiteUrl: "https://material-ui.com/",
  },
  {
    siteImageUrl: "https://via.placeholder.com/180",
    userName: "user3",
    userProfession: "Designer",
    portfolioSiteUrl: "https://material-ui.com/",
  }
]
export const list = () => <PortfolioList portfolios={portfolios} />;
export const nodata = () => <PortfolioList portfolios={[]} />;