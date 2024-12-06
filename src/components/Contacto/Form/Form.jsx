import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { createPortal } from "react-dom";

import FormCss from "../Form/Form.module.scss";





export const Form = () => {

  const ServiceID = import.meta.env.VITE_YOUR_SERVICE_ID;
  const TemplateID = import.meta.env.VITE_YOUR_TEMPLATE_ID;
  const PublicKEY = import.meta.env.VITE_YOUR_PUBLIC_KEY;

  const form = useRef();

  const [changeText, UsechangeText] = useState(true);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const Title = () => <h1>Mi Título Personalizado</h1>;

  const sendEmail = () => {
      
      UsechangeText(false)
      emailjs
        .sendForm(ServiceID, TemplateID, form.current, PublicKEY)
        .then(
          () => {
            console.log("SUCCESS!");
            //Si esta ok entonces popup y se resetea el form
            Swal.fire({
              icon: "success",
              title: "Enviado", // Es necesario un placeholder para inicializar el contenedor
              didOpen: () => {
                createPortal(<Title />, Swal.getTitle());
              },
              customClass: {
                confirmButton: "bg-[#ecb745]", // Color personalizada para el botón OK
              }
            });
          
            reset();

            UsechangeText(true);

          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
        console.log(form.current);
  };
  
  /*
  const Onclick = () =>{
   
   reset();
  }

  */

  const Onsubmit = (data) =>{
    console.log(data);
    //Intenta mandar el mail
    sendEmail(data);
    
    
  }
  
 


 
  return (
    <div className={FormCss.form__container}>
       <p>Envíanos tu mensaje</p>
      <form className="bg-black flex flex-col" ref={form} onSubmit={handleSubmit(Onsubmit)}>
        
        <input type="text" name="name" placeholder="Nombre" {...register('name', {
          required: true
        })}/>
         {errors.name?.type === 'required' && <p>El campo nombre es requerido</p>}

        
        <input type="text" name="phone" placeholder="Teléfono"  {...register('phone', {
          required: true
        })}/>
        {errors.phone?.type === 'required' && <p>El campo Telefono es requerido</p>}

        
        <input type="email" name="mail"  placeholder="Email" {...register('mail',{
           required: true,
           pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
        })}/>
         {errors.mail?.type === 'required' && <p>Complete el campo mail</p>}
         {errors.mail?.type === 'pattern' && <p>El formato de email es incorrecto</p>}
      
        <textarea name="message" placeholder="Mesanje" {...register('message')}/>
        <button style={{ backgroundColor: "orange" }} type="submit" value="Send">{changeText ?  "ENVIAR" : "cargando..."}</button>
       
      </form>
    </div>
  );
};
