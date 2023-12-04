sap.ui.define(
  ["fiori/practice/controller/BaseController", "fiori/practice/model/models","sap/ui/core/Fragment"],
  function (BaseController, Models,Fragment) {
    "use strict";
    return BaseController.extend("fiori.practice.controller.View1", {
      onInit: function () {
        var oFruitModel = Models.createFruitModel("model/mockData/fruits.json");
        this.getView().setModel(oFruitModel);
      },
      goToView1: function () {
        debugger;
        var oApp = this.getAppObject();
        oApp.to("idView2");
      },
      _onSearch: function (oEvent) {
        var value = oEvent.getParameter("newValue");
        var oFilter1 = new sap.ui.model.Filter(
          "name",
          sap.ui.model.FilterOperator.Contains,
          value
        );
        var oFilter2 = new sap.ui.model.Filter(
          "benefit",
          sap.ui.model.FilterOperator.Contains,
          value
        );
        var oMainFilter = new sap.ui.model.Filter({
          filters: [oFilter1, oFilter2],
          and : false
        });
        var aFilter = [oMainFilter];
        var oList = this.getView().byId("myList")
        oList.getBinding("items").filter(aFilter);
        debugger;
      },
      _onPressFilter: function (oEvent) {
        
      }
    });
  }
);
