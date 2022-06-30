import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import App, {validate} from './App';

// test('header renders with react testing tutorial in the document', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/This is React Testing Tutorial/i);
//   expect(linkElement).toBeInTheDocument();
// });

afterEach(cleanup);

describe("Test the Login Form", () => {
    test("render the login form with 2 submit button", async () => {
        render(<App />);
        const buttonList = await screen.findAllByRole("button");
        console.log(buttonList);
        expect(buttonList).toHaveLength(2);
    });

    test("should fail on email validation", () => {
        const testEmail = "meera.com";
        expect(validate(testEmail)).not.toBe(true);
    });

    test("email input should accept email", () => {
        render(<App />)
        const email = screen.getByPlaceholderText("Email");
        userEvent.type(email, "meera");
        expect(email.value).not.toMatch("meerashrihari@gmail.com");
    })

    test("Password input should have type as password", () => {
        render(<App />);
        const password = screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type", "password");
    });

    test("should be able to reset the form", () => {
        render(<App />);
        const resetBtn = screen.getByTestId("reset");
        const usernameInputNode = screen.getByPlaceholderText("Username");
        const emailInputNode = screen.getByPlaceholderText("Email");
        const passwordInputNode = screen.getByPlaceholderText("Password");

        fireEvent.click(resetBtn);
        expect(usernameInputNode.value).toMatch("");
        expect(emailInputNode.value).toMatch("");
        expect(passwordInputNode.value).toMatch("");
    });

    test("should be able to submit the form", () => {
        render(<App />);
        const submit = screen.getByTestId("submit");
        const usernameInputNode = screen.getByPlaceholderText("Username");
        const emailInputNode = screen.getByPlaceholderText("Email");
        const passwordInputNode = screen.getByPlaceholderText("Password");

        userEvent.type(usernameInputNode, "Meera");
        userEvent.type(emailInputNode, "meera.shrihari@yahoo.com");
        userEvent.type(passwordInputNode, "aasdfg");

        userEvent.click(submit);

        const successSignInText = screen.getByTestId("success");
        expect(successSignInText).toBeInTheDocument();
        
    });

    test("should display error if incorrect email", () => {
        render(<App />);
        const submit = screen.getByTestId("submit");
        const usernameInputNode = screen.getByPlaceholderText("Username");
        const emailInputNode = screen.getByPlaceholderText("Email");
        const passwordInputNode = screen.getByPlaceholderText("Password");

        userEvent.type(usernameInputNode, "Meera");
        userEvent.type(emailInputNode, "meera.shrihari");
        userEvent.type(passwordInputNode, "aasdfg");

        userEvent.click(submit);

        const errorMessage = screen.getByText(/This is not a valid email format/);
        expect(errorMessage).toBeInTheDocument();
        
    });
})


