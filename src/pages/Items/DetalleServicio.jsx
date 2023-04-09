import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Loading from './Loading';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DetalleServicio = () => {
    const { id } = useParams();
    const [servicio, setServicio] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:1337/api/servicios/${id}?populate=*`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();
                setServicio(data.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    if (!servicio) {
        return <Loading />;
    }

    const initialValues = {
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: '',
    };

    const validationSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('El nombre es obligatorio'),
        correo: Yup.string()
            .email('El correo debe ser válido')
            .required('El correo es obligatorio'),
        telefono: Yup.string()
            .required('El teléfono es obligatorio'),
        mensaje: Yup.string()
            .required('El mensaje es obligatorio'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await fetch('http://localhost:1337/api/cotizadors', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ data: values }),
            });
            const data = await response.json();
            console.log(data);
            resetForm();
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="">
            <section className="portfolio-block">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src={`http://localhost:1337${servicio.attributes.img.data.attributes.formats.large.url}`} alt={servicio.attributes.titulo} />
                        </div>
                        <div className="col-md-6">
                            <h2>{servicio.attributes.titulo}</h2>
                            <p>{servicio.attributes.tiempo}</p>
                            <p>{servicio.attributes.descripcion}</p>

                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className="mb-1">
                                            <label htmlFor="nombre" className="form-label">Nombre</label>
                                            <Field type="text" name="nombre" className="form-control" />
                                            <ErrorMessage name="nombre" component="div" className="text-danger" />
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="correo" className="form-label">Correo electrónico</label>
                                            <Field type="email" name="correo" className="form-control" />
                                            <ErrorMessage name="correo" component="div" className="text-danger" />
                                        </div>
                                        <div className="mb-1">
                                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                                            <Field type="tel" name="telefono" className="form-control" />
                                            <ErrorMessage name="telefono" component="div" className="text-danger" />
                                        </div>

                                        <div className="mb-1">
                                            <label htmlFor="mensaje" className="form-label">Mensaje</label>
                                            <Field as="textarea" name="mensaje" className="form-control" rows={3} />
                                            <ErrorMessage name="mensaje" component="div" className="text-danger" />
                                        </div>

                                        <button type="submit" className="btn btn-primary">Enviar</button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
export default DetalleServicio;
