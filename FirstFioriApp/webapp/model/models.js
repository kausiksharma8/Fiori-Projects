sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function (JSONModel) {
  "use strict";
  return {
    createMyModel: function (sPath) {
      var oModel = new JSONModel();
      oModel.loadData(sPath);
      //var oModel = Models.createMyModel();
      return oModel;
    },
  };
});
