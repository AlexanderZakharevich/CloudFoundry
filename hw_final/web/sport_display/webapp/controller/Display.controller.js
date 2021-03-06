sap.ui.define([
	"sap/ui/core/mvc/Controller"
  ], function(Controller) {
	"use strict";
	return Controller.extend("sport_display.controller.Detail", {

	  onInit: function() {
		var oList = this.byId("details");
		this._oList = oList;
	  },

	  onSelectionChange: function(oEvent) {
		var oTable = this.getView().byId("details");
		this._item = oTable.getSelectedItem().getBindingContext("sports").getObject();
	  },

	  onRefresh: function(oEvent) {
		this._oList.getBinding("items").refresh();
	  },

	  onCreate: function(oEvent) {
		var dialog = new sap.m.Dialog({
		  title: "Add User",
		  type: "Message",
		  content: [
			new sap.ui.layout.VerticalLayout({
			  width: "300px",
			  content: [
				new sap.ui.layout.HorizontalLayout({
				  content: [
					new sap.m.Label({
					  width: "100px",
					  design: "Bold",
					  text: "Sport ID:"
					}).addStyleClass("popup_label"),
					new sap.m.Input("UserID_inp", {
					  width: "230px",
					  value: "ID will generated automatically",
					  editable: false
					})
				  ]
				}),
				new sap.ui.layout.HorizontalLayout({
				  content: [
					new sap.m.Label({
					  width: "100px",
					  design: "Bold",
					  text: "Sport Name:"
					}).addStyleClass("popup_label"),
					new sap.m.Input("UserName_inp", {
					  value: "",
					  width: "230px"
					})
				  ]
				})
			  ]
			})
		  ],
		  beginButton: new sap.m.Button({
			text: "Save",
			type: "Accept",
			press: function() {
			  var sUserName = sap.ui.getCore().byId("UserName_inp").getValue();

			  var oObject = {};
			  oObject = {
				"sportid": "",
				"name": sUserName
			  };

			  var sServiceUrl = "https://p2001091459trial-fty3-dev-service.cfapps.eu10.hana.ondemand.com/xsodata/dev.xsodata";

			  var oModel = new sap.ui.model.odata.v2.ODataModel(sServiceUrl, true);
			  oModel.create("/SportTeam", oObject);

			  oModel.setRefreshAfterChange(false);

			  dialog.close();
			}
		  }),
		  endButton: new sap.m.Button({
			text: "Cancel",
			type: "Reject",
			press: function() {
			  dialog.close();
			}
		  }),
		  afterClose: function() {
			dialog.destroy();
		  }
		});
		dialog.open();
	  },
	  onUpdate: function(oEvent) {
		var oUser = this._item;
		var oUserID = oUser.sportid;
		var oUserName = oUser.name;

		var dialog = new sap.m.Dialog({
		  title: "Change User",
		  type: "Message",
		  content: [
			new sap.ui.layout.VerticalLayout({
			  width: "400px",
			  content: [
				new sap.ui.layout.HorizontalLayout({
				  content: [
					new sap.m.Label({
					  width: "100px",
					  design: "Bold",
					  text: "Sport ID:"
					}).addStyleClass("popup_label"),
					new sap.m.Input("UserID_inp", {
					  width: "230px",
					  value: oUserID,
					  editable: false
					})
				  ]
				}),
				new sap.ui.layout.HorizontalLayout({
				  content: [
					new sap.m.Label({
					  width: "100px",
					  design: "Bold",
					  text: "Sport Name:"
					}).addStyleClass("popup_label"),
					new sap.m.Input("UserName_inp", {
					  value: oUserName,
					  width: "230px"
					})
				  ]
				})
			  ]
			})
		  ],
		  beginButton: new sap.m.Button({
			text: "Save",
			type: "Accept",
			press: function() {
			  var sUserID = sap.ui.getCore().byId("UserID_inp").getValue();
			  var sUserName = sap.ui.getCore().byId("UserName_inp").getValue();

			  var oObject = {};
			  oObject = {
				"name": sUserName,
				"ts_update": null,
				"ts_create": null
			  };

			  var oModel = new sap.ui.model.odata.ODataModel("https://p2001091459trial-fty3-dev-service.cfapps.eu10.hana.ondemand.com/xsodata/dev.xsodata", true);
			  sap.ui.getCore().setModel(oModel);

			  sap.ui.getCore().getModel().update("/SportTeam('" + sUserID + "')", oObject, null, function() {
				sap.m.MessageToast.show("Updated successfully", { duration: 3000 });
			  }, function() {
				sap.m.MessageToast.show("Update failed", { duration: 3000 });
			  });

			  oModel.setRefreshAfterChange(false);

			  dialog.close();
			}
		  }),
		  endButton: new sap.m.Button({
			text: "Cancel",
			type: "Reject",
			press: function() {
			  dialog.close();
			}
		  }),
		  afterClose: function() {
			dialog.destroy();
		  }
		});
		dialog.open();
	  },

	  onDelete: function(oEvent) {
		var oUser = this._item;
		var oUserID = oUser.sportid;

		var settings = {
		  "async": true,
		  "crossDomain": true,
		  "url": "https://p2001091459trial-fty3-dev-router.cfapps.eu10.hana.ondemand.com/api/xsjs/user/user.xsjs?userid=" + oUserID,
		  "method": "DELETE",
		  "headers": {
			"content-type": "application/json"
		  },
		  "processData": false
		};
		$.ajax(settings).done(function(response) {
		  sap.m.MessageToast.show("Deleted", { duration: 2000 });
		});
	  }
	  },
	});
  });
