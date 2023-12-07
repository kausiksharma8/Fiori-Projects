sap.ui.define(
  [
    "fiori/practice/controller/BaseController",
    "fiori/practice/model/models",
    "sap/ui/core/Fragment",
  ],
  function (BaseController, Models, Fragment) {
    "use strict";
    return BaseController.extend("fiori.practice.controller.View1", {
      onInit: function () {
        
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
          and: false,
        });
        var aFilter = [oMainFilter];
        var oList = this.getView().byId("myList");
        oList.getBinding("items").filter(aFilter);
        debugger;
      },
      _onPressFilter: function (oEvent) {
        debugger;
        if (!this._oPopover) {
          this._oPopover = new sap.ui.xmlfragment("fiori.practice.fragments.filter", this);
          this.getView().addDependent(this._oPopover);
          this._oPopover.openBy(oEvent.getSource());
        }
        else {
          this._oPopover.openBy(oEvent.getSource());
          //this._pPopover=undefined;
        }


      },
      createObjFilter: function (param) {
        var value, filterCondition;
        if (param === "<100") {
          value = 100;
          filterCondition = sap.ui.model.FilterOperator.LE;
        }
        else if (param === ">100") {
          value = 100;
          filterCondition = sap.ui.model.FilterOperator.GE;
        }
        else if (param === "<200") {
          value = 200;
          filterCondition = sap.ui.model.FilterOperator.LE;
        }
        else if (param === ">200") {
          value = 200;
          filterCondition = sap.ui.model.FilterOperator.GE;
        }
        var oFilter = new sap.ui.model.Filter(
          "price",
          filterCondition,
          value
        );
        return oFilter;
      },
      _onApply: function (oEvent) {
        var aFilters = [];

        var aCheckBox = sap.ui.getCore().byId("__filterVBox").getItems()
        for (let index = 0; index < aCheckBox.length; index++) {

          if (aCheckBox[index].getSelected()) {
            var sText = aCheckBox[index].getText();
            aFilters.push(this.createObjFilter(sText));
          }

        }
        var oMainFilter = new sap.ui.model.Filter({
          filters: aFilters,
          and: true,
        });
        var aMainFilter = [oMainFilter];
        var oList = this.getView().byId("myList");
        oList.getBinding("items").filter(aMainFilter);
        debugger;
        //this._onClose();

      },
      _onClose: function (oEvent) {
        debugger;
        if (this._oPopover) {
          this._oPopover.close();
        }
      },
      _onListItemSelection:function(oEvent){
        debugger;
   
        var sPath = oEvent.getSource().getBindingContextPath();
        var oApp = this.getAppObject()
        var oView2 =oApp.getDetailPage("idView2");
        oView2.bindElement(sPath);
        oApp.to("idView2");
        // 
      }
    });
  }
);
