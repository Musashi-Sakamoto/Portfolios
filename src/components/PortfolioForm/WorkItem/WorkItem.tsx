import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import Work from '../../../interfaces/Work';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
});

export type WorkInput = Pick<Work, 'title' | 'siteUrl'>;

type IProps = {
  work: WorkInput;
  onClose: (siteUrl: string) => void
};

const WorkItem = ({ work, onClose }: IProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {work.title}
        </Typography>
        <Typography color="textSecondary">
          {work.siteUrl}
        </Typography>
        <Fab onClick={() => onClose(work.siteUrl)} className={classes.fab} size="small" color="secondary" aria-label="close">
          <CloseIcon />
        </Fab>
      </CardContent>
    </Card>
  );
};

export default WorkItem;
