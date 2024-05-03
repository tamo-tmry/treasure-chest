import { Meta, StoryObj } from '@storybook/react';

import {smartPhoneParameters} from "../../../../.storybook/smartphoneParameters";
import CheckItemField from "@/app/components/atoms/CheckItemField";
import {fn} from "@storybook/test";

const meta: Meta<typeof CheckItemField> = {
    title: 'atoms/CheckItemField',
    component: CheckItemField,
};
export default meta;

type Story = StoryObj<typeof CheckItemField>;

export const Default: Story = {
    args: {
        id: 'id',
        label: 'label',
    }
};

export const HasValue: Story = {
    args: {
        id: 'id',
        label: 'label',
        value: 'value'
    }
};

export const HasFn: Story = {
    args: {
        id: 'id',
        label: 'label',
        onInput: fn()
    }
};

export const DefaultSP: Story = {
    parameters: smartPhoneParameters,
    args: {
        id: 'id',
        label: 'label',
    }
};

export const HasValueSP: Story = {
    parameters: smartPhoneParameters,
    args: {
        id: 'id',
        label: 'label',
        value: 'value'
    }
};

export const HasFnSP: Story = {
    parameters: smartPhoneParameters,
    args: {
        id: 'id',
        label: 'label',
        onInput: fn()
    }
};