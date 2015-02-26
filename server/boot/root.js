module.exports = function(server) {
  // Install a `/` route that returns server status
  //var router = server.loopback.Router();
  //router.get('/', server.loopback.status());
  //server.use(router);

    //var regionalData = [
    //    {Region: 'Maryland', projectId: "54e8d1f048cf6a8c27104e6b"},
    //    {Region: 'Washington D.C.', projectId: "54e8d1f048cf6a8c27104e6b"},
    //    {Region: 'Virginia', projectId: "54e8d1f048cf6a8c27104e6b"}
    //];
    //
    //var dataSource = server.dataSources.MongoDB;
    //dataSource.automigrate('RegionalData', function(er) {
    //    if (er) throw er;
    //    var Model = server.models.RegionalData;
    //    //create sample data
    //    var count = regionalData.length;
    //    regionalData.forEach(function(regionalDatum) {
    //        Model.create(regionalDatum, function(er, result) {
    //            if (er) return;
    //            console.log('Record created:', result);
    //            count--;
    //            if (count === 0) {
    //                console.log('done');
    //                dataSource.disconnect();
    //            }
    //        });
    //    });
    //    //define a custom scope
    //    //Model.scope('youngFolks', {where: {age: {lte: 22 }}});
    //});

};
