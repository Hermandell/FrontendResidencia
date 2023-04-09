import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function SignIn() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    usernameOrEmail: '',
    password: '',
  };

  const validationSchema = Yup.object({
    usernameOrEmail: Yup.string().required('Este campo es obligatorio'),
    password: Yup.string().required('Este campo es obligatorio'),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: values.usernameOrEmail,
        password: values.password,
      });
      setLoading(false);
      resetForm();
      localStorage.setItem('username', response.data.user.username);
      localStorage.setItem('token', response.data.jwt);
      navigate('/');
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert('Hubo un error al iniciar sesión');
    } finally {
      setSubmitting(false);
    }
  };

  return (

    <div className="d-flex justify-content-center align-items-center vh-100">
      <div>
        <div className="container mt-5">
        <img src="../../assets/img/LOGO/2.png" width="150" alt="Logo" className="img-fluid mb-2 ms-5" />
          <h1 className="text-center">Inicio de sesión</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="mb-3">
                  <label htmlFor="usernameOrEmail" className="form-label">
                    Nombre de usuario o correo electrónico
                  </label>
                  <Field
                    type="text"
                    name="usernameOrEmail"
                    id="usernameOrEmail"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="usernameOrEmail"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <Field type="password" name="password" id="password" className="form-control" />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  {loading ? (
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    'Iniciar sesión'
                  )}
                </button>
                <div className="mt-3">
                  ¿No tienes una cuenta?{' '}
                  <Link to="/signup" className="text-decoration-none">
                    Regístrate aquí
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
    
  );
}

export default SignIn;
