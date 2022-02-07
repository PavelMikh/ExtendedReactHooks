import React, { useState, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(10);
    const [someState, setSomeState] = useState(false);

    const factorial = (n) => {
        return n ? n * factorial(n - 1) : 1;
    };

    const runFactorial = (n) => {
        console.log("run factorial");
        return factorial(n);
    };

    const handleDecrementClick = () => {
        setValue((prevState) => prevState - 10);
    };

    const handleIncrementClick = () => {
        setValue((prevState) => prevState + 10);
    };

    const handleChangeColorButtonClick = () => {
        setSomeState((prevState) => !prevState);
    };

    const buttonColor = someState ? "primary" : "secondary";

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                {useMemo(() => runFactorial(value), [value])}
                <button className="btn btn-primary" onClick={handleDecrementClick}>Decrement</button>
                <button className="btn btn-primary" onClick={handleIncrementClick}>Increment</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button className={"btn btn-" + buttonColor} onClick={handleChangeColorButtonClick}>Change Button Color</button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
