import styled from "styled-components";


export default function HomeServices({ name, nameServices, photo, price, description, phone }) {

    return (
        <Container>

            <CardService >
                <h1>{nameServices}</h1>
                <img src={photo} />
                <div className="description">
                    <p> {description}</p> <br />
                    <p> Preço do serviço: R$ {price},00</p>
                </div>
                <br />
               
            </CardService>

        </Container>
    )

}

const Container = styled.div`

    position: relative;
    top: 120px;
    margin-left: 20px;
   
    button{
        width: 35px;
        height: 25px;

        background-color: #56be36;

        border: 1px solid #4fa834;
        border-radius: 5px ;   

        color: #FFFFFF;
        font-weight: bold;

        margin-top: 40px;
    }

    .edit{
        display: flex;

        img{
            background-color: green;
        }

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