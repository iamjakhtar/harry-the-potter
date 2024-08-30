import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {

    it("should render on the page", () => {
        render(
            <Header />
        )
        const headerText = screen.getByRole("link", {
          name: /harry the potter/i,
        });
        expect(headerText).toBeInTheDocument();
    })
})