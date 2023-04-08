 import {remoteFileName} from '../../../remote-file';

export const environment = {
  production: false,


  serviceManagementRemoteUrl:`http://localhost:4400/${remoteFileName}`,
  OrderManagementRemoteUrl:`http://localhost:4300/${remoteFileName}`,
  

  //dstoreApiUrl: 'https://graphql-internal.onrender.com/graphql',

  dstoreApiUrl: 'https://graphqlapi-08o0.onrender.com/graphql',

  
  //srRemoteUrl:`http://localhost:4400/`,

  // dstoreApiUrl: 'http://localhost:55009/graphql',

  auth:{
  clientId: '3cd37bc8-72b4-491d-b157-60255bab74e9',
  authority:
    'https://login.microsoftonline.com/14f73aef-e041-495c-9533-5c8f5fe12b26',
  redirectUri: 'https://dsapollo.github.io/',
  scope: 'User.Read',
  },
  roles: {
    admin: 'SUPER_ADMIN',
    customerCare: 'CUSTOMER_CARE_EXECUTIVE',
    customer: 'CUSTOMER',
  },
};


