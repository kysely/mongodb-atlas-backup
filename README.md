# MongoDB Atlas Backup [![npm version](https://badge.fury.io/js/mongodb-atlas-backup.svg)](https://badge.fury.io/js/mongodb-atlas-backup)

#### The human way to `mongodump` and `mongorestore` your MongoDB Atlas cluster

## Install
```sh
npm install --save mongodb-atlas-backup
```

## Setup & Use
```js
import MongoBackup from 'mongodb-atlas-backup'

// Create an instance of the database connection
const backup = new MongoBackup({
    user: 'userWithMightyAccess',
    password: '<VERY SECRET PASSWORD>',
    replicaSet: 'Cluster0-shard-0',
    nodes: [
        'cluster0-shard-00-00-cbei2.mongodb.net:27017',
        'cluster0-shard-00-01-cbei2.mongodb.net:27017',
        'cluster0-shard-00-02-cbei2.mongodb.net:27017'
    ]
})

// Dump your cluster
backup.dump()

// Restore data to your cluster
backup.restore()
```
## Possible improvements
I made this out of basic needs for one of my projects. Feel free to send pull requests if you came up with some improvement though. These are some of the ideas that could be implemented:
- add support for dumping/restoring specific `database` (just need to add a pair of command line arguments)
- extract connection specs from existing Mongo/ose connection
- add support for non-Unix OS (aka Windows)
