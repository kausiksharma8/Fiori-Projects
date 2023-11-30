sap.ui.define([
    'fiori/practice/controller/BaseController',
    
], function(BaseController) {
    'use strict';
    return BaseController.extend("fiori.practice.controller.App",{
        onInit: function(){
            var oApp = this.getView().byId("myApp");
            var oView1 = new sap.ui.view({
                id:"idView1",
                viewName: "fiori.practice.view.View1",
                type:'XML'
            }) ;
            var oView2 = new sap.ui.view({
                id:"idView2",
                viewName: "fiori.practice.view.View2",
                type:'XML'
            }) ;
            oApp.addPage(oView1);
            oApp.addPage(oView2);
        }
    });
});