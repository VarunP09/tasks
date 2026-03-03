import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visible, setVisible] = useState<boolean>(false);

    function swapVisible(): void {
        setVisible(!visible);
    }
    return (
        <div>
            <Button
                onClick={() => {
                    swapVisible();
                }}
            >
                Reveal Answer
            </Button>
            {visible && <p>42</p>}
        </div>
    );
}
