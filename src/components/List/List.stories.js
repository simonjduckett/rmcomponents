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
            <li>List Item</li>
        ))}
    </List>
)

export const Rmlist = Template.bind({})
Rmlist.args = {

}