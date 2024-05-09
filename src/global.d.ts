import { EnergyParameters } from './utils/types.ts';

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
    'add-trade': (data: EnergyParameters) => void;
    'trade-status': (status: { id: number; status: string }) => void;
    'new-energy': (energy: string) => void;
}
