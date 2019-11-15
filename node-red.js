
// Topic 1 Overview of Node-Red


// Topic 2 Function Nodes  

// Modify Msg Object Poperty
msg.topic ="new topic";
msg.newproperty ="new property";
return msg;

// Ex: Function Node
var topic=msg.topic;
msg.topic=topic.toUpperCase();
msg.price = 123;
return msg;

// Multiple Output
var topic=msg.topic;
if (topic=="test1"){
    return [msg,null];
    
}
if (topic=="test2"){
    return [null,msg];
    
}

// Ex: Object Message
//msg2 = msg.topic.toUpperCase(); //error

// msg1 = msg;
// msg2 = {topic:msg.topic.toUpperCase()};
// return [msg1,msg2];

msg2 = {topic:msg.topic.toUpperCase()};
return [msg,msg2];

//ExL Multiple Ouputs
msg1 = {payload: Math.round(Math.random()*100)};
msg2 = {payload: Math.round(Math.random()*100)};
// msg1 = {payload: 'hello'};
// msg2 = {payload: 'world'};
return [msg1,msg2];

// Context
value = context.get('count')||0;
value++;
context.set('count',value);
return {payload:value};

// Flow

// 1st flow
value = flow.get('count')||0;
value++;
flow.set('count',value);
return {payload:value};

// 2nd flow
return {payload:flow.get('count')};

// Global

// 1st flow
value = global.get('count')||0;
value++;
global.set('count',value);
return {payload:value};

// 2nd flow
return {payload:global.get('count')};


// Topic 3 HTTP Node

// API URL
https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.csv

// flow

[{"id":"e36406f2.8ef798","type":"inject","z":"f03b57d5.e525f8","name":"","topic":"","payload":"","payloadType":"str","repeat":"300","crontab":"","once":false,"x":130,"y":900,"wires":[["c3c50023.3bbed"]]},{"id":"c3c50023.3bbed","type":"http request","z":"f03b57d5.e525f8","name":"Recent Quakes","method":"GET","url":"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.csv","tls":"","x":300,"y":900,"wires":[["8afc6cac.e0812"]]},{"id":"8afc6cac.e0812","type":"csv","z":"f03b57d5.e525f8","name":"","sep":",","hdrin":true,"hdrout":"","multi":"one","ret":"\\n","temp":"","x":470,"y":900,"wires":[["44779781.4190f8","6f0eb546.9e208c"]]},{"id":"44779781.4190f8","type":"debug","z":"f03b57d5.e525f8","name":"","active":true,"complete":false,"x":630,"y":900,"wires":[]},{"id":"6f0eb546.9e208c","type":"switch","z":"f03b57d5.e525f8","name":"","property":"payload.mag","propertyType":"msg","rules":[{"t":"gte","v":"7","vt":"num"}],"checkall":"true","outputs":1,"x":510,"y":960,"wires":[["d78d4aa8.8c8208"]]},{"id":"d78d4aa8.8c8208","type":"change","z":"f03b57d5.e525f8","name":"","rules":[{"t":"set","p":"payload","pt":"msg","to":"PANIC!","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":650,"y":1020,"wires":[["72fddece.fac0d"]]},{"id":"72fddece.fac0d","type":"debug","z":"f03b57d5.e525f8","name":"","active":true,"complete":false,"x":750,"y":960,"wires":[]}]


// Exercise 

https://api.data.gov.sg/v1/environment/air-temperature?date=2018-11-10

// template
<html>
    <head></head>
    <body>
        <h1>Hello World!</h1>
    </body>
</html>



// Topic 4 MQTT Node


// Topic 5 Dashboard Node

https://flows.nodered.org/flow/6e4649bc6d6529078cbb731610242eac

// Template
<table style="width:100%">
  <tr>
    <th>Index</th> 
    <th>Timestamp</th>
    <th>Value</th> 
    <th>Bool</th>
  </tr>
  <tr ng-repeat="x in msg.payload | limitTo:20">
    <td>{{$index}}</td>
    <td>{{msg.payload[$index].TIMESTAMP}}</td>
    <td>{{msg.payload[$index].VALUE}}</td> 
    <td>{{msg.payload[$index].BOOL}}</td>
  </tr>
</table>

// Exercise 

msg.payload = Math.round(Math.random()*100);
return msg;

// Topic 5 Dashboard 

// Line chart

[{
"series": ["A", "B", "C"],
"data": [
    [{ "x": 1504029632890, "y": 5 },
     { "x": 1504029636001, "y": 4 },
     { "x": 1504029638656, "y": 2 }
    ],
    [{ "x": 1504029633514, "y": 6 },
     { "x": 1504029636622, "y": 7 },
     { "x": 1504029639539, "y": 6 }
    ],
    [{ "x": 1504029634400, "y": 7 },
     { "x": 1504029637959, "y": 7 },
     { "x": 1504029640317, "y": 7 }
    ]
],
"labels": [""]
}]

// Bar chart and Pie chart
[{
    "series": [ "X", "Y", "Z"],
    "data": [ [5], [3], [6] ],
    "labels": [ "Jan" ]
}]

// Topic 6 Sqlite Node


// Create table 
create table student (name text,rank int)

//Insert data 

insert into student (name,rank) values (?,?),('Belinda',2)
insert into student (name,rank) values (?,?),('Jane',3)
insert into student (name,rank) values (?,?),('Steve',4)
insert into student (name,rank) values (?,?),('Alfred',5)

// Read data
select * from student order by name

//Update data 
'update student set rank=? where name=?',(5,'Steve')
'update student set rank=? where name=?',(4,'Alfred')

