import Header from "./Header";

export default {
    title: "Components/Header",
    component: Header
}

const Template = args => <Header {...args} />

export const Main = Template.bind({})