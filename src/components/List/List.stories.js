import List from './List'

export default {
    title: "Components/List",
    component: List,
    argTypes: {
        numberOfChildren: { type: 'number', defaultValue: 4 }
    }
}

const Template = ({ numberOfChildren, ...args }) => (
    <List {...args}>
        {[...Array(numberOfChildren).keys()].map(n => (
            <List.Item>List Item</List.Item>
        ))}
    </List>
)

export const RmlistPinkTicks = Template.bind({})
RmlistPinkTicks.args = {
    pink: "pink"
}
export const RmlistGreenTicks = Template.bind({})
RmlistGreenTicks.args = {
    green: "green"
}