MongoDB 创建数据库：
```
use DATABASE_NAME
```
查看所有数据库
```
show dbs
```
MongoDB 删除数据库：
```
use DATABASE_NAME
db.dropDatabase()
```
#### 插入文档  
MongoDB 使用 insert() 或 save() 方法向集合中插入文档，语法如下：
```
db.COLLECTION_NAME.insert(document)
```
#### 更新文档
##### update() 用于更新已存在的文档
```
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
```
参数说明：
- query : update的查询条件，类似sql update查询内where后面的。
- update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
- upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
- multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
- writeConcern :可选，抛出异常的级别。

##### save() 方法
save() 方法通过传入的文档来替换已有文档。语法格式如下：
```
db.collection.save(
   <document>,
   {
     writeConcern: <document>
   }
)
```
参数说明：
- document : 文档数据。
- writeConcern :可选，抛出异常的级别。

更多实例
只更新第一条记录：
```
db.col.update( { "count" : { $gt : 1 } } , { $set : { "test2" : "OK"} } );
```
全部更新：
```
db.col.update( { "count" : { $gt : 3 } } , { $set : { "test2" : "OK"} },false,true );
```
只添加第一条：
```
db.col.update( { "count" : { $gt : 4 } } , { $set : { "test5" : "OK"} },true,false );
```
全部添加加进去:
```
db.col.update( { "count" : { $gt : 5 } } , { $set : { "test5" : "OK"} },true,true );
```
全部更新：
```
db.col.update( { "count" : { $gt : 15 } } , { $inc : { "count" : 1} },false,true );
```
只更新第一条记录：
```
db.col.update( { "count" : { $gt : 10 } } , { $inc : { "count" : 1} },false,false );
```

#### 删除文档
MongoDB remove()函数是用来移除集合中的数据。
MongoDB数据更新可以使用update()函数。在执行remove()函数前先执行find()命令来判断执行的条件是否正确，这是一个比较好的习惯。
语法
remove() 方法的基本语法格式如下所示：
```
db.collection.remove(
   <query>,
   <justOne>
)
```

如果你的 MongoDB 是 2.6 版本以后的，语法格式如下：
```
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>
   }
)
```
参数说明：
- query :（可选）删除的文档的条件。
- justOne : （可选）如果设为 true 或 1，则只删除一个文档。
- writeConcern :（可选）抛出异常的级别。

MongoDB 查询文档使用 find() 方法。
find() 方法以非结构化的方式来显示所有文档。
语法
MongoDB 查询数据的语法格式如下：
```
db.collection.find(query, projection)
```
- query ：可选，使用查询操作符指定查询条件
- projection ：可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）。
如果你需要以易读的方式来读取数据，可以使用 pretty() 方法，语法格式如下：
```
>db.col.find().pretty()
```
pretty() 方法以格式化的方式来显示所有文档。

MongoDB AND 条件
MongoDB 的 find() 方法可以传入多个键(key)，每个键(key)以逗号隔开，及常规 SQL 的 AND 条件。
语法格式如下：
```
>db.col.find({key1:value1, key2:value2}).pretty()
```

MongoDB OR 条件
MongoDB OR 条件语句使用了关键字 $or,语法格式如下：
```
>db.col.find(
   {
      $or: [
	     {key1: value1}, {key2:value2}
      ]
   }
).pretty()
```

AND 和 OR 联用
```
>db.col.find({"likes": {$gt:50}, $or: [{"by": "菜鸟教程"},{"title": "MongoDB 教程"}]}).pretty()
```

### MongoDB 条件操作符

描述
条件操作符用于比较两个表达式并从mongoDB集合中获取数据。
MongoDB中条件操作符有：
- (>) 大于 - $gt
- (<) 小于 - $lt
- (>=) 大于等于 - $gte
- (<= ) 小于等于 - $lte

### MongoDB $type 操作符

|类型|	数字|	备注|
|:-----|:----|:----|
|Double|	1|	 |
|String|	2|	 |
|Object|	3|	 |
|Array|	4|	 |
|Binary data	|5|	 |
|Undefined|	6|	已废弃。|
|Object id|	7|	 |
|Boolean|	8|	 |
|Date|	9|	 |
|Null|	10|	 |
|Regular Expression|	11	| |
|JavaScript|	13|	 |
|Symbol|	14	| |
|JavaScript (with scope)|	15|	 |
|32-bit integer|	16|	 |
|Timestamp	|17|	 |
|64-bit integer	|18	| |
|Min key	|255	|Query with -1.|
|Max key	|127|	 |

如果想获取 "col" 集合中 title 为 String 的数据，你可以使用以下命令：
```
db.col.find({"title" : {$type : 2}})
```

#### MongoDB Limit() 方法
如果你需要在MongoDB中读取指定数量的数据记录，可以使用MongoDB的Limit方法，limit()方法接受一个数字参数，该参数指定从MongoDB中读取的记录条数。  
limit()方法基本语法如下所示：
```
>db.COLLECTION_NAME.find().limit(NUMBER)
```

#### MongoDB Skip() 方法
我们除了可以使用limit()方法来读取指定数量的数据外，还可以使用skip()方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数。  
skip() 方法脚本语法格式如下：
```
>db.COLLECTION_NAME.find().limit(NUMBER).skip(NUMBER)
```

#### MongoDB sort()方法
在MongoDB中使用使用sort()方法对数据进行排序，sort()方法可以通过参数指定排序的字段，并使用 1 和 -1 来指定排序的方式，其中 1 为升序排列，而-1是用于降序排列。  
sort()方法基本语法如下所示：
```
>db.COLLECTION_NAME.find().sort({KEY:1})
```
