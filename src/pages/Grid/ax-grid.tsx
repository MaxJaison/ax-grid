import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Stack, useDisclosure, Button } from '@chakra-ui/react';
import { Filters } from '../../components/Filters.tsx';
import { DEFAULT_COLUMNS, ENERGY_TYPES } from '../../utils/constants.ts';
import { NewDealModal } from '../../components/NewDealModal.tsx';
import { useEffect, useState } from 'react';
import { socket } from '../../utils/socket.ts';
import { getCustomColumns } from '../../utils/mocks.ts';

export const AxGrid = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [allData, setAllData] = useState<string[][]>([]);
    const [energyType, setEnergyType] = useState(ENERGY_TYPES[0]);

    useEffect(() => {
        const onConnect = () => {
            console.log('connected');
        };

        const onDisconnect = () => {
            console.log('disconnected');
        };

        const onSendEnergy = (energy: string) => {
            setEnergyType(energy);
        };

        const onAllTradeEvent = (allTrades: string[][]) => {
            setAllData(allTrades);
        };

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('all-trades', onAllTradeEvent);
        socket.on('send-energy', onSendEnergy);

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('all-trades', onAllTradeEvent);
            socket.off('send-energy', onSendEnergy);
        };
    }, []);

    const proceedTrade = (id: number) => {
        socket.emit('trade-status', { id, status: 'Processing' });
    };

    const madeTrade = (id: number) => {
        socket.emit('trade-status', { id, status: 'Completed' });
    };

    return (
        <Stack m="20px" spacing="10">
            <Filters onOpen={onOpen} socket={socket} />
            <TableContainer overflow="auto">
                <Table variant="striped" colorScheme="teal">
                    <Thead color="#F7F9FF">
                        <Tr>
                            {DEFAULT_COLUMNS.map((column: string, index: number) => {
                                return <Th key={index}>{column}</Th>;
                            })}
                            {getCustomColumns(energyType).map((column: string, index: number) => {
                                return <Th key={index}>{column}</Th>;
                            })}
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {allData
                            .filter((row) => row[2] === energyType)
                            .map((row, index: number) => {
                                return row ? (
                                    <Tr key={index}>
                                        {row.map((value: string, ind: number) => {
                                            if (ind == 0) {
                                                return;
                                            }
                                            return <Td key={ind}>{value}</Td>;
                                        })}
                                        <Td>
                                            {row[1] === 'Open' ? (
                                                <Button colorScheme="blue" onClick={() => proceedTrade(row[0])}>
                                                    Trade
                                                </Button>
                                            ) : row[1] === 'Processing' ? (
                                                <Button colorScheme="red" onClick={() => madeTrade(row[0])}>
                                                    Complete
                                                </Button>
                                            ) : (
                                                'Completed'
                                            )}
                                        </Td>
                                    </Tr>
                                ) : (
                                    <Tr></Tr>
                                );
                            })}
                    </Tbody>
                </Table>
            </TableContainer>
            <NewDealModal isOpen={isOpen} onClose={onClose} socket={socket} energyType={energyType} />
        </Stack>
    );
};
