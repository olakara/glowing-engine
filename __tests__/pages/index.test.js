import Home from "../../pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";


test("home page show have a page header", () => {
    
    render(<Home />);
    expect(screen.getByTestId('pageheader')).toBeInTheDocument();
})