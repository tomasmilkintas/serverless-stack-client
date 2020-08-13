export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "eu-west-2",
        BUCKET: "notes17-prod-serverlessdeploymentbucket-jqm0x0m34ml9",
    },
    apiGateway: {
        REGION: "eu-west-2",
        URL: "https://xfz14bgw39.execute-api.eu-west-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "eu-west-2",
        USER_POOL_ID: "eu-west-2_otEpu3aau",
        APP_CLIENT_ID: "b3306etsqsle93vrukgi08dgd",
        IDENTITY_POOL_ID: "eu-west-2:6814942f-128d-4a98-b885-9354eac1d743",
    },
};
