import React, {useState} from 'react';
import './adicionar.css'
import api from "../../servicos/api";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom"
import arrow from "../../img/images-removebg-preview.png"
import Button from 'react-bootstrap/Button';


function AdicionarAluno(){

    const[nome, setNome] = useState('');
    const[varinha, setVarinha] = useState('Acácia');
    const[descendencia, setDescendencia] = useState('Trouxa');
    const[materia_preferida, setMateria_preferida] = useState('Astronomia');
    const[casa, setcasa] = useState('grifinoria');
    const[serie, setserie] = useState();


    function salvar(){
        api.post('adicionarAluno',{
            nome: nome,
            varinha: varinha,
            descendencia: descendencia,
            materia_preferida: materia_preferida,
            casa: casa,
            serie: serie,
        })
        .then(()=>{
            window.location.href="/"
        })
    }

    return(
        
        <div className="Back">
            <div className="center-add" >  
                <div className="centro">
                    <div className="top">
                        <Link to="/"><img id="arrow-back" src={arrow}></img></Link>
                        <h2 className="phrase">Seja muito Bem-vindo(a) Jovem feiticeiro(a)</h2>
                        <div></div>
                    </div>
                    <div className="formulario">
                        <h4>Cadastrando</h4>
                        <input placeholder="Nome" value={nome} onChange={(e) => { setNome(e.target.value)}}></input>
                        <select placeholder="Varinha" value={varinha} onChange={(e) => { setVarinha(e.target.value)}}>
                            <option>Acácia</option>
                            <option>Amieiro</option>
                            <option>Macieira</option>
                            <option>Freixo</option>
                            <option>Álamo</option>
                            <option>Faia</option>
                            <option>Espinheiro-negro</option>
                            <option>Nogueira-negra</option>
                            <option>Cedro</option>
                            <option>Cerejeira</option>
                            <option>Castanheira</option>
                            <option>Cipestre</option>
                            <option>Corniso</option>
                            <option>Ébano</option>
                            <option>Sabugueiro</option>
                            <option>Olmo</option>
                            <option>Carvalho-roble</option>
                            <option>Abeto</option>
                            <option>Espinheiro</option>
                            <option>Aveleira</option>
                        </select>
                        <select placeholder="Descendência" value={descendencia} onChange={(e) => { setDescendencia(e.target.value)}}>
                            <option>Trouxa</option>
                            <option>Bruxo</option>
                        </select>
                        <select placeholder="Matéria Preferida" value={materia_preferida} onChange={(e) => { setMateria_preferida(e.target.value)}}>
                            <option>Astronomia</option>
                            <option>Feitiços</option>
                            <option>Defesa Contra as Artes das Trevas</option>
                            <option>Transfiguração</option>
                            <option>Poções</option>
                            <option>Herbologia</option>
                            <option>História da Magia</option>
                        </select>
                        <select placeholder="Casa" value={casa} onChange={(e) => { setcasa(e.target.value)}}>
                            <option>grifinoria</option>
                            <option>sonserina</option>
                            <option>lufa Lufa</option>
                            <option>corvinal</option>
                        </select>
                        <input placeholder="Série" type="number" value={serie} onChange={(e) => { setserie(e.target.value)}}></input>

                        <Button className="btn btn-success" onClick={salvar}>Adicionar aluno</Button>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default AdicionarAluno;
