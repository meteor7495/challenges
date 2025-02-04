
/* This component handles the creation of new todos, utilizing React Hook Form for validation and form management.
 It also consumes the `TodoContext`. */


import React, { useContext, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { TodoContext } from '../TodoContext';




const schema = yup.object().shape({
    title: yup.string().required('عنوان الزامی است'),
});

const TodoForm = () => {
    const { addTodo } = useContext(TodoContext);
    const { control, handleSubmit, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        addTodo(data.title);
        reset();
    };

    const textFieldStyles = {
        width: '28rem',
        marginTop:'8rem',
        marginBottom:'3rem',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
            '&:hover fieldset': {
                borderColor: 'blue',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'blue',
            },
        },
        '& .MuiInputLabel-root': {
            color: 'black',
        },
        '& .MuiInputLabel-root.Mui-focused': {
            color: 'blue',
        },
        '& .MuiInputBase-input': {
            color: 'black',
        },
    };
    const buttonStyles = {
        width: '10rem',
        backgroundColor: '#E45FEFFF',
        color: 'black',
        fontSize:'1rem',
        '&:hover': {
            backgroundColor: '#7875D6FF',
            color:'white',
        },
        marginTop: '1rem',
    };




    return (
        <>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    render={({field, fieldState: {error}}) => (
                        <TextField
                            {...field}
                            label="عنوان"
                            variant="outlined"
                            fullWidth
                            error={!!error}
                            helperText={error ? error.message : ''}
                            sx={textFieldStyles}
                        />
                    )}
                />
                <Button type="submit" variant="contained" color="primary" sx={buttonStyles}>
                    افزودن
                </Button>
            </form>
        </>


    );
};

export default TodoForm;