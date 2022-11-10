import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
// const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
// });

test("renders the heading correctly", () => {
    render(<App />);
    const headingElement = screen.getByText('My React Page');
    expect(headingElement).toBeInTheDocument();

});

// it('renders without crashing', () => {
//   const root = ReactDOM.createRoot(document.createElement('div'));
//   root.render(<App />,root);
// });
