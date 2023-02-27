export const environment = {
  production: false,

  dstoreApiUrl: 'https://graphqlapi-08o0.onrender.com/graphql',

  // dstoreApiUrl: 'http://localhost:55009/graphql',

  clientId: '3cd37bc8-72b4-491d-b157-60255bab74e9',
  authority:
    'https://login.microsoftonline.com/14f73aef-e041-495c-9533-5c8f5fe12b26',
  redirectUri: 'http://localhost:4200',
  scope: '14f73aef-e041-495c-9533-5c8f5fe12b26',

  roles: {
    admin: 'SUPER_ADMIN',
    customerCare: 'CUSTOMER_CARE_EXECUTIVE',
    customer: 'CUSTOMER',
  },
};
