import styled from "styled-components"
import SignInInput from "../SignIn/SignInInput"
import { Link, useNavigate } from "react-router-dom"
import SignUpInput from "./SignUpInput"
import samurai from "../../../assets/samurai.png"
import katana from "../../../assets/katana.png"

export default function SignUp() {

    const navigate = useNavigate()

    function principalPage() {
        navigate("/")
    }

    return (
        <ContainerCadastro>

            <div className="logo">
                <img src={katana} alt="Imagem de uma Katana" />
                <p>Get Samurai</p>
            </div>

            <img src={samurai} alt="Imagem do Logo" onClick={principalPage} />

            <SignUpInput />

            <Link to={'/'} data-test="login-link">
                <Cadastrar >
                    Já tem uma conta? Faça login!
                </Cadastrar>
            </Link>

        </ContainerCadastro>
    )
}

const ContainerCadastro = styled.div`
       
    width: 300px;
    height: 600px;             
    
    margin: 0px auto; 
    
    img{    
        display: flex;
        width: 200px;
        height: 200px;
        
        margin-bottom: 0px;
        margin-left: 30px;
        
    }

    .logo{
       
        margin-top: 20px;
        display: flex;
        width: 350px;
        margin-left: -20px;
       

        p{  
            
            font-size: 40px;
            margin-top: 5px;
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