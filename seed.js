"use strict";
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['172.18.0.22']});

client.connect()
// .then(()=> client.execute("CREATE KEYSPACE cycling WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy',  'datacenter1' : 1 } "))
.then(() => client.execute("USE kmd_blackboard"))
// .then(() => client.execute("CREATE TABLE courses( course_code text PRIMARY KEY, course_name text, course_lecturer text    )"))
.then(() => client.execute("CREATE TABLE users( username text PRIMARY KEY, password text)"))



.then(() => client.shutdown())
.catch(function (err) {
    console.error('There was an error when connecting', err);
    return client.shutdown();
});