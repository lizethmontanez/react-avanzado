import React from "react";
import {useForm} from "react-hook-form"; 
import './form.css'

export default function SimpleForm() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = data => {
        console.log(data);
        console.log(`${data.nombre} es el vaquero más alto valiente y guapo que vive en ${data.direccion}`);
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nombre" {...register("nombre", {required: true, minLength: 5})}/>
            {errors.nombre?.type === 'required' && <p>El nombre es requerido, no seas tonoto</p>}
            {errors.nombre?.type === 'minLength' && <p>Tu nombre debe tener al menos 5 letras, no seas tonoto</p>}
            <input type="text" placeholder="Correo" {...register("correo")}/>
            <input type="text" placeholder="Numero" {...register("phone")}/>
            <input className={errors.direccion ? "input-error" : ""} type="text" placeholder="Direccion" {...register("direccion", {required: true, minLength: 10})}/>
        {errors.direccion && (
            <span className="error-message"> 
            {errors.direccion.type === 'required' ? 'Campo obligatorio': 'Debe tener al menos 10 caracteres'}
            </span>)
        }
            <button type="submit">Enviar</button>
        </form>
    );
}
