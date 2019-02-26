 const ConstToJSON = $.import('xsjs.user', 'toJSON').toJSON;
 const cToJSON = new ConstToJSON();
 const USER_TABLE = "dev::SportTeam";

function sportsDelete(param) {

  var after = param.afterTableName;

  var pStmt = param.connection.prepareStatement("select * from \"" + after + "\"");
  var oResult = pStmt.executeQuery();

  var oUserItems = cToJSON.recordSetToJSON(oResult, "items");
  var oUser = oUserItems.items[0];

  var uStmt;
  uStmt = param.connection.prepareStatement(`DELETE FROM \"${USER_TABLE}\" WHERE \"sportid\" = ${oUser.sportid};`);
  uStmt.executeUpdate();
  uStmt.close();
}
