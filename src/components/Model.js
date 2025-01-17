import React from 'react'
import styled from 'styled-components'
import { ContextProvider } from '../Global/Context'
const Model = () => {
    const { model, closeModel, register, login } = React.useContext(
        ContextProvider
    )
    const [state, setState] = React.useState({
        register: true,
        login: false
    })
    const [inputs, setInputs] = React.useState({
        username: '',
        email: '',
        password: ''
    })
    const handleInput = e => {
        setInputs({...inputs, [e.target.name]: e.target.value })
    }
    const formsToggle = () => {
        setState({
            ...state,
            register: !state.register,
            login: !state.login
        })
    }
    const closeForm = e => {
        const className = e.target.getAttribute('class')
        if (className === 'model') {
            closeModel()
        }
    }
    const registerUser = e => {
        e.preventDefault()
            //  console.log(inputs);
        register(inputs)
        setInputs({ username: '', email: '', password: '' })
    }
    const userLogin = e => {
        e.preventDefault()
        login(inputs)
    }
    return ( <
        >
        { ' ' } {
            model ? ( <
                StyleModel onClick = { closeForm } >
                <
                StyleModelContainer > { ' ' } {
                    state.register ? ( <
                        div className = 'model__form' >
                        <
                        form onSubmit = { registerUser } >
                        <
                        StyleModelGroup >
                        <
                        img src = '/images/instagramLogo.png'
                        alt = '' / >
                        <
                        /StyleModelGroup>{' '} <
                        StyleModelGroup >
                        <
                        StyledInput type = 'text'
                        name = 'username'
                        placeholder = 'Username...'
                        onChange = { handleInput }
                        value = { inputs.username }
                        required /
                        >
                        <
                        /StyleModelGroup>{' '} <
                        StyleModelGroup >
                        <
                        StyledInput type = 'email'
                        name = 'email'
                        placeholder = 'Email...'
                        onChange = { handleInput }
                        value = { inputs.email }
                        required /
                        >
                        <
                        /StyleModelGroup>{' '} <
                        StyleModelGroup >
                        <
                        StyledInput type = 'password'
                        name = 'password'
                        placeholder = 'Create password...'
                        onChange = { handleInput }
                        value = { inputs.password }
                        required /
                        >
                        <
                        /StyleModelGroup>{' '} <
                        StyleModelGroup >
                        <
                        StyledBtn type = 'submit'
                        value = 'Register' /
                        >
                        <
                        /StyleModelGroup>{' '} <
                        StyleModelGroup >
                        <
                        span onClick = { formsToggle } >
                        Already have an account ? { ' ' } <
                        /span>{' '} < /
                        StyleModelGroup > { ' ' } <
                        /form>{' '} < /
                        div >
                    ) : ( <
                        div className = 'model__form' >
                        <
                        form onSubmit = { userLogin } >
                        <
                        StyleModelGroup >
                        <
                        img src = '/images/instagramLogo.png'
                        alt = '' / >
                        <
                        /StyleModelGroup>{' '} <
                        StyleModelGroup >
                        <
                        StyledInput type = 'email'
                        name = 'email'
                        placeholder = 'Email...'
                        onChange = { handleInput }
                        value = { inputs.email }
                        required /
                        >
                        <
                        /StyleModelGroup>{' '} <
                        StyleModelGroup >
                        <
                        StyledInput type = 'password'
                        name = 'password'
                        placeholder = 'Create password...'
                        onChange = { handleInput }
                        value = { inputs.password }
                        required /
                        >
                        <
                        /StyleModelGroup>{' '} <
                        StyleModelGroup >
                        <
                        StyledBtn type = 'submit'
                        value = 'Login' /
                        >
                        <
                        /StyleModelGroup>{' '} <
                        StyleModelGroup >
                        <
                        StyledSpan onClick = { formsToggle } > { ' ' }
                        Create a new account ? { ' ' } <
                        /StyledSpan>{' '} < /
                        StyleModelGroup > { ' ' } <
                        /form>{' '} < /
                        div >
                    )
                } { ' ' } <
                /StyleModelContainer>{' '} < /
                StyleModel >
            ) : (
                ''
            )
        } { ' ' } <
        />
    )
}
const StyleModel = styled.div `
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyleModelContainer = styled.div `
  width: 400px;
  height: auto;
  padding: 15px;
  border-radius: 4px;
  background: var(--white);
`
const StyleModelGroup = styled.div `
  margin: 10px 0;
`
const StyledSpan = styled.span `
  font-size: 13px;
  cursor: pointer;
`
const StyledInput = styled.input `
   width: 100%;
    height: 40px;
    padding: 0 12px;
    border: 1px solid #d2dbdb;
    outline: none;
    border-radius: 3px;
 `
const StyledBtn = styled.input `
   outline: none;
    border: none;
    color: #fff;
    height: 40px;
    padding: 0 13px;
    border-radius: 3px;
    cursor: pointer;
    width: 100%;
    background: #f83a63;
`
export default Model