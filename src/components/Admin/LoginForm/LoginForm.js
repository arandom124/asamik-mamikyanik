import React from 'react';
import { Button, Form, } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import { loginApi } from '../../../api/user';
import { useAuth } from '../../../hooks';
import './LoginForm.scss';

import image from '../../../assets/lenos.png'; // Importa tu imagen aquí

export function LoginForm() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formValue) => {
      try {
        const response = await loginApi(formValue);
        const { access } = response;
        login(access);
      } catch (error) {
        console.log('ERROR');
        console.log(error);
        toast.error(error.message);
      }
    },
  });

  return (
    <>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-red-500">Bienvenido admin !</h1>
          <p className="py-6 text-lime-600">
          Estadero familiar Abierto de lunes a domingo Se alquila para toda clase de eventos sociales y culturales.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <Form  onSubmit={formik.handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Correo electrónico"
                  className="input input-bordered"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.errors.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text ">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  className="input input-bordered "
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.errors.password}
                />
                </div>
              <div className="form-control mt-6 shadow-lg shadow-cyan-500/50 rounded-full ">
                <Button type="submit" content="Iniciar sesión" primary />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function initialValues() {
  return {
    email: '',
    password: '',
  };
}

function validationSchema() {
  return {
    email: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
