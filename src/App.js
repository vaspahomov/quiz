import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            questions: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/questions',
            {
                headers: {}
            })
            .then(x => {
                x.json().then(y => {
                    console.log(y);
                    this.setState({questions: y})
                });
            });
    }

    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div className="container">
                    <div style={{display: 'flex', 'flex-wrap': 'wrap'}}>
                        {this.state.questions ? this.state.questions.map((x, mainIndex) =>
                            <div style={{padding: '10px'}}>
                                <div className="card" style={{width: "18rem"}}>
                                    <img className="card-img-top" src={`./images/${x.image}`} alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{x.question}</h5>
                                        <div>
                                            {x.answers.map((y, i) => <div className="custom-control custom-radio">
                                                <input type="radio" id={'customRadio' + i}
                                                       name={"customRadio" + mainIndex}
                                                       className="custom-control-input" checked/>
                                                <label className="custom-control-label" htmlFor={"customRadio" + i}>
                                                    {y}
                                                </label>
                                            </div>)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : undefined}
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Подтвердить</button>
            </div>)

    };
}

export default App;
