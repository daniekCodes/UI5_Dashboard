sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function(Controller, JSONModel, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("product.dashboard.controller.App", {
        onInit: function() {
            var sUrl = "https://services.odata.org/V4/Northwind/Northwind.svc/Products?$top=20&$format=json";
            var oModel = new JSONModel();
            oModel.loadData(sUrl);
            this.getView().setModel(oModel);

            oModel.attachRequestCompleted(function() {
                var aProducts = oModel.getProperty("/value");
                var iTotalProducts = aProducts.length;

                var fTotalPrice=aProducts.reduce(function (sum, product){
                    return sum + parseFloat(product.UnitPrice || 0);
                }, 0);
                var fAvgPrice = (fTotalPrice / iTotalProducts).toFixed(2);

                oModel.setProperty("/totalProducts", iTotalProducts);
                oModel.setProperty("/avgPrice", fAvgPrice);
            });
        },

        onSearch: function(oEvent) {
            var sQuery = oEvent.getParameter("newValue");
            var oTable = this.byId("productTable");
            var oBinding = oTable.getBinding("items");

            if (sQuery) {
                var oFilter = new Filter("ProductName", FilterOperator.Contains, sQuery);
                oBinding.filter([oFilter]);
            } else {
                oBinding.filter([]);
            }
        },

        onProductPress: function(oEvent) {
            var oItem = oEvent.getSource();
            var oContext = oItem.getBindingContext();
            var iProductId = oContext.getProperty("ProductID");

            this.getOwnerComponent().getRouter().navTo("detail", {
                productId: iProductId
            });
        }
    });
});