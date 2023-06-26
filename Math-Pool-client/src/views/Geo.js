import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";

export const GeoComponent = () => {
  return (
    <>
      <h1>Geo</h1>
    </>
  );
};

export default withAuthenticationRequired(GeoComponent, {
  onRedirecting: () => <Loading />,
});
