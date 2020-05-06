import * as React from 'react';
// tslint:disable-next-line:no-implicit-dependencies
import { action } from '@storybook/addon-actions';
import WorkItemAdd from './WorkItemAdd';

export default {
  title: 'PortfolioForm/WorkItemAdd',
  component: 'WorkItemAdd',
};

export const index = () => <WorkItemAdd onAddWork={action('onAddWork')} />;
