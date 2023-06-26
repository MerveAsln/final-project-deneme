import React from 'react'
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";



const ShowQuestion = () => {
  return (
    <div>ShowQuestion</div>
  )
}

export default withAuthenticationRequired(ShowQuestion, {
  onRedirecting: () => <Loading />,
});