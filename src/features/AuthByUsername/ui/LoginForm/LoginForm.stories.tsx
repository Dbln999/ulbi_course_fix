import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Enter text',
    value: '1233',
};
Primary.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123' },
})];

export const WithError = Template.bind({});
WithError.args = {
    placeholder: 'Enter text',
    value: '1233',
};
WithError.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123', error: 'ERROR' },
})];

export const Loading = Template.bind({});
Loading.args = {
    placeholder: 'Enter text',
    value: '1233',
};
Loading.decorators = [StoreDecorator({
    loginForm: { username: '123', password: '123', isLoading: true },
})];
