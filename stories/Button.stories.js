import './button.css';

import dedent from 'ts-dedent';

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

export const CustomSource = Template.bind({});
CustomSource.parameters = {
  docs: {
    source: {
      code: dedent`
        .eab-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.button--primary {
  color: white;
  background-color: #1ea7fd;
}
.button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.button--large {
  font-size: 16px;
  padding: 12px 24px;
}

        `,
      language: 'css',
      type: 'auto',
    },
  },
};