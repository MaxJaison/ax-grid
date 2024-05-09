import {
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { useFormik } from 'formik';
import { DefaultFormFields, getCustomFields, setInitialValues } from '../utils/mocks.ts';
import { EnergyParameters, FormField, NewDealModalProps } from '../utils/types.ts';

export const NewDealModal = ({ isOpen, onClose, socket, energyType }: NewDealModalProps) => {
    const initialRef = useRef(null);

    const formik = useFormik({
        initialValues: setInitialValues(energyType) as EnergyParameters,
        onSubmit: (values: EnergyParameters, { resetForm }) => {
            values.energyType = energyType;
            socket.emit('add-trade', values);
            resetForm();
            onClose();
        },
    });

    return (
        <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
            <ModalOverlay />
            <form onSubmit={formik.handleSubmit}>
                <ModalContent minWidth="1000px">
                    <ModalHeader>{`Add New ${energyType} Deal`}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Heading as="h1" size="md">
                            Default Fields
                        </Heading>
                        {DefaultFormFields.map((field: FormField, index: number) => {
                            return field.type === 'number' ? (
                                <FormControl key={index} my="5" display="inline-flex" alignItems="normal" flexDirection="column" width="50%">
                                    <FormLabel>{field.name}</FormLabel>
                                    <NumberInput
                                        width="350px"
                                        min={0}
                                        id={field.field}
                                        name={field.field}
                                        isRequired={true}
                                        onChange={(val) => {
                                            formik.setFieldValue(field.field, val);
                                        }}
                                        value={formik.values[field.field]}
                                    >
                                        <NumberInputField ref={initialRef} />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>
                            ) : (
                                <FormControl key={index} my="5" display="inline-flex" alignItems="normal" flexDirection="column" width="50%">
                                    <FormLabel>{field.name}</FormLabel>
                                    <Input width="350px" isRequired={true} id={field.field} name={field.field} onChange={formik.handleChange} value={formik.values[field.field]} />
                                </FormControl>
                            );
                        })}
                        <Heading as="h1" size="md">
                            Custom Fields
                        </Heading>
                        {getCustomFields(energyType)!.map((field: FormField, index: number) => {
                            return field.type === 'number' ? (
                                <FormControl key={index} my="5" display="inline-flex" alignItems="normal" flexDirection="column" width="50%">
                                    <FormLabel>{field.name}</FormLabel>
                                    <NumberInput
                                        width="350px"
                                        min={0}
                                        id={field.field}
                                        name={field.field}
                                        isRequired={true}
                                        onChange={(val) => {
                                            formik.setFieldValue(field.field, val);
                                        }}
                                        value={formik.values[field.field]}
                                    >
                                        <NumberInputField ref={initialRef} />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>
                            ) : (
                                <FormControl key={index} my="5" display="inline-flex" alignItems="normal" flexDirection="column" width="50%">
                                    <FormLabel>{field.name}</FormLabel>
                                    <Input width="350px" id={field.field} name={field.field} isRequired={true} onChange={formik.handleChange} value={formik.values[field.field]} />
                                </FormControl>
                            );
                        })}
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" colorScheme="blue" mr={3}>
                            Submit
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </form>
        </Modal>
    );
};
