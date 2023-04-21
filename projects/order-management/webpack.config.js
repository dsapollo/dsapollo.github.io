const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;
const shareAll=mf.shareAll;
const{remoteFileName} =require("../remote-file");
console.log("webpack",remoteFileName)

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),[
    "shared-lib"
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "order-management",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },   
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  experiments: {
    outputModule: true
  },
  plugins: [
    new ModuleFederationPlugin({
        library: { type: "module" },

        // For remotes (please adjust)
        name: "order-management",
        // filename: "remoteEntry.js", 
        filename: `${remoteFileName}`, 
        exposes: {
            './AppStoreLandingModule': 
            './projects/order-management/src/app/module/internal/modules/app-store-landing/app-store-landing-modules.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "store": "http://localhost:4200/remoteEntry.js",
        //     "serviceManagement": "http://localhost:4400/remoteEntry.js",

        // },

        shared: share({
          "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
          "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
           "@angular/forms":{
            singleton:true,
            strictVersion:true,
            requiredVersion:"auto",
           },
           rxjs:{singleton:true,strictVersion:true,requiredVersion:"auto"},
           "rxjs/operators":{
            singleton:true,
            strictVersion:true,
            requiredVersion:"auto",
           },
           "apollo-angular":{
            singleton:true,
            strictVersion:true,
            requiredVersion:"auto",
           },

          ...sharedMappings.getDescriptors()
        })
        
    }),
    sharedMappings.getPlugin()
  ],
};
