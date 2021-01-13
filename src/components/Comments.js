import React from 'react'
import { ContextProvider } from '../Global/Context'
import { db } from '../config'
import styled from 'styled-components'
const Comments = props => {
    const { loader, user, publishComment } = React.useContext(ContextProvider)
    const [state, setState] = React.useState('')
    const [comments, setComments] = React.useState([])
    const postComment = e => {
        e.preventDefault()
        publishComment({ id: props.id, comment: state })
        setState('')
    }
    React.useEffect(() => {
        db.collection('posts')
            .doc(props.id)
            .collection('comments')
            .orderBy('currentTime', 'desc')
            .onSnapshot(snp => {
                setComments(snp.docs.map(doc => doc.data()))
            })
    }, [props.id])
    return ( <
        StyleComments > { ' ' } {
            comments.map(comment => ( <
                StyleCommentsContainer key = { comment.id } >
                <
                StyleCommentsContainerName > { ' ' } { comment.username } { ' ' } <
                /StyleCommentsContainerName>{' '} <
                StyleCommentsContainerMsg > { ' ' } { comment.comment } { ' ' } <
                /StyleCommentsContainerMsg>{' '} < /
                StyleCommentsContainer >
            ))
        } { ' ' } <
        div className = 'comments__section' > { ' ' } {
            !loader && user ? ( <
                form onSubmit = { postComment } >
                <
                input type = 'text'
                className = 'comment__input'
                placeholder = 'Add a comment..'
                onChange = { e => setState(e.target.value) }
                value = { state }
                required /
                >
                <
                /form>
            ) : (
                ''
            )
        } { ' ' } <
        /div>{' '} < /
        StyleComments >
    )
}
const StyleComments = styled.div `
  margin-top: 10px;
`
const StyleCommentsContainer = styled.div `
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0 10px 10px 10px;
`
const StyleCommentsContainerName = styled.div `
  margin-right: 8px;
  text-transform: capitalize;
`
const StyleCommentsContainerMsg = styled.div `
  font-size: 14px;
  color: silver;
  font-weight: 300;
`


export default Comments