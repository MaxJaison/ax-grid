import { Socket } from 'socket.io';
import { ClientToServerEvents, ServerToClientEvents } from '../global';

export interface FormField {
    field: string;
    type: string;
    name: string;
}

export interface BaseEnergyParameters {
    status: string;
    energyType: string;
    price: number;
    minPurchaseQuantity: number;
    contractTerms: string;
    paymentTerms: string;
}

export interface SolarEnergy {
    capacity: number;
    location: string;
    energyOutputPredictions: string;
    timeOfAvailability: string;
    certifications: string[];
}

export interface GasEnergy {
    capacity: number;
    deliveryMethod: string;
    flexibilityOfSupply: string;
    penalties: string;
    contractLength: string;
}

export interface WindEnergy {
    capacity: number;
    location: string;
    turbineEfficiency: string;
    timeOfAvailability: string;
    certifications: string;
}

export interface HydroEnergy {
    capacity: number;
    waterFlowRate: string;
    reservoirLevel: number;
    regulatoryCompliance: string;
    energyStorage: number;
}

export interface KineticEnergy {
    capacity: number;
    location: string;
    energyConversionEfficiency: number;
    predictabilityOfSource: string;
}

export interface ThermalEnergy {
    capacity: number;
    heatSourceStability: string;
    temperatureGradient: string;
    conversionEfficiency: string;
    location: string;
    environmentalImpactAndRegulation: string;
}

export type EnergyParameters = BaseEnergyParameters & (SolarEnergy | GasEnergy | WindEnergy | HydroEnergy | KineticEnergy | ThermalEnergy);

export interface NewDealModalProps {
    isOpen: boolean;
    onClose: () => void;
    socket: Socket<ServerToClientEvents, ClientToServerEvents>;
    energyType: string;
}

export interface FiltersProps {
    onOpen: () => void;
    socket: Socket<ServerToClientEvents, ClientToServerEvents>;
}
