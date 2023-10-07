import styled from "styled-components"
import SignInInput from "./SignInInput"
import { Link } from "react-router-dom"
import samurai from "../../../assets/samurai.png"
import katana from "../../../assets/katana.png"

export default function SignIn() {
    return (
        <ContainerLogin>

            <div className="logo">
                <img src={katana} alt="Imagem de uma Katana" />
                <p>Get Samurai</p>
            </div>

            <img src={samurai} alt="Imagem do Logo" />

            <SignInInput />

            <Link to={'/cadastro'} data-test="signup-link">
                <Cadastrar >
                    Não tem uma conta? Cadastre-se!
                </Cadastrar>
            </Link>

        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
   
    width: 300px;
    height: 600px;             
    
    margin: 0px auto; 
    
    img{
        width: 250px;
        height: 250px;
        
        margin-top: 25px;
        align-items: center;
    }

    .logo{
        display: flex;

        p{  
            display: flex;
            
            align-items: center;
            font-size: 40px;
            margin-top: 30px;
            margin-left: 20px;
        }
        
        img{
            display: flex;
            align-items: center;
            height: 50px;
            width: 50px;
            
        }
    }
    
`
const Cadastrar = styled.div`
    margin-top: 5px;
    color: #5899fc;
    text-decoration: underline;
   
`