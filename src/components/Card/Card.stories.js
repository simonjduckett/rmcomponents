import Card from './Card'

export default {
    title: "Components/Card",
    component: Card
}

const Template = args => <Card {...args}>
    <Card.Body><p>My card</p></Card.Body>
</Card>

export const Article = Template.bind({})
Article.args = {}