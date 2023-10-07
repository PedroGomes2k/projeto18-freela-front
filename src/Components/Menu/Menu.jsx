import styled from "styled-components"
import image from "../../assets/samurai.png"

export default function Menu() {
    return (
        <Container>
            <img src={image} alt="Imagem do Logo" />

            <div className="logout">
                <button onClick={() => console.log(1)}> Logout</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    
    display: flex;
    justify-content: space-between;

    height: 100px;
    width: 100%;

    background-color: #5899fc;
    box-shadow: 0px 4px 4px 0px #00000026;


    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;

    button{
        height: 30px;
        width: 70px;
    }

    img{
        
        margin-left: 40px;
    }

    .logout{
       
        margin: auto 34px;
    }
`