import styled from "styled-components"
import Menu from "../MenuPage/Menu"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Context } from "../../Context/Context"
import { services } from "../mockitemns";
import CardsServices from "./CardService"
import { useNavigate } from "react-router-dom"




export default function Services() {

    const { token } = useContext(Context)
    const navigate = useNavigate()

    function clickNewService(i){
        
        navigate(`/services/new-service`)
    }
    /*const [services, setServices] = useState()

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }

        const url = axios.get(`${process.env.VITE_API_URL}/services`, config)
            .then((res) => {

                setServices(res.data)
            })
            .catch((err) => console.log(err))

    }, [])*/
    return (
        <Container>

            <Menu />

            <div className="plusButton"> <button onClick={() => clickNewService()}> Novo Serviço</button></div>

            {services && services.map((s) =>

                <CardsServices
                    name={s.name}
                    nameServices={s.nameServices}
                    photo={s.photo}
                    price={s.price}
                    description={s.description}
                    key={s.id}
                    phone={s.phone}
                    service={"service"}
                />
            )}


        </Container>
    )
}

const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    
    .plusButton{
        

        button{
            text-align: center;
            height: 30px;
            font-family: 'Roboto',sans-serif;
            font-weight: bolder;

            color: #FFFFFF;

            box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
            background-color:#56be36 ;
            border: 2px solid  #4fa834;
            border-radius: 5px;
           
            position: absolute;
            top:115px;
            right: 5px;

            
        }
        
       
    }
`
