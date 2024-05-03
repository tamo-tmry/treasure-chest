import { Meta, StoryObj } from '@storybook/react';

import {smartPhoneParameters} from "../../../../.storybook/smartphoneParameters";
import Button from "@/app/components/atoms/Button";

const meta: Meta<typeof Button> = {
    title: 'atoms/Button',
    component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Submit: Story = {
    args: {
        text: 'submit',
        type: 'submit'
    }
};

export const reset: Story = {
    args: {
        text: 'reset',
        type: 'reset'
    }
};

export const button: Story = {
    args: {
        text: 'button',
        type: 'button'
    }
};
export const SubmitSP: Story = {
    parameters: smartPhoneParameters,
    args: {
        text: 'submit',
        type: 'submit'
    }
};

export const resetSP: Story = {
    parameters: smartPhoneParameters,
    args: {
        text: 'reset',
        type: 'reset'
    }
};

export const buttonSP: Story = {
    parameters: smartPhoneParameters,
    args: {
        text: 'button',
        type: 'button'
    }
};