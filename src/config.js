const dev = {
    STRIPE_KEY:
        "pk_test_51HDdR9IaHMX9q7UPWqcz5FcsIf6GmufuxmEz5pE6ha2hicsBkIVoAaUdG6WYsWBYVNpwRq7tf5OOBNPTgrNu2fTG00uYCUUEPn",
    s3: {
        REGION: "eu-west-2",
        BUCKET: "notes17-2-dev-attachmentsbucket-7ei63uaa20ny",
    },
    apiGateway: {
        REGION: "eu-west-2",
        URL: "https://my21n13111.execute-api.eu-west-2.amazonaws.com/dev",
    },
    cognito: {
        REGION: "eu-west-2",
        USER_POOL_ID: "eu-west-2_sABh9qcAt",
        APP_CLIENT_ID: "6lkm9tci8304lro9a3nhrch0v2",
        IDENTITY_POOL_ID: "eu-west-2:cbe5f3e3-dc7e-4467-93db-5607bb8cc6a7",
    },
};

const prod = {
    STRIPE_KEY:
        "pk_test_51HDdR9IaHMX9q7UPWqcz5FcsIf6GmufuxmEz5pE6ha2hicsBkIVoAaUdG6WYsWBYVNpwRq7tf5OOBNPTgrNu2fTG00uYCUUEPn",
    s3: {
        REGION: "eu-west-2",
        BUCKET: "notes17-2-prod-attachmentsbucket-1v1bxsyyxkm0b",
    },
    apiGateway: {
        REGION: "eu-west-2",
        URL: "https://l3dmgzorh4.execute-api.eu-west-2.amazonaws.com/prod",
    },
    cognito: {
        REGION: "eu-west-2",
        USER_POOL_ID: "eu-west-2_VS4VnTcFD",
        APP_CLIENT_ID: "247qng33im14sbqqjac26pqald",
        IDENTITY_POOL_ID: "eu-west-2:9810f823-6032-42c9-b362-c2f36df05160",
    },
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config,
};
