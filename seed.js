"use strict";
const cassandra = require('cassandra-driver');
const client = new cassandra.Client({
    contactPoints: ['172.18.0.22']
});

client.connect()
    //  .then(()=> client.execute("CREATE KEYSPACE kmd_blackboard WITH REPLICATION = { 'class' : 'NetworkTopologyStrategy',  'datacenter1' : 1 } "))
    //  .then(() => client.execute("USE kmd_blackboard"))
    //  .then(() => client.execute("CREATE TABLE kmd_blackboard.users( username text PRIMARY KEY, password text)"))
    //  .then(() => client.execute("CREATE TABLE kmd_blackboard.courses_by_user(username text, courseCode text, courseName text, courseLecturer text, PRIMARY KEY(username,courseCode))"))
    //  .then(() => client.execute("CREATE TABLE kmd_blackboard.courses_by_code (coursecode text, coursename text, courselecturer text, PRIMARY KEY(coursecode))"))
    //  .then(() => client.execute("CREATE TABLE kmd_blackboard.lectures_by_code (coursecode text, week text, slides set<text>, recordings set<text>, PRIMARY KEY(coursecode,week))"))
    //  .then(() => client.execute("CREATE TABLE kmd_blackboard.grades_by_username_code (username text, coursecode text, grades map<text,text>, PRIMARY KEY(username,coursecode))"))
    //  .then(() => client.execute("INSERT INTO kmd_blackboard.grades_by_username_code(username, coursecode, grades) VALUES ('pk','INFS2341',{'Assignment 1':'6','Mid Exam':'6','Final Exam':'7'})" ))

       .then(() => client.execute("CREATE TABLE kmd_blackboard.assessment_info_by_coursecode (username text, coursecode text, grades map<text,text>, PRIMARY KEY(username,coursecode))"))
 
    //  .then(() => client.execute("INSERT INTO kmd_blackboard.lectures_by_code(coursecode,week,slides,recordings) VALUES ('INFS2341','1',{'https://drive.google.com/open?id=1iJLo_X7cF9d-Vg8O0ibRcnFBeCZdSj2zuWEeR8hmC8E'},{'https://www.youtube.com/watch?v=Zftx68K-1D4'})" ))
    //  .then(() => client.execute("INSERT INTO kmd_blackboard.lectures_by_code(coursecode,week,slides,recordings) VALUES ('INFS2341','2',{'https://drive.google.com/open?id=1iJLo_X7cF9d-Vg8O0ibRcnFBeCZdSj2zuWEeR8hmC81','https://drive.google.com/open?id=1iJLo_X7cF9d-Vg8O0ibRcnFBeCZdSj2zuWEeR8hmC8E','https://drive.google.com/open?id=1iJLo_X7cF9d-Vg8O0ibRcnFBeCZdSj2zuWEeR8hmC82'},{'https://www.youtube.com/watch?v=Zftx68K-1D4'})" ))
    //  .then(() => client.execute("INSERT INTO kmd_blackboard.lectures_by_code(coursecode,week,slides,recordings) VALUES ('INFS3241','1',{'https://drive.google.com/open?id=1iJLo_X7cF9d-Vg8O0ibRcnFBeCZdSj2zuWEeR8hmC8E'},{'https://www.youtube.com/watch?v=Zftx68K-1D4'})" ))
    //  .then(() => client.execute("INSERT INTO kmd_blackboard.lectures_by_code(coursecode,week,slides,recordings) VALUES ('INFS5341','1',{'https://drive.google.com/open?id=1iJLo_X7cF9d-Vg8O0ibRcnFBeCZdSj2zuWEeR8hmC8E'},{'https://www.youtube.com/watch?v=Zftx68K-1D4'})" ))
    //  .then(() => client.execute("INSERT INTO kmd_blackboard.lectures_by_code(coursecode,week,slides,recordings) VALUES ('INFS6341','1',{'https://drive.google.com/open?id=1iJLo_X7cF9d-Vg8O0ibRcnFBeCZdSj2zuWEeR8hmC8E'},{'https://www.youtube.com/watch?v=Zftx68K-1D4'})" ))
    //  .then(() => client.execute("INSERT INTO kmd_blackboard.lectures_by_code(coursecode,week,slides,recordings) VALUES ('INFS7341','1',{'https://drive.google.com/open?id=1iJLo_X7cF9d-Vg8O0ibRcnFBeCZdSj2zuWEeR8hmC8E'},{'https://www.youtube.com/watch?v=Zftx68K-1D4'})" ))
    //  .then(() => client.execute("INSERT INTO kmd_blackboard.lectures_by_code(coursecode,week,slides,recordings) VALUES ('INFS8341','1',{'https://drive.google.com/open?id=1iJLo_X7cF9d-Vg8O0ibRcnFBeCZdSj2zuWEeR8hmC8E'},{'https://www.youtube.com/watch?v=Zftx68K-1D4'})" ))

    // .then(() => client.execute("INSERT INTO kmd_blackboard.users(username,password) VALUES ('pk','123')" ))
    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS2341','Web Dev','Mr.T')") )
    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS3241','CS Principles','Mr.G')") )
    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS5341','A+','Mr.V')") )
    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS6341','Programming in Large','Mr.B')") )
    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS7341','Information Retrieval','Mr.C')") )
    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_user(username,courseCode,courseName,courseLecturer) VALUES ('pk','INFS8341','Dream League','Mr.A')") )

    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_code(coursecode,coursename,courselecturer) VALUES ('INFS2341','Web Dev','Mr.T')") )
    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_code(coursecode,coursename,courselecturer) VALUES ('INFS3241','CS Principles','Mr.G')") )
    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_code(coursecode,coursename,courselecturer) VALUES ('INFS5341','A+','Mr.V')") )
    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_code(coursecode,coursename,courselecturer) VALUES ('INFS6341','Programming in Large','Mr.B')") )
    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_code(coursecode,coursename,courselecturer) VALUES ('INFS7341','Information Retrieval','Mr.C')") )
    // .then(() => client.execute("INSERT INTO kmd_blackboard.courses_by_code(coursecode,coursename,courselecturer) VALUES ('INFS8341','Dream League','Mr.A')") )
    // .then(() => client.execute("DROP KEYSPACE kmd_blackboard") )
    .then(() => client.shutdown())
    .catch(function (err) {
       console.log(err);
    });
