import React from 'react'
import { Route, Redirect, Router } from 'react-router-dom'
function ProtectRoute({ children, ...rest }) {
  // console.log('children', children)
  console.log({ ...rest })
  // console.log('children', children)
  return (
    <>
      <Route
        {...rest}
        render={props =>
          children.props.isAuth === true ? (
            children
          ) : (
            <Redirect
              to={{ pathname: '/Login', state: { from: props.location } }}
            />
          )
        }
      />
    </>
  )
}

export default ProtectRoute
