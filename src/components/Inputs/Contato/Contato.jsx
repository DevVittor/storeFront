import { useState } from "react";

export const Contato = () => {
    const [numberZap, setNumberZap] = useState(null);
    function handleZap(e) {
        let inputNumber = e.target.value;

        inputNumber = inputNumber.replace(/\D/g, "");

        if (inputNumber.length <= 2) {
            inputNumber = `${inputNumber}`;
        } else if (inputNumber.length <= 8) {
            inputNumber = `(${inputNumber.substring(0, 2)}) ${inputNumber.substring(
                2
            )}`;
        } else {
            inputNumber = `(${inputNumber.substring(0, 2)}) ${inputNumber.substring(
                2,
                8
            )}-${inputNumber.substring(8)}`;
        }
        setNumberZap(inputNumber);
    }
    return (
        <>
            <input
                type="text"
                required
                placeholder="Whatsapp"
                maxLength={15}
                value={numberZap || ""}
                onChange={handleZap}
            />
        </>
    )
}