import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { NewDealModal } from './NewDealModal.tsx';
import { Socket as ClientSocket } from 'socket.io-client';

describe('NewDealModal Component', () => {
    it('renders the NewDealModal component', async () => {
        render(<NewDealModal energyType={'Solar'} isOpen={true} onClose={() => {}} socket={ClientSocket} />);

        expect(screen.getByText(/Default Fields/i)).toBeInTheDocument();
    });

    it('create NewDealModal snapshot', async () => {
        const { asFragment } = render(<NewDealModal energyType={'Solar'} isOpen={false} onClose={() => {}} socket={ClientSocket} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
