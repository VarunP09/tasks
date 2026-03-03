import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    {
        /*
        🪖 - Memorial Day
        🎆 - fourth of July
        🎃 - Halloween
        🦃 - Thanksgiving
        🎄 - Christmas
    */
    }
    const [holiday, setHoliday] = useState<string>("🪖");

    function changeByDate(): void {
        holiday === "🪖" ? setHoliday("🎆")
        : holiday === "🎆" ? setHoliday("🎃")
        : holiday === "🎃" ? setHoliday("🦃")
        : holiday === "🦃" ? setHoliday("🎄")
        : setHoliday("🪖");
    }
    function changeByAlphabet(): void {
        holiday === "🎄" ? setHoliday("🎆")
        : holiday === "🎆" ? setHoliday("🎃")
        : holiday === "🎃" ? setHoliday("🪖")
        : holiday === "🪖" ? setHoliday("🦃")
        : setHoliday("🎄");
    }
    return (
        <div>
            <span>Holiday: {holiday}</span>
            <Button
                onClick={() => {
                    changeByAlphabet();
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    changeByDate();
                }}
            >
                Advance by Year
            </Button>
        </div>
    );
}
