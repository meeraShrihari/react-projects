// import { render, screen } from '@testing-library/react';
// import Button from "../button";

// test("renders without crashing", () => {
//     render(<Button />);
//     const buttonElement = screen.getByTestId("button");
//     expect(buttonElement).toBeInTheDocument();
// });

import {render, screen, cleanup} from "@testing-library/react";
import Button from "../button";
import "@testing-library/jest-dom"
import renderer from "react-test-renderer";

afterEach(cleanup);

test("Renders button on the dom", () => {
    render(<Button />);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
})

test("Renders button correctly", () => {
    render(<Button label="Click me please"></Button>);
    const buttonElement = screen.getByTestId("button");
    expect(buttonElement).toHaveTextContent("Click me please");
})

// test("Renders button with save", () => {
//     render(<Button label="save" />);
//     const buttonElement = screen.getByTestId("button");
//     expect(buttonElement).toHaveTextContent("save");
// })


test("matches snapshot", () => {
    const component = renderer.create(<Button label="click me please"></Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test("matches snapshot2", () => {
    const component = renderer.create(<Button label="save"></Button>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})