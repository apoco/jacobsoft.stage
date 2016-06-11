# stage

Node application server using the Actor model


## Description

Stage is a clustered application server for two-way RPC-style communication with _actors_. An actor
can be thought of as an object with properties and methods. In addition, properties are observable,
meaning that a client can register interest in properties and receive messages when those properties change.
All interactions are implemented through asynchronous message passing. A message is sent with an address,
indicating the actor to be reached, and a message ID. The stage cluster is responsible for spawning actors,
routing messages to them, sending responses back to the client, and persisting its properties.


## Defining actor classes

To define a class of actors, use the `define` method of a `stage` instance:

```javascript
var StageServer = require('stage');
var stage = new StageServer();

stage.define({
  pattern: 'players.{id}',
  constructor: Player
});

function Player(opts) {
  this.id = opts.id;
  this.hp = 100;
  this.armor = 0.5;
  this.isDead = false;
}

Player.prototype = {
  attack: function(damage) {
    var dr = Math.random() * this.armor * damage;
    damage = damage - dr;
    this.hp -= damage;
    this.isDead = this.hp <= 0;
  }
};
```

Each actor has an address; the `pattern` option defines the format of addresses to actors of this class.
The `constructor` option specifies the constructor for the actor instances. The constructor receives the
parameters specified in the pattern; it is called with `new`.

Methods and properties of the object created by the constructor are considered public; that is, they
can be accessed by other actors and applications communicating with the stage instance. To create private
properties or methods, prefix their names with an underscore.


## Starting

To start stage, first create an instance:

```javascript
var StageServer = require('stage');
var stage = new StageServer();
```

...then start it with its `start` method:

```javascript
stage.start();
```

The `start` method can take an optional options argument to override the default settings. The following
options are available:

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>port</td>
      <td>The TCP port the stage instance will listen on</td>
    </tr>
  </tbody>
</table>

## Stage Clusters

Stage servers can and should be clustered. A cluster is merely a set of instances which have been _joined_
together. To join an instance to a cluster, you can either issue a `join` command, specify the cluster peers
on the command line, or specify the cluster peers in a config file.


## Protocols

A stage server is interacted with through its TCP port. It has three different protocol interfaces,

1. The _admin_ protocol, used for maintenance of the instance
2. The _cluster_ protocol, used for inter-node communication
3. The _client_ protocol, used for interacting with actors



### Admin Protocol

The admin protocol is a set of commands that can be issued by an administrator.

#### join

```
join address[:port] [address:port ...]
```

The `join` command joins the stage instance to a cluster.


### Client Protocol

The client protocol is a duplex stream of text-based messages passed between the client and server.

```

```


#### get

Use `get` to do a one-time read of a property:




## Stage Clients

A stage client


## Client Protocol


## Plugins
