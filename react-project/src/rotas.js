import { Route, BrowserRouter, Switch } from "react-router-dom";

import AdicionarAluno from "./paginas/adicionarAluno";
import AlterarAluno from "./paginas/alterarUsuario";
import InitPage from "./paginas/initPage";
import Alunos from "./paginas/alunos"

    function Rotas(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <InitPage></InitPage>
                    </Route>
                    <Route exact path="/sonserina">
                        <Alunos nome="sonserina"></Alunos>
                    </Route>
                    <Route exact path="/grifinoria">
                        <Alunos nome="grifinoria"></Alunos>
                    </Route>
                    <Route exact path="/corvinal">
                        <Alunos nome="corvinal"></Alunos>
                    </Route>
                    <Route exact path="/lufa">
                        <Alunos nome="lufa"></Alunos>
                    </Route>
                    <Route exact path="/adicionarAluno">
                        <AdicionarAluno></AdicionarAluno>
                    </Route>
                    <Route exact path="/alterarAluno" render={(props)  => <AlterarAluno {...props}/>  }>
                        
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }


    export default Rotas;