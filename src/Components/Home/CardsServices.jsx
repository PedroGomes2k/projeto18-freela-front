import styled from "styled-components";
import Menu from "../Menu/Menu";
import image from "../../assets/imagemMock.png"



export default function CardsServices() {

    const n = 1

    if (n === 2) {
        return (
            <Container>

                <CardService >
                    <h1>Engenheiro Civil</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xtkPloB2r6thN6GzBXzXFJuNShnvM0x4WA&usqp=CAU" alt="Imagem relacionada com o proposta do cliente" />
                    <div className="description">
                        <p> Trabalho com engenharia civil a muitos anos e meu serviço é de alta qualidade, assim proporcionando ao cliente grande satisfação!</p> <br />
                        <p> Preço do serviço: R$ 3.000</p>
                    </div>
                    <br />
                    <div className="namePrice">
                        <p> Italo Gomes</p>
                        <p> Contato: 31973453361</p>
                    </div>
                </CardService>


            </Container>)
    } else {
        return (
            <Container>
                <div className="edit">
                    <CardService >
                        <h1>Engenheiro Civil</h1>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xtkPloB2r6thN6GzBXzXFJuNShnvM0x4WA&usqp=CAU" alt="Imagem relacionada com o proposta do cliente" />
                        <div className="description">
                            <p> Trabalho com engenharia civil a muitos anos e meu serviço é de alta qualidade, assim proporcionando ao cliente grande satisfação!</p> <br />
                            <p> Preço do serviço: R$ 3.000</p>
                        </div>
                        <br />
                        <div className="namePrice">
                            <p> Italo Gomes</p>
                            <p> Contato: 31973453361</p>
                        </div>
                    </CardService>
                    

                </div>
            </Container>

        )
    }njnnnz

}

const Container = styled.div`

    display: flex;
    margin-left: 20px;
    margin-top: 80px;

    flex-wrap: wrap;
   
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

    margin: 40px 20px;

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