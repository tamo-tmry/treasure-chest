import { Meta, StoryObj } from '@storybook/react';

import { CheckItemList } from './CheckItemList';
import {fn} from '@storybook/test'
import {smartPhoneParameters} from "../../../../.storybook/smartphoneParameters";

const meta: Meta<typeof CheckItemList> = {
    title: 'organisms/CheckItemList',
    component: CheckItemList,
};
export default meta;

type Story = StoryObj<typeof CheckItemList>;

export const チェックなし: Story = {
    args: {
        items: [
            {
                id: '1',
                label: 'ラベル1',
                isChecked: false,
            },
            {
                id: '2',
                label: 'ラベル2',
                isChecked: false,
            }
        ],
    }
};

export const チェックあり: Story = {
    args: {
        items: [
            {
                id: '1',
                label: 'ラベル1',
                isChecked: true,
            },
            {
                id: '2',
                label: 'ラベル2',
                isChecked: true,
            }
        ],
    }
};

export const チェックなしSP: Story = {
    parameters: smartPhoneParameters,
    args: {
        items: [
            {
                id: '1',
                label: 'ラベル1',
                isChecked: false,
            },
            {
                id: '2',
                label: 'ラベル2',
                isChecked: false,
            }
        ],
    }
};

export const チェックありSP: Story = {
    parameters: smartPhoneParameters,
    args: {
        items: [
            {
                id: '1',
                label: 'ラベル1',
                isChecked: true,
            },
            {
                id: '2',
                label: 'ラベル2',
                isChecked: true,
            }
        ],
    }
};