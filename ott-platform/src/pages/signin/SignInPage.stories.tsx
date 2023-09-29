import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Meta, StoryFn } from '@storybook/react';
import SignInPage from './SignInPage';

export default {
  title: 'Pages/SignInPage',
  component: SignInPage,
  argTypes: {
    signInButtonColor: { control: 'color' },
    signUpButtonColor: { control: 'color' },
    label: {
      control: 'text',
    },
  }

} as Meta;

const Template: StoryFn = (args) => (
  <Router>
    <SignInPage{...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Sign in',
  signInButtonColor: '#BB261A',
  signUpButtonColor: '#BB261A',
};

