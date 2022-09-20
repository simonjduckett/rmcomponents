import Rmicon from './Rmicon'

export default {
    title: "Components/Rmicon",
    component: Rmicon
}

const Template = args => <Rmicon {...args} />

export const Advertising = Template.bind({})
Advertising.args = {
    icon: 'advertising'
}
export const box = Template.bind({})
box.args = {
    icon: 'box'
}
export const circleTick = Template.bind({})
circleTick.args = {
    icon: 'circleTick'
}
export const costsAndFees = Template.bind({})
costsAndFees.args = {
    icon: 'costsAndFees'
}