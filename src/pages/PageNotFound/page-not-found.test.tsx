import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { PageNotFound } from './page-not-found.tsx';

describe('PageNotFound Component', () => {
    it('renders the PageNotFound component', async () => {
        render(<PageNotFound />);

        expect(screen.getByText(/Page Not Found./i)).toBeInTheDocument();
    });

    it('create PageNotFound snapshot', async () => {
        const { asFragment } = render(<PageNotFound />);
        expect(asFragment()).toMatchSnapshot();
    });
});
