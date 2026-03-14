import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>): void {
        setUserAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="userInput">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={userAnswer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            <div>{expectedAnswer === userAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
