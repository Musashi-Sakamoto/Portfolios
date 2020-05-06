import * as React from 'react';
import { action } from '@storybook/addon-actions';
import WorkItem, { WorkInput } from './WorkItem';

export default {
  title: 'PortfolioForm/WorkItem',
  component: 'WorkItem',
};

const work: WorkInput = {
  idx: 0,
  title: '',
  siteUrl: '',
};

export const index = () => <WorkItem work={work} onAddWork={action('onAddWork')} onCancel={action('onCancel')} />;
