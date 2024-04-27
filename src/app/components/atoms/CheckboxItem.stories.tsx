import { Meta, StoryObj } from '@storybook/react';

import {CheckboxItem} from './CheckboxItem';
import {action} from "@storybook/addon-actions";
import {fn} from '@storybook/test'
import {smartPhoneParameters} from "../../../../.storybook/smartphoneParameters";

const meta: Meta<typeof CheckboxItem> = {
    title: 'atoms/CheckboxItem',
    component: CheckboxItem,
};
export default meta;

type Story = StoryObj<typeof CheckboxItem>;

export const チェックなし: Story = {
    args: {
        itemId: '1',
        label: 'ラベル',
        isChecked: false,
        onChangeFn: fn()
    }
};

export const チェックあり: Story = {
    args: {
        itemId: '1',
        label: 'ラベル',
        isChecked: true,
        onChangeFn: fn()
    }
};

export const チェックなしSP: Story = {
    parameters: smartPhoneParameters,
    args: {
        itemId: '1',
        label: 'ラベル',
        isChecked: false,
        onChangeFn: fn()
    }
};

export const チェックありSP: Story = {
    parameters: smartPhoneParameters,
    args: {
        itemId: '1',
        label: 'ラベル',
        isChecked: true,
        onChangeFn: fn()
    }
};