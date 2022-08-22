import Button from '../components/Button/Button'

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