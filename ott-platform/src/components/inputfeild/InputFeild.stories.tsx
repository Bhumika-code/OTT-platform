import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputField, { InputFieldProps } from './InputFeild' // Assuming the filename is 'InputField.ts'


export default {
  title: 'Components/InputFeild',
  component: InputField,
} as Meta;

const Template: StoryFn<InputFieldProps> = (args: InputFieldProps) => <InputField {...args} />;

export const Default = Template.bind({});
