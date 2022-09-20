import Tag from './Tag'

export default {
    title: "Components/Tag",
    component: Tag
}

const Template = args => <Tag {...args} />

export const Tag1 = Template.bind({})
Tag1.args = {
    tag: 'removals, home'
}