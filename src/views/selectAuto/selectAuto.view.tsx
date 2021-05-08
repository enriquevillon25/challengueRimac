import React,{ useState, useEffect } from 'react';
import { Header } from '../../components';
import carImg from '../../assets/car.png';
import { observer } from "mobx-react"
import { IoIosArrowDropleft } from 'react-icons/io';
import { useParams } from 'react-router-dom';

import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import './selectAuto.view.scss';

interface RouteParams {
    id: string;
    placa: string;
}

const SelectAuto = () => {
    interface select {
        value: number, 
        label: string,
    }
    const MAX : number = 16500;
    const MIN : number = 12500;
    const years : select[] = [];
    const cars: select[] = [];
    const marca : string[] = ['Wolkswagen','Toyota','Nissan','Hyundai',"Mercedez Benz"];
    const [count, setCount] = useState(14300);
    const params = useParams<RouteParams>();
    const [year, setYear] = useState();
    const [car, setCar] = useState();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
   

    const inputYear = (event:any) => {
        setYear(event.value);
    }

    const inputCar = (event:any) => {
        setCar(event.label);
    }
  
    const sum = () =>{
        if(count < MAX){
            setCount(count+100);
        }
    }

    const rest = () =>{
        if(count > MIN){
            setCount(count-100);
        }
    }
    const handleClick = (value:any) => {
        history.push(`/arma-tu-plan/${params.placa}/${year}/${car}`)  
    };
    const generateSelects = () =>{
        for(let i=0;i<5;i++){
            years.push({value:2016+i, label:(2016+i).toString()});
            cars.push({value:i,label: marca[i]})
        }
    }
    
    useEffect(() => {
        generateSelects();
        console.log('params', params)
    })

    return (
        <>
            <Header />
                <div className="container__quotation">
                    <div className="container__quotation--leftbar">

                    </div>
                    <form className="container__quotation--info"  onSubmit={handleSubmit(handleClick)} >
                        <div className="subcontainer__quotation">
                            <div className="subcontainer__arrowback">
                                <IoIosArrowDropleft className="primary__color title__xlsmall" />
                                <span className="gray__color title__verysmall letter__spacing--6"> VOLVER</span>
                            </div>
                            <span className="title__big"> ¡Hola, <span className="primary__color"> {params.id}!</span> </span>
                            <p className="title__xsmall">Completa los datos de tu auto </p>
                            <div className="subcontainer__uptop">
                                <div className="subcontainer__top">
                                    <Select className="select__document" options={years} placeholder="Año" onChange={inputYear} name="year"></Select>
                                    <Select className="select__document" options={cars} placeholder="Marca" onChange={inputCar} name="model"></Select>
                                </div>
                                <div className="help col">
                                    <span> AYUDA </span>
                                    <hr className="w--100"/>
                                    <div className="subcontainer-help row space-between">
                                        <div className="col space-between" >
                                            <span>¿No encuentras el modelo?</span>
                                            <span className="acian__color--1 point"> CLIC AQUÍ</span>
                                        </div>
                                        <img src = { carImg } />
                                    </div>
                                </div>
                            </div>
                            <div className="subcontainer__down">
                                <div className="subcontainer__gas">
                                    <span>¿Tu auto es a gas?</span>
                                    <div className="box-radios row">
                                        <input type="radio" /> SI
                                        <input type="radio" /> NO
                                    </div>
                                </div>
                                <hr className="w--100"/>
                                <div className="subcontainer__suma">
                                    <div className="subcontainer__suma--letter">
                                        <span>Indica la suma asegurada</span>
                                        <div className="subcontainer__minmax">
                                            <span className="title__verysmall gray__color--2"> MIN $12500</span>
                                            <span className="title__verysmall gray__color--2" > MAX $16500</span>
                                        </div>
                                    </div>
                                    <div className="input__suma title__xsmall">
                                        <span className="acian__color--1 point wht--7 title__xlsmall" onClick={rest} > - </span>
                                        <span className="gray__color--3"> <span> $ </span>{count} </span>
                                        <span className="acian__color--1 point wht--7 title__xlsmall" onClick={sum}> + </span>
                                    </div>
                                </div>
                                <button type="submit" className="button__primary">Continuar</button>
                            </div>
                        </div>
                    </form>
                </div>
        </>
    )
}

export default observer(SelectAuto);
