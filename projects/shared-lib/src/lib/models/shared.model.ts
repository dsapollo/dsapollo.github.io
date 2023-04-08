export interface Environment{
    production:boolean;

   // STORE ENV
    digitalStoreUrl:string;
    digitalStoreRemoteUrl:string;
    serviceManagementUrl:string;
    serviceManagementRemoteUrl:string;

    auth:{
        clientId:string;
        authority:string;
        redirectUri:string;
        scope:string;
    };

    // digitalstore:DigitalStoreEnv;
    ordermanagement:OrderManagementEnv;

    serviceManagement:ServiceManagementEnv;

}



export interface ServiceManagementEnv{
    dstoreFederationUrl:string;
    report:string;
    
}

export interface OrderManagementEnv{
    dstoreFederationUrl:string;
    report:string;
    
}