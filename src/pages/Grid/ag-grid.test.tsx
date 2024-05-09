import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { AxGrid } from './ax-grid.tsx';

describe('AxGrid Component', () => {
    it('renders the AxGrid component', async () => {
        render(<AxGrid />);

        expect(screen.getByText(/Add New Deal/i)).toBeInTheDocument();
    });

    it('create AxGrid snapshot', async () => {
        const { asFragment } = render(<AxGrid />);
        expect(asFragment()).toMatchSnapshot();
    });
});
