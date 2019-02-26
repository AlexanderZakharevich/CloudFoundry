var user = function(connection) {

  const USER_TABLE = "dev::SportTeam";
  const STMT_INSTANCE = new statements();
  /*
          const USER = $.session.securityContext.userInfo.familyName ?
              $.session.securityContext.userInfo.familyName + " " + $.session.securityContext.userInfo.givenName :
              $.session.getUsername().toLocaleLowerCase(),
  */
  this.doGet = function(obj) {
    const result = connection.executeQuery(`SELECT * FROM "${USER_TABLE}"`);
    result.forEach(x => $.trace.error(JSON.stringify(x)));
    $.response.status = $.net.http.OK;
    $.response.setBody(JSON.stringify(result));
  };

  this.doPost = function(oUser) {
    oUser.sportid = getNextval("dev::sportid");
    const statement = STMT_INSTANCE.createPreparedInsertStatement(USER_TABLE, oUser);
    connection.executeUpdate(statement.sql, statement.aValues);
    connection.commit();
    $.response.status = $.net.http.CREATED;
    $.response.setBody(JSON.stringify(oUser));
  };

  this.doPut = function(oUser) {
    let sql = "";

    sql = `UPDATE "${USER_TABLE}" SET "name"='${oUser.name}' WHERE "sportid"=${oUser.sportid};`;
    $.trace.error("sql to update: " + sql);

    connection.executeUpdate(sql);

    connection.commit();
    $.response.status = $.net.http.OK;
    $.response.setBody('User updated');
  };


  this.doDelete = function(sportid) {
    const statement = STMT_INSTANCE.createPreparedDeleteStatement(USER_TABLE, { sportid: sportid });
    connection.executeUpdate(statement.sql, statement.aValues)
    connection.commit();
    $.response.status = $.net.http.OK;
    $.response.setBody(JSON.stringify({}));
  };

  function getNextval(sSeqName) {
    const statement = `select "${sSeqName}".NEXTVAL as "ID" from dummy`;
    const result = connection.executeQuery(statement);
    if (result.length > 0) {
      return result[0].ID;
    } else {
      throw new Error('ID was not generated');
    }
  }
};

var statements = function() {
  this.createPreparedInsertStatement = function(sTableName, oValueObject) {
    let oResult = {
      aParams: [],
      aValues: [],
      sql: "",
    };
    let sColumnList = '',
      sValueList = '';

    let sWhereClause = '';
    for (let key in oConditionObject) {
      sWhereClause += `"${key}" = ? and `;
      oResult.aValues.push(oConditionObject[key]);
      oResult.aParams.push(key);
    }

    $.trace.error("svalue " + sValueList);
    $.trace.error("scolumn: " + sColumnList);

    sColumnList = sColumnList.slice(0, -1);
    sValueList = sValueList.slice(0, -2);

    oResult.sql = `insert into "${sTableName}" (${sColumnList}) values (${sValueList})`;

    $.trace.error("sql to insert: " + oResult.sql);
    return oResult;
  };

  this.createPreparedDeleteStatement = function(sTableName, oConditionObject) {
    let oResult = {
      aParams: [],
      aValues: [],
      sql: "",
    };

    let sWhereClause = '';
    for (let key in oConditionObject) {
      sWhereClause += `"${key}" = ? and `;
      oResult.aValues.push(oConditionObject[key]);
      oResult.aParams.push(key);
    }
    // Remove the last unnecessary AND
    sWhereClause = sWhereClause.slice(0, -5);
    if (sWhereClause.length > 0) {
      sWhereClause = " where " + sWhereClause;
    }

    oResult.sql = `delete from "${sTableName}" ${sWhereClause}`;

    $.trace.error("sql to delete: " + oResult.sql);
    return oResult;
  };

  this.createPreparedUpdateStatement = function(sTableName, oValueObject) {
    let oResult = {
      aParams: [],
      aValues: [],
      sql: "",
    };

    let sColumnList = '',
      sValueList = '';

    let sWhereClause = '';
    for (let key in oConditionObject) {
      sWhereClause += `"${key}" = ? and `;
      oResult.aValues.push(oConditionObject[key]);
      oResult.aParams.push(key);
    }

    $.trace.error("svalue " + sValueList);
    $.trace.error("scolumn: " + sColumnList);

    sColumnList = sColumnList.slice(0, -1);
    sValueList = sValueList.slice(0, -2);

    oResult.sql = `update "${sTableName}" set "name"='${oValueObject.name}' WHERE "sportid"=${oValueObject.sportid};`;

    $.trace.error("sql to update: " + oResult.sql);
    return oResult;
  };
};
