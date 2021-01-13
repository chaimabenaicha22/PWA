import React, { useState, useContext } from 'react'
import { FaCamera } from 'react-icons/fa'
import { ContextProvider } from '../Global/Context'
import styled from 'styled-components'
const Create = () => {
    const { create, loader, user } = useContext(ContextProvider)
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const handleImage = e => {
        setImage(e.target.files[0])
    }
    const createPost = e => {
        e.preventDefault()
        create({ title, image })
        setTitle('')
        setImage('')
    }
    return ( <
        >
        { ' ' } {
            !loader && user ? ( <
                StyleCreate >
                <
                form onSubmit = { createPost } >
                <
                StyledInput >
                <
                StyledInputt type = 'text'
                placeholder = 'What are in your mind...'
                onChange = { e => setTitle(e.target.value) }
                value = { title }
                required /
                >
                <
                /StyledInput>{' '} <
                StyleCreateSecond >
                <
                StyleCreateSeconda >
                <
                label htmlFor = 'file' >
                <
                FaCamera className = 'camera' / >
                <
                /label>{' '} <
                StyledFile type = 'file'
                onChange = { handleImage }
                id = 'file'
                required /
                >
                <
                /StyleCreateSeconda>{' '} <
                StyleCreateSecondb >
                <
                input type = 'submit'
                value = 'Create'
                className = 'btn-sweet' / >
                <
                /StyleCreateSecondb>{' '} < /
                StyleCreateSecond > { ' ' } <
                /form>{' '} < /
                StyleCreate >
            ) : (
                ''
            )
        } { ' ' } <
        />
    )
}
const StyleCreate = styled.div `
  width: 100%;
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
const StyledInputt = styled.input `
     width: 100%;
    height: 40px;
    padding: 0 13px;
    border: 1px solid #efefef;
    outline: none;
    border-radius: 2px;
 `
const StyledFile = styled.input `
display: none;
`
const StyledInput = styled.div `
width: 100 % ;
height: 40 px;
border - top: 1 px solid# efefef;
border - bottom: 1 px solid# efefef;
border - left: none;
border - right: none;
padding: 0 15 px;
outline: none;
`

export default Create