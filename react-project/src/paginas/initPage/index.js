import {Link} from "react-router-dom"

import './initPages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import btnFloat from "../../img/buttonFloat-removebg-preview (1).png"



function InitPage(){
    return(
    
    <div className="Back">
        <div className="center">
            <div className="background">
                <div>
                    <h1 id="welcome"> Seja Bem-vindo(a) ao beco diagonal</h1>
                </div>
                <div className="btn-group-links-harry">
                    <div className="Container">
                        <Link to="/grifinoria"><Button className="button-init btn-danger" id="grifinoria"></Button></Link>
                        <Link to="/lufa"><Button className="button-init btn-warning" id="lufa"></Button></Link>
                    </div>
                    <div className="Container">
                        <Link to="/corvinal"><Button className="button-init btn-dark-blue" id="corvinal" ></Button></Link>
                        <Link to="/sonserina"><Button  className="button-init btn-success" id="sonserina"></Button></Link>
                    </div>
                </div>
                <div className="IconsDown">
                    <Link to="adicionarAluno"><img src={btnFloat}></img></Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default InitPage;
