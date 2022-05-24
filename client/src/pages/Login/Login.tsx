import { Button, TextField } from '@mui/material'
import { useForm } from "react-hook-form";
import s from './Login.module.scss'

export type FieldsType = {
    name: string
}

export type LoginProps = {
    sendMessage: any,
}

export const Login = ({ sendMessage }: LoginProps) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FieldsType>();

    const submitForm = (data: FieldsType) => {
        const id = Date.now()
        sendMessage(JSON.stringify({ ...data, id }))
    }

    const isValid = watch("name")?.trim().length > 0

    return (
        <form className={s.form} onSubmit={handleSubmit(submitForm)}>
            <TextField 
                id="outlined-basic" 
                label="Имя" 
                variant="outlined" 
                {...register("name", { required: true })}
            />
            <Button 
                type="submit" 
                variant="contained"
                disabled={!isValid}>
                Войти
            </Button>
        </form>
    )
}