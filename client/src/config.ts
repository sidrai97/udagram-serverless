// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '6je2ggt8o3'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-2.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'sidrai97.auth0.com',            // Auth0 domain
  clientId: '57NEXTdSfHI7dgtk0l2rGA1fHyF6RmDA',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
