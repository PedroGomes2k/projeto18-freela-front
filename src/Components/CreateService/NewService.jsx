import styled from "styled-components"
import Menu from "../MenuPage/Menu"
import InputUpdateCard from "./InputUpdateCard"

export default function CreateService() {
    return (
        <Container>
            <Menu />
            <Create>
                <InputUpdateCard />
            </Create>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
   
`
const Create = styled.div`
    width: 500px;
    height: 300px;

    background-color: #589afcb5;
    border: 3px solid #6585f026;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
    border-radius: x ;

    margin-top: 200px;

    position: relative;
    
    
`