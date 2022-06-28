import { render, screen } from "@testing-library/react";
import Home from ".";

describe('Home', () => {
  it('should render correctly', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('should show upload component', () => {
    render(<Home />);
    const uploadElement = screen.getByTestId("upload-component");
    expect(uploadElement).toBeTruthy();
  });
})