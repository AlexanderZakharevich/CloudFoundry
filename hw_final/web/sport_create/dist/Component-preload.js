jQuery.sap.registerPreloadedModules({version:"2.0",name:"sport_create/Component-preload",modules:{"sport_create/Component.js":'sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device"],function(t,e){"use strict";return t.extend("sport_create.Component",{metadata:{manifest:"json"},init:function(){t.prototype.init.apply(this,arguments)}})});',"sport_create/controller/App.controller.js":'sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/thirdparty/jquery"],function(n,t){"use strict";return n.extend("sport_create.controller.App",{onInit:function(){},onExit:function(){},sendPost:function(){t.ajax({type:"POST",url:"/api/xsjs/user/user.xsjs",dataType:"json",contentType:"application/json",data:JSON.stringify({name:"Joker"}),success:function(n){alert("success")},error:function(){alert("error")}})}})});',"sport_create/fragment/ConfirmDeleteDialog.fragment.xml":'<core:FragmentDefinition\n\txmlns="sap.m"\n\txmlns:core="sap.ui.core"><Dialog\n\t\ttitle="{i18n>confirm}"\n\t\ttype="Message" ><content><Text text="{i18n>confirmDeleteText}" /></content><beginButton><Button text="{i18n>delete}" press="onConfirmDelete" /></beginButton><endButton><Button text="{i18n>cancel}" press="onCancelDelete" /></endButton></Dialog></core:FragmentDefinition>',"sport_create/view/App.view.xml":'<mvc:View\n\txmlns="sap.m"\n\txmlns:mvc="sap.ui.core.mvc"\n\tcontrollerName="sport_create.controller.App"\n\tdisplayBlock="true"><App id="app" busyIndicatorDelay="0"><Button text="POST" press="sendPost" /></App></mvc:View>',"sport_create/manifest.json":'{"_version":"1.8.0","sap.app":{"id":"sport_create","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"html5moduletemplates.basicSAPUI5ApplicationProjectModule","version":"1.40.12"},"crossNavigation":{"inbounds":{"intent1":{"signature":{"parameters":{},"additionalParameters":"allowed"},"semanticObject":"sport_create","action":"manage"}}}},"sap.platform.cf":{"oAuthScopes":["dev!t10794.dev.view","dev!t10794.dev.edit"]},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true},"supportedThemes":["sap_hcb","sap_belize"]},"sap.ui5":{"rootView":{"viewName":"sport_create.view.App","type":"XML"},"dependencies":{"minUI5Version":"1.60.1","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{},"sap.ushell":{},"sap.collaboration":{},"sap.ui.comp":{},"sap.uxap":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"sport_create.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]}}}'}});