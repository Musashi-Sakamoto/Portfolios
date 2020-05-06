import * as React from 'react';
import { action } from '@storybook/addon-actions';
import WorkItemAdd from './WorkItemAdd';

export default {
  title: 'PortfolioForm/WorkItemAdd',
  component: 'WorkItemAdd',
};

export const index = () => <WorkItemAdd onAddWork={action('onAddWork')} />;
