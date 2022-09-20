import Rmicon from './Rmicon'

export default {
    title: "Components/Rmicon",
    component: Rmicon
}

const Template = args => <Rmicon {...args} />

export const Advertising = Template.bind({})
Advertising.args = {
    icon: 'box'
}