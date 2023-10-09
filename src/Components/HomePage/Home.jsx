import styled from "styled-components";
import Menu from "../MenuPage/Menu";
import HomeServices from "./HomeServices";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";
import { services } from "../mockitemns";

export default function Home() {


    const { token } = useContext(Context)
    const [services, setServices] = useState()

    
    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }

        const url = axios.get(`${import.meta.env.VITE_API_URL}/home`, config)
            .then((res) => {
                console.log(res.data)
                setServices(res.data)
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <Container>
            <Menu />

            {services && services.map((s) =>

                <HomeServices
                    name={s.name}
                    nameServices={s.nameService}
                    photo={s.photo}
                    price={s.price}
                    description={s.description}
                    key={s.id}
                    phone={s.phone}
                    service={"menu"}
                />
            )}


        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`