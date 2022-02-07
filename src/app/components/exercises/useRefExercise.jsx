import React, { useEffect, useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockElement = useRef();
    const [initialBlockName, setInitialBlockName] = useState();
    const newBlockState = {
        name: "Text",
        size: {
            width: "80px",
            height: "150px"
        }
    };
    const [blockName, setBlockName] = useState("");
    const [initialBlockSize, setInitialBlockSize] = useState();
    const [blockSize, setBlockSize] = useState();

    useEffect(() => {
        const element = blockElement.current;
        setInitialBlockName(element.textContent);
        setBlockName(element.textContent);
        setInitialBlockSize({ width: element.style.width, height: element.style.height });
        setBlockSize({ width: element.style.width, height: element.style.height });
    }, []);

    useEffect(() => {
        if (blockName && blockSize) {
            blockElement.current.textContent = blockName;
            blockElement.current.style.width = blockSize.width;
            blockElement.current.style.height = blockSize.height;
        }
    }, [blockName, blockSize]);

    const handleClick = () => {
        setBlockName((prevState) => prevState === newBlockState.name ? initialBlockName : newBlockState.name);
        setBlockSize((prevState) => {
            return JSON.stringify(prevState) === JSON.stringify(newBlockState.size)
                ? { ...initialBlockSize }
                : { ...newBlockState.size };
        });
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div className="d-flex p-4">
                <div
                    ref={blockElement}
                    className="bg-primary d-flex flex-row justify-content-center align-items-center rounded me-4"
                    style={{
                        height: 40,
                        width: 60,
                        color: "white"
                    }}
                >
                    <small>Блок</small>
                </div>
                <button className="btn btn-primary align-self-start" onClick={handleClick}>Изменить содержимое и размер блока</button>
            </div>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
