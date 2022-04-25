import { useHistory } from 'react-router-dom'

import './styles.css'

import logo from '../assets/logo.png'
import { Button } from 'antd'

export default function Inicio(){

    const history = useHistory()

    async function listarProdutos(event){
        event.preventDefaut();
        history.push('/produtos')
    }

    return(
        <div className='inicio__container'>
            <section>
                <img src={logo} alt='logo' className='center'></img>
                <br/>

                <Button onClick={listarProdutos} className='center'>Ver produtos</Button>

            </section>
        </div>
    )
}