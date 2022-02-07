import React, { useState, useEffect, useRef, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    const validateWithOutCallback = (data) => {
        console.log(data);
    };

    useEffect(() => {
        validateWithOutCallback(data);
    }, [data]);

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        validateWithCallback(data);
    }, [data]);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>without callback render count: { withOutCallback.current }</p>
            <p>with callback render count: { withCallback.current }</p>
            <label htmlFor="email" className="form-label">Email</label>
            <input
                name="email"
                id="email"
                type="email"
                value={data.email || ""}
                onChange={handleChange}
                className="form-control mb-4"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
