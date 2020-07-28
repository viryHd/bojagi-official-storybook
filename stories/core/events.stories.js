import React from 'react';
import addons from '@storybook/addons';
import Events from '@storybook/core-events';
import { Button } from '@storybook/components';

let timesClicked = 0;
const increment = () => {
  timesClicked += 1;
  addons.getChannel().emit(Events.FORCE_RE_RENDER);
};

export default {
  title: 'Core/Events',
};

export const Force = () => <Button onClick={increment}>Clicked: {timesClicked}</Button>;
Force.storyName = 'Force re-render';
