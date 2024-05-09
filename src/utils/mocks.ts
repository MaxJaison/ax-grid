import { FormField } from './types.ts';
import { GAS_COLUMNS, HYDRO_COLUMNS, KINETIC_COLUMNS, SOLAR_COLUMNS, THERMAL_COLUMNS, WIND_COLUMNS } from './constants.ts';

export const DefaultFormFields: FormField[] = [
    { field: 'price', type: 'number', name: 'Price' },
    { field: 'minPurchaseQuantity', type: 'number', name: 'Minimum Purchase Quantity' },
    { field: 'contractTerms', type: 'text', name: 'Contract Terms' },
    { field: 'paymentTerms', type: 'text', name: 'Payment Terms' },
];

export const SolarFormFields: FormField[] = [
    { field: 'capacity', type: 'number', name: 'Capacity' },
    { field: 'location', type: 'text', name: 'Location' },
    { field: 'energyOutputPredictions', type: 'text', name: 'Energy Output Predictions' },
    { field: 'timeOfAvailability', type: 'text', name: 'Time Of Availability' },
    { field: 'certifications', type: 'text', name: 'Certifications' },
];

export const GasFormFields: FormField[] = [
    { field: 'capacity', type: 'number', name: 'Capacity' },
    { field: 'deliveryMethod', type: 'text', name: 'Delivery Method' },
    { field: 'flexibilityOfSupply', type: 'text', name: 'Flexibility Of Supply' },
    { field: 'penalties', type: 'text', name: 'Penalties' },
    { field: 'contractLength', type: 'text', name: 'Contract Length' },
];

export const WindFormFields: FormField[] = [
    { field: 'capacity', type: 'number', name: 'Capacity' },
    { field: 'location', type: 'text', name: 'Location' },
    { field: 'turbineEfficiency', type: 'text', name: 'Turbine Efficiency' },
    { field: 'timeOfAvailability', type: 'text', name: 'Time Of Availability' },
    { field: 'certifications', type: 'text', name: 'Certifications' },
];

export const HydroFormFields: FormField[] = [
    { field: 'capacity', type: 'number', name: 'Capacity' },
    { field: 'waterFlowRate', type: 'text', name: 'Water Flow Rate' },
    { field: 'reservoirLevel', type: 'number', name: 'Reservoir Level' },
    { field: 'regulatoryCompliance', type: 'text', name: 'Regulatory Compliance' },
    { field: 'energyStorage', type: 'number', name: 'Energy Storage' },
];

export const KineticFormFields: FormField[] = [
    { field: 'capacity', type: 'number', name: 'Capacity' },
    { field: 'location', type: 'text', name: 'Location' },
    { field: 'energyConversionEfficiency', type: 'number', name: 'Energy Conversion Efficiency' },
    { field: 'predictabilityOfSource', type: 'text', name: 'Predictability Of Source' },
];

export const ThermalFormFields: FormField[] = [
    { field: 'capacity', type: 'number', name: 'Capacity' },
    { field: 'heatSourceStability', type: 'text', name: 'Heat Source Stability' },
    { field: 'temperatureGradient', type: 'text', name: 'Temperature Gradient' },
    { field: 'conversionEfficiency', type: 'text', name: 'Conversion Efficiency' },
    { field: 'location', type: 'text', name: 'Location' },
    { field: 'environmentalImpactAndRegulation', type: 'text', name: 'Environmental Impact And Regulation' },
];

export const getCustomFields = (energy: string) => {
    switch (energy) {
        case 'Solar':
            return SolarFormFields;
        case 'Gas':
            return GasFormFields;
        case 'Wind':
            return WindFormFields;
        case 'Hydro':
            return HydroFormFields;
        case 'Kinetic':
            return KineticFormFields;
        case 'Thermal':
            return ThermalFormFields;
    }
};

export const getCustomColumns = (energy: string) => {
    switch (energy) {
        case 'Solar':
            return SOLAR_COLUMNS;
        case 'Gas':
            return GAS_COLUMNS;
        case 'Wind':
            return WIND_COLUMNS;
        case 'Hydro':
            return HYDRO_COLUMNS;
        case 'Kinetic':
            return KINETIC_COLUMNS;
        case 'Thermal':
            return THERMAL_COLUMNS;
    }
};

export const setInitialValues = (energy: string) => {
    return {
        status: 'Open',
        energyType: '',
        price: 0,
        minPurchaseQuantity: 0,
        contractTerms: '',
        paymentTerms: '',
        ...getCustomFields(energy)!.reduce((acc, curr) => {
            acc[curr.field] = curr.type === 'number' ? 0 : '';
            return acc;
        }, {}),
    };
};
