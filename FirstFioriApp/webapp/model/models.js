sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/model/resource/ResourceModel"
], function (JSONModel,ResourceModel) {
  "use strict";
  return {
    createMyModel: function (sPath) {
      var oModel = new JSONModel();
      oModel.loadData(sPath);
      //var oModel = Models.createMyModel();
      return oModel;
    },
    createResourceModel: function (){
      var oResourceModel = new ResourceModel({
        bundleUrl : "i18n/i18n.properties"
      });
      return oResourceModel;
    }
  };
});
