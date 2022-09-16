import List from './List'
import Button from '../Button'

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
            <List.Item>
                <List.Heading>List heading</List.Heading>
                <p>I am a bigger paragraph of text. I am a bigger paragraph of text.I am a bigger paragraph of text.</p>
                <Button label='Find out more' type='primary'/>
            </List.Item>
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
export const RmlistPinkBullet = Template.bind({})
RmlistPinkBullet.args = {
    pinkbullet: "pinkbullet"
}
export const RmlistPinkChevron = Template.bind({})
RmlistPinkChevron.args = {
    pinkchevron: "pinkchevron"
}