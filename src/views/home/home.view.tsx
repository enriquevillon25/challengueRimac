import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.view.scss';
import { observer } from "mobx-react"
import { Header } from '../../components';
import { useForm } from "react-hook-form";
import imageIntro from "../../assets/image-intro.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Select from 'react-select';
import { useHistory } from 'react-router-dom';

const Home = () => {

  const typeDocument = [
    { value: 1, label: 'DNI' },
    { value: 2, label: 'RE' },
  ]
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [client, setClient] = useState([]);

  const history = useHistory();
  const getUser = () => {
    axios.get('https://randomuser.me/api').then(response => {
      console.log(response.data.results[0]);
      setClient(response.data.results[0].name.first)
    })

  }
  const handleClick = (value:any) => {
    history.push(`seleccionar-auto/${client}/${value.numPlate}`)
  };
  

  useEffect(() => {
    getUser();
  }, [])
  

  return (
    <>
      <Header />
      <div className="container__intro">
        <div className="container__intro--leftbar row">
          <div className="subcontainer__intro">
            <img className="image__intro" src={imageIntro} />
            <div className="box__titles col">
              <span className="title__verysmall gray__color--3 wht--7"> ¡NUEVO!</span>
              <span className="title__medium lh__48"> Seguro <span className="primary__color"> Vehicular Tracking  </span></span>
              <span className="title__xxsmall gray__color--2 lh__24" > Cuentanos donde le haras seguimiento a tu seguro </span>
            </div>
          </div>
        </div>
        <div className="container__intro--info row">
          <div className="subcontainer__form">
            <span className="title__small"> Déjanos tus datos</span>
            <form className="form" onSubmit={handleSubmit(handleClick)}>
              <div className="row">
                <Select className="select__document" options={typeDocument} ></Select>
                <input {...register("numDoc", { required: true })} placeholder="Nro. de doc" />
              </div>
              <input {...register("numCel", { required: true })} placeholder="Celular"/>
              <input {...register("numPlate", { required: true })} placeholder="Placa" />
              <div className="subcontainer__terms">
                <input type="checkbox"></input>
                <span className="title__verysmall">
                  Acepto la Política de Protecciòn de Datos Personales y los Términos y Condiciones.
                  </span>
              </div>
              {/* <Link to={`seleccionar-auto/${client}`} className="white__color dec__none button__primary"> COTÍZALO </Link> */}
              <button type="submit" className="button__primary" >
                  CÓTIZALO
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default (observer(Home));