import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom/vitest';

describe('App Component', () => {
    it('renders the App component', async () => {
        render(<App />, { wrapper: BrowserRouter });

        expect(screen.getByText(/Welcome to AX Grid/i)).toBeInTheDocument();
    });

    it('create App snapshot', async () => {
        const { asFragment } = render(<App />, { wrapper: BrowserRouter });
        expect(asFragment()).toMatchSnapshot();
    });
});
