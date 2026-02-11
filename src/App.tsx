import React from "react";
import "./App.css";
import dog from "./Images/Dog.jpg";
import { Button, Row, Col} from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{backgroundColor: "green"}}>
                <h1>UD CISC275 with React Hooks and TypeScript</h1> <br></br>
                <strong>Varun Pappu</strong>
            </header>
            <Row>
                <Col>
                <div style={{backgroundColor: "red", width: 50, height: 50, margin: "auto"}}></div>
                <p>
                    Edit <code>src/App.tsx</code> and save. This page will
                    automatically reload.<br />
                    Hello World:
                </p>
    
                <Button onClick={() => {console.log("Hello World!")}}>Log Hello World</Button>
                </Col>
                <Col>
                <div style={{backgroundColor: "red", width: 50, height: 50, margin: "auto"}}></div>
                <img src={dog} alt="dog making an angry face" style={{ width: "300px", height: "300px" }} />
                <ul>
                    <li>Dog is Angry</li>
                    <li>Dog did not get a walk</li>
                    <li>Dog did not go outside</li>
                </ul>
                </Col>
            </Row>
        </div>
    );
}

export default App;
