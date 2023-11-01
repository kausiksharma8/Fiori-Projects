sap.ui.define(
  ["sap/ui/core/mvc/Controller", "spiderman/model/models"],
  function (Controller, Models) {
    "use strict";
    return Controller.extend("spiderman.controller.View1", {
      onInit: function () {
        var oModelKausik = Models.createMyModel("model/mockData/myData.json");
        var oModelMadhu = Models.createMyModel("model/mockData/myData2.json");
        sap.ui.getCore().setModel(oModelKausik);
        sap.ui.getCore().setModel(oModelMadhu, "alternate");
      },
      onGenerate: function () {
        //4. bind value in run time
        // var oSal = this.getView().byId("idSal")
        // oSal.bindValue("/empStr/salary")
        // var oCur = this.getView().byId("idCur")
        // oCur.bindProperty("value","/empStr/currency")
      },
      onFlip: function () {
        var oModel1 = sap.ui.getCore().getModel();
        var oModel2 = sap.ui.getCore().getModel("alternate");

        sap.ui.getCore().setModel(oModel2);
        sap.ui.getCore().setModel(oModel1, "alternate");
        debugger;
      },
      onInsert: function (oEvent) {
        var aEmpTab = sap.ui.getCore().getModel().getProperty("/empTab");
        var jEmpStr = sap.ui.getCore().getModel().getProperty("/empStr");
        var body = {
        "empid": this.getView().byId("__idNo").getValue(),
        "empName": this.getView().byId("__idName").getValue(),
        "sal": this.getView().byId("__idSal").getValue(),
        "currency": this.getView().byId("__idCur").getValue(),
        }


        //Radio Button Get the Data
        debugger;
        var oRadioGrp = this.getView().byId("__radio")
        var selectedIndex = oRadioGrp.getSelectedIndex();
        var sText = oRadioGrp.getButtons()[selectedIndex].getText()
        body.mStat = sText

        //Select
        var sCurrency = this.getView().byId("__select").getSelectedKey();
        
        jEmpStr.currency = sCurrency;
        aEmpTab.push(jEmpStr);

        sap.ui.getCore().getModel().setProperty("/empTab", aEmpTab);
        debugger;
      },
    });
  }
);
