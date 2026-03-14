import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [reqAttempts, setReqAttempts] = useState<number>(0);

    return (
        <div>
            <h3>Attempts Left: {attempts}</h3>
            <Form.Group controlId="formAttempts">
                <Form.Label>Reqest Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={reqAttempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        parseInt(event.target.value) ?
                            setReqAttempts(parseInt(event.target.value))
                        :   0;
                    }}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => {
                    setAttempts(attempts - 1);
                }}
                disabled={!attempts}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    setAttempts(attempts + reqAttempts);
                }}
                disabled={!attempts}
            >
                gain
            </Button>
        </div>
    );
}
