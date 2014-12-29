# stage

Node application server using the Actor model


## Description

Stage is a clustered application server for two-way RPC-style communication with _actors_. An actor
can be thought of as an object with properties and methods. In addition, properties are observable,
meaning that a client can register interest in properties and receive messages when those properties change.
All interactions are implemented through asynchronous message passing. A message is sent with an address,
indicating the actor to be reached, and a message ID. The stage cluster is responsible for spawning actors,
routing messages to them, and sending responses back to the client.


## Installing

To install Stage, simply run "npm install -g stage"


## Running

If you installed via NPM, there should be a "stage" executable in your path. Running "stage" will start the
server with default settings. To customize settings, either add the appropriate options to the command line
or place the option in a JSON config file. The following settings are available:

<table>
  <thead>
    <tr>
      <th>Command line option</th>
      <th>Config file property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        --config &lt;path/to/config.json&gt;<br/>
        -c &lt;path/to/config.json&gt;
      </td>
      <td>N/A</td>
      <td>The JSON file to use for configuration settings</td>
    </tr>
    <tr>
      <td>
        --port &lt;TCP port&gt;<br/>
        -p &lt;TCP port&gt;
      </td>
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

A stage server is interacted with through TCP ports. It has three listeners, supporting three different
protocols:

1. The _admin_ protocol, used for maintenance of the instance
2. The _cluster_ protocol, used for inter-node communication
3. The _client_ protocol, used for interacting with actors




### Admin Protocol

#### join

```
join address[:port] [address:port ...]
```


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
