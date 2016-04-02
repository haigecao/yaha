
## config

    bind_ip = 192.168.3.11
    port = 20311
    dbpath = data
    logpath = log/mongod.log
    fork = true


##  启动数据库
####  mongod -f conf/mongod.conf

##  链接数据库
#### mongo 192.168.3.11:20311/test
#### 链接是有警告的 warning


## 关闭数据库
#### use admin
#### db.shutdownServer()


### 杀死进程
#### ps -ef | grep mongod
#### kill [313]


## 数据库的操作

#### show dbs  显示当前数据库

#### use dataBase (创建 并 切换)

    dataBase  0.078GB
    hgwj      0.078GB
    local     0.078GB

    db.createCollection('fuckIE')   创建数据库集合
    { "ok" : 1 }

#### 删除数据库

    db.dropDatabase()
    { "dropped" : "hgwj", "ok" : 1 }


#### 管理

    use admin   #进入数据库admin
    db.addUser('name','pwd')    #增加或修改用户密码
    db.system.users.find() #查看用户列表
    db.auth('name','pwd')    #用户认证
    db.removeUser('name')    #删除用户
    show users   #查看所有用户
    show dbs    #查看所有数据库
    show collections   #查看所有的collection
    db.printCollectionStats()   #查看各collection的状态
    db.printReplicationInfo()    #查看主从复制状态
    db.repairDatabase()    #修复数据库
    db.setProfilingLevel(1)   #设置记录profiling，0=off 1=slow 2=all
    show profile   #查看profiling
    db.copyDatabase('mail_addr','mail_addr_tmp')   #拷贝数据库
    db.mail_addr.drop()    #删除collection
    db.dropDatabase()   #删除当前的数据库


#### 插入 更新

    db.集合名_collection.insert({JSON})

    db.dataBase_collection.insert({x: 1})
    返回: WriteResult({ "nInserted" : 1 })

    插入一条记录，也可以批量插入，即传递一个数组即可
    db.foo.insert({'name':'tony'})   
    存储嵌套的对象  
    db.foo.save({'name':'ysz','address':{'city':'beijing','post':100096},'phone':[138,139]})
    存储数组对象
    db.user_addr.save({'Uid':'yushunzhi@sohu.com','Al':['test-1@sohu.com','test-2@sohu.com']})   

    db.hgwj_collection.insert({_id: 1, x : 2})
    WriteResult({ "nInserted" : 1 })


#### 更新

      db.hgwj_collection.update({x:1}, {x:999})
      WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

      db.hgwj_collection.find({x:999})
      { "_id" : ObjectId("56f521fb11de14ab576e35a6"), "x" : 999 }


      db.hgwj_collection.update({y:2}, {$set: {x:10000}})
      WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

      db.hgwj_collection.find({x:10000})
      { "_id" : ObjectId("56f5271211de14ab576e36cc"), "x" : 10000, "y" : 2 }


      db.hgwj_collection.update({x:1}, {x:999}) 只是更新一条。

      全部更新
      db.hgwj_collection.update({x:3},{$set: {x:999}}, false, true)
      WriteResult({ "nMatched" : 2, "nUpserted" : 0, "nModified" : 2 })



#### 删除操作

      remove


#### 索引

      db.hgwj_collection.getIndexes()
      [
        {
            "v" : 1,
            "key" : {
              "_id" : 1
            },
          "name" : "_id_",
          "ns" : "hgwj.hgwj_collection"
        }
      ]

      db.hgwj_collection.ensureIndex({x:4})
      {
        "createdCollectionAutomatically" : false,
        "numIndexesBefore" : 1,
        "numIndexesAfter" : 2,
        "ok" : 1
      }
