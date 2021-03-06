module.exports = Deployments;

function Deployments(api){
  this.api = api;
}

Deployments.prototype.list = function (appId, envName, callback) {
  this.api.authGet(this.api.path('deployments', { appId: appId, envName: envName }), function (err, json) {
    if(err) return callback(err);

    callback(null, json.deployments);
  });
};

Deployments.prototype.create = function (appId, envName, deploymentJson, callback) {
  var data = {
    name: deploymentJson.name
  };

  this.api.authPost(this.api.path('deployments', { appId: appId, envName: envName }), { data: data }, function (err, json) {
    if(err) return callback(err);

    callback(null, json.deployment);
  });
};

Deployments.prototype.destroy = function (appId, envName, deploymentName, callback) {
  this.api.authDelete(this.api.path('deployment', { appId: appId, envName: envName, deploymentName: deploymentName }), function (err, json) {
    if(err) return callback(err);

    callback(null, json.deployment);
  });
};
