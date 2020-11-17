const config = {
  STRIPE_KEY: "pk_test_51HnWH2JO5lOn2hKWd8ucXizNL6w9atrnHSFNjcJ6iYFwQtJuG7Sa8S9QcAM1gF6cBxdCohSziow957Ngnbxstnzu00WgwsEVqv",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-ridgeline",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://wwpejefpih.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_VpvThHFXS",
    APP_CLIENT_ID: "2192j2cb9tu5n93224e61d89i1",
    IDENTITY_POOL_ID: "us-west-2:0bde57ee-89c9-467a-98c7-bb09cebdb988",
  },
};

export default config;