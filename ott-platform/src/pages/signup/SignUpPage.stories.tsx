import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Meta, StoryFn } from '@storybook/react';
import SignUpPage from './SignUpPage';

export default {
  title: 'Pages/SignUpPage',
  component: SignUpPage,
  argTypes: {
    registerButtonColor: { control: 'color' },
    label: { control: 'text' },
  },

} as Meta;

const Template: StoryFn = (args) => (
  <Router>
    <SignUpPage{...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Register',
  registerButtonColor: '#BB261A',
};

