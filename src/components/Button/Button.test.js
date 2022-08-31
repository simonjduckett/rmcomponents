import Button from "./index"
import { render, screen } from "@testing-library/react"

test('should render', () => {
    render(<Button label='click me' />)
    expect.stringContaining('click')
    expect(screen.getByRole('button')).toHaveTextContent('click me')
})