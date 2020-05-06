import * as React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { action } from '@storybook/addon-actions';

import WorkItem from './WorkItem';
import { WorkInput } from './WorkItemAdd';

export default {
  title: 'PortfolioForm/WorkItem',
  component: 'WorkItem',
};

const work: WorkInput = {
  title: 'title',
  siteUrl: 'https://material-ui.com/',
};

export const index = () => <WorkItem work={work} onClose={action('onClose')} />;
