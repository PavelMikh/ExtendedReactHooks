import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const renderCount = useRef(0);
    const [, setSomeState] = useState(false);

    const handleClick = () => {
        setSomeState((prevState) => !prevState);
    };

    useEffect(() => {
        renderCount.current++;
    });
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <div>render count: {renderCount.current}</div>
            <button className="btn btn-primary" onClick={handleClick}>Change some state</button>
        </CardWrapper>
    );
};

export default RenderCountExample;
