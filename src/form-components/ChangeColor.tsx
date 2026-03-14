import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black",
    ];

    const [chosenColor, setChosenColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>

            <div>
                {colors.map((color: string) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        name="color-choice"
                        id={`color-${color}`}
                        label={color}
                        value={color}
                        checked={chosenColor === color}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            setChosenColor(event.target.value);
                        }}
                    />
                ))}
            </div>

            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: chosenColor,
                    display: "inline-block",
                    padding: "10px",
                    marginTop: "10px",
                }}
            >
                {chosenColor}
            </div>
        </div>
    );
}
