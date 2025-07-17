import React from 'react';
import Footer from '../UI/Footer';
import styles from '../pages/Reservas.module.css'; // Importa tu módulo CSS

import imagenHabitacion from '../../assets/img/imagenHabitacion.png'
import { Link } from 'react-router-dom';

function Reservas() {
  return (
    <>
      <header className={styles.headerHabitaciones}> {/* Usa la clase del módulo CSS */}
        

        <nav className={styles['Contenedor-Nav']}>
          <div className={styles['logotipo']}>
            <p className={styles['Titulo-gol']} >GOL</p>
            <p className={styles['Titulo-hoteles']}>HOTELS</p>
          </div>
          <div className={styles['Enlaces-Nav']}>
            <Link className={styles.navElement} to='/'>
              Inicio
            </Link>
            <Link className={styles.navElement} to='/Informacion'>Información</Link>
            <Link className={styles.navElement} to='/Habitaciones'>
              Habitaciónes
            </Link>
            <Link className={styles.navElement} to='/Contacto' >Contactanos</Link>
            <Link className={styles.navElement} to='/Reserva' >Reservas</Link>
            </div>
        </nav>

        <div className={styles['Titulo-Header']}>
            Reserva Online
        </div>
      </header>

      <div className={styles['contenedor-reserva']}>
        <section className={styles['header-reserva']}>
            <div className={styles['header-horario']}>
              <div>
                <p className={styles['label-header']}>Desde</p>
                <p className={styles['label-secundario']}>Lun 03 Oct 2023</p>
              </div>
              <div>
                <p className={styles['label-header']}>Hasta</p>
                <p className={styles['label-secundario']} >Mar 11 Oct 2023</p>
              </div>
            </div>
            <div  className={styles['header-habitaciones']}>
              <p className={styles['label-header']}>Habitaciones y huéspedes</p>
              <p className={styles['label-secundario']} >2 Adulto : 0 Niños</p>
            </div>
            <div className={styles['header-botones']}>
              <div className={styles['btn-adicionales']}>
                 <p>ADICIONALES</p>
              </div>
              <div className={styles['btn-registrar']}>
                  <p>REGISTRAR</p>
              </div>
             
            </div>
        </section>
      </div>

      <section className={styles['seccion-habitaciones']}>
          <div className={styles['card']}>
              <label className={styles['nombre-cama']}>1 cama tamaño King, habitacion</label>

              <div className={styles['detalles-habitacion']}>
                  <div>
                    <img src={imagenHabitacion}/>
                  </div>
                  <section className={styles['lista-tarifas']}>
                      <div className={styles['tarifa']}>
                          <div className={styles['contenedor-tarifa']}>
                            <p className={styles['label-tarifa']}>Tarifa estandar</p>
                            <p>Detalle de la tarifa</p>
                          </div>

                          <div className={styles['contenedor-precio']}>
                            <p> <span>109</span> Soles/Noche</p>
                          </div>

                            <div className={styles['btn-adicionales']}>
                                <p>SELECCIONAR</p>
                            </div>
                      </div>
                      <div className={styles['tarifa']}>
                          <div className={styles['contenedor-tarifa']}>
                            <p className={styles['label-tarifa']}>Tarifa especial</p>
                            <p className={styles['tarifa-especial']}>  Detalle de la tarifa</p>
                          </div>

                          <div className={styles['contenedor-precio']}>
                            <p> <span>109</span> Soles/Noche</p>
                          </div>

                          <div className={styles['btn-registrar']}>
                              <p>SELECCIONAR</p>
                          </div>
                      </div>
                      
                  </section>

              </div>
          </div>

          <div className={styles['card']}>
              <label className={styles['nombre-cama']}>1 cama tamaño King, habitacion</label>

              <div className={styles['detalles-habitacion']}>
                  <div>
                    <img src={imagenHabitacion}/>
                  </div>
                  <section className={styles['lista-tarifas']}>
                      <div className={styles['tarifa']}>
                          <div className={styles['contenedor-tarifa']}>
                            <p className={styles['label-tarifa']}>Tarifa estandar</p>
                            <p>Detalle de la tarifa</p>
                          </div>

                          <div className={styles['contenedor-precio']}>
                            <p> <span>109</span> Soles/Noche</p>
                          </div>

                            <div className={styles['btn-adicionales']}>
                                <p>SELECCIONAR</p>
                            </div>
                      </div>
                      <div className={styles['tarifa']}>
                          <div className={styles['contenedor-tarifa']}>
                            <p className={styles['label-tarifa']}>Tarifa especial</p>
                            <p className={styles['tarifa-especial']}>  Detalle de la tarifa</p>
                          </div>

                          <div className={styles['contenedor-precio']}>
                            <p> <span>109</span> Soles/Noche</p>
                          </div>

                          <div className={styles['btn-registrar']}>
                              <p>SELECCIONAR</p>
                          </div>
                      </div>
                      
                  </section>

              </div>
          </div>

          <div className={styles['card']}>
              <label className={styles['nombre-cama']}>1 cama tamaño King, habitacion</label>

              <div className={styles['detalles-habitacion']}>
                  <div>
                    <img src={imagenHabitacion}/>
                  </div>
                  <section className={styles['lista-tarifas']}>
                      <div className={styles['tarifa']}>
                          <div className={styles['contenedor-tarifa']}>
                            <p className={styles['label-tarifa']}>Tarifa estandar</p>
                            <p>Detalle de la tarifa</p>
                          </div>

                          <div className={styles['contenedor-precio']}>
                            <p> <span>109</span> Soles/Noche</p>
                          </div>

                            <div className={styles['btn-adicionales']}>
                                <p>SELECCIONAR</p>
                            </div>
                      </div>
                      <div className={styles['tarifa']}>
                          <div className={styles['contenedor-tarifa']}>
                            <p className={styles['label-tarifa']}>Tarifa especial</p>
                            <p className={styles['tarifa-especial']}>  Detalle de la tarifa</p>
                          </div>

                          <div className={styles['contenedor-precio']}>
                            <p> <span>109</span> Soles/Noche</p>
                          </div>

                          <div className={styles['btn-registrar']}>
                              <p>SELECCIONAR</p>
                          </div>
                      </div>
                      
                  </section>

              </div>
          </div>

          <div className={styles['card']}>
              <label className={styles['nombre-cama']}>1 cama tamaño King, habitacion</label>

              <div className={styles['detalles-habitacion']}>
                  <div>
                    <img src={imagenHabitacion}/>
                  </div>
                  <section className={styles['lista-tarifas']}>
                      <div className={styles['tarifa']}>
                          <div className={styles['contenedor-tarifa']}>
                            <p className={styles['label-tarifa']}>Tarifa estandar</p>
                            <p>Detalle de la tarifa</p>
                          </div>

                          <div className={styles['contenedor-precio']}>
                            <p> <span>109</span> Soles/Noche</p>
                          </div>

                            <div className={styles['btn-adicionales']}>
                                <p>SELECCIONAR</p>
                            </div>
                      </div>
                      <div className={styles['tarifa']}>
                          <div className={styles['contenedor-tarifa']}>
                            <p className={styles['label-tarifa']}>Tarifa especial</p>
                            <p className={styles['tarifa-especial']}>  Detalle de la tarifa</p>
                          </div>

                          <div className={styles['contenedor-precio']}>
                            <p> <span>109</span> Soles/Noche</p>
                          </div>

                          <div className={styles['btn-registrar']}>
                              <p>SELECCIONAR</p>
                          </div>
                      </div>
                      
                  </section>

              </div>
          </div>

          

          
        
      </section>

      <Footer/>
    </>
  );
}

export default Reservas;
