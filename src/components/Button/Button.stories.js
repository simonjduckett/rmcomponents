import Button from './Button'

export default {
    title: "Components/Button",
    component: Button
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'See quotes',
    type: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Get quotes',
    type: 'secondary'
}
export const trans = Template.bind({})
trans.args = {
    label: 'Retrieve quotes',
    type: 'trans'
}
export const test = Template.bind({})
test.args = {
    label: 'test quotes',
    type: 'primary'
}