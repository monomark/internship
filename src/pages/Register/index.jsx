import React from 'react'
import {
    Box,
    Input,
    Select,
    VStack,
    Button,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { Auth, graphqlOperation, API, } from 'aws-amplify'
import { createUser } from '../../graphql/mutations'
import { COUNTRIES } from '../../constats'

const Register = () => {
    const { register, handleSubmit, formState: { errors } }  = useForm()

    const submit = async (data) => {
        try {
            const cognitoUser = await Auth.signUp({
                username: data.email.toLowerCase(),
                password: data.password,
            });
            
            const input = {
                id: cognitoUser.userSub,
                email: cognitoUser.user.username,
                phone_number: data.phone_number,
                first_name: data.first_name,
                last_name: data.last_name,
                age: data.age,
                country: data.country,
            }
            await API.graphql(graphqlOperation(createUser, {input}));


        } catch (e) {
            console.log('register error', e)
        }
    }

    return (
        <Box
            w="full"
            maxW="600px">
            <form
                noValidate
                onSubmit={handleSubmit(submit)}>
                <VStack
                    px="8"
                    spacing="4">
                    <Input
                        placeholder="email"
                        isInvalid={!!errors.email}
                        {...register('email', { required: true })}
                        />
                    <Input
                        placeholder="phone_number"
                        isInvalid={!!errors.phone_number}
                        {...register('phone_number', { required: true })}
                        type="number"
                        pattern="[0-9+]*"
                        />
                    <Input
                        placeholder="first_name"
                        isInvalid={!!errors.first_name}
                        {...register('first_name', { required: true })}
                        />
                    <Input
                        placeholder="last_name"
                        isInvalid={!!errors.last_name}
                        {...register('last_name', { required: true })}
                        />
                    <Input
                        placeholder="age"
                        isInvalid={!!errors.age}
                        {...register('age', { required: true })}
                        type="number"
                        pattern="[0-9]*"
                        />
                    <Input
                        placeholder="password"
                        isInvalid={!!errors.password}
                        {...register('password', { required: true })}
                        type="password"
                        />
                    <Select
                        placeholder="Country"
                        isInvalid={!!errors.country}
                        {...register('country', { required: true })}
                        >
                        {
                            COUNTRIES.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))
                        }
                    </Select>
                    <Button type="submit">
                        Register
                    </Button>
                </VStack>  
            </form>
        </Box>
    )
}

export default Register
