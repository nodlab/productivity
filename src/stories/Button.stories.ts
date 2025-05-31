import type { Meta, StoryObj } from '@storybook/vue3';

import PButton from '@/components/Button/PButton.vue';

const meta = {
  title: 'Components/Button',
  component: PButton,
  // tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
  args: {
    size: 'medium',
  },
} satisfies Meta<typeof PButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
    size: 'medium'
  },
};

export const SizeSmall: Story = {
  args: {
    label: 'Small',
    size: 'small',
  },
};

export const SizeMedium: Story = {
  args: {
    label: 'Medium',
    size: 'medium',
  },
};

export const SizeLarge: Story = {
  args: {
    label: 'Large',
    size: 'large',
  },
};

export const IconSmall: Story = {
  args: {
    icon: true,
    size: 'small',
    iconName: 'P',
  },
};

export const IconMedium: Story = {
  args: {
    icon: true,
    size: 'medium',
    iconName: 'P',
  },
};

export const IconLarge: Story = {
  args: {
    icon: true,
    size: 'large',
    iconName: 'P',
  },
};