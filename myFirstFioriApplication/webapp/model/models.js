sap.ui.define([
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel'
], function(JSONModel,ResourceModel) {
    'use strict';
    return{
        createFruitModel: function(sPath){
            var oModel = new JSONModel();
            oModel.loadData(sPath);
            return oModel;
        }
    }
});