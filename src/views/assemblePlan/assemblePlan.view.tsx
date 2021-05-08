import React,{useState, useEffect} from 'react'
import { Header } from '../../components';
import carImg from '../../assets/car.png';
import { IoIosArrowDropleft,IoIosArrowDown,IoIosRemoveCircleOutline } from 'react-icons/io';
import { useParams } from 'react-router-dom';
import { observer } from "mobx-react"
import { BsCheck}  from 'react-icons/bs';
import './assemblePlan.view.scss';
import toyRimac from '../../assets/toy-rimac.png';
import iconSticker from '../../assets/icon-sticker.png';
import iconLLanta from '../../assets/icon-llantarobada.png';

import { useHistory } from 'react-router-dom';



const AssemblePlan = () => {
    interface RouteParams {
        model: string;
        year: string;
        placa: string;
    }
    const [amount, setAmount] = useState(20)
    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    })

    const params = useParams<RouteParams>();
    const history = useHistory();
   


    const handleClick = (value:any) => {
        history.push(`/felicitaciones`)  
    };
    useEffect(() => {
        console.log(params)
    })
    return (
        <>
            <Header />
            <div className="container">
                <div className="container__quotation">
                    <div className="container__quotation--leftbar">

                    </div>
                    <div className="container__quotation--info">
                        <div className="subcontainer__quotation ">
                            <div className="subcontainer__arrowback">
                                <IoIosArrowDropleft className="primary__color title__xlsmall" />
                                <span className="gray__color title__verysmall letter__spacing--6"> VOLVER</span>
                            </div>
                            <span className="title__big"> Mira las coberturas </span>
                            <p className="title__xsmall gray__color">Conoce las coberturas para tu plan </p>
                            <div className="subcontainer__top">
                                <div className="subcontainer__top--info--left">
                                    <div className="letter">
                                        <span className="font__roboto gray__color--1"> Placa: {params.placa}</span>
                                        <span> {params.model} {params.year} Golf</span>
                                        <span className="acian__color--1"> Editar </span>
                                    </div>
                                    <img className="toy__rimac" src={toyRimac} />
                                </div>
                                <div className="subcontainer__top--info--rigth">
                                    <div className="row space-between">
                                        <div className="col"> 
                                            <span className="title__small"> {formatter.format(amount)}</span>
                                            <span> mensuales</span>
                                        </div>
                                        <img className="toy__sticker" src={iconSticker} />
                                    </div>
                                    <div className="letter-right">
                                        <span>  <BsCheck className="green__color--2"/> El precio incluye </span>
                                        <span>  <BsCheck  className="green__color--2"/> Llanta de repuesto </span>
                                        <span>  <BsCheck  className="green__color--2"/> Analisis de motor </span>
                                        <span>  <BsCheck  className="green__color--2"/> Aros gratis </span>
                                    </div>
                                    <button className="button__primary" type="submit" onClick={handleClick}> LO QUIERO</button>
                                </div>
                                <div className="col g--10">
                                    <span className="gray__color--3 title__xlsmall"> Agrega o quita coberturas</span>
                                    <div className="box-tabs row">
                                        <span className="tabs title__verysmall gray__color--3"> Protege tu auto</span>
                                        <span className="tabs title__verysmall gray__color--3"> Protege a los que te rodean</span>
                                        <span className="tabs title__verysmall gray__color--3"> Mejora tu plan</span>
                                    </div>
                                    <div className="row g--10">
                                        <div className="">
                                            <img src={iconLLanta}/>
                                        </div>
                                        <div className="col g--10" >
                                            <div className="row space-between ">
                                                <span> LLanta robada</span>
                                                <IoIosArrowDown/>
                                            </div>
                                            <div className="row g--10 acian__color--2 ">
                                                <IoIosRemoveCircleOutline />
                                                <span> Quitar </span>
                                            </div>
                                            <p className="title__xxsmall gray__color--1"> He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default observer(AssemblePlan);