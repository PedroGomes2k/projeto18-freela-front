import styled from "styled-components";
import Menu from "../Menu/Menu";
import CardsServices from "./CardsServices";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/Context";
import axios from "axios";

export default function Home() {

    const { token } = useContext(Context)
    const [services, setServices] = useState()

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }

        const url = axios.get(`${process.env.REACT_APP_API_URL}/home`, config)
            .then((res) => {

                setServices(res.data)
            })
            .catch((err) => console.log(err))

    }, [])

    return (
        <Container>
            <Menu />
            <CardsServices />

        </Container>
    )
}

const Container = styled.div`
    
`