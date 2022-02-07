import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
    const prevState = useRef();
    const [currentState, setCurrentState] = useState("false");

    const handleClick = () => {
        setCurrentState((prevState) => prevState === "false" ? "true" : "false");
    };

    useEffect(() => {
        prevState.current = currentState;
    }, [currentState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <div>prev state: {prevState.current}</div>
            <div>current state: {currentState}</div>
            <button className="btn btn-primary" onClick={handleClick}>Change current state</button>
        </CardWrapper>
    );
};

export default PrevStateExample;
