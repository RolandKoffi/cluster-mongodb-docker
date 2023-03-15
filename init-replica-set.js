db.auth('admin', 'admin');
rs.initiate(
    {_id: "rs1",
        members: [
            { _id: 0, host : "manager:27017" },
            { _id: 1, host : "worker1:27017" },
            { _id: 2, host : "worker2:27017" },
            { _id: 3, host : "worker3:27017" },
            { _id: 4, host : "worker4:27017" }
        ]
    }
);

rs.conf( 
    {
        "_id" : "rs1",
        "version" : 1,
        "protocolVersion" : NumberLong(1),
        "members" : [
           {
              "_id" : 0,
              "host" : "manager:27017",
              "arbiterOnly" : false,
              "buildIndexes" : true,
              "hidden" : false,
              "priority" : 1,
              "tags" : {
              },
              "secondaryDelaySecs" : NumberLong(0),
              "votes" : 1
           },
           {
              "_id" : 1,
              "host" : "worker1:27017",
              "arbiterOnly" : false,
              "buildIndexes" : true,
              "hidden" : false,
              "priority" : 1,
              "tags" : {
              },
              "secondaryDelaySecs" : NumberLong(0),
              "votes" : 1
           },
           {
              "_id" : 2,
              "host" : "worker2:27017",
              "arbiterOnly" : false,
              "buildIndexes" : true,
              "hidden" : false,
              "priority" : 1,
              "tags" : {
              },
              "secondaryDelaySecs" : NumberLong(0),
              "votes" : 1
           },
           {
              "_id" : 3,
              "host" : "worker3:27017",
              "arbiterOnly" : false,
              "buildIndexes" : true,
              "hidden" : false,
              "priority" : 1,
              "tags" : {
              },
              "secondaryDelaySecs" : NumberLong(0),
              "votes" : 1
           },
           {
              "_id" : 4,
              "host" : "worker4:27017",
              "arbiterOnly" : false,
              "buildIndexes" : true,
              "hidden" : false,
              "priority" : 1,
              "tags" : {
              },
              "secondaryDelaySecs" : NumberLong(0),
              "votes" : 1
           }
           
        ],
        "settings" : {
           "chainingAllowed" : true,
           "heartbeatIntervalMillis" : 2000,
           "heartbeatTimeoutSecs" : 10,
           "electionTimeoutMillis" : 10000,
           "catchUpTimeoutMillis" : -1,
           "getLastErrorModes" : {
           },
           "getLastErrorDefaults" : {
              "w" : 1,
              "wtimeout" : 0
           },
           "replicaSetId" : ObjectId("585ab9df685f726db2c6a840")
        }
     }
);