import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";

export const QuizComponent = () => {
  return (
    <>
      <h1>ask</h1>
    </>
  );
};

export default withAuthenticationRequired(QuizComponent, {
  onRedirecting: () => <Loading />,
});
