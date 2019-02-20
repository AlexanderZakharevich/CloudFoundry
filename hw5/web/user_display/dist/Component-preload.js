jQuery.sap.registerPreloadedModules({version:"2.0",name:"user_display/Component-preload",modules:{"user_display/Component.js":'sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device"],function(t,e){"use strict";return t.extend("user_display.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments)}})});',"user_display/controller/Display.controller.js":'sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("user_display.controller.Detail",{onInit:function(){var e=this.byId("details");this._oList=e},onSelectionChange:function(e){this._item=e.getSource().getBindingContext().getObject(users)},onRefresh:function(e){this._oList.getBinding("items").refresh()},onCreate:function(e){var t=this.getView().byId("details").getItems().length;console.log(t);var a=t+1,n=new sap.m.Dialog({title:"Add User",type:"Message",content:[new sap.ui.layout.VerticalLayout({width:"140px",content:[new sap.ui.layout.HorizontalLayout({content:[new sap.m.Label({width:"100px",design:"Bold",text:"User ID:"}).addStyleClass("popup_label"),new sap.m.Input("UserID",{value:a,editable:!1})]}),new sap.ui.layout.HorizontalLayout({content:[new sap.m.Label({width:"100px",design:"Bold",text:"User Name:"}).addStyleClass("popup_label"),new sap.m.Input("UserName",{})]})]})],beginButton:new sap.m.Button({text:"Save",press:function(){var e=sap.ui.getCore().byId("UserID").getValue(),t=sap.ui.getCore().byId("UserName").getValue(),a={};a={usid:e,name:t};var s=new sap.ui.model.odata.v2.ODataModel("https://p2001079623trial-df43r34-dev-service.cfapps.eu10.hana.ondemand.com/xsodata/dev.xsodata",!0);s.create("/Users",a),s.setRefreshAfterChange(!1),n.close()}}),endButton:new sap.m.Button({text:"Cancel",press:function(){n.close()}}),afterClose:function(){n.destroy()}});n.open()},onUpdate:function(e){var t=this._item,a=t.usid,n=t.name,s=new sap.m.Dialog({title:"Change User",type:"Message",content:[new sap.ui.layout.VerticalLayout({width:"140px",content:[new sap.ui.layout.HorizontalLayout({content:[new sap.m.Label({width:"100px",design:"Bold",text:"User ID:"}).addStyleClass("popup_label"),new sap.m.Input("UserID",{value:a,editable:!1})]}),new sap.ui.layout.HorizontalLayout({content:[new sap.m.Label({width:"100px",design:"Bold",text:"User Name:"}).addStyleClass("popup_label"),new sap.m.Input("UserName",{value:n})]})]})],beginButton:new sap.m.Button({text:"Save",press:function(){var e=sap.ui.getCore().byId("UserID").getValue(),t=sap.ui.getCore().byId("UserName").getValue(),a={};a={usid:e,name:t};var n="/Users(\'"+e+"\')",o=new sap.ui.model.odata.v2.ODataModel("https://p2001079623trial-df43r34-dev-service.cfapps.eu10.hana.ondemand.com/xsodata/dev.xsodata",!0);o.update(n,a),o.setRefreshAfterChange(!1),s.close()}}),endButton:new sap.m.Button({text:"Cancel",press:function(){s.close()}}),afterClose:function(){s.destroy()}});s.open()},onDelete:function(e){var t=this._item,a=t.usid,n="/OrgUnits(\'"+a+"\')",s=new sap.ui.model.odata.v2.ODataModel("https://p2001079623trial-df43r34-dev-service.cfapps.eu10.hana.ondemand.com/xsodata/dev.xsodata",!0);s.remove(n),s.setRefreshAfterChange(!1)}})});',"user_display/view/Display.view.xml":'<mvc:View controllerName="user_display.controller.Display" \n  xmlns="sap.m" \n  xmlns:l="sap.ui.layout" \n  xmlns:mvc="sap.ui.core.mvc"><Shell><App><pages><Page><Panel id="PeopleDetailPanel" headerText="Details" class="sapUiResponsiveMargin" width="auto"><content><l:HorizontalLayout><l:content><Button text="Refresh" press="onRefresh" icon="sap-icon://refresh" class="sapUiTinyMargin"><layoutData><FlexItemData growFactor="1" /></layoutData></Button><Button text="Create" press="onCreate" icon="sap-icon://add" class="sapUiTinyMargin"><layoutData><FlexItemData growFactor="1" /></layoutData></Button><Button text="Edit" press="onUpdate" icon="sap-icon://edit" class="sapUiTinyMargin"><layoutData><FlexItemData growFactor="1" /></layoutData></Button><Button text="Delete" press="onDelete" icon="sap-icon://delete" class="sapUiTinyMargin"><layoutData><FlexItemData growFactor="1" /></layoutData></Button></l:content></l:HorizontalLayout><Table id="details" items = "{path: \'users>/Users\'}" mode="SingleSelectMaster" selectionChange="onSelectionChange"><columns><Column id="userIdColumn"><Text text="{i18n>userIdText}" /></Column><Column id="userNameColumn"><Text text="{i18n>userNameText}" /></Column></columns><items><ColumnListItem><cells><Label text="{users>usid}" /></cells><cells><Label text="{users>name}" /></cells></ColumnListItem></items></Table></content></Panel></Page></pages></App></Shell></mvc:View>',"user_display/i18n/i18n.properties":"userIdText = User ID\nuserNameText = User Name\nappTitle = user_display\nappDescription = User Display Table","user_display/manifest.json":'{"_version":"1.8.0","sap.app":{"id":"user_display","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"html5moduletemplates.basicSAPUI5ApplicationProjectModule","version":"1.40.12"},"dataSources":{"mainService":{"uri":"https://p2001091459trial-fty3-dev-router.cfapps.eu10.hana.ondemand.com/xsodata/dev.xsodata","type":"OData","settings":{"odataVersion":"2.0"}}}},"sap.platform.cf":{"oAuthScopes":["dev!b10746.dev.view","dev!b10746.dev.edit"]},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":["sap_hcb","sap_belize"]},"sap.ui5":{"rootView":{"viewName":"user_display.view.Display","type":"XML","async":true,"id":"display"},"dependencies":{"minUI5Version":"1.60.1","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"user_display.i18n.i18n"}},"users":{"dataSource":"mainService","settings":{"defaultBindingMode":"TwoWay","defaultCountMode":"Inline","useBatch":false,"disableHeadRequestForToken":true}}}},"resources":{}}'}});