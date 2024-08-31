import { render, screen } from "@testing-library/react"
import Footer from "./Footer"

describe("Footer", () => {

    it("Should render on the page with correct text", () => {
        render(<Footer />);

        const footerText = screen.getByText(/harry the potter/i);
        expect(footerText).toBeInTheDocument();
    })
})