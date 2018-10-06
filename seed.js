"use strict";
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['172.18.0.22']});

client.connect()
.then(()=> client.execute("CREATE KEYSPACE kmd_blackboard WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy',  'datacenter1' : 1 } "))
.then(() => client.execute("USE kmd_blackboard"))
.then(() => client.execute("CREATE TABLE kmd_blackboard.users( username text PRIMARY KEY, password text)"))
.then(() => client.execute("CREATE TABLE kmd_blackboard.courses_by_user( username text, courseCode text, courseName text, courseLecturer text, PRIMARY KEY(username,courseCode))"))

.then(() => client.execute("INSERT INTO kmd_blackboard.users(username,password) VALUES ('pk','123')" ))

.then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS2341','Web Dev','Mr.T')") )
.then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS3241','CS Principles','Mr.G')") )
.then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS5341','A+','Mr.V')") )
.then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS6341','Programming in Large','Mr.B')") )
.then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS7341','Information Retrieval','Mr.C')") )
.then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS8341','Dream League','Mr.A')") )

//.then(() => client.execute("DROP KEYSPACE kmd_blackboard") )
.then(() => client.shutdown())
.catch(function (err) {
    console.error('There was an error when connecting', err);
    return client.shutdown();
});