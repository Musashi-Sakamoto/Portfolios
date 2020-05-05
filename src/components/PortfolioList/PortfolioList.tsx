import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridList from '@material-ui/core/GridList';
import Portfolio from '../../interfaces/Portfolio';

const useStyles = makeStyles(_ => ({
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridList: {
    width: 800,
  },
}));

export type Props = {
  portfolios?: Portfolio[],
};

const PortfolioList: React.FunctionComponent<Props> = ({ portfolios }: Props) => {
  const classes = useStyles();
  return (
    <GridList cols={3} cellHeight={180} className={classes.gridList}>
      {portfolios?.map(portfolio => (
        <GridListTile key={portfolio.id}>
          <img src={portfolio.siteImageUrl} alt={portfolio.user.name} />
          <GridListTileBar
            title={portfolio.user.name}
            subtitle={portfolio.user.profession}
            actionIcon={
              <IconButton aria-label={portfolio.portfolioSite} className={classes.icon}>
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default PortfolioList;
