sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
    "use strict";

    return Controller.extend("product.dashboard.controller.App", {
        onInit: function() {
            var sUrl = "https://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=20&$format=json";

            var oModel = new JSONModel();
            oModel.loadData(sUrl);

            this.getView().setModel(oModel);
        }
    });
});