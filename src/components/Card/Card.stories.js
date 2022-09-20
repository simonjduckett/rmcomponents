import Card from './Card'
import cardimg from '../../Images/article.png'
import List from '../List'

export default {
    title: "Components/Card",
    component: Card
}

const Template = args => <Card {...args}>
    <Card.Img src={cardimg} />
    <Card.Body>
        <h3>Does my conveyancing solicitor need to be local?</h3>
        <p>My card</p>
        {/* <List pinkbullet>
            <List.Item>
                <List.Body>item</List.Body>
            </List.Item>
            <List.Item>
                <List.Body>item</List.Body>
            </List.Item>
            <List.Item>
                <List.Body>item</List.Body>
            </List.Item>
            
        </List> */}
    </Card.Body>
</Card>

export const Article = Template.bind({})
Article.args = {}