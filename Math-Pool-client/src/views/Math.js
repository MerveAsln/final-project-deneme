import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";

export const MathComponent = () => {
  return (
    <>
      <h1>Math</h1>
    </>
  );
};

export default withAuthenticationRequired(MathComponent, {
  onRedirecting: () => <Loading />,
});
