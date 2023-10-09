import { useState } from "react";
import styled from "styled-components";
import { IoIosAddCircleOutline, IoIosCloseCircleOutline } from "react-icons/io"
import { useNavigate } from "react-router-dom";


export default function CardsServices({ name, nameServices, photo, price, description, phone }) {

    const [status, setStatus] = useState("disabled")
    const navigate = useNavigate()

    function editCard() {

        navigate(`/services/update-service`)
    }


    if (status === "disabled") {
        return (

            <Container>

                <CardService onClick={() => setStatus("active")}>
                    <h1>{nameServices}</h1>
                    <img src={photo} />
                    <div className="description">
                        <p> {description}</p> <br />
                        <p> Preço do serviço: R$ {price},00</p>
                    </div>
                </CardService>
            </Container>

        )
    } else if (status === "active") {
        return (
            <Container>
                <div className="edit">
                    <CardService onClick={() => setStatus("disabled")}>
                        <h1>{nameServices}</h1>
                        <img src={photo} />
                        <div className="description">
                            <p> {description}</p> <br />
                            <p> Preço do serviço: R$ {price},00</p>
                        </div>

                    </CardService>
                    <div className="buttons">
                        <button onClick={() => editCard()} className="buttonGreen"> <IoIosAddCircleOutline /></button>
                        <button onClick={() => setStatus("disabled")} className="buttonRed"> <IoIosCloseCircleOutline /> </button>
                    </div>
                </div>
            </Container>

        )
    }
}

const Container = styled.div`   

    position: relative;
    top: 140px;
    margin-left: 20px;
    
    
    button{
        width: 45px;
        height: 25px;

        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);

        color: #FFFFFF;
        font-weight: bold;
        margin-left: 4px;
        margin-top: 20px;

        border-radius: 10px;
    }

    .edit{
        display: flex;
        margin: 5px;
        
        img{
            background-color: green;
        }

    }  
    .buttonGreen{
        background-color:#56be36 ;
        border: 1px solid  #4fa834;
     }
    .buttonRed{
        background-color:#ff1a09;
        border: 1px solid  #d30e0e;
    }
    .buttons{
      display: flex;
      flex-direction: column;
    }

`
const CardService = styled.div`

    display: flex;
    flex-direction: column;
    
    width: 280px;
    height: 500px;

    margin: 20px 10px;

    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
    background-color: #5899fc;
    border: 3px solid #6585f0;
    border-radius: 10px;

    position: relative;

    cursor: pointer;
    img{
        width: 250px;
        height: 150px;

        border-radius: 8px;
        border: 1px solid #6585f0;
        
        margin: 0px auto;
        margin-bottom: 20px;

        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.25);
    }

    h1{
        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
        font-size: 22px;
        font-weight: bold;

        text-align: center;

        margin: 10px 0px;
    }

    p{  
        width: 250px;

        font-family: 'Roboto', sans-serif;
        color: #FFFFFF;
        font-size: 18px;

        margin: 5px;
        margin-left: 15px;
    }

    .description{
        

    }

    .namePrice{

        position: absolute;
        bottom: 0px;
    }
    
`