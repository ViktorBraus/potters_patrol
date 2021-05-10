import React from "react";
import { withAuth } from '../../Auth'
import { Redirect } from "react-router-dom";
export default withAuth(({isAuthorized, authorize}) => 
    isAuthorized ? (
    <Redirect to='/private' /> 
    ) : (
          <panel>
            <h1>Привет</h1>
            <button onClick={authorize}>Авторизоваться</button>
          </panel>
    )
);