import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Dark } from 'pages/AboutPage/ui/AboutPage.stories';
import { Text, TextTheme } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
    text: 'text',

};
export const PrimaryError = Template.bind({});
PrimaryError.args = {
    title: 'Title',
    text: 'text',
    theme: TextTheme.ERROR,
};
export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'Title',
};
export const OnlyTitleError = Template.bind({});
OnlyTitleError.args = {
    title: 'Title',
    theme: TextTheme.ERROR,
};
export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'text',
};
export const OnlyTextError = Template.bind({});
OnlyTextError.args = {
    text: 'text',
    theme: TextTheme.ERROR,
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title',
    text: 'text',

};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
