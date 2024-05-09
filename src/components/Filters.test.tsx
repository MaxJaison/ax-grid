import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { Filters } from './Filters.tsx';
import { Socket as ClientSocket } from 'socket.io-client';

describe('Filters Component', () => {
    it('renders the Filters component', async () => {
        render(<Filters onOpen={() => {}} socket={ClientSocket} />);

        expect(screen.getByText(/Select which type of energy to display in the grid/i)).toBeInTheDocument();
    });

    it('create Filters snapshot', async () => {
        const { asFragment } = render(<Filters onOpen={() => {}} socket={ClientSocket} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
