import './button.css';

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text' },
    className: { control: 'text' },
  },
};
const Template = ({ label, className }) => {
  return `<button class="eab-button ${className}">${label}</button>`;
};
export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  className: 'button--primary button--medium',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  className: 'button--secondary button--medium',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  className: 'button--primary button--large',
};


export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  label: 'Large Secondary Button',
  className: 'button--secondarty button--large',
};
