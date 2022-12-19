import List from './List'
import Button from '../Button'

export default {
    title: "Components/List",
    component: List,
    argTypes: {
        numberOfChildren: { type: 'number', defaultValue: 4 }
    }
}

// const Template = ({ numberOfChildren, ...args }) => (
//     <List {...args}>
//         {[...Array(numberOfChildren).keys()].map(n => (
//             <List.Item>
//                 <List.Heading>List Heading</List.Heading>
//                 <List.Body>I am a bigger paragraph of text. I am a bigger paragraph of text.I am a bigger paragraph of text.</List.Body>
//                 {/* <Button sm label='Find out more' type='primary'/> */}
//             </List.Item>
//         ))}
//     </List>
// )

const Template = ({ items, ...args }) => (
    <List {...args} >
        {items.map((item) => (
            <List.Item>{item}</List.Item>
        ))}
    </List>
);

// export const RmlistPinkTicks = Template.bind({})
// RmlistPinkTicks.args = {
//     type: "pink",
// }
// export const RmlistGreenTicks = Template.bind({})
// RmlistGreenTicks.args = {
//     type: "green"
// }
// export const RmlistPinkBullet = Template.bind({})
// RmlistPinkBullet.args = {
//     type: "pinkbullet"
// }
// export const RmlistPinkChevron = Template.bind({})
// RmlistPinkChevron.args = {
//     type: "pinkchevron"
// }


export const OneItem = Template.bind({});
OneItem.args = {
    type: 'pink',
    items: ['point1', 'point2', 'point3'],
};