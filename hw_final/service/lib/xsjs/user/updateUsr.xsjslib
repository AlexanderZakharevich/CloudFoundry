const ConstToJSON = $.import('xsjs.user', 'toJSON').toJSON;
const cToJSON = new ConstToJSON();
const USER_TABLE = "dev::SportTeam";
const CURR_TIMESTAMP_FUN = "current_timestamp";

function sportsUpdate(param) {
  //var after = param.afterTableName;

  //var pStmt = param.connection.prepareStatement("select * from \"" + after + "\"");
  //var oResult = pStmt.executeQuery();

  //var oUserItems = cToJSON.recordSetToJSON(oResult, "items");
  //var oUser = oUserItems.items[0];
  //$.trace.error("Update oUser :" + JSON.stringify(oUser));

  //pStmt.close();
  //pStmt = param.connection.prepareStatement(`UPDATE \"${USER_TABLE}\" SET "name"='${oUser.name}' WHERE "sportid"=${oUser.sportid}`);
  //exucuteAndClose(pStmt);
  //pStmt = param.connection.prepareStatement("TRUNCATE TABLE \"" + after + "\"");
  //exucuteAndClose(pStmt);
  //pStmt = param.connection.prepareStatement("insert into \"" + after + "\" values(?,?)");
  //pStmt.setString(1, oUser.sportid.toString());
  //pStmt.setString(2, oUser.name.toString());
  //exucuteAndClose(pStmt);
  var after = param.afterTableName;

  var pStmt = param.connection.prepareStatement("select * from \"" + after + "\"");
  var oResult = pStmt.executeQuery();

  var oUserItems = cToJSON.recordSetToJSON(oResult, "items");
  var oUser = oUserItems.items[0];
  $.trace.error("Update oUser :" + JSON.stringify(oUser));

  pStmt.close();
  pStmt = param.connection.prepareStatement(`UPDATE "${USER_TABLE}" SET "name"='${oUser.name}', "ts_update"=${CURR_TIMESTAMP_FUN} WHERE "sportid"=${oUser.sportid}`);
  exucuteAndClose(pStmt);
}

function exucuteAndClose(pStmt) {
  pStmt.executeUpdate();
  pStmt.close();
}
