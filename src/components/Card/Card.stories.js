import Card from './Card'
import cardimg from '../../Images/article.png'
import List from '../List'
import Rmicon from '../Rmicon'
import Tag from '../Tag'

export default {
    title: "Blocks/Card",
    component: Card
}

const Template = args => <Card {...args}>
    <Card.Title>
        <Rmicon icon='house' md />
        <a>Conveyancing advice</a>
    </Card.Title>
    {/* <Card.Img src={cardimg} /> */}
    <Card.Body>
        <h3>Does my conveyancing solicitor need to be local?</h3>
        <p>The Bank of England recently removed a required test for those looking to get a mortgage. So what does this mean for the future of the process?</p>
        <List pinkchevron>
            <List.Item>
                <List.Body>item</List.Body>
            </List.Item>
            <List.Item>
                <List.Body>item</List.Body>
            </List.Item>
            <List.Item>
                <List.Body>item</List.Body>
            </List.Item>
            
        </List>
    </Card.Body>
    <Card.Footer>
        <Tag tag='home, removals' />
    </Card.Footer>
</Card>

export const Article = Template.bind({})
Article.args = {}