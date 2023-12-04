sap.ui.define([
    'fiori/practice/controller/BaseController',
    'fiori/practice/model/models'
], function(BaseController,Models) {
    'use strict';
    return BaseController.extend("fiori.practice.controller.View1",{
        onInit: function(){
           var oFruitModel = Models.createFruitModel("model/mockData/fruits.json");
            this.getView().setModel(oFruitModel);
        },
        goToView1:function(){
            debugger;
            var oApp = this.getAppObject();
            oApp.to("idView2");
        }
    });
});