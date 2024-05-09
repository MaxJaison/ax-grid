import { Box, Button, Select, Text } from '@chakra-ui/react';
import { ENERGY_TYPES } from '../utils/constants.ts';
import { FiltersProps } from '../utils/types.ts';
import { ChangeEvent } from 'react';

export const Filters = ({ onOpen, socket }: FiltersProps) => {
    return (
        <Box display="flex" alignItems="center" bg="#DFEAFF" px="5" py="3">
            <Text fontSize="18" pr="5">
                Select which type of energy to display in the grid:{' '}
            </Text>
            <Select w="130px" variant="filled" borderColor="#3182ce" onChange={(event: ChangeEvent<HTMLSelectElement>) => socket.emit('new-energy', event.target.value)} defaultValue={ENERGY_TYPES[0]}>
                {ENERGY_TYPES.map((energy: string, index: number) => {
                    return (
                        <option key={index} value={energy}>
                            {energy}
                        </option>
                    );
                })}
            </Select>
            <Button colorScheme="blue" ml="auto" onClick={onOpen}>
                Add New Deal
            </Button>
        </Box>
    );
};
