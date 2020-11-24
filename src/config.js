const dev = {
  STRIPE_KEY: "pk_test_51HnWH2JO5lOn2hKWd8ucXizNL6w9atrnHSFNjcJ6iYFwQtJuG7Sa8S9QcAM1gF6cBxdCohSziow957Ngnbxstnzu00WgwsEVqv",
  s3: {
    REGION: "us-east-1",
    BUCKET: "add-collaborators-notes-infra-s3-uploads4f6eb0fd-g7y0n0txv426"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://0ictfqi0ib.execute-api.us-east-1.amazonaws.com/add-collaborators"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_B5jkzvt1M0",
    APP_CLIENT_ID: "4ctmlbgfrpkg5g66o2efdetvp4",
    IDENTITY_POOL_ID: "us-east-1:f971e0c7-468b-461f-a45c-1a41fa4eff9a"
  }
};

// const dev = {
//   STRIPE_KEY: "pk_test_51HnWH2JO5lOn2hKWd8ucXizNL6w9atrnHSFNjcJ6iYFwQtJuG7Sa8S9QcAM1gF6cBxdCohSziow957Ngnbxstnzu00WgwsEVqv",
//   s3: {
//     REGION: "us-east-1",
//     BUCKET: "dev-notes-infra-s3-uploads4f6eb0fd-xffgpy8mad3p"
//   },
//   apiGateway: {
//     REGION: "us-east-1",
//     URL: "https://tifs2vn648.execute-api.us-east-1.amazonaws.com/dev"
//   },
//   cognito: {
//     REGION: "us-east-1",
//     USER_POOL_ID: "us-east-1_WTiynIfPE",
//     APP_CLIENT_ID: "4gu5m8m6c95c7n4190jucgscqt",
//     IDENTITY_POOL_ID: "us-east-1:8d6eb467-ae37-4ed5-b47f-66cfe549f12a"
//   }
// };

const prod = {
  STRIPE_KEY: "pk_test_51HnWH2JO5lOn2hKWd8ucXizNL6w9atrnHSFNjcJ6iYFwQtJuG7Sa8S9QcAM1gF6cBxdCohSziow957Ngnbxstnzu00WgwsEVqv",
  s3: {
    REGION: "us-east-1",
    BUCKET: "prod-notes-infra-s3-uploads4f6eb0fd-n5t6g10x0qc8"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://wwpejefpih.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_CMqYQCj54",
    APP_CLIENT_ID: "7pfomg61gob2mgcekc04nrkpjp",
    IDENTITY_POOL_ID: "us-east-1:2317c14f-d491-4c6b-a3dd-95428b365db9"
  }
};

const config = {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  // Default to dev if not set
  ...(process.env.REACT_APP_STAGE === "prod" ? prod : dev),
};

export default config;