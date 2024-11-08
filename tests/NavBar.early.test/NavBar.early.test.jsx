// Unit tests for: NavBar

import React from "react";
import NavBar from "..srccomponentsNavBar";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("NavBar() NavBar method", () => {
	// Happy Path Tests
	describe("Happy Path", () => {
		it("should render the NavBar with logo and links", () => {
			// Render the NavBar component within a Router
			const { getByAltText, getByText } = render(
				<Router>
					<NavBar />
				</Router>
			);

			// Check if the logo is rendered
			expect(getByAltText("React Jobs")).toBeInTheDocument();

			// Check if the links are rendered
			expect(getByText("Home")).toBeInTheDocument();
			expect(getByText("Jobs")).toBeInTheDocument();
			expect(getByText("Add Job")).toBeInTheDocument();
		});

		it("should apply active class to the active link", () => {
			// Render the NavBar component within a Router
			const { getByText } = render(
				<Router>
					<NavBar />
				</Router>
			);

			// Simulate the active link scenario
			const homeLink = getByText("Home");
			expect(homeLink).toHaveClass("bg-black text-white");
		});
	});

	// Edge Case Tests
	describe("Edge Cases", () => {
		it("should handle missing logo gracefully", () => {
			// Mock the logo import to simulate a missing logo
			jest.mock("..srcassetsimageslogo.png", () => "");

			// Render the NavBar component within a Router
			const { queryByAltText } = render(
				<Router>
					<NavBar />
				</Router>
			);

			// Check if the logo is not rendered
			expect(queryByAltText("React Jobs")).not.toBeInTheDocument();
		});

		it("should handle no links scenario gracefully", () => {
			// Mock NavLink to simulate no links
			jest.mock("react-router-dom", () => ({
				...jest.requireActual("react-router-dom"),
				NavLink: () => null,
			}));

			// Render the NavBar component within a Router
			const { queryByText } = render(
				<Router>
					<NavBar />
				</Router>
			);

			// Check if no links are rendered
			expect(queryByText("Home")).not.toBeInTheDocument();
			expect(queryByText("Jobs")).not.toBeInTheDocument();
			expect(queryByText("Add Job")).not.toBeInTheDocument();
		});
	});
});

// End of unit tests for: NavBar
