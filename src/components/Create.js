import React, { useState, useContext } from "react";
import { FaCamera } from "react-icons/fa";
import { ContextProvider } from "../Global/Context";
import styled from 'styled-components'
const Create = () => {
    const { create, loader, user } = useContext(ContextProvider);
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };
    const createPost = (e) => {
        e.preventDefault();
        create({ title, image });
        setTitle("");
        setImage("");
    };
    return ( <
        >
        {!loader && user ? ( <
                StyleCreate >
                <
                form onSubmit = { createPost } >
                <
                div className = "create__input" >
                <
                input type = "text"
                className = "create__inputt"
                placeholder = "What are in your mind..."
                onChange = {
                    (e) => setTitle(e.target.value)
                }
                value = { title }
                required /
                >
                <
                /div> <
                StyleCreateSecond >
                <
                StyleCreateSeconda >
                <
                label htmlFor = "file" >
                <
                FaCamera className = "camera" / >
                <
                /label> <
                input type = "file"
                className = "file"
                onChange = { handleImage }
                id = "file"
                required /
                >
                <
                /StyleCreateSeconda> <
                StyleCreateSecondb >
                <
                input type = "submit"
                value = "Create"
                className = "btn-sweet" / >
                <
                /StyleCreateSecondb> < /
                StyleCreateSecond > <
                /form> < /
                StyleCreate >
            ) : (
                ""
            )
        } <
        />
    );
};
const StyleCreate = styled.div `
          width: 65%;
    margin: 15px 0;
    background: var(--white);
    padding: 10px;
    border: 1px solid #efefef;
    border-radius: 3px;
`
const StyleCreateSecond = styled.div `
       display: flex;
    align-items: center;
    margin-top: 10px;
`
const StyleCreateSeconda = styled.div `
         flex: 1;
`
const StyleCreateSecondb = styled.div `
            flex: 1;
    text-align: right;
`
export default Create;