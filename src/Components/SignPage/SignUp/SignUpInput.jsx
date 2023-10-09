import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";


export default function SignUpInput() {

    const [form, setForm] = useState({ name: "", email: "", password: "", city: "", phone: "" })
    const navigate = useNavigate()

    function createUser(e) {
        e.preventDefault()

        if (form.password.length < 3) return alert("A sua senha tem que ter mais do que 3 characteres.")

        axios.post(`${import.meta.env.VITE_API_URL}/cadastro`, form)

            .then(() => {

                navigate("/")
            })
            .catch((err) => {

                alert("Este email ja foi cadastrado, tente ultilizar outro !")
            })
    }

    return (
        <Container>
            <form onSubmit={createUser}>

                <input
                    placeholder="Nome"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                />

                <input
                    placeholder="E-mail"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                />

                <input
                    placeholder="Senha"
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    minLength="3"
                    required
                />

                <input
                    placeholder="Cidade"
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    required
                />

                <input
                    placeholder="Telefone"
                    type="text"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                />
                <button type="submit" data-test="sing-up-submit">Cadastrar</button>

            </form>
        </Container>
    )
}

const Container = styled.div`
    
     input{
        width: 303px;
        height: 45px;

        border: 1px solid #D4D4D4;
        border-radius: 5px;

        
        margin: 5px 0px;
        

    }
    button{
        width: 303px;
        height: 45px;

        background:#5899fc;
        color: #FFFFFF;

        text-align: center;

        border: 1px #5899fc;
        border-radius: 5px ;

        margin-left:2px;
    }
`