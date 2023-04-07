import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function SignUp() {
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const initialValues = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    name: '',
    apellidos: '',
    address: ''
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Ingrese un correo electrónico válido')
      .required('Este campo es obligatorio'),
    username: Yup.string().required('Este campo es obligatorio'),
    password: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('Este campo es obligatorio'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir')
      .required('Este campo es obligatorio'),
    name: Yup.string().required('Este campo es obligatorio'),
    apellidos: Yup.string().required('Este campo es obligatorio'),
    address: Yup.string().required('Este campo es obligatorio')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local/register', {
        username: values.username,
        email: values.email,
        password: values.password,
        name: values.name,
        apellidos: values.apellidos,
        adress: values.address
      });
      setLoading(false);
      resetForm();
      navigate('/login');
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert('Hubo un error al crear la cuenta');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Registro</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo electrónico</label>
              <Field type="email" name="email" id="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <Field type="text" name="name" id="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="apellidos" className="form-label">Apellidos</label>
              <Field type="text" name="apellidos" id="apellidos" className="form-control" />
              <ErrorMessage name="apellidos" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Dirección</label>
              <Field type="text" name="address" id="address" className="form-control" />
              <ErrorMessage name="address" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Nombre de usuario</label>
              <Field type="text" name="username" id="username" className="form-control" />
              <ErrorMessage name="username" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <Field type="password" name="password" id="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="text-danger" />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña</label>
              <Field type="password" name="confirmPassword" id="confirmPassword" className="form-control" />
              <ErrorMessage name="confirmPassword" component="div" className="text-danger" />
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {loading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                'Registrarse'
              )}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;