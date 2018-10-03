"use strict";
const cassandra = require('cassandra-driver');
var createKsQuery ="CREATE KEYSPACE kmd_blackboard WITH REPLICATION = {  'class' : 'NetworkTopologyStrategy',  'datacenter1' : 1 } ;" ;
const client = new cassandra.Client({ contactPoints: ['172.18.0.22']});
client.connect()

.then(() => client.execute("USE kmd_blackboard"))
.then(() => client.execute("CREATE TABLE courses ('courseName text', 'courseCode text','course lecturer')"))

.catch(function (err) {
    console.error('There was an error when connecting', err);
    return client.shutdown();
});