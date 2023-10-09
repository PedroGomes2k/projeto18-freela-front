import styled from "styled-components"
import { useContext, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
import { Context } from "../../Context/Context"

export default function CreateService() {

    const [form, setForm] = useState({ nameService: "", photo: "", description: "", price: "" })
    const { token } = useContext(Context)
    const navigate = useNavigate()


    function newService(e) {
        e.preventDefault()

        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }

        axios.post(`${import.meta.env.VITE_API_URL}/services/new-service`, form)

            .then(() => {

                navigate("/services")
            })
            .catch((err) => {

                alert(err.message)
            })
    }

    return (
        <Container>
            <form onSubmit={newService}>
                <input placeholder=" Digite o nome do Serviço"
                    type="text"
                    value={form.nameService}
                    onChange={(e) => setForm({ ...form, nameService: e.target.value })}
                    required
                />
                <input placeholder=" URL da foto escolhida"
                    type="url"
                    value={form.photo}
                    onChange={(e) => setForm({ ...form, photo: e.target.value })}
                    required
                />
                <input placeholder=" Descreva oquê você faz"
                    type="text"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    required
                />
                <input placeholder=" Coloque o valor do seu serviço "
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    required
                />
                <button type="submit"> Confimar </button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;  
    justify-content: center;

    
    input{
        display: flex;
        justify-content: center;
        width: 450px;
        height: 25px;

        border-radius:8px;
        border: 1px solid #FEF8E0;
        box-shadow: 0px 4px 4px 0px #00000026;

        margin: 20px;

        font-family: 'Roboto', sans-serif;
        
    }
    
    button{
        
        display: flex;
        justify-content: center;
        align-items: center;
        width: 450px;
        height: 25px;

        border-radius:8px;
        background-color:#56be36 ;
        border: 1px solid  #4fa834;
        box-shadow: 0px 4px 4px 0px #00000026;
        color: #FFFFFF;

        margin: 0px auto;
        margin-top: 45px;

        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        
    }

`
