import React, { useContext } from 'react'
import { ContextProvider } from '../Global/Context'
import Comment from './Comments'
import styled from 'styled-components'
const Posts = () => {
    const { posts } = useContext(ContextProvider)
    return ( <
        >
        {
            posts.map(post => ( <
                StylePosts key = { post.id } >
                <
                StylePostsHeader >
                <
                StylePostsAvator > { post.username[0] } < /StylePostsAvator>{' '} <
                StylePostsHeaderName > { post.username } < /StylePostsHeaderName>{' '} < /
                StylePostsHeader > { ' ' } <
                StylePostsImg >
                <
                StylePostsImgg src = { post.image }
                alt = { post.image }
                />{' '} < /
                StylePostsImg > { ' ' } <
                Comment id = { post.id }
                />{' '} < /
                StylePosts >
            ))
        } { ' ' } <
        />
    )
}
const StylePosts = styled.div `
  width: 100%;
  background: var(--white);
  margin: 15px 0;
`
const StylePostsHeader = styled.div `
  display: flex;
  align-items: center;
  background: var(--white);
  padding: 10px;
`
const StylePostsAvator = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f83a63;
  text-transform: uppercase;
`
const StylePostsHeaderName = styled.div `
  margin-left: 8px;
  text-transform: capitalize;
`
const StylePostsImg = styled.div `
 width: 100%;
    overflow: hidden;
`
const StylePostsImgg = styled.img `
  width: 100%;
    height: 100%;
    object-fit: cover;
`
export default Posts