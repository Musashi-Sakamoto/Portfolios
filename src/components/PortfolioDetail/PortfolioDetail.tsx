import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Portfolio from '../../interfaces/Portfolio';

const useStyles = makeStyles({
  root: {
    // maxWidth: 500,
  },
  media: {
    height: 500,
  },
});

export type Props = {
  portfolio: Portfolio;
};

const PortfolioDetail: React.FunctionComponent<Props> = ({ portfolio }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={portfolio.siteImageUrl}
        title={portfolio.portfolioSite}
      />
      <CardContent>
        <Typography gutterBottom={true} variant="h5" component="h2">
          {portfolio.user.name}
        </Typography>
        <Typography gutterBottom={true} variant="subtitle1">
          {portfolio.user.profession}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {portfolio.portfolioSite}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PortfolioDetail;
