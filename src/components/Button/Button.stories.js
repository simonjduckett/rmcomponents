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
export const Large = Template.bind({})
Large.args = {
    label: 'Get conveyancing init',
    type: 'primary',
    lg: 'lg'
}
export const Small = Template.bind({})
Small.args = {
    label: 'Get conveyancing init',
    type: 'primary',
    sm: 'sm'
}
export const XSmall = Template.bind({})
XSmall.args = {
    label: 'Get conveyancing init',
    type: 'primary',
    xs: 'xs'
}