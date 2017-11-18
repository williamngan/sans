import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';
import { Box } from '../components/Box';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Box onClick={action('clicked')}>Hello there</Box>)
  .add('with some emoji', () => <Box onClick={action('clicked')}>😀 😎 👍 </Box>);
