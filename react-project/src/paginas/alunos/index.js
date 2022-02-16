import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"

import api from "../../servicos/api";
import './alunos.css'
import Button from 'react-bootstrap/Button';

import back1 from "../../img/Sonserina.jpg"
import back2 from  "../../img/Lufa.jpg"
import back3 from  "../../img/Grifinória.jpg"
import back4 from  "../../img/Corvinal.jpg"
import arrow from "../../img/images-removebg-preview.png"

function Alunos(props){

    const [alunos, setAlunos] = useState([]);

    useEffect(()=>{
        if(props.nome === "sonserina"){
            api.get('sonserina')
            .then((results)=>{
                setAlunos(results.data)
            })
        } else if (props.nome === "corvinal") {
            api.get('corvinal')
            .then((results)=>{
                setAlunos(results.data)
            })
        } else if (props.nome === "grifinoria") {
            api.get('grifinoria')
            .then((results)=>{
                setAlunos(results.data)
            })
        } else if (props.nome === "lufa") {
            api.get('lufa')
            .then((results)=>{
                setAlunos(results.data)
            })
        }
    }, [])

    function excluirAluno(idalunos){
        api.get(`apagar/${idalunos}`)
        .then(()=>{
            window.location.href="/"
        })
    }

    var style = {
        casa: {backgroundImage: `url(${back1})` },
    };
    var colorButton;
    var phraseTop;

    if(props.nome === "sonserina"){
        style = {
            casa: {backgroundImage: `url(${back1})`}
        };
        colorButton="btn-success";
        phraseTop = "Não somos maus, somos inteligentes. Se é maldade pensar exclusivamente no nosso poder, então maldade é apenas uma dádiva necessária."
    } 
    else if(props.nome === "grifinoria"){
        style = {
            casa: {backgroundImage: `url(${back3})`}
        };
        colorButton="btn-danger";
        phraseTop = "Coragem é o necessário para levantar-se e falar, Coragem também é o necessário para sentar-se e ouvir."
    }
    else if(props.nome === "lufa") {
        style = {
            casa: {backgroundImage: `url(${back2})`}
        };
        colorButton="btn-warning";
        phraseTop = "Um amigo é uma das coisas mais legais que você pode ter, e uma das melhores coisas que você pode ser"
    }
    else if(props.nome === "corvinal"){
        style = {
            casa: {backgroundImage: `url(${back4})`}
        };
        colorButton="btn-dark-blue";
        phraseTop = "Nosso emblema é uma águia, que plana por onde outros não podem escalar"
    }

    return(
        <div className="Back">
            <div className="image" style={style.casa}>
                <div className="top">
                    <Link to="/"><img id="arrow-back" src={arrow}></img></Link>
                    <h2 className="phrase">{phraseTop}</h2>
                    <div></div>
                </div>
                
                <div className="alunos">
                    {
                        alunos.map((aluno)=>{
                            return(
                                <div className="cadUser" key={aluno.idalunos}>
                                    <h2> {aluno.nome} </h2>

                                    <p className="Infos">Varinha: {aluno.varinha}<br/>Descendência: {aluno.descendencia}<br/>Materia preferida:  {aluno.materia_preferida}<br/>Série: {aluno.serie}</p>


                                    <Button className={colorButton} onClick={()=> excluirAluno (aluno.idalunos)}>Apagar aluno</Button>
                                    &nbsp;&nbsp;
                                    <Link to={{
                                        pathname: './alterarAluno',
                                        state:{ idalunos: aluno.idalunos,nome: aluno.nome, casa: aluno.casa, varinha: aluno.varinha, descendencia: aluno.descendencia, materia_preferida: aluno.materia_preferida, serie: aluno.serie}}}>
                                        <Button className={colorButton}>Alterar aluno</Button>
                                    </Link>
                                </div>
                            )
                        })
                    }
             </div>
        </div>
    </div>
    )
}




export default Alunos;
