import React from 'react'

const AcercaDe = () => {
  return (
    <>
      <section id="about" className="bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="text-primary mb-3">Nuestro equipo</h2>
              <p>
                Además de estar altamente capacitados y comprometidos, nuestro equipo en XNUGACER se destaca por su atención al detalle y su capacidad para adaptarse a las necesidades específicas de cada cliente. <br /> <br />

                Nos esforzamos por comprender las metas y objetivos de nuestros clientes, lo que nos permite ofrecer soluciones a medida y enfocadas en los resultados que ellos desean alcanzar. <br /> <br />

                En XNUGACER promovemos un ambiente de trabajo colaborativo y respetuoso, donde cada miembro del equipo es valorado por sus habilidades y contribuciones.

                Estamos comprometidos con el aprendizaje continuo y la mejora constante, lo que nos permite mantenernos actualizados en las últimas tendencias y tecnologías en nuestro  campo de trabajo. <br />
              </p>
            </div>

            <div className="col-lg-6">
              <img src="../../assets/img/avatars/avatar.jpg" className="img-fluid rounded-circle" alt="Equipo" />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title text-primary">Nuestra Misión</h4>
                  <p className="card-text">En XNUGACER nuestra misión es proporcionar soluciones tecnológicas personalizadas y de alta calidad a nuestros clientes, ayudándoles a alcanzar sus objetivos de negocio de manera eficiente y efectiva. Nos esforzamos por ser líderes en nuestro campo, brindando servicios excepcionales y fomentando relaciones duraderas con nuestros clientes, basadas en la confianza y la colaboración.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title text-primary">Nuestra Visión</h4>
                  <p className="card-text">Nuestra visión en XNUGACER es ser reconocidos como el proveedor líder de soluciones tecnológicas en el mercado, siendo conocidos por la calidad de nuestro trabajo, nuestra innovación y nuestra atención al cliente. Nos esforzamos por mantenernos a la vanguardia de los cambios tecnológicos y ofrecer soluciones personalizadas a nuestros clientes, ayudándoles a alcanzar el éxito y crecer de manera sostenible en sus respectivos campos.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title text-primary">Nuestras Áreas de Experiencia</h4>
                  <ul className="list-unstyled">
                    <ol>* Civil </ol>
                    <ol>* Mecánica </ol>
                    <ol>* Eléctrica </ol>
                    <ol>* Ambiental </ol>
                    <ol>* Procesos </ol>
                    <ol>* Software </ol>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-12">
              <h3 className="text-primary">Recomendaciones de nuestros clientes</h3>
              <div className="card-deck">
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">"Excelente servicio, muy profesional y amable. Lo recomiendo totalmente."</p>
                    <h5 className="card-title">Cliente 1</h5>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <p className="card-text">"Muy satisfecho con los resultados, sin duda volvería a contratar sus servicios."</p>
                    <h5 className="card-title">Cliente 2</h5>
                  </div>
                </div>

                <div className="card">
                  <div className="card-body">
                    <p className="card-text">"El equipo de [nombre de la empresa] es altamente capacitado y ha sido de gran ayuda para mi negocio."</p>
                    <h5 className="card-title">Cliente 3</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AcercaDe