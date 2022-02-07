import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleFocusClick = () => {
        inputRef.current.focus();
    };

    const handleWidthClick = () => {
        inputRef.current.style.width = "150px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">Email</label>
            <input ref={inputRef} id="email" type="email" className="form-control mb-4" />
            <button className="btn btn-primary" onClick={handleFocusClick}>Input focus</button>
            <button className="btn btn-secondary mx-2" onClick={handleWidthClick}>Change Input Width</button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
