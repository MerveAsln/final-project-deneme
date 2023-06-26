import { auth } from 'express-oauth2-jwt-bearer';


const jwtCheck = auth({
  audience: 'https://dev-jw83fnojry4ka67l.us.auth0.com/api/v2/',
  issuerBaseURL: 'https://dev-jw83fnojry4ka67l.us.auth0.com/api/v2/',
  tokenSigningAlg: 'RS256'
});

export default jwtCheck;