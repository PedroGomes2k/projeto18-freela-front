import styled from "styled-components"
import image from "../../assets/samurai.png"
import { Link, useNavigate } from "react-router-dom"
import { IoIosArrowDropdown } from "react-icons/io"
import { useContext } from "react"
import { Context } from "../../Context/Context"

export default function Menu() {

    const { token } = useContext(Context)
    const navigate = useNavigate()

    function principalPage(n) {
        if (n === 1) return navigate("/home")
        if (n === 2) return navigate("/services")
    }

    function logOut() {
        localStorage.removeItem(token)
        navigate("/")
    }

    return (
        <Container>

            <img src={image} alt="Imagem do Logo" onClick={() => principalPage(1)} />


            <div className="logout">
                <h1>{token.name}</h1>
                <p onClick={() => principalPage(2)}>Meus servicos</p>
                <button onClick={() => logOut()}> Logout</button>
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

        font-weight: bold;
        color: #FFFFFF;

        background-color:  #257cee;

        border: 1px solid  #38649e;
        border-radius: 5px;
        box-shadow: 0px 4px 4px 0px #00000026;

        cursor: pointer;
        
    }    

    img{
        
        margin-left: 40px;
        cursor: pointer;
    }

    .logout{
        width: 350px;

        color: #FFFFFF;
        font-family: 'Roboto',sans-serif;

        display: flex;
        justify-content: space-between;

        margin: auto 34px;

        align-items: center;

        p{
            cursor: pointer;
        }

    }
`