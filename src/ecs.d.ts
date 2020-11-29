export type GeoPoint = { lon: number, lat: number }

export interface EcsCoreFields {
	/**
	* @timestamp
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:34.853Z
	*/
	"@timestamp": Date,

	/**
	* agent.build.original
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: metricbeat version 7.6.0 (amd64), libbeat 7.6.0 [6a23e8f8f30f5001ba344e4e54d8d9cb82cb107c built 2020-02-05 23:10:10 +0000 UTC]
	*/
	"agent.build.original": string,

	/**
	* agent.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 8a4f500d
	*/
	"agent.id": string,

	/**
	* agent.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: foo
	*/
	"agent.name": string,

	/**
	* agent.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: filebeat
	*/
	"agent.type": string,

	/**
	* agent.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 6.0.0-rc2
	*/
	"agent.version": string,

	/**
	* client.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 184
	*/
	"client.bytes": number,

	/**
	* client.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.domain": string,

	/**
	* client.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"client.geo.city_name": string,

	/**
	* client.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"client.geo.continent_name": string,

	/**
	* client.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"client.geo.country_iso_code": string,

	/**
	* client.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"client.geo.country_name": string,

	/**
	* client.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"client.geo.location": GeoPoint,

	/**
	* client.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"client.geo.region_iso_code": string,

	/**
	* client.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"client.geo.region_name": string,

	/**
	* client.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"client.ip": string,

	/**
	* client.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.mac": string,

	/**
	* client.packets
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 12
	*/
	"client.packets": number,

	/**
	* client.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 
	*/
	"client.port": number,

	/**
	* client.user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.id": string,

	/**
	* client.user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"client.user.name": string,

	/**
	* client.user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"client.user.name.text": string,

	/**
	* container.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"container.id": string,

	/**
	* destination.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 184
	*/
	"destination.bytes": number,

	/**
	* destination.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.domain": string,

	/**
	* destination.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"destination.geo.city_name": string,

	/**
	* destination.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"destination.geo.continent_name": string,

	/**
	* destination.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"destination.geo.country_iso_code": string,

	/**
	* destination.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"destination.geo.country_name": string,

	/**
	* destination.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"destination.geo.location": GeoPoint,

	/**
	* destination.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"destination.geo.region_iso_code": string,

	/**
	* destination.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"destination.geo.region_name": string,

	/**
	* destination.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"destination.ip": string,

	/**
	* destination.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.mac": string,

	/**
	* destination.packets
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 12
	*/
	"destination.packets": number,

	/**
	* destination.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 
	*/
	"destination.port": number,

	/**
	* destination.user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.id": string,

	/**
	* destination.user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"destination.user.name": string,

	/**
	* destination.user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"destination.user.name.text": string,

	/**
	* dll.code_signature.exists
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: boolean
	* Example: true
	*/
	"dll.code_signature.exists": boolean,

	/**
	* dll.code_signature.subject_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"dll.code_signature.subject_name": string,

	/**
	* dll.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: kernel32.dll
	*/
	"dll.name": string,

	/**
	* ecs.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-ecs.html
	* Field Set: ecs
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 1.0.0
	*/
	"ecs.version": string,

	/**
	* error.code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"error.code": string,

	/**
	* error.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"error.id": string,

	/**
	* error.message
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: 
	*/
	"error.message": string,

	/**
	* event.action
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: user-password-change
	*/
	"event.action": string,

	/**
	* event.category
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: authentication
	*/
	"event.category": string[],

	/**
	* event.created
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:34.857Z
	*/
	"event.created": Date,

	/**
	* event.dataset
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: apache.access
	*/
	"event.dataset": string,

	/**
	* event.duration
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 
	*/
	"event.duration": number,

	/**
	* event.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 8a4f500d
	*/
	"event.id": string,

	/**
	* event.ingested
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:35.101Z
	*/
	"event.ingested": Date,

	/**
	* event.kind
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: alert
	*/
	"event.kind": string,

	/**
	* event.module
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: apache
	*/
	"event.module": string,

	/**
	* event.original
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: false
	* Level: core
	* Elasticsearch type: keyword
	* Example: Sep 19 08:26:10 host CEF:0&#124;Security&#124; threatmanager&#124;1.0&#124;100&#124; worm successfully stopped&#124;10&#124;src=10.0.0.1 dst=2.1.2.2spt=1232
	*/
	"event.original": string,

	/**
	* event.outcome
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: success
	*/
	"event.outcome": string,

	/**
	* event.risk_score
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: float
	* Example: 
	*/
	"event.risk_score": number,

	/**
	* event.severity
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 7
	*/
	"event.severity": number,

	/**
	* event.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"event.type": string[],

	/**
	* file.code_signature.exists
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: boolean
	* Example: true
	*/
	"file.code_signature.exists": boolean,

	/**
	* file.code_signature.subject_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"file.code_signature.subject_name": string,

	/**
	* host.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: x86_64
	*/
	"host.architecture": string,

	/**
	* host.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"host.geo.city_name": string,

	/**
	* host.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"host.geo.continent_name": string,

	/**
	* host.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"host.geo.country_iso_code": string,

	/**
	* host.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"host.geo.country_name": string,

	/**
	* host.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"host.geo.location": GeoPoint,

	/**
	* host.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"host.geo.region_iso_code": string,

	/**
	* host.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"host.geo.region_name": string,

	/**
	* host.hostname
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.hostname": string,

	/**
	* host.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.id": string,

	/**
	* host.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"host.ip": string[],

	/**
	* host.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.mac": string[],

	/**
	* host.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.name": string,

	/**
	* host.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.type": string,

	/**
	* host.user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.id": string,

	/**
	* host.user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"host.user.name": string,

	/**
	* host.user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"host.user.name.text": string,

	/**
	* labels
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: object
	* Example: {"application": "foo-bar", "env": "production"}
	*/
	"labels": object,

	/**
	* log.level
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: error
	*/
	"log.level": string,

	/**
	* log.logger
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: org.elasticsearch.bootstrap.Bootstrap
	*/
	"log.logger": string,

	/**
	* log.original
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: false
	* Level: core
	* Elasticsearch type: keyword
	* Example: Sep 19 08:26:10 localhost My log
	*/
	"log.original": string,

	/**
	* message
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: Hello World
	*/
	"message": string,

	/**
	* network.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 368
	*/
	"network.bytes": number,

	/**
	* network.direction
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: inbound
	*/
	"network.direction": string,

	/**
	* network.forwarded_ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 192.1.1.2
	*/
	"network.forwarded_ip": string,

	/**
	* network.packets
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 24
	*/
	"network.packets": number,

	/**
	* network.protocol
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: http
	*/
	"network.protocol": string,

	/**
	* network.transport
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: tcp
	*/
	"network.transport": string,

	/**
	* network.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: ipv4
	*/
	"network.type": string,

	/**
	* observer.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"observer.geo.city_name": string,

	/**
	* observer.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"observer.geo.continent_name": string,

	/**
	* observer.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"observer.geo.country_iso_code": string,

	/**
	* observer.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"observer.geo.country_name": string,

	/**
	* observer.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"observer.geo.location": GeoPoint,

	/**
	* observer.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"observer.geo.region_iso_code": string,

	/**
	* observer.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"observer.geo.region_name": string,

	/**
	* observer.hostname
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"observer.hostname": string,

	/**
	* observer.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"observer.ip": string[],

	/**
	* observer.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"observer.mac": string[],

	/**
	* observer.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: firewall
	*/
	"observer.type": string,

	/**
	* observer.vendor
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Symantec
	*/
	"observer.vendor": string,

	/**
	* observer.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"observer.version": string,

	/**
	* process.code_signature.exists
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.code_signature.exists": boolean,

	/**
	* process.code_signature.subject_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"process.code_signature.subject_name": string,

	/**
	* process.parent.code_signature.exists
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.parent.code_signature.exists": boolean,

	/**
	* process.parent.code_signature.subject_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"process.parent.code_signature.subject_name": string,

	/**
	* process.parent.pid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 4242
	*/
	"process.parent.pid": number,

	/**
	* process.pid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 4242
	*/
	"process.pid": number,

	/**
	* registry.data.strings
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: ["C:\rta\red_ttp\bin\myapp.exe"]
	*/
	"registry.data.strings": string[],

	/**
	* registry.data.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: REG_SZ
	*/
	"registry.data.type": string,

	/**
	* registry.hive
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: HKLM
	*/
	"registry.hive": string,

	/**
	* registry.key
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\winword.exe
	*/
	"registry.key": string,

	/**
	* registry.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\winword.exe\Debugger
	*/
	"registry.path": string,

	/**
	* registry.value
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Debugger
	*/
	"registry.value": string,

	/**
	* server.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 184
	*/
	"server.bytes": number,

	/**
	* server.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.domain": string,

	/**
	* server.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"server.geo.city_name": string,

	/**
	* server.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"server.geo.continent_name": string,

	/**
	* server.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"server.geo.country_iso_code": string,

	/**
	* server.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"server.geo.country_name": string,

	/**
	* server.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"server.geo.location": GeoPoint,

	/**
	* server.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"server.geo.region_iso_code": string,

	/**
	* server.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"server.geo.region_name": string,

	/**
	* server.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"server.ip": string,

	/**
	* server.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.mac": string,

	/**
	* server.packets
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 12
	*/
	"server.packets": number,

	/**
	* server.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 
	*/
	"server.port": number,

	/**
	* server.user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.id": string,

	/**
	* server.user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"server.user.name": string,

	/**
	* server.user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"server.user.name.text": string,

	/**
	* service.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: d37e5ebfe0ae6c4972dbe9f0174a1637bb8247f6
	*/
	"service.id": string,

	/**
	* service.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: elasticsearch-metrics
	*/
	"service.name": string,

	/**
	* service.state
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"service.state": string,

	/**
	* service.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: elasticsearch
	*/
	"service.type": string,

	/**
	* service.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 3.2.4
	*/
	"service.version": string,

	/**
	* source.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 184
	*/
	"source.bytes": number,

	/**
	* source.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.domain": string,

	/**
	* source.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"source.geo.city_name": string,

	/**
	* source.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"source.geo.continent_name": string,

	/**
	* source.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"source.geo.country_iso_code": string,

	/**
	* source.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"source.geo.country_name": string,

	/**
	* source.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"source.geo.location": GeoPoint,

	/**
	* source.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"source.geo.region_iso_code": string,

	/**
	* source.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"source.geo.region_name": string,

	/**
	* source.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"source.ip": string,

	/**
	* source.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.mac": string,

	/**
	* source.packets
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 12
	*/
	"source.packets": number,

	/**
	* source.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 
	*/
	"source.port": number,

	/**
	* source.user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.id": string,

	/**
	* source.user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"source.user.name": string,

	/**
	* source.user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"source.user.name.text": string,

	/**
	* tags
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: ["production", "env2"]
	*/
	"tags": string[],

	/**
	* user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.id": string,

	/**
	* user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"user.name": string,

	/**
	* user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"user.name.text": string,


}

export interface EcsExtendedFields {
	/**
	* agent.ephemeral_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 8a4f500f
	*/
	"agent.ephemeral_id": string,

	/**
	* client.address
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.address": string,

	/**
	* client.as.number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 15169
	*/
	"client.as.number": number,

	/**
	* client.as.organization.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Google LLC
	*/
	"client.as.organization.name": string,

	/**
	* client.as.organization.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Google LLC
	*/
	"client.as.organization.name.text": string,

	/**
	* client.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"client.geo.name": string,

	/**
	* client.nat.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: 
	*/
	"client.nat.ip": string,

	/**
	* client.nat.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"client.nat.port": number,

	/**
	* client.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"client.registered_domain": string,

	/**
	* client.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: east
	*/
	"client.subdomain": string,

	/**
	* client.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"client.top_level_domain": string,

	/**
	* client.user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.domain": string,

	/**
	* client.user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.email": string,

	/**
	* client.user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"client.user.full_name": string,

	/**
	* client.user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"client.user.full_name.text": string,

	/**
	* client.user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.group.domain": string,

	/**
	* client.user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.group.id": string,

	/**
	* client.user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.group.name": string,

	/**
	* client.user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.hash": string,

	/**
	* client.user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"client.user.roles": string[],

	/**
	* cloud.account.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 666777888999
	*/
	"cloud.account.id": string,

	/**
	* cloud.account.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: elastic-dev
	*/
	"cloud.account.name": string,

	/**
	* cloud.availability_zone
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: us-east-1c
	*/
	"cloud.availability_zone": string,

	/**
	* cloud.instance.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: i-1234567890abcdef0
	*/
	"cloud.instance.id": string,

	/**
	* cloud.instance.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"cloud.instance.name": string,

	/**
	* cloud.machine.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: t2.medium
	*/
	"cloud.machine.type": string,

	/**
	* cloud.project.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: my-project
	*/
	"cloud.project.id": string,

	/**
	* cloud.project.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: my project
	*/
	"cloud.project.name": string,

	/**
	* cloud.provider
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: aws
	*/
	"cloud.provider": string,

	/**
	* cloud.region
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: us-east-1
	*/
	"cloud.region": string,

	/**
	* container.image.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"container.image.name": string,

	/**
	* container.image.tag
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"container.image.tag": string[],

	/**
	* container.labels
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"container.labels": object,

	/**
	* container.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"container.name": string,

	/**
	* container.runtime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: docker
	*/
	"container.runtime": string,

	/**
	* destination.address
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.address": string,

	/**
	* destination.as.number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 15169
	*/
	"destination.as.number": number,

	/**
	* destination.as.organization.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Google LLC
	*/
	"destination.as.organization.name": string,

	/**
	* destination.as.organization.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Google LLC
	*/
	"destination.as.organization.name.text": string,

	/**
	* destination.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"destination.geo.name": string,

	/**
	* destination.nat.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: 
	*/
	"destination.nat.ip": string,

	/**
	* destination.nat.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"destination.nat.port": number,

	/**
	* destination.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"destination.registered_domain": string,

	/**
	* destination.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: east
	*/
	"destination.subdomain": string,

	/**
	* destination.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"destination.top_level_domain": string,

	/**
	* destination.user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.domain": string,

	/**
	* destination.user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.email": string,

	/**
	* destination.user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"destination.user.full_name": string,

	/**
	* destination.user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"destination.user.full_name.text": string,

	/**
	* destination.user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.group.domain": string,

	/**
	* destination.user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.group.id": string,

	/**
	* destination.user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.group.name": string,

	/**
	* destination.user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.hash": string,

	/**
	* destination.user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"destination.user.roles": string[],

	/**
	* dll.code_signature.status
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ERROR_UNTRUSTED_ROOT
	*/
	"dll.code_signature.status": string,

	/**
	* dll.code_signature.trusted
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"dll.code_signature.trusted": boolean,

	/**
	* dll.code_signature.valid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"dll.code_signature.valid": boolean,

	/**
	* dll.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"dll.hash.md5": string,

	/**
	* dll.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"dll.hash.sha1": string,

	/**
	* dll.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"dll.hash.sha256": string,

	/**
	* dll.hash.sha512
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"dll.hash.sha512": string,

	/**
	* dll.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C:\Windows\System32\kernel32.dll
	*/
	"dll.path": string,

	/**
	* dll.pe.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: x64
	*/
	"dll.pe.architecture": string,

	/**
	* dll.pe.company
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"dll.pe.company": string,

	/**
	* dll.pe.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Paint
	*/
	"dll.pe.description": string,

	/**
	* dll.pe.file_version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 6.3.9600.17415
	*/
	"dll.pe.file_version": string,

	/**
	* dll.pe.imphash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0c6803c4e922103c4dca5963aad36ddf
	*/
	"dll.pe.imphash": string,

	/**
	* dll.pe.original_file_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MSPAINT.EXE
	*/
	"dll.pe.original_file_name": string,

	/**
	* dll.pe.product
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft® Windows® Operating System
	*/
	"dll.pe.product": string,

	/**
	* dns.answers
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"dns.answers": object[],

	/**
	* dns.answers.class
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: IN
	*/
	"dns.answers.class": string,

	/**
	* dns.answers.data
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10.10.10.10
	*/
	"dns.answers.data": string,

	/**
	* dns.answers.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.example.com
	*/
	"dns.answers.name": string,

	/**
	* dns.answers.ttl
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 180
	*/
	"dns.answers.ttl": number,

	/**
	* dns.answers.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CNAME
	*/
	"dns.answers.type": string,

	/**
	* dns.header_flags
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["RD", "RA"]
	*/
	"dns.header_flags": string[],

	/**
	* dns.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 62111
	*/
	"dns.id": string,

	/**
	* dns.op_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: QUERY
	*/
	"dns.op_code": string,

	/**
	* dns.question.class
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: IN
	*/
	"dns.question.class": string,

	/**
	* dns.question.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.example.com
	*/
	"dns.question.name": string,

	/**
	* dns.question.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"dns.question.registered_domain": string,

	/**
	* dns.question.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www
	*/
	"dns.question.subdomain": string,

	/**
	* dns.question.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"dns.question.top_level_domain": string,

	/**
	* dns.question.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: AAAA
	*/
	"dns.question.type": string,

	/**
	* dns.resolved_ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: ["10.10.10.10", "10.10.10.11"]
	*/
	"dns.resolved_ip": string[],

	/**
	* dns.response_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: NOERROR
	*/
	"dns.response_code": string,

	/**
	* dns.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: answer
	*/
	"dns.type": string,

	/**
	* error.stack_trace
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: false
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"error.stack_trace": string,

	/**
	* error.stack_trace.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: false
	* Level: extended
	* Elasticsearch type: text
	* Example: 
	*/
	"error.stack_trace.text": string,

	/**
	* error.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: java.lang.NullPointerException
	*/
	"error.type": string,

	/**
	* event.code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 4648
	*/
	"event.code": string,

	/**
	* event.end
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"event.end": Date,

	/**
	* event.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 123456789012345678901234567890ABCD
	*/
	"event.hash": string,

	/**
	* event.provider
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: kernel
	*/
	"event.provider": string,

	/**
	* event.reason
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Terminated an unexpected process
	*/
	"event.reason": string,

	/**
	* event.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://system.example.com/event/#0001234
	*/
	"event.reference": string,

	/**
	* event.risk_score_norm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: float
	* Example: 
	*/
	"event.risk_score_norm": number,

	/**
	* event.sequence
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"event.sequence": number,

	/**
	* event.start
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"event.start": Date,

	/**
	* event.timezone
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"event.timezone": string,

	/**
	* event.url
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://mysystem.example.com/alert/5271dedb-f5b0-4218-87f0-4ac4870a38fe
	*/
	"event.url": string,

	/**
	* file.accessed
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"file.accessed": Date,

	/**
	* file.attributes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["readonly", "system"]
	*/
	"file.attributes": string[],

	/**
	* file.code_signature.status
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ERROR_UNTRUSTED_ROOT
	*/
	"file.code_signature.status": string,

	/**
	* file.code_signature.trusted
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"file.code_signature.trusted": boolean,

	/**
	* file.code_signature.valid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"file.code_signature.valid": boolean,

	/**
	* file.created
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"file.created": Date,

	/**
	* file.ctime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"file.ctime": Date,

	/**
	* file.device
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: sda
	*/
	"file.device": string,

	/**
	* file.directory
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /home/alice
	*/
	"file.directory": string,

	/**
	* file.drive_letter
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C
	*/
	"file.drive_letter": string,

	/**
	* file.extension
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: png
	*/
	"file.extension": string,

	/**
	* file.gid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1001
	*/
	"file.gid": string,

	/**
	* file.group
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: alice
	*/
	"file.group": string,

	/**
	* file.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.hash.md5": string,

	/**
	* file.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.hash.sha1": string,

	/**
	* file.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.hash.sha256": string,

	/**
	* file.hash.sha512
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.hash.sha512": string,

	/**
	* file.inode
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 256383
	*/
	"file.inode": string,

	/**
	* file.mime_type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.mime_type": string,

	/**
	* file.mode
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 640
	*/
	"file.mode": string,

	/**
	* file.mtime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"file.mtime": Date,

	/**
	* file.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.png
	*/
	"file.name": string,

	/**
	* file.owner
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: alice
	*/
	"file.owner": string,

	/**
	* file.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /home/alice/example.png
	*/
	"file.path": string,

	/**
	* file.path.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /home/alice/example.png
	*/
	"file.path.text": string,

	/**
	* file.pe.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: x64
	*/
	"file.pe.architecture": string,

	/**
	* file.pe.company
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"file.pe.company": string,

	/**
	* file.pe.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Paint
	*/
	"file.pe.description": string,

	/**
	* file.pe.file_version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 6.3.9600.17415
	*/
	"file.pe.file_version": string,

	/**
	* file.pe.imphash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0c6803c4e922103c4dca5963aad36ddf
	*/
	"file.pe.imphash": string,

	/**
	* file.pe.original_file_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MSPAINT.EXE
	*/
	"file.pe.original_file_name": string,

	/**
	* file.pe.product
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft® Windows® Operating System
	*/
	"file.pe.product": string,

	/**
	* file.size
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 16384
	*/
	"file.size": number,

	/**
	* file.target_path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.target_path": string,

	/**
	* file.target_path.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: 
	*/
	"file.target_path.text": string,

	/**
	* file.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: file
	*/
	"file.type": string,

	/**
	* file.uid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1001
	*/
	"file.uid": string,

	/**
	* file.x509.alternative_names
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: *.elastic.co
	*/
	"file.x509.alternative_names": string[],

	/**
	* file.x509.issuer.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example SHA2 High Assurance Server CA
	*/
	"file.x509.issuer.common_name": string[],

	/**
	* file.x509.issuer.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"file.x509.issuer.country": string[],

	/**
	* file.x509.issuer.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
	*/
	"file.x509.issuer.distinguished_name": string,

	/**
	* file.x509.issuer.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mountain View
	*/
	"file.x509.issuer.locality": string[],

	/**
	* file.x509.issuer.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example Inc
	*/
	"file.x509.issuer.organization": string[],

	/**
	* file.x509.issuer.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.example.com
	*/
	"file.x509.issuer.organizational_unit": string[],

	/**
	* file.x509.issuer.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"file.x509.issuer.state_or_province": string[],

	/**
	* file.x509.not_after
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2020-07-16 03:15:39+00:00
	*/
	"file.x509.not_after": Date,

	/**
	* file.x509.not_before
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2019-08-16 01:40:25+00:00
	*/
	"file.x509.not_before": Date,

	/**
	* file.x509.public_key_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: RSA
	*/
	"file.x509.public_key_algorithm": string,

	/**
	* file.x509.public_key_curve
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: nistp521
	*/
	"file.x509.public_key_curve": string,

	/**
	* file.x509.public_key_exponent
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: false
	* Level: extended
	* Elasticsearch type: long
	* Example: 65537
	*/
	"file.x509.public_key_exponent": number,

	/**
	* file.x509.public_key_size
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 2048
	*/
	"file.x509.public_key_size": number,

	/**
	* file.x509.serial_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 55FBB9C7DEBF09809D12CCAA
	*/
	"file.x509.serial_number": string,

	/**
	* file.x509.signature_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: SHA256-RSA
	*/
	"file.x509.signature_algorithm": string,

	/**
	* file.x509.subject.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: shared.global.example.net
	*/
	"file.x509.subject.common_name": string[],

	/**
	* file.x509.subject.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"file.x509.subject.country": string[],

	/**
	* file.x509.subject.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
	*/
	"file.x509.subject.distinguished_name": string,

	/**
	* file.x509.subject.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: San Francisco
	*/
	"file.x509.subject.locality": string[],

	/**
	* file.x509.subject.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example, Inc.
	*/
	"file.x509.subject.organization": string[],

	/**
	* file.x509.subject.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.x509.subject.organizational_unit": string[],

	/**
	* file.x509.subject.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"file.x509.subject.state_or_province": string[],

	/**
	* file.x509.version_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 3
	*/
	"file.x509.version_number": string,

	/**
	* group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
	* Field Set: group
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"group.domain": string,

	/**
	* group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
	* Field Set: group
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"group.id": string,

	/**
	* group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
	* Field Set: group
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"group.name": string,

	/**
	* host.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CONTOSO
	*/
	"host.domain": string,

	/**
	* host.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"host.geo.name": string,

	/**
	* host.os.family
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: debian
	*/
	"host.os.family": string,

	/**
	* host.os.full
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS Mojave
	*/
	"host.os.full": string,

	/**
	* host.os.full.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS Mojave
	*/
	"host.os.full.text": string,

	/**
	* host.os.kernel
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 4.4.0-112-generic
	*/
	"host.os.kernel": string,

	/**
	* host.os.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS X
	*/
	"host.os.name": string,

	/**
	* host.os.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS X
	*/
	"host.os.name.text": string,

	/**
	* host.os.platform
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: darwin
	*/
	"host.os.platform": string,

	/**
	* host.os.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10.14.1
	*/
	"host.os.version": string,

	/**
	* host.uptime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 1325
	*/
	"host.uptime": number,

	/**
	* host.user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.domain": string,

	/**
	* host.user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.email": string,

	/**
	* host.user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"host.user.full_name": string,

	/**
	* host.user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"host.user.full_name.text": string,

	/**
	* host.user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.group.domain": string,

	/**
	* host.user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.group.id": string,

	/**
	* host.user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.group.name": string,

	/**
	* host.user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.hash": string,

	/**
	* host.user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"host.user.roles": string[],

	/**
	* http.request.body.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 887
	*/
	"http.request.body.bytes": number,

	/**
	* http.request.body.content
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Hello world
	*/
	"http.request.body.content": string,

	/**
	* http.request.body.content.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Hello world
	*/
	"http.request.body.content.text": string,

	/**
	* http.request.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 1437
	*/
	"http.request.bytes": number,

	/**
	* http.request.method
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: GET, POST, PUT, PoST
	*/
	"http.request.method": string,

	/**
	* http.request.mime_type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: image/gif
	*/
	"http.request.mime_type": string,

	/**
	* http.request.referrer
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://blog.example.com/
	*/
	"http.request.referrer": string,

	/**
	* http.response.body.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 887
	*/
	"http.response.body.bytes": number,

	/**
	* http.response.body.content
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Hello world
	*/
	"http.response.body.content": string,

	/**
	* http.response.body.content.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Hello world
	*/
	"http.response.body.content.text": string,

	/**
	* http.response.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 1437
	*/
	"http.response.bytes": number,

	/**
	* http.response.mime_type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: image/gif
	*/
	"http.response.mime_type": string,

	/**
	* http.response.status_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 404
	*/
	"http.response.status_code": number,

	/**
	* http.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1.1
	*/
	"http.version": string,

	/**
	* log.file.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /var/log/fun-times.log
	*/
	"log.file.path": string,

	/**
	* log.origin.file.line
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: integer
	* Example: 42
	*/
	"log.origin.file.line": number,

	/**
	* log.origin.file.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Bootstrap.java
	*/
	"log.origin.file.name": string,

	/**
	* log.origin.function
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: init
	*/
	"log.origin.function": string,

	/**
	* log.syslog
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"log.syslog": object,

	/**
	* log.syslog.facility.code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 23
	*/
	"log.syslog.facility.code": number,

	/**
	* log.syslog.facility.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: local7
	*/
	"log.syslog.facility.name": string,

	/**
	* log.syslog.priority
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 135
	*/
	"log.syslog.priority": number,

	/**
	* log.syslog.severity.code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 3
	*/
	"log.syslog.severity.code": number,

	/**
	* log.syslog.severity.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Error
	*/
	"log.syslog.severity.name": string,

	/**
	* network.application
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: aim
	*/
	"network.application": string,

	/**
	* network.community_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1:hO+sN4H+MG5MY/8hIrXPqc4ZQz0=
	*/
	"network.community_id": string,

	/**
	* network.iana_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 6
	*/
	"network.iana_number": string,

	/**
	* network.inner
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"network.inner": object,

	/**
	* network.inner.vlan.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"network.inner.vlan.id": string,

	/**
	* network.inner.vlan.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"network.inner.vlan.name": string,

	/**
	* network.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Guest Wifi
	*/
	"network.name": string,

	/**
	* network.vlan.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"network.vlan.id": string,

	/**
	* network.vlan.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"network.vlan.name": string,

	/**
	* observer.egress
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"observer.egress": object,

	/**
	* observer.egress.interface.alias
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"observer.egress.interface.alias": string,

	/**
	* observer.egress.interface.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"observer.egress.interface.id": string,

	/**
	* observer.egress.interface.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: eth0
	*/
	"observer.egress.interface.name": string,

	/**
	* observer.egress.vlan.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"observer.egress.vlan.id": string,

	/**
	* observer.egress.vlan.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"observer.egress.vlan.name": string,

	/**
	* observer.egress.zone
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Public_Internet
	*/
	"observer.egress.zone": string,

	/**
	* observer.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"observer.geo.name": string,

	/**
	* observer.ingress
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"observer.ingress": object,

	/**
	* observer.ingress.interface.alias
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"observer.ingress.interface.alias": string,

	/**
	* observer.ingress.interface.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"observer.ingress.interface.id": string,

	/**
	* observer.ingress.interface.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: eth0
	*/
	"observer.ingress.interface.name": string,

	/**
	* observer.ingress.vlan.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"observer.ingress.vlan.id": string,

	/**
	* observer.ingress.vlan.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"observer.ingress.vlan.name": string,

	/**
	* observer.ingress.zone
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: DMZ
	*/
	"observer.ingress.zone": string,

	/**
	* observer.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1_proxySG
	*/
	"observer.name": string,

	/**
	* observer.os.family
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: debian
	*/
	"observer.os.family": string,

	/**
	* observer.os.full
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS Mojave
	*/
	"observer.os.full": string,

	/**
	* observer.os.full.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS Mojave
	*/
	"observer.os.full.text": string,

	/**
	* observer.os.kernel
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 4.4.0-112-generic
	*/
	"observer.os.kernel": string,

	/**
	* observer.os.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS X
	*/
	"observer.os.name": string,

	/**
	* observer.os.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS X
	*/
	"observer.os.name.text": string,

	/**
	* observer.os.platform
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: darwin
	*/
	"observer.os.platform": string,

	/**
	* observer.os.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10.14.1
	*/
	"observer.os.version": string,

	/**
	* observer.product
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: s200
	*/
	"observer.product": string,

	/**
	* observer.serial_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"observer.serial_number": string,

	/**
	* organization.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-organization.html
	* Field Set: organization
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"organization.id": string,

	/**
	* organization.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-organization.html
	* Field Set: organization
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"organization.name": string,

	/**
	* organization.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-organization.html
	* Field Set: organization
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: 
	*/
	"organization.name.text": string,

	/**
	* package.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: x86_64
	*/
	"package.architecture": string,

	/**
	* package.build_version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 36f4f7e89dd61b0988b12ee000b98966867710cd
	*/
	"package.build_version": string,

	/**
	* package.checksum
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 68b329da9893e34099c7d8ad5cb9c940
	*/
	"package.checksum": string,

	/**
	* package.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Open source programming language to build simple/reliable/efficient software.
	*/
	"package.description": string,

	/**
	* package.install_scope
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: global
	*/
	"package.install_scope": string,

	/**
	* package.installed
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"package.installed": Date,

	/**
	* package.license
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Apache License 2.0
	*/
	"package.license": string,

	/**
	* package.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: go
	*/
	"package.name": string,

	/**
	* package.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /usr/local/Cellar/go/1.12.9/
	*/
	"package.path": string,

	/**
	* package.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://golang.org
	*/
	"package.reference": string,

	/**
	* package.size
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 62231
	*/
	"package.size": number,

	/**
	* package.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: rpm
	*/
	"package.type": string,

	/**
	* package.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1.12.9
	*/
	"package.version": string,

	/**
	* process.args
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["/usr/bin/ssh", "-l", "user", "10.0.0.16"]
	*/
	"process.args": string[],

	/**
	* process.args_count
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4
	*/
	"process.args_count": number,

	/**
	* process.code_signature.status
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ERROR_UNTRUSTED_ROOT
	*/
	"process.code_signature.status": string,

	/**
	* process.code_signature.trusted
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.code_signature.trusted": boolean,

	/**
	* process.code_signature.valid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.code_signature.valid": boolean,

	/**
	* process.command_line
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /usr/bin/ssh -l user 10.0.0.16
	*/
	"process.command_line": string,

	/**
	* process.command_line.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /usr/bin/ssh -l user 10.0.0.16
	*/
	"process.command_line.text": string,

	/**
	* process.entity_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: c2c455d9f99375d
	*/
	"process.entity_id": string,

	/**
	* process.executable
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /usr/bin/ssh
	*/
	"process.executable": string,

	/**
	* process.executable.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /usr/bin/ssh
	*/
	"process.executable.text": string,

	/**
	* process.exit_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 137
	*/
	"process.exit_code": number,

	/**
	* process.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.hash.md5": string,

	/**
	* process.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.hash.sha1": string,

	/**
	* process.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.hash.sha256": string,

	/**
	* process.hash.sha512
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.hash.sha512": string,

	/**
	* process.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ssh
	*/
	"process.name": string,

	/**
	* process.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: ssh
	*/
	"process.name.text": string,

	/**
	* process.parent.args
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["/usr/bin/ssh", "-l", "user", "10.0.0.16"]
	*/
	"process.parent.args": string[],

	/**
	* process.parent.args_count
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4
	*/
	"process.parent.args_count": number,

	/**
	* process.parent.code_signature.status
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ERROR_UNTRUSTED_ROOT
	*/
	"process.parent.code_signature.status": string,

	/**
	* process.parent.code_signature.trusted
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.parent.code_signature.trusted": boolean,

	/**
	* process.parent.code_signature.valid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.parent.code_signature.valid": boolean,

	/**
	* process.parent.command_line
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /usr/bin/ssh -l user 10.0.0.16
	*/
	"process.parent.command_line": string,

	/**
	* process.parent.command_line.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /usr/bin/ssh -l user 10.0.0.16
	*/
	"process.parent.command_line.text": string,

	/**
	* process.parent.entity_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: c2c455d9f99375d
	*/
	"process.parent.entity_id": string,

	/**
	* process.parent.executable
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /usr/bin/ssh
	*/
	"process.parent.executable": string,

	/**
	* process.parent.executable.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /usr/bin/ssh
	*/
	"process.parent.executable.text": string,

	/**
	* process.parent.exit_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 137
	*/
	"process.parent.exit_code": number,

	/**
	* process.parent.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.parent.hash.md5": string,

	/**
	* process.parent.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.parent.hash.sha1": string,

	/**
	* process.parent.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.parent.hash.sha256": string,

	/**
	* process.parent.hash.sha512
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.parent.hash.sha512": string,

	/**
	* process.parent.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ssh
	*/
	"process.parent.name": string,

	/**
	* process.parent.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: ssh
	*/
	"process.parent.name.text": string,

	/**
	* process.parent.pe.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: x64
	*/
	"process.parent.pe.architecture": string,

	/**
	* process.parent.pe.company
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"process.parent.pe.company": string,

	/**
	* process.parent.pe.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Paint
	*/
	"process.parent.pe.description": string,

	/**
	* process.parent.pe.file_version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 6.3.9600.17415
	*/
	"process.parent.pe.file_version": string,

	/**
	* process.parent.pe.imphash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0c6803c4e922103c4dca5963aad36ddf
	*/
	"process.parent.pe.imphash": string,

	/**
	* process.parent.pe.original_file_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MSPAINT.EXE
	*/
	"process.parent.pe.original_file_name": string,

	/**
	* process.parent.pe.product
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft® Windows® Operating System
	*/
	"process.parent.pe.product": string,

	/**
	* process.parent.pgid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"process.parent.pgid": number,

	/**
	* process.parent.ppid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4241
	*/
	"process.parent.ppid": number,

	/**
	* process.parent.start
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:34.853Z
	*/
	"process.parent.start": Date,

	/**
	* process.parent.thread.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4242
	*/
	"process.parent.thread.id": number,

	/**
	* process.parent.thread.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: thread-0
	*/
	"process.parent.thread.name": string,

	/**
	* process.parent.title
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.parent.title": string,

	/**
	* process.parent.title.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: 
	*/
	"process.parent.title.text": string,

	/**
	* process.parent.uptime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 1325
	*/
	"process.parent.uptime": number,

	/**
	* process.parent.working_directory
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /home/alice
	*/
	"process.parent.working_directory": string,

	/**
	* process.parent.working_directory.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /home/alice
	*/
	"process.parent.working_directory.text": string,

	/**
	* process.pe.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: x64
	*/
	"process.pe.architecture": string,

	/**
	* process.pe.company
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"process.pe.company": string,

	/**
	* process.pe.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Paint
	*/
	"process.pe.description": string,

	/**
	* process.pe.file_version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 6.3.9600.17415
	*/
	"process.pe.file_version": string,

	/**
	* process.pe.imphash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0c6803c4e922103c4dca5963aad36ddf
	*/
	"process.pe.imphash": string,

	/**
	* process.pe.original_file_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MSPAINT.EXE
	*/
	"process.pe.original_file_name": string,

	/**
	* process.pe.product
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft® Windows® Operating System
	*/
	"process.pe.product": string,

	/**
	* process.pgid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"process.pgid": number,

	/**
	* process.ppid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4241
	*/
	"process.ppid": number,

	/**
	* process.start
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:34.853Z
	*/
	"process.start": Date,

	/**
	* process.thread.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4242
	*/
	"process.thread.id": number,

	/**
	* process.thread.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: thread-0
	*/
	"process.thread.name": string,

	/**
	* process.title
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.title": string,

	/**
	* process.title.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: 
	*/
	"process.title.text": string,

	/**
	* process.uptime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 1325
	*/
	"process.uptime": number,

	/**
	* process.working_directory
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /home/alice
	*/
	"process.working_directory": string,

	/**
	* process.working_directory.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /home/alice
	*/
	"process.working_directory.text": string,

	/**
	* registry.data.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ZQBuAC0AVQBTAAAAZQBuAAAAAAA=
	*/
	"registry.data.bytes": string,

	/**
	* related.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
	* Field Set: related
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"related.hash": string[],

	/**
	* related.hosts
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
	* Field Set: related
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"related.hosts": string[],

	/**
	* related.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
	* Field Set: related
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: 
	*/
	"related.ip": string[],

	/**
	* related.user
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
	* Field Set: related
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"related.user": string[],

	/**
	* rule.author
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["Star-Lord"]
	*/
	"rule.author": string[],

	/**
	* rule.category
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Attempted Information Leak
	*/
	"rule.category": string,

	/**
	* rule.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Block requests to public DNS over HTTPS / TLS protocols
	*/
	"rule.description": string,

	/**
	* rule.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 101
	*/
	"rule.id": string,

	/**
	* rule.license
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Apache 2.0
	*/
	"rule.license": string,

	/**
	* rule.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: BLOCK_DNS_over_TLS
	*/
	"rule.name": string,

	/**
	* rule.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://en.wikipedia.org/wiki/DNS_over_TLS
	*/
	"rule.reference": string,

	/**
	* rule.ruleset
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Standard_Protocol_Filters
	*/
	"rule.ruleset": string,

	/**
	* rule.uuid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1100110011
	*/
	"rule.uuid": string,

	/**
	* rule.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1.1
	*/
	"rule.version": string,

	/**
	* server.address
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.address": string,

	/**
	* server.as.number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 15169
	*/
	"server.as.number": number,

	/**
	* server.as.organization.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Google LLC
	*/
	"server.as.organization.name": string,

	/**
	* server.as.organization.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Google LLC
	*/
	"server.as.organization.name.text": string,

	/**
	* server.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"server.geo.name": string,

	/**
	* server.nat.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: 
	*/
	"server.nat.ip": string,

	/**
	* server.nat.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"server.nat.port": number,

	/**
	* server.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"server.registered_domain": string,

	/**
	* server.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: east
	*/
	"server.subdomain": string,

	/**
	* server.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"server.top_level_domain": string,

	/**
	* server.user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.domain": string,

	/**
	* server.user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.email": string,

	/**
	* server.user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"server.user.full_name": string,

	/**
	* server.user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"server.user.full_name.text": string,

	/**
	* server.user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.group.domain": string,

	/**
	* server.user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.group.id": string,

	/**
	* server.user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.group.name": string,

	/**
	* server.user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.hash": string,

	/**
	* server.user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"server.user.roles": string[],

	/**
	* service.ephemeral_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 8a4f500f
	*/
	"service.ephemeral_id": string,

	/**
	* service.node.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: instance-0000000016
	*/
	"service.node.name": string,

	/**
	* source.address
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.address": string,

	/**
	* source.as.number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 15169
	*/
	"source.as.number": number,

	/**
	* source.as.organization.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Google LLC
	*/
	"source.as.organization.name": string,

	/**
	* source.as.organization.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Google LLC
	*/
	"source.as.organization.name.text": string,

	/**
	* source.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"source.geo.name": string,

	/**
	* source.nat.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: 
	*/
	"source.nat.ip": string,

	/**
	* source.nat.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"source.nat.port": number,

	/**
	* source.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"source.registered_domain": string,

	/**
	* source.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: east
	*/
	"source.subdomain": string,

	/**
	* source.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"source.top_level_domain": string,

	/**
	* source.user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.domain": string,

	/**
	* source.user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.email": string,

	/**
	* source.user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"source.user.full_name": string,

	/**
	* source.user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"source.user.full_name.text": string,

	/**
	* source.user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.group.domain": string,

	/**
	* source.user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.group.id": string,

	/**
	* source.user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.group.name": string,

	/**
	* source.user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.hash": string,

	/**
	* source.user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"source.user.roles": string[],

	/**
	* span.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-span.html
	* Field Set: span
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 3ff9a8981b7ccd5a
	*/
	"span.id": string,

	/**
	* threat.framework
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MITRE ATT&CK
	*/
	"threat.framework": string,

	/**
	* threat.tactic.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: TA0002
	*/
	"threat.tactic.id": string[],

	/**
	* threat.tactic.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Execution
	*/
	"threat.tactic.name": string[],

	/**
	* threat.tactic.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://attack.mitre.org/tactics/TA0002/
	*/
	"threat.tactic.reference": string[],

	/**
	* threat.technique.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: T1059
	*/
	"threat.technique.id": string[],

	/**
	* threat.technique.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Command and Scripting Interpreter
	*/
	"threat.technique.name": string[],

	/**
	* threat.technique.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Command and Scripting Interpreter
	*/
	"threat.technique.name.text": string,

	/**
	* threat.technique.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://attack.mitre.org/techniques/T1059/
	*/
	"threat.technique.reference": string[],

	/**
	* threat.technique.subtechnique.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: T1059.001
	*/
	"threat.technique.subtechnique.id": string[],

	/**
	* threat.technique.subtechnique.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: PowerShell
	*/
	"threat.technique.subtechnique.name": string[],

	/**
	* threat.technique.subtechnique.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: PowerShell
	*/
	"threat.technique.subtechnique.name.text": string,

	/**
	* threat.technique.subtechnique.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://attack.mitre.org/techniques/T1059/001/
	*/
	"threat.technique.subtechnique.reference": string[],

	/**
	* tls.cipher
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
	*/
	"tls.cipher": string,

	/**
	* tls.client.certificate
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MII...
	*/
	"tls.client.certificate": string,

	/**
	* tls.client.certificate_chain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["MII...", "MII..."]
	*/
	"tls.client.certificate_chain": string[],

	/**
	* tls.client.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0F76C7F2C55BFD7D8E8B8F4BFBF0C9EC
	*/
	"tls.client.hash.md5": string,

	/**
	* tls.client.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 9E393D93138888D288266C2D915214D1D1CCEB2A
	*/
	"tls.client.hash.sha1": string,

	/**
	* tls.client.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0687F666A054EF17A08E2F2162EAB4CBC0D265E1D7875BE74BF3C712CA92DAF0
	*/
	"tls.client.hash.sha256": string,

	/**
	* tls.client.issuer
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CN=Example Root CA, OU=Infrastructure Team, DC=example, DC=com
	*/
	"tls.client.issuer": string,

	/**
	* tls.client.ja3
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: d4e5b18d6b55c71272893221c96ba240
	*/
	"tls.client.ja3": string,

	/**
	* tls.client.not_after
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2021-01-01T00:00:00.000Z
	*/
	"tls.client.not_after": Date,

	/**
	* tls.client.not_before
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 1970-01-01T00:00:00.000Z
	*/
	"tls.client.not_before": Date,

	/**
	* tls.client.server_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.elastic.co
	*/
	"tls.client.server_name": string,

	/**
	* tls.client.subject
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CN=myclient, OU=Documentation Team, DC=example, DC=com
	*/
	"tls.client.subject": string,

	/**
	* tls.client.supported_ciphers
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384", "..."]
	*/
	"tls.client.supported_ciphers": string[],

	/**
	* tls.client.x509.alternative_names
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: *.elastic.co
	*/
	"tls.client.x509.alternative_names": string[],

	/**
	* tls.client.x509.issuer.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example SHA2 High Assurance Server CA
	*/
	"tls.client.x509.issuer.common_name": string[],

	/**
	* tls.client.x509.issuer.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"tls.client.x509.issuer.country": string[],

	/**
	* tls.client.x509.issuer.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
	*/
	"tls.client.x509.issuer.distinguished_name": string,

	/**
	* tls.client.x509.issuer.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mountain View
	*/
	"tls.client.x509.issuer.locality": string[],

	/**
	* tls.client.x509.issuer.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example Inc
	*/
	"tls.client.x509.issuer.organization": string[],

	/**
	* tls.client.x509.issuer.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.example.com
	*/
	"tls.client.x509.issuer.organizational_unit": string[],

	/**
	* tls.client.x509.issuer.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"tls.client.x509.issuer.state_or_province": string[],

	/**
	* tls.client.x509.not_after
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2020-07-16 03:15:39+00:00
	*/
	"tls.client.x509.not_after": Date,

	/**
	* tls.client.x509.not_before
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2019-08-16 01:40:25+00:00
	*/
	"tls.client.x509.not_before": Date,

	/**
	* tls.client.x509.public_key_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: RSA
	*/
	"tls.client.x509.public_key_algorithm": string,

	/**
	* tls.client.x509.public_key_curve
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: nistp521
	*/
	"tls.client.x509.public_key_curve": string,

	/**
	* tls.client.x509.public_key_exponent
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: false
	* Level: extended
	* Elasticsearch type: long
	* Example: 65537
	*/
	"tls.client.x509.public_key_exponent": number,

	/**
	* tls.client.x509.public_key_size
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 2048
	*/
	"tls.client.x509.public_key_size": number,

	/**
	* tls.client.x509.serial_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 55FBB9C7DEBF09809D12CCAA
	*/
	"tls.client.x509.serial_number": string,

	/**
	* tls.client.x509.signature_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: SHA256-RSA
	*/
	"tls.client.x509.signature_algorithm": string,

	/**
	* tls.client.x509.subject.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: shared.global.example.net
	*/
	"tls.client.x509.subject.common_name": string[],

	/**
	* tls.client.x509.subject.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"tls.client.x509.subject.country": string[],

	/**
	* tls.client.x509.subject.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
	*/
	"tls.client.x509.subject.distinguished_name": string,

	/**
	* tls.client.x509.subject.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: San Francisco
	*/
	"tls.client.x509.subject.locality": string[],

	/**
	* tls.client.x509.subject.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example, Inc.
	*/
	"tls.client.x509.subject.organization": string[],

	/**
	* tls.client.x509.subject.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"tls.client.x509.subject.organizational_unit": string[],

	/**
	* tls.client.x509.subject.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"tls.client.x509.subject.state_or_province": string[],

	/**
	* tls.client.x509.version_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 3
	*/
	"tls.client.x509.version_number": string,

	/**
	* tls.curve
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: secp256r1
	*/
	"tls.curve": string,

	/**
	* tls.established
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: 
	*/
	"tls.established": boolean,

	/**
	* tls.next_protocol
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: http/1.1
	*/
	"tls.next_protocol": string,

	/**
	* tls.resumed
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: 
	*/
	"tls.resumed": boolean,

	/**
	* tls.server.certificate
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MII...
	*/
	"tls.server.certificate": string,

	/**
	* tls.server.certificate_chain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["MII...", "MII..."]
	*/
	"tls.server.certificate_chain": string[],

	/**
	* tls.server.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0F76C7F2C55BFD7D8E8B8F4BFBF0C9EC
	*/
	"tls.server.hash.md5": string,

	/**
	* tls.server.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 9E393D93138888D288266C2D915214D1D1CCEB2A
	*/
	"tls.server.hash.sha1": string,

	/**
	* tls.server.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0687F666A054EF17A08E2F2162EAB4CBC0D265E1D7875BE74BF3C712CA92DAF0
	*/
	"tls.server.hash.sha256": string,

	/**
	* tls.server.issuer
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CN=Example Root CA, OU=Infrastructure Team, DC=example, DC=com
	*/
	"tls.server.issuer": string,

	/**
	* tls.server.ja3s
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 394441ab65754e2207b1e1b457b3641d
	*/
	"tls.server.ja3s": string,

	/**
	* tls.server.not_after
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2021-01-01T00:00:00.000Z
	*/
	"tls.server.not_after": Date,

	/**
	* tls.server.not_before
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 1970-01-01T00:00:00.000Z
	*/
	"tls.server.not_before": Date,

	/**
	* tls.server.subject
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CN=www.example.com, OU=Infrastructure Team, DC=example, DC=com
	*/
	"tls.server.subject": string,

	/**
	* tls.server.x509.alternative_names
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: *.elastic.co
	*/
	"tls.server.x509.alternative_names": string[],

	/**
	* tls.server.x509.issuer.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example SHA2 High Assurance Server CA
	*/
	"tls.server.x509.issuer.common_name": string[],

	/**
	* tls.server.x509.issuer.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"tls.server.x509.issuer.country": string[],

	/**
	* tls.server.x509.issuer.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
	*/
	"tls.server.x509.issuer.distinguished_name": string,

	/**
	* tls.server.x509.issuer.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mountain View
	*/
	"tls.server.x509.issuer.locality": string[],

	/**
	* tls.server.x509.issuer.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example Inc
	*/
	"tls.server.x509.issuer.organization": string[],

	/**
	* tls.server.x509.issuer.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.example.com
	*/
	"tls.server.x509.issuer.organizational_unit": string[],

	/**
	* tls.server.x509.issuer.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"tls.server.x509.issuer.state_or_province": string[],

	/**
	* tls.server.x509.not_after
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2020-07-16 03:15:39+00:00
	*/
	"tls.server.x509.not_after": Date,

	/**
	* tls.server.x509.not_before
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2019-08-16 01:40:25+00:00
	*/
	"tls.server.x509.not_before": Date,

	/**
	* tls.server.x509.public_key_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: RSA
	*/
	"tls.server.x509.public_key_algorithm": string,

	/**
	* tls.server.x509.public_key_curve
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: nistp521
	*/
	"tls.server.x509.public_key_curve": string,

	/**
	* tls.server.x509.public_key_exponent
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: false
	* Level: extended
	* Elasticsearch type: long
	* Example: 65537
	*/
	"tls.server.x509.public_key_exponent": number,

	/**
	* tls.server.x509.public_key_size
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 2048
	*/
	"tls.server.x509.public_key_size": number,

	/**
	* tls.server.x509.serial_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 55FBB9C7DEBF09809D12CCAA
	*/
	"tls.server.x509.serial_number": string,

	/**
	* tls.server.x509.signature_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: SHA256-RSA
	*/
	"tls.server.x509.signature_algorithm": string,

	/**
	* tls.server.x509.subject.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: shared.global.example.net
	*/
	"tls.server.x509.subject.common_name": string[],

	/**
	* tls.server.x509.subject.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"tls.server.x509.subject.country": string[],

	/**
	* tls.server.x509.subject.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
	*/
	"tls.server.x509.subject.distinguished_name": string,

	/**
	* tls.server.x509.subject.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: San Francisco
	*/
	"tls.server.x509.subject.locality": string[],

	/**
	* tls.server.x509.subject.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example, Inc.
	*/
	"tls.server.x509.subject.organization": string[],

	/**
	* tls.server.x509.subject.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"tls.server.x509.subject.organizational_unit": string[],

	/**
	* tls.server.x509.subject.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"tls.server.x509.subject.state_or_province": string[],

	/**
	* tls.server.x509.version_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 3
	*/
	"tls.server.x509.version_number": string,

	/**
	* tls.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1.2
	*/
	"tls.version": string,

	/**
	* tls.version_protocol
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: tls
	*/
	"tls.version_protocol": string,

	/**
	* trace.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-trace.html
	* Field Set: trace
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 4bf92f3577b34da6a3ce929d0e0e4736
	*/
	"trace.id": string,

	/**
	* transaction.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-transaction.html
	* Field Set: transaction
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 00f067aa0ba902b7
	*/
	"transaction.id": string,

	/**
	* url.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.elastic.co
	*/
	"url.domain": string,

	/**
	* url.extension
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: png
	*/
	"url.extension": string,

	/**
	* url.fragment
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"url.fragment": string,

	/**
	* url.full
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://www.elastic.co:443/search?q=elasticsearch#top
	*/
	"url.full": string,

	/**
	* url.full.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: https://www.elastic.co:443/search?q=elasticsearch#top
	*/
	"url.full.text": string,

	/**
	* url.original
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://www.elastic.co:443/search?q=elasticsearch#top or /search?q=elasticsearch
	*/
	"url.original": string,

	/**
	* url.original.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: https://www.elastic.co:443/search?q=elasticsearch#top or /search?q=elasticsearch
	*/
	"url.original.text": string,

	/**
	* url.password
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"url.password": string,

	/**
	* url.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"url.path": string,

	/**
	* url.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 443
	*/
	"url.port": number,

	/**
	* url.query
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"url.query": string,

	/**
	* url.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"url.registered_domain": string,

	/**
	* url.scheme
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https
	*/
	"url.scheme": string,

	/**
	* url.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: east
	*/
	"url.subdomain": string,

	/**
	* url.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"url.top_level_domain": string,

	/**
	* url.username
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"url.username": string,

	/**
	* user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.domain": string,

	/**
	* user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.email": string,

	/**
	* user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"user.full_name": string,

	/**
	* user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"user.full_name.text": string,

	/**
	* user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.group.domain": string,

	/**
	* user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.group.id": string,

	/**
	* user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.group.name": string,

	/**
	* user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.hash": string,

	/**
	* user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"user.roles": string[],

	/**
	* user_agent.device.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: iPhone
	*/
	"user_agent.device.name": string,

	/**
	* user_agent.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Safari
	*/
	"user_agent.name": string,

	/**
	* user_agent.original
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
	*/
	"user_agent.original": string,

	/**
	* user_agent.original.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
	*/
	"user_agent.original.text": string,

	/**
	* user_agent.os.family
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: debian
	*/
	"user_agent.os.family": string,

	/**
	* user_agent.os.full
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS Mojave
	*/
	"user_agent.os.full": string,

	/**
	* user_agent.os.full.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS Mojave
	*/
	"user_agent.os.full.text": string,

	/**
	* user_agent.os.kernel
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 4.4.0-112-generic
	*/
	"user_agent.os.kernel": string,

	/**
	* user_agent.os.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS X
	*/
	"user_agent.os.name": string,

	/**
	* user_agent.os.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS X
	*/
	"user_agent.os.name.text": string,

	/**
	* user_agent.os.platform
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: darwin
	*/
	"user_agent.os.platform": string,

	/**
	* user_agent.os.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10.14.1
	*/
	"user_agent.os.version": string,

	/**
	* user_agent.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 12
	*/
	"user_agent.version": string,

	/**
	* vulnerability.category
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["Firewall"]
	*/
	"vulnerability.category": string[],

	/**
	* vulnerability.classification
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CVSS
	*/
	"vulnerability.classification": string,

	/**
	* vulnerability.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: In macOS before 2.12.6, there is a vulnerability in the RPC...
	*/
	"vulnerability.description": string,

	/**
	* vulnerability.description.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: In macOS before 2.12.6, there is a vulnerability in the RPC...
	*/
	"vulnerability.description.text": string,

	/**
	* vulnerability.enumeration
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CVE
	*/
	"vulnerability.enumeration": string,

	/**
	* vulnerability.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CVE-2019-00001
	*/
	"vulnerability.id": string,

	/**
	* vulnerability.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-6111
	*/
	"vulnerability.reference": string,

	/**
	* vulnerability.report_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 20191018.0001
	*/
	"vulnerability.report_id": string,

	/**
	* vulnerability.scanner.vendor
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Tenable
	*/
	"vulnerability.scanner.vendor": string,

	/**
	* vulnerability.score.base
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: float
	* Example: 5.5
	*/
	"vulnerability.score.base": number,

	/**
	* vulnerability.score.environmental
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: float
	* Example: 5.5
	*/
	"vulnerability.score.environmental": number,

	/**
	* vulnerability.score.temporal
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: float
	* Example: 
	*/
	"vulnerability.score.temporal": number,

	/**
	* vulnerability.score.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 2
	*/
	"vulnerability.score.version": string,

	/**
	* vulnerability.severity
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Critical
	*/
	"vulnerability.severity": string,


}

export interface EcsFields {
	/**
	* @timestamp
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:34.853Z
	*/
	"@timestamp": Date,

	/**
	* agent.build.original
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: metricbeat version 7.6.0 (amd64), libbeat 7.6.0 [6a23e8f8f30f5001ba344e4e54d8d9cb82cb107c built 2020-02-05 23:10:10 +0000 UTC]
	*/
	"agent.build.original": string,

	/**
	* agent.ephemeral_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 8a4f500f
	*/
	"agent.ephemeral_id": string,

	/**
	* agent.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 8a4f500d
	*/
	"agent.id": string,

	/**
	* agent.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: foo
	*/
	"agent.name": string,

	/**
	* agent.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: filebeat
	*/
	"agent.type": string,

	/**
	* agent.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
	* Field Set: agent
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 6.0.0-rc2
	*/
	"agent.version": string,

	/**
	* client.address
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.address": string,

	/**
	* client.as.number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 15169
	*/
	"client.as.number": number,

	/**
	* client.as.organization.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Google LLC
	*/
	"client.as.organization.name": string,

	/**
	* client.as.organization.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Google LLC
	*/
	"client.as.organization.name.text": string,

	/**
	* client.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 184
	*/
	"client.bytes": number,

	/**
	* client.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.domain": string,

	/**
	* client.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"client.geo.city_name": string,

	/**
	* client.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"client.geo.continent_name": string,

	/**
	* client.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"client.geo.country_iso_code": string,

	/**
	* client.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"client.geo.country_name": string,

	/**
	* client.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"client.geo.location": GeoPoint,

	/**
	* client.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"client.geo.name": string,

	/**
	* client.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"client.geo.region_iso_code": string,

	/**
	* client.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"client.geo.region_name": string,

	/**
	* client.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"client.ip": string,

	/**
	* client.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.mac": string,

	/**
	* client.nat.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: 
	*/
	"client.nat.ip": string,

	/**
	* client.nat.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"client.nat.port": number,

	/**
	* client.packets
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 12
	*/
	"client.packets": number,

	/**
	* client.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 
	*/
	"client.port": number,

	/**
	* client.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"client.registered_domain": string,

	/**
	* client.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: east
	*/
	"client.subdomain": string,

	/**
	* client.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"client.top_level_domain": string,

	/**
	* client.user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.domain": string,

	/**
	* client.user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.email": string,

	/**
	* client.user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"client.user.full_name": string,

	/**
	* client.user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"client.user.full_name.text": string,

	/**
	* client.user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.group.domain": string,

	/**
	* client.user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.group.id": string,

	/**
	* client.user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.group.name": string,

	/**
	* client.user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.hash": string,

	/**
	* client.user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"client.user.id": string,

	/**
	* client.user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"client.user.name": string,

	/**
	* client.user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"client.user.name.text": string,

	/**
	* client.user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
	* Field Set: client
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"client.user.roles": string[],

	/**
	* cloud.account.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 666777888999
	*/
	"cloud.account.id": string,

	/**
	* cloud.account.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: elastic-dev
	*/
	"cloud.account.name": string,

	/**
	* cloud.availability_zone
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: us-east-1c
	*/
	"cloud.availability_zone": string,

	/**
	* cloud.instance.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: i-1234567890abcdef0
	*/
	"cloud.instance.id": string,

	/**
	* cloud.instance.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"cloud.instance.name": string,

	/**
	* cloud.machine.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: t2.medium
	*/
	"cloud.machine.type": string,

	/**
	* cloud.project.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: my-project
	*/
	"cloud.project.id": string,

	/**
	* cloud.project.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: my project
	*/
	"cloud.project.name": string,

	/**
	* cloud.provider
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: aws
	*/
	"cloud.provider": string,

	/**
	* cloud.region
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
	* Field Set: cloud
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: us-east-1
	*/
	"cloud.region": string,

	/**
	* container.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"container.id": string,

	/**
	* container.image.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"container.image.name": string,

	/**
	* container.image.tag
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"container.image.tag": string[],

	/**
	* container.labels
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"container.labels": object,

	/**
	* container.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"container.name": string,

	/**
	* container.runtime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
	* Field Set: container
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: docker
	*/
	"container.runtime": string,

	/**
	* destination.address
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.address": string,

	/**
	* destination.as.number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 15169
	*/
	"destination.as.number": number,

	/**
	* destination.as.organization.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Google LLC
	*/
	"destination.as.organization.name": string,

	/**
	* destination.as.organization.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Google LLC
	*/
	"destination.as.organization.name.text": string,

	/**
	* destination.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 184
	*/
	"destination.bytes": number,

	/**
	* destination.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.domain": string,

	/**
	* destination.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"destination.geo.city_name": string,

	/**
	* destination.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"destination.geo.continent_name": string,

	/**
	* destination.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"destination.geo.country_iso_code": string,

	/**
	* destination.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"destination.geo.country_name": string,

	/**
	* destination.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"destination.geo.location": GeoPoint,

	/**
	* destination.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"destination.geo.name": string,

	/**
	* destination.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"destination.geo.region_iso_code": string,

	/**
	* destination.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"destination.geo.region_name": string,

	/**
	* destination.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"destination.ip": string,

	/**
	* destination.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.mac": string,

	/**
	* destination.nat.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: 
	*/
	"destination.nat.ip": string,

	/**
	* destination.nat.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"destination.nat.port": number,

	/**
	* destination.packets
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 12
	*/
	"destination.packets": number,

	/**
	* destination.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 
	*/
	"destination.port": number,

	/**
	* destination.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"destination.registered_domain": string,

	/**
	* destination.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: east
	*/
	"destination.subdomain": string,

	/**
	* destination.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"destination.top_level_domain": string,

	/**
	* destination.user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.domain": string,

	/**
	* destination.user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.email": string,

	/**
	* destination.user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"destination.user.full_name": string,

	/**
	* destination.user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"destination.user.full_name.text": string,

	/**
	* destination.user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.group.domain": string,

	/**
	* destination.user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.group.id": string,

	/**
	* destination.user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.group.name": string,

	/**
	* destination.user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.hash": string,

	/**
	* destination.user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"destination.user.id": string,

	/**
	* destination.user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"destination.user.name": string,

	/**
	* destination.user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"destination.user.name.text": string,

	/**
	* destination.user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
	* Field Set: destination
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"destination.user.roles": string[],

	/**
	* dll.code_signature.exists
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: boolean
	* Example: true
	*/
	"dll.code_signature.exists": boolean,

	/**
	* dll.code_signature.status
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ERROR_UNTRUSTED_ROOT
	*/
	"dll.code_signature.status": string,

	/**
	* dll.code_signature.subject_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"dll.code_signature.subject_name": string,

	/**
	* dll.code_signature.trusted
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"dll.code_signature.trusted": boolean,

	/**
	* dll.code_signature.valid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"dll.code_signature.valid": boolean,

	/**
	* dll.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"dll.hash.md5": string,

	/**
	* dll.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"dll.hash.sha1": string,

	/**
	* dll.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"dll.hash.sha256": string,

	/**
	* dll.hash.sha512
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"dll.hash.sha512": string,

	/**
	* dll.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: kernel32.dll
	*/
	"dll.name": string,

	/**
	* dll.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C:\Windows\System32\kernel32.dll
	*/
	"dll.path": string,

	/**
	* dll.pe.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: x64
	*/
	"dll.pe.architecture": string,

	/**
	* dll.pe.company
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"dll.pe.company": string,

	/**
	* dll.pe.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Paint
	*/
	"dll.pe.description": string,

	/**
	* dll.pe.file_version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 6.3.9600.17415
	*/
	"dll.pe.file_version": string,

	/**
	* dll.pe.imphash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0c6803c4e922103c4dca5963aad36ddf
	*/
	"dll.pe.imphash": string,

	/**
	* dll.pe.original_file_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MSPAINT.EXE
	*/
	"dll.pe.original_file_name": string,

	/**
	* dll.pe.product
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
	* Field Set: dll
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft® Windows® Operating System
	*/
	"dll.pe.product": string,

	/**
	* dns.answers
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"dns.answers": object[],

	/**
	* dns.answers.class
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: IN
	*/
	"dns.answers.class": string,

	/**
	* dns.answers.data
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10.10.10.10
	*/
	"dns.answers.data": string,

	/**
	* dns.answers.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.example.com
	*/
	"dns.answers.name": string,

	/**
	* dns.answers.ttl
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 180
	*/
	"dns.answers.ttl": number,

	/**
	* dns.answers.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CNAME
	*/
	"dns.answers.type": string,

	/**
	* dns.header_flags
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["RD", "RA"]
	*/
	"dns.header_flags": string[],

	/**
	* dns.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 62111
	*/
	"dns.id": string,

	/**
	* dns.op_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: QUERY
	*/
	"dns.op_code": string,

	/**
	* dns.question.class
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: IN
	*/
	"dns.question.class": string,

	/**
	* dns.question.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.example.com
	*/
	"dns.question.name": string,

	/**
	* dns.question.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"dns.question.registered_domain": string,

	/**
	* dns.question.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www
	*/
	"dns.question.subdomain": string,

	/**
	* dns.question.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"dns.question.top_level_domain": string,

	/**
	* dns.question.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: AAAA
	*/
	"dns.question.type": string,

	/**
	* dns.resolved_ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: ["10.10.10.10", "10.10.10.11"]
	*/
	"dns.resolved_ip": string[],

	/**
	* dns.response_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: NOERROR
	*/
	"dns.response_code": string,

	/**
	* dns.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
	* Field Set: dns
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: answer
	*/
	"dns.type": string,

	/**
	* ecs.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-ecs.html
	* Field Set: ecs
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 1.0.0
	*/
	"ecs.version": string,

	/**
	* error.code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"error.code": string,

	/**
	* error.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"error.id": string,

	/**
	* error.message
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: 
	*/
	"error.message": string,

	/**
	* error.stack_trace
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: false
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"error.stack_trace": string,

	/**
	* error.stack_trace.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: false
	* Level: extended
	* Elasticsearch type: text
	* Example: 
	*/
	"error.stack_trace.text": string,

	/**
	* error.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
	* Field Set: error
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: java.lang.NullPointerException
	*/
	"error.type": string,

	/**
	* event.action
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: user-password-change
	*/
	"event.action": string,

	/**
	* event.category
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: authentication
	*/
	"event.category": string[],

	/**
	* event.code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 4648
	*/
	"event.code": string,

	/**
	* event.created
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:34.857Z
	*/
	"event.created": Date,

	/**
	* event.dataset
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: apache.access
	*/
	"event.dataset": string,

	/**
	* event.duration
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 
	*/
	"event.duration": number,

	/**
	* event.end
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"event.end": Date,

	/**
	* event.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 123456789012345678901234567890ABCD
	*/
	"event.hash": string,

	/**
	* event.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 8a4f500d
	*/
	"event.id": string,

	/**
	* event.ingested
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:35.101Z
	*/
	"event.ingested": Date,

	/**
	* event.kind
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: alert
	*/
	"event.kind": string,

	/**
	* event.module
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: apache
	*/
	"event.module": string,

	/**
	* event.original
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: false
	* Level: core
	* Elasticsearch type: keyword
	* Example: Sep 19 08:26:10 host CEF:0&#124;Security&#124; threatmanager&#124;1.0&#124;100&#124; worm successfully stopped&#124;10&#124;src=10.0.0.1 dst=2.1.2.2spt=1232
	*/
	"event.original": string,

	/**
	* event.outcome
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: success
	*/
	"event.outcome": string,

	/**
	* event.provider
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: kernel
	*/
	"event.provider": string,

	/**
	* event.reason
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Terminated an unexpected process
	*/
	"event.reason": string,

	/**
	* event.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://system.example.com/event/#0001234
	*/
	"event.reference": string,

	/**
	* event.risk_score
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: float
	* Example: 
	*/
	"event.risk_score": number,

	/**
	* event.risk_score_norm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: float
	* Example: 
	*/
	"event.risk_score_norm": number,

	/**
	* event.sequence
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"event.sequence": number,

	/**
	* event.severity
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 7
	*/
	"event.severity": number,

	/**
	* event.start
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"event.start": Date,

	/**
	* event.timezone
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"event.timezone": string,

	/**
	* event.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"event.type": string[],

	/**
	* event.url
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
	* Field Set: event
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://mysystem.example.com/alert/5271dedb-f5b0-4218-87f0-4ac4870a38fe
	*/
	"event.url": string,

	/**
	* file.accessed
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"file.accessed": Date,

	/**
	* file.attributes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["readonly", "system"]
	*/
	"file.attributes": string[],

	/**
	* file.code_signature.exists
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: boolean
	* Example: true
	*/
	"file.code_signature.exists": boolean,

	/**
	* file.code_signature.status
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ERROR_UNTRUSTED_ROOT
	*/
	"file.code_signature.status": string,

	/**
	* file.code_signature.subject_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"file.code_signature.subject_name": string,

	/**
	* file.code_signature.trusted
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"file.code_signature.trusted": boolean,

	/**
	* file.code_signature.valid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"file.code_signature.valid": boolean,

	/**
	* file.created
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"file.created": Date,

	/**
	* file.ctime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"file.ctime": Date,

	/**
	* file.device
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: sda
	*/
	"file.device": string,

	/**
	* file.directory
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /home/alice
	*/
	"file.directory": string,

	/**
	* file.drive_letter
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C
	*/
	"file.drive_letter": string,

	/**
	* file.extension
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: png
	*/
	"file.extension": string,

	/**
	* file.gid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1001
	*/
	"file.gid": string,

	/**
	* file.group
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: alice
	*/
	"file.group": string,

	/**
	* file.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.hash.md5": string,

	/**
	* file.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.hash.sha1": string,

	/**
	* file.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.hash.sha256": string,

	/**
	* file.hash.sha512
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.hash.sha512": string,

	/**
	* file.inode
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 256383
	*/
	"file.inode": string,

	/**
	* file.mime_type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.mime_type": string,

	/**
	* file.mode
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 640
	*/
	"file.mode": string,

	/**
	* file.mtime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"file.mtime": Date,

	/**
	* file.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.png
	*/
	"file.name": string,

	/**
	* file.owner
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: alice
	*/
	"file.owner": string,

	/**
	* file.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /home/alice/example.png
	*/
	"file.path": string,

	/**
	* file.path.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /home/alice/example.png
	*/
	"file.path.text": string,

	/**
	* file.pe.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: x64
	*/
	"file.pe.architecture": string,

	/**
	* file.pe.company
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"file.pe.company": string,

	/**
	* file.pe.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Paint
	*/
	"file.pe.description": string,

	/**
	* file.pe.file_version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 6.3.9600.17415
	*/
	"file.pe.file_version": string,

	/**
	* file.pe.imphash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0c6803c4e922103c4dca5963aad36ddf
	*/
	"file.pe.imphash": string,

	/**
	* file.pe.original_file_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MSPAINT.EXE
	*/
	"file.pe.original_file_name": string,

	/**
	* file.pe.product
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft® Windows® Operating System
	*/
	"file.pe.product": string,

	/**
	* file.size
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 16384
	*/
	"file.size": number,

	/**
	* file.target_path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.target_path": string,

	/**
	* file.target_path.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: 
	*/
	"file.target_path.text": string,

	/**
	* file.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: file
	*/
	"file.type": string,

	/**
	* file.uid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1001
	*/
	"file.uid": string,

	/**
	* file.x509.alternative_names
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: *.elastic.co
	*/
	"file.x509.alternative_names": string[],

	/**
	* file.x509.issuer.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example SHA2 High Assurance Server CA
	*/
	"file.x509.issuer.common_name": string[],

	/**
	* file.x509.issuer.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"file.x509.issuer.country": string[],

	/**
	* file.x509.issuer.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
	*/
	"file.x509.issuer.distinguished_name": string,

	/**
	* file.x509.issuer.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mountain View
	*/
	"file.x509.issuer.locality": string[],

	/**
	* file.x509.issuer.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example Inc
	*/
	"file.x509.issuer.organization": string[],

	/**
	* file.x509.issuer.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.example.com
	*/
	"file.x509.issuer.organizational_unit": string[],

	/**
	* file.x509.issuer.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"file.x509.issuer.state_or_province": string[],

	/**
	* file.x509.not_after
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2020-07-16 03:15:39+00:00
	*/
	"file.x509.not_after": Date,

	/**
	* file.x509.not_before
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2019-08-16 01:40:25+00:00
	*/
	"file.x509.not_before": Date,

	/**
	* file.x509.public_key_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: RSA
	*/
	"file.x509.public_key_algorithm": string,

	/**
	* file.x509.public_key_curve
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: nistp521
	*/
	"file.x509.public_key_curve": string,

	/**
	* file.x509.public_key_exponent
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: false
	* Level: extended
	* Elasticsearch type: long
	* Example: 65537
	*/
	"file.x509.public_key_exponent": number,

	/**
	* file.x509.public_key_size
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 2048
	*/
	"file.x509.public_key_size": number,

	/**
	* file.x509.serial_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 55FBB9C7DEBF09809D12CCAA
	*/
	"file.x509.serial_number": string,

	/**
	* file.x509.signature_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: SHA256-RSA
	*/
	"file.x509.signature_algorithm": string,

	/**
	* file.x509.subject.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: shared.global.example.net
	*/
	"file.x509.subject.common_name": string[],

	/**
	* file.x509.subject.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"file.x509.subject.country": string[],

	/**
	* file.x509.subject.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
	*/
	"file.x509.subject.distinguished_name": string,

	/**
	* file.x509.subject.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: San Francisco
	*/
	"file.x509.subject.locality": string[],

	/**
	* file.x509.subject.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example, Inc.
	*/
	"file.x509.subject.organization": string[],

	/**
	* file.x509.subject.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"file.x509.subject.organizational_unit": string[],

	/**
	* file.x509.subject.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"file.x509.subject.state_or_province": string[],

	/**
	* file.x509.version_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
	* Field Set: file
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 3
	*/
	"file.x509.version_number": string,

	/**
	* group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
	* Field Set: group
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"group.domain": string,

	/**
	* group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
	* Field Set: group
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"group.id": string,

	/**
	* group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
	* Field Set: group
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"group.name": string,

	/**
	* host.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: x86_64
	*/
	"host.architecture": string,

	/**
	* host.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CONTOSO
	*/
	"host.domain": string,

	/**
	* host.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"host.geo.city_name": string,

	/**
	* host.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"host.geo.continent_name": string,

	/**
	* host.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"host.geo.country_iso_code": string,

	/**
	* host.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"host.geo.country_name": string,

	/**
	* host.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"host.geo.location": GeoPoint,

	/**
	* host.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"host.geo.name": string,

	/**
	* host.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"host.geo.region_iso_code": string,

	/**
	* host.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"host.geo.region_name": string,

	/**
	* host.hostname
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.hostname": string,

	/**
	* host.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.id": string,

	/**
	* host.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"host.ip": string[],

	/**
	* host.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.mac": string[],

	/**
	* host.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.name": string,

	/**
	* host.os.family
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: debian
	*/
	"host.os.family": string,

	/**
	* host.os.full
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS Mojave
	*/
	"host.os.full": string,

	/**
	* host.os.full.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS Mojave
	*/
	"host.os.full.text": string,

	/**
	* host.os.kernel
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 4.4.0-112-generic
	*/
	"host.os.kernel": string,

	/**
	* host.os.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS X
	*/
	"host.os.name": string,

	/**
	* host.os.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS X
	*/
	"host.os.name.text": string,

	/**
	* host.os.platform
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: darwin
	*/
	"host.os.platform": string,

	/**
	* host.os.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10.14.1
	*/
	"host.os.version": string,

	/**
	* host.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.type": string,

	/**
	* host.uptime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 1325
	*/
	"host.uptime": number,

	/**
	* host.user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.domain": string,

	/**
	* host.user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.email": string,

	/**
	* host.user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"host.user.full_name": string,

	/**
	* host.user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"host.user.full_name.text": string,

	/**
	* host.user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.group.domain": string,

	/**
	* host.user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.group.id": string,

	/**
	* host.user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.group.name": string,

	/**
	* host.user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.hash": string,

	/**
	* host.user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"host.user.id": string,

	/**
	* host.user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"host.user.name": string,

	/**
	* host.user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"host.user.name.text": string,

	/**
	* host.user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
	* Field Set: host
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"host.user.roles": string[],

	/**
	* http.request.body.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 887
	*/
	"http.request.body.bytes": number,

	/**
	* http.request.body.content
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Hello world
	*/
	"http.request.body.content": string,

	/**
	* http.request.body.content.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Hello world
	*/
	"http.request.body.content.text": string,

	/**
	* http.request.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 1437
	*/
	"http.request.bytes": number,

	/**
	* http.request.method
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: GET, POST, PUT, PoST
	*/
	"http.request.method": string,

	/**
	* http.request.mime_type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: image/gif
	*/
	"http.request.mime_type": string,

	/**
	* http.request.referrer
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://blog.example.com/
	*/
	"http.request.referrer": string,

	/**
	* http.response.body.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 887
	*/
	"http.response.body.bytes": number,

	/**
	* http.response.body.content
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Hello world
	*/
	"http.response.body.content": string,

	/**
	* http.response.body.content.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Hello world
	*/
	"http.response.body.content.text": string,

	/**
	* http.response.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 1437
	*/
	"http.response.bytes": number,

	/**
	* http.response.mime_type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: image/gif
	*/
	"http.response.mime_type": string,

	/**
	* http.response.status_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 404
	*/
	"http.response.status_code": number,

	/**
	* http.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
	* Field Set: http
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1.1
	*/
	"http.version": string,

	/**
	* labels
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: object
	* Example: {"application": "foo-bar", "env": "production"}
	*/
	"labels": object,

	/**
	* log.file.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /var/log/fun-times.log
	*/
	"log.file.path": string,

	/**
	* log.level
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: error
	*/
	"log.level": string,

	/**
	* log.logger
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: org.elasticsearch.bootstrap.Bootstrap
	*/
	"log.logger": string,

	/**
	* log.origin.file.line
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: integer
	* Example: 42
	*/
	"log.origin.file.line": number,

	/**
	* log.origin.file.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Bootstrap.java
	*/
	"log.origin.file.name": string,

	/**
	* log.origin.function
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: init
	*/
	"log.origin.function": string,

	/**
	* log.original
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: false
	* Level: core
	* Elasticsearch type: keyword
	* Example: Sep 19 08:26:10 localhost My log
	*/
	"log.original": string,

	/**
	* log.syslog
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"log.syslog": object,

	/**
	* log.syslog.facility.code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 23
	*/
	"log.syslog.facility.code": number,

	/**
	* log.syslog.facility.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: local7
	*/
	"log.syslog.facility.name": string,

	/**
	* log.syslog.priority
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 135
	*/
	"log.syslog.priority": number,

	/**
	* log.syslog.severity.code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 3
	*/
	"log.syslog.severity.code": number,

	/**
	* log.syslog.severity.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
	* Field Set: log
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Error
	*/
	"log.syslog.severity.name": string,

	/**
	* message
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: Hello World
	*/
	"message": string,

	/**
	* network.application
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: aim
	*/
	"network.application": string,

	/**
	* network.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 368
	*/
	"network.bytes": number,

	/**
	* network.community_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1:hO+sN4H+MG5MY/8hIrXPqc4ZQz0=
	*/
	"network.community_id": string,

	/**
	* network.direction
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: inbound
	*/
	"network.direction": string,

	/**
	* network.forwarded_ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 192.1.1.2
	*/
	"network.forwarded_ip": string,

	/**
	* network.iana_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 6
	*/
	"network.iana_number": string,

	/**
	* network.inner
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"network.inner": object,

	/**
	* network.inner.vlan.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"network.inner.vlan.id": string,

	/**
	* network.inner.vlan.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"network.inner.vlan.name": string,

	/**
	* network.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Guest Wifi
	*/
	"network.name": string,

	/**
	* network.packets
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 24
	*/
	"network.packets": number,

	/**
	* network.protocol
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: http
	*/
	"network.protocol": string,

	/**
	* network.transport
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: tcp
	*/
	"network.transport": string,

	/**
	* network.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: ipv4
	*/
	"network.type": string,

	/**
	* network.vlan.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"network.vlan.id": string,

	/**
	* network.vlan.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
	* Field Set: network
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"network.vlan.name": string,

	/**
	* observer.egress
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"observer.egress": object,

	/**
	* observer.egress.interface.alias
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"observer.egress.interface.alias": string,

	/**
	* observer.egress.interface.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"observer.egress.interface.id": string,

	/**
	* observer.egress.interface.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: eth0
	*/
	"observer.egress.interface.name": string,

	/**
	* observer.egress.vlan.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"observer.egress.vlan.id": string,

	/**
	* observer.egress.vlan.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"observer.egress.vlan.name": string,

	/**
	* observer.egress.zone
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Public_Internet
	*/
	"observer.egress.zone": string,

	/**
	* observer.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"observer.geo.city_name": string,

	/**
	* observer.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"observer.geo.continent_name": string,

	/**
	* observer.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"observer.geo.country_iso_code": string,

	/**
	* observer.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"observer.geo.country_name": string,

	/**
	* observer.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"observer.geo.location": GeoPoint,

	/**
	* observer.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"observer.geo.name": string,

	/**
	* observer.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"observer.geo.region_iso_code": string,

	/**
	* observer.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"observer.geo.region_name": string,

	/**
	* observer.hostname
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"observer.hostname": string,

	/**
	* observer.ingress
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: object
	* Example: 
	*/
	"observer.ingress": object,

	/**
	* observer.ingress.interface.alias
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"observer.ingress.interface.alias": string,

	/**
	* observer.ingress.interface.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"observer.ingress.interface.id": string,

	/**
	* observer.ingress.interface.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: eth0
	*/
	"observer.ingress.interface.name": string,

	/**
	* observer.ingress.vlan.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10
	*/
	"observer.ingress.vlan.id": string,

	/**
	* observer.ingress.vlan.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: outside
	*/
	"observer.ingress.vlan.name": string,

	/**
	* observer.ingress.zone
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: DMZ
	*/
	"observer.ingress.zone": string,

	/**
	* observer.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"observer.ip": string[],

	/**
	* observer.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"observer.mac": string[],

	/**
	* observer.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1_proxySG
	*/
	"observer.name": string,

	/**
	* observer.os.family
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: debian
	*/
	"observer.os.family": string,

	/**
	* observer.os.full
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS Mojave
	*/
	"observer.os.full": string,

	/**
	* observer.os.full.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS Mojave
	*/
	"observer.os.full.text": string,

	/**
	* observer.os.kernel
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 4.4.0-112-generic
	*/
	"observer.os.kernel": string,

	/**
	* observer.os.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS X
	*/
	"observer.os.name": string,

	/**
	* observer.os.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS X
	*/
	"observer.os.name.text": string,

	/**
	* observer.os.platform
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: darwin
	*/
	"observer.os.platform": string,

	/**
	* observer.os.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10.14.1
	*/
	"observer.os.version": string,

	/**
	* observer.product
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: s200
	*/
	"observer.product": string,

	/**
	* observer.serial_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"observer.serial_number": string,

	/**
	* observer.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: firewall
	*/
	"observer.type": string,

	/**
	* observer.vendor
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Symantec
	*/
	"observer.vendor": string,

	/**
	* observer.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
	* Field Set: observer
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"observer.version": string,

	/**
	* organization.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-organization.html
	* Field Set: organization
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"organization.id": string,

	/**
	* organization.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-organization.html
	* Field Set: organization
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"organization.name": string,

	/**
	* organization.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-organization.html
	* Field Set: organization
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: 
	*/
	"organization.name.text": string,

	/**
	* package.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: x86_64
	*/
	"package.architecture": string,

	/**
	* package.build_version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 36f4f7e89dd61b0988b12ee000b98966867710cd
	*/
	"package.build_version": string,

	/**
	* package.checksum
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 68b329da9893e34099c7d8ad5cb9c940
	*/
	"package.checksum": string,

	/**
	* package.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Open source programming language to build simple/reliable/efficient software.
	*/
	"package.description": string,

	/**
	* package.install_scope
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: global
	*/
	"package.install_scope": string,

	/**
	* package.installed
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 
	*/
	"package.installed": Date,

	/**
	* package.license
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Apache License 2.0
	*/
	"package.license": string,

	/**
	* package.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: go
	*/
	"package.name": string,

	/**
	* package.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /usr/local/Cellar/go/1.12.9/
	*/
	"package.path": string,

	/**
	* package.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://golang.org
	*/
	"package.reference": string,

	/**
	* package.size
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 62231
	*/
	"package.size": number,

	/**
	* package.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: rpm
	*/
	"package.type": string,

	/**
	* package.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
	* Field Set: package
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1.12.9
	*/
	"package.version": string,

	/**
	* process.args
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["/usr/bin/ssh", "-l", "user", "10.0.0.16"]
	*/
	"process.args": string[],

	/**
	* process.args_count
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4
	*/
	"process.args_count": number,

	/**
	* process.code_signature.exists
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.code_signature.exists": boolean,

	/**
	* process.code_signature.status
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ERROR_UNTRUSTED_ROOT
	*/
	"process.code_signature.status": string,

	/**
	* process.code_signature.subject_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"process.code_signature.subject_name": string,

	/**
	* process.code_signature.trusted
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.code_signature.trusted": boolean,

	/**
	* process.code_signature.valid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.code_signature.valid": boolean,

	/**
	* process.command_line
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /usr/bin/ssh -l user 10.0.0.16
	*/
	"process.command_line": string,

	/**
	* process.command_line.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /usr/bin/ssh -l user 10.0.0.16
	*/
	"process.command_line.text": string,

	/**
	* process.entity_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: c2c455d9f99375d
	*/
	"process.entity_id": string,

	/**
	* process.executable
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /usr/bin/ssh
	*/
	"process.executable": string,

	/**
	* process.executable.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /usr/bin/ssh
	*/
	"process.executable.text": string,

	/**
	* process.exit_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 137
	*/
	"process.exit_code": number,

	/**
	* process.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.hash.md5": string,

	/**
	* process.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.hash.sha1": string,

	/**
	* process.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.hash.sha256": string,

	/**
	* process.hash.sha512
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.hash.sha512": string,

	/**
	* process.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ssh
	*/
	"process.name": string,

	/**
	* process.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: ssh
	*/
	"process.name.text": string,

	/**
	* process.parent.args
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["/usr/bin/ssh", "-l", "user", "10.0.0.16"]
	*/
	"process.parent.args": string[],

	/**
	* process.parent.args_count
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4
	*/
	"process.parent.args_count": number,

	/**
	* process.parent.code_signature.exists
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.parent.code_signature.exists": boolean,

	/**
	* process.parent.code_signature.status
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ERROR_UNTRUSTED_ROOT
	*/
	"process.parent.code_signature.status": string,

	/**
	* process.parent.code_signature.subject_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"process.parent.code_signature.subject_name": string,

	/**
	* process.parent.code_signature.trusted
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.parent.code_signature.trusted": boolean,

	/**
	* process.parent.code_signature.valid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: true
	*/
	"process.parent.code_signature.valid": boolean,

	/**
	* process.parent.command_line
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /usr/bin/ssh -l user 10.0.0.16
	*/
	"process.parent.command_line": string,

	/**
	* process.parent.command_line.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /usr/bin/ssh -l user 10.0.0.16
	*/
	"process.parent.command_line.text": string,

	/**
	* process.parent.entity_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: c2c455d9f99375d
	*/
	"process.parent.entity_id": string,

	/**
	* process.parent.executable
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /usr/bin/ssh
	*/
	"process.parent.executable": string,

	/**
	* process.parent.executable.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /usr/bin/ssh
	*/
	"process.parent.executable.text": string,

	/**
	* process.parent.exit_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 137
	*/
	"process.parent.exit_code": number,

	/**
	* process.parent.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.parent.hash.md5": string,

	/**
	* process.parent.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.parent.hash.sha1": string,

	/**
	* process.parent.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.parent.hash.sha256": string,

	/**
	* process.parent.hash.sha512
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.parent.hash.sha512": string,

	/**
	* process.parent.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ssh
	*/
	"process.parent.name": string,

	/**
	* process.parent.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: ssh
	*/
	"process.parent.name.text": string,

	/**
	* process.parent.pe.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: x64
	*/
	"process.parent.pe.architecture": string,

	/**
	* process.parent.pe.company
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"process.parent.pe.company": string,

	/**
	* process.parent.pe.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Paint
	*/
	"process.parent.pe.description": string,

	/**
	* process.parent.pe.file_version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 6.3.9600.17415
	*/
	"process.parent.pe.file_version": string,

	/**
	* process.parent.pe.imphash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0c6803c4e922103c4dca5963aad36ddf
	*/
	"process.parent.pe.imphash": string,

	/**
	* process.parent.pe.original_file_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MSPAINT.EXE
	*/
	"process.parent.pe.original_file_name": string,

	/**
	* process.parent.pe.product
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft® Windows® Operating System
	*/
	"process.parent.pe.product": string,

	/**
	* process.parent.pgid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"process.parent.pgid": number,

	/**
	* process.parent.pid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 4242
	*/
	"process.parent.pid": number,

	/**
	* process.parent.ppid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4241
	*/
	"process.parent.ppid": number,

	/**
	* process.parent.start
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:34.853Z
	*/
	"process.parent.start": Date,

	/**
	* process.parent.thread.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4242
	*/
	"process.parent.thread.id": number,

	/**
	* process.parent.thread.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: thread-0
	*/
	"process.parent.thread.name": string,

	/**
	* process.parent.title
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.parent.title": string,

	/**
	* process.parent.title.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: 
	*/
	"process.parent.title.text": string,

	/**
	* process.parent.uptime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 1325
	*/
	"process.parent.uptime": number,

	/**
	* process.parent.working_directory
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /home/alice
	*/
	"process.parent.working_directory": string,

	/**
	* process.parent.working_directory.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /home/alice
	*/
	"process.parent.working_directory.text": string,

	/**
	* process.pe.architecture
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: x64
	*/
	"process.pe.architecture": string,

	/**
	* process.pe.company
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft Corporation
	*/
	"process.pe.company": string,

	/**
	* process.pe.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Paint
	*/
	"process.pe.description": string,

	/**
	* process.pe.file_version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 6.3.9600.17415
	*/
	"process.pe.file_version": string,

	/**
	* process.pe.imphash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0c6803c4e922103c4dca5963aad36ddf
	*/
	"process.pe.imphash": string,

	/**
	* process.pe.original_file_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MSPAINT.EXE
	*/
	"process.pe.original_file_name": string,

	/**
	* process.pe.product
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Microsoft® Windows® Operating System
	*/
	"process.pe.product": string,

	/**
	* process.pgid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"process.pgid": number,

	/**
	* process.pid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 4242
	*/
	"process.pid": number,

	/**
	* process.ppid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4241
	*/
	"process.ppid": number,

	/**
	* process.start
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:34.853Z
	*/
	"process.start": Date,

	/**
	* process.thread.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 4242
	*/
	"process.thread.id": number,

	/**
	* process.thread.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: thread-0
	*/
	"process.thread.name": string,

	/**
	* process.title
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"process.title": string,

	/**
	* process.title.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: 
	*/
	"process.title.text": string,

	/**
	* process.uptime
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 1325
	*/
	"process.uptime": number,

	/**
	* process.working_directory
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: /home/alice
	*/
	"process.working_directory": string,

	/**
	* process.working_directory.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
	* Field Set: process
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: /home/alice
	*/
	"process.working_directory.text": string,

	/**
	* registry.data.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ZQBuAC0AVQBTAAAAZQBuAAAAAAA=
	*/
	"registry.data.bytes": string,

	/**
	* registry.data.strings
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: ["C:\rta\red_ttp\bin\myapp.exe"]
	*/
	"registry.data.strings": string[],

	/**
	* registry.data.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: REG_SZ
	*/
	"registry.data.type": string,

	/**
	* registry.hive
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: HKLM
	*/
	"registry.hive": string,

	/**
	* registry.key
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\winword.exe
	*/
	"registry.key": string,

	/**
	* registry.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\winword.exe\Debugger
	*/
	"registry.path": string,

	/**
	* registry.value
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
	* Field Set: registry
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Debugger
	*/
	"registry.value": string,

	/**
	* related.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
	* Field Set: related
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"related.hash": string[],

	/**
	* related.hosts
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
	* Field Set: related
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"related.hosts": string[],

	/**
	* related.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
	* Field Set: related
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: 
	*/
	"related.ip": string[],

	/**
	* related.user
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
	* Field Set: related
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"related.user": string[],

	/**
	* rule.author
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["Star-Lord"]
	*/
	"rule.author": string[],

	/**
	* rule.category
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Attempted Information Leak
	*/
	"rule.category": string,

	/**
	* rule.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Block requests to public DNS over HTTPS / TLS protocols
	*/
	"rule.description": string,

	/**
	* rule.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 101
	*/
	"rule.id": string,

	/**
	* rule.license
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Apache 2.0
	*/
	"rule.license": string,

	/**
	* rule.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: BLOCK_DNS_over_TLS
	*/
	"rule.name": string,

	/**
	* rule.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://en.wikipedia.org/wiki/DNS_over_TLS
	*/
	"rule.reference": string,

	/**
	* rule.ruleset
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Standard_Protocol_Filters
	*/
	"rule.ruleset": string,

	/**
	* rule.uuid
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1100110011
	*/
	"rule.uuid": string,

	/**
	* rule.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
	* Field Set: rule
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1.1
	*/
	"rule.version": string,

	/**
	* server.address
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.address": string,

	/**
	* server.as.number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 15169
	*/
	"server.as.number": number,

	/**
	* server.as.organization.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Google LLC
	*/
	"server.as.organization.name": string,

	/**
	* server.as.organization.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Google LLC
	*/
	"server.as.organization.name.text": string,

	/**
	* server.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 184
	*/
	"server.bytes": number,

	/**
	* server.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.domain": string,

	/**
	* server.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"server.geo.city_name": string,

	/**
	* server.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"server.geo.continent_name": string,

	/**
	* server.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"server.geo.country_iso_code": string,

	/**
	* server.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"server.geo.country_name": string,

	/**
	* server.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"server.geo.location": GeoPoint,

	/**
	* server.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"server.geo.name": string,

	/**
	* server.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"server.geo.region_iso_code": string,

	/**
	* server.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"server.geo.region_name": string,

	/**
	* server.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"server.ip": string,

	/**
	* server.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.mac": string,

	/**
	* server.nat.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: 
	*/
	"server.nat.ip": string,

	/**
	* server.nat.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"server.nat.port": number,

	/**
	* server.packets
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 12
	*/
	"server.packets": number,

	/**
	* server.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 
	*/
	"server.port": number,

	/**
	* server.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"server.registered_domain": string,

	/**
	* server.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: east
	*/
	"server.subdomain": string,

	/**
	* server.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"server.top_level_domain": string,

	/**
	* server.user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.domain": string,

	/**
	* server.user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.email": string,

	/**
	* server.user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"server.user.full_name": string,

	/**
	* server.user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"server.user.full_name.text": string,

	/**
	* server.user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.group.domain": string,

	/**
	* server.user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.group.id": string,

	/**
	* server.user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.group.name": string,

	/**
	* server.user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.hash": string,

	/**
	* server.user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"server.user.id": string,

	/**
	* server.user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"server.user.name": string,

	/**
	* server.user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"server.user.name.text": string,

	/**
	* server.user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
	* Field Set: server
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"server.user.roles": string[],

	/**
	* service.ephemeral_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 8a4f500f
	*/
	"service.ephemeral_id": string,

	/**
	* service.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: d37e5ebfe0ae6c4972dbe9f0174a1637bb8247f6
	*/
	"service.id": string,

	/**
	* service.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: elasticsearch-metrics
	*/
	"service.name": string,

	/**
	* service.node.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: instance-0000000016
	*/
	"service.node.name": string,

	/**
	* service.state
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"service.state": string,

	/**
	* service.type
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: elasticsearch
	*/
	"service.type": string,

	/**
	* service.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
	* Field Set: service
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 3.2.4
	*/
	"service.version": string,

	/**
	* source.address
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.address": string,

	/**
	* source.as.number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 15169
	*/
	"source.as.number": number,

	/**
	* source.as.organization.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Google LLC
	*/
	"source.as.organization.name": string,

	/**
	* source.as.organization.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Google LLC
	*/
	"source.as.organization.name.text": string,

	/**
	* source.bytes
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 184
	*/
	"source.bytes": number,

	/**
	* source.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.domain": string,

	/**
	* source.geo.city_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Montreal
	*/
	"source.geo.city_name": string,

	/**
	* source.geo.continent_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: North America
	*/
	"source.geo.continent_name": string,

	/**
	* source.geo.country_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA
	*/
	"source.geo.country_iso_code": string,

	/**
	* source.geo.country_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Canada
	*/
	"source.geo.country_name": string,

	/**
	* source.geo.location
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: geo_point
	* Example: { "lon": -73.614830, "lat": 45.505918 }
	*/
	"source.geo.location": GeoPoint,

	/**
	* source.geo.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: boston-dc
	*/
	"source.geo.name": string,

	/**
	* source.geo.region_iso_code
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: CA-QC
	*/
	"source.geo.region_iso_code": string,

	/**
	* source.geo.region_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: Quebec
	*/
	"source.geo.region_name": string,

	/**
	* source.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: ip
	* Example: 
	*/
	"source.ip": string,

	/**
	* source.mac
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.mac": string,

	/**
	* source.nat.ip
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: ip
	* Example: 
	*/
	"source.nat.ip": string,

	/**
	* source.nat.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 
	*/
	"source.nat.port": number,

	/**
	* source.packets
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 12
	*/
	"source.packets": number,

	/**
	* source.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: long
	* Example: 
	*/
	"source.port": number,

	/**
	* source.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"source.registered_domain": string,

	/**
	* source.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: east
	*/
	"source.subdomain": string,

	/**
	* source.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"source.top_level_domain": string,

	/**
	* source.user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.domain": string,

	/**
	* source.user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.email": string,

	/**
	* source.user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"source.user.full_name": string,

	/**
	* source.user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"source.user.full_name.text": string,

	/**
	* source.user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.group.domain": string,

	/**
	* source.user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.group.id": string,

	/**
	* source.user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.group.name": string,

	/**
	* source.user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.hash": string,

	/**
	* source.user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"source.user.id": string,

	/**
	* source.user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"source.user.name": string,

	/**
	* source.user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"source.user.name.text": string,

	/**
	* source.user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
	* Field Set: source
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"source.user.roles": string[],

	/**
	* span.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-span.html
	* Field Set: span
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 3ff9a8981b7ccd5a
	*/
	"span.id": string,

	/**
	* tags
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: ["production", "env2"]
	*/
	"tags": string[],

	/**
	* threat.framework
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MITRE ATT&CK
	*/
	"threat.framework": string,

	/**
	* threat.tactic.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: TA0002
	*/
	"threat.tactic.id": string[],

	/**
	* threat.tactic.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Execution
	*/
	"threat.tactic.name": string[],

	/**
	* threat.tactic.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://attack.mitre.org/tactics/TA0002/
	*/
	"threat.tactic.reference": string[],

	/**
	* threat.technique.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: T1059
	*/
	"threat.technique.id": string[],

	/**
	* threat.technique.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Command and Scripting Interpreter
	*/
	"threat.technique.name": string[],

	/**
	* threat.technique.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Command and Scripting Interpreter
	*/
	"threat.technique.name.text": string,

	/**
	* threat.technique.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://attack.mitre.org/techniques/T1059/
	*/
	"threat.technique.reference": string[],

	/**
	* threat.technique.subtechnique.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: T1059.001
	*/
	"threat.technique.subtechnique.id": string[],

	/**
	* threat.technique.subtechnique.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: PowerShell
	*/
	"threat.technique.subtechnique.name": string[],

	/**
	* threat.technique.subtechnique.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: PowerShell
	*/
	"threat.technique.subtechnique.name.text": string,

	/**
	* threat.technique.subtechnique.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
	* Field Set: threat
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://attack.mitre.org/techniques/T1059/001/
	*/
	"threat.technique.subtechnique.reference": string[],

	/**
	* tls.cipher
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
	*/
	"tls.cipher": string,

	/**
	* tls.client.certificate
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MII...
	*/
	"tls.client.certificate": string,

	/**
	* tls.client.certificate_chain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["MII...", "MII..."]
	*/
	"tls.client.certificate_chain": string[],

	/**
	* tls.client.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0F76C7F2C55BFD7D8E8B8F4BFBF0C9EC
	*/
	"tls.client.hash.md5": string,

	/**
	* tls.client.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 9E393D93138888D288266C2D915214D1D1CCEB2A
	*/
	"tls.client.hash.sha1": string,

	/**
	* tls.client.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0687F666A054EF17A08E2F2162EAB4CBC0D265E1D7875BE74BF3C712CA92DAF0
	*/
	"tls.client.hash.sha256": string,

	/**
	* tls.client.issuer
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CN=Example Root CA, OU=Infrastructure Team, DC=example, DC=com
	*/
	"tls.client.issuer": string,

	/**
	* tls.client.ja3
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: d4e5b18d6b55c71272893221c96ba240
	*/
	"tls.client.ja3": string,

	/**
	* tls.client.not_after
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2021-01-01T00:00:00.000Z
	*/
	"tls.client.not_after": Date,

	/**
	* tls.client.not_before
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 1970-01-01T00:00:00.000Z
	*/
	"tls.client.not_before": Date,

	/**
	* tls.client.server_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.elastic.co
	*/
	"tls.client.server_name": string,

	/**
	* tls.client.subject
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CN=myclient, OU=Documentation Team, DC=example, DC=com
	*/
	"tls.client.subject": string,

	/**
	* tls.client.supported_ciphers
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384", "..."]
	*/
	"tls.client.supported_ciphers": string[],

	/**
	* tls.client.x509.alternative_names
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: *.elastic.co
	*/
	"tls.client.x509.alternative_names": string[],

	/**
	* tls.client.x509.issuer.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example SHA2 High Assurance Server CA
	*/
	"tls.client.x509.issuer.common_name": string[],

	/**
	* tls.client.x509.issuer.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"tls.client.x509.issuer.country": string[],

	/**
	* tls.client.x509.issuer.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
	*/
	"tls.client.x509.issuer.distinguished_name": string,

	/**
	* tls.client.x509.issuer.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mountain View
	*/
	"tls.client.x509.issuer.locality": string[],

	/**
	* tls.client.x509.issuer.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example Inc
	*/
	"tls.client.x509.issuer.organization": string[],

	/**
	* tls.client.x509.issuer.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.example.com
	*/
	"tls.client.x509.issuer.organizational_unit": string[],

	/**
	* tls.client.x509.issuer.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"tls.client.x509.issuer.state_or_province": string[],

	/**
	* tls.client.x509.not_after
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2020-07-16 03:15:39+00:00
	*/
	"tls.client.x509.not_after": Date,

	/**
	* tls.client.x509.not_before
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2019-08-16 01:40:25+00:00
	*/
	"tls.client.x509.not_before": Date,

	/**
	* tls.client.x509.public_key_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: RSA
	*/
	"tls.client.x509.public_key_algorithm": string,

	/**
	* tls.client.x509.public_key_curve
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: nistp521
	*/
	"tls.client.x509.public_key_curve": string,

	/**
	* tls.client.x509.public_key_exponent
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: false
	* Level: extended
	* Elasticsearch type: long
	* Example: 65537
	*/
	"tls.client.x509.public_key_exponent": number,

	/**
	* tls.client.x509.public_key_size
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 2048
	*/
	"tls.client.x509.public_key_size": number,

	/**
	* tls.client.x509.serial_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 55FBB9C7DEBF09809D12CCAA
	*/
	"tls.client.x509.serial_number": string,

	/**
	* tls.client.x509.signature_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: SHA256-RSA
	*/
	"tls.client.x509.signature_algorithm": string,

	/**
	* tls.client.x509.subject.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: shared.global.example.net
	*/
	"tls.client.x509.subject.common_name": string[],

	/**
	* tls.client.x509.subject.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"tls.client.x509.subject.country": string[],

	/**
	* tls.client.x509.subject.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
	*/
	"tls.client.x509.subject.distinguished_name": string,

	/**
	* tls.client.x509.subject.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: San Francisco
	*/
	"tls.client.x509.subject.locality": string[],

	/**
	* tls.client.x509.subject.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example, Inc.
	*/
	"tls.client.x509.subject.organization": string[],

	/**
	* tls.client.x509.subject.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"tls.client.x509.subject.organizational_unit": string[],

	/**
	* tls.client.x509.subject.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"tls.client.x509.subject.state_or_province": string[],

	/**
	* tls.client.x509.version_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 3
	*/
	"tls.client.x509.version_number": string,

	/**
	* tls.curve
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: secp256r1
	*/
	"tls.curve": string,

	/**
	* tls.established
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: 
	*/
	"tls.established": boolean,

	/**
	* tls.next_protocol
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: http/1.1
	*/
	"tls.next_protocol": string,

	/**
	* tls.resumed
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: boolean
	* Example: 
	*/
	"tls.resumed": boolean,

	/**
	* tls.server.certificate
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: MII...
	*/
	"tls.server.certificate": string,

	/**
	* tls.server.certificate_chain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["MII...", "MII..."]
	*/
	"tls.server.certificate_chain": string[],

	/**
	* tls.server.hash.md5
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0F76C7F2C55BFD7D8E8B8F4BFBF0C9EC
	*/
	"tls.server.hash.md5": string,

	/**
	* tls.server.hash.sha1
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 9E393D93138888D288266C2D915214D1D1CCEB2A
	*/
	"tls.server.hash.sha1": string,

	/**
	* tls.server.hash.sha256
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 0687F666A054EF17A08E2F2162EAB4CBC0D265E1D7875BE74BF3C712CA92DAF0
	*/
	"tls.server.hash.sha256": string,

	/**
	* tls.server.issuer
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CN=Example Root CA, OU=Infrastructure Team, DC=example, DC=com
	*/
	"tls.server.issuer": string,

	/**
	* tls.server.ja3s
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 394441ab65754e2207b1e1b457b3641d
	*/
	"tls.server.ja3s": string,

	/**
	* tls.server.not_after
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2021-01-01T00:00:00.000Z
	*/
	"tls.server.not_after": Date,

	/**
	* tls.server.not_before
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 1970-01-01T00:00:00.000Z
	*/
	"tls.server.not_before": Date,

	/**
	* tls.server.subject
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CN=www.example.com, OU=Infrastructure Team, DC=example, DC=com
	*/
	"tls.server.subject": string,

	/**
	* tls.server.x509.alternative_names
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: *.elastic.co
	*/
	"tls.server.x509.alternative_names": string[],

	/**
	* tls.server.x509.issuer.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example SHA2 High Assurance Server CA
	*/
	"tls.server.x509.issuer.common_name": string[],

	/**
	* tls.server.x509.issuer.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"tls.server.x509.issuer.country": string[],

	/**
	* tls.server.x509.issuer.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
	*/
	"tls.server.x509.issuer.distinguished_name": string,

	/**
	* tls.server.x509.issuer.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mountain View
	*/
	"tls.server.x509.issuer.locality": string[],

	/**
	* tls.server.x509.issuer.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example Inc
	*/
	"tls.server.x509.issuer.organization": string[],

	/**
	* tls.server.x509.issuer.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.example.com
	*/
	"tls.server.x509.issuer.organizational_unit": string[],

	/**
	* tls.server.x509.issuer.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"tls.server.x509.issuer.state_or_province": string[],

	/**
	* tls.server.x509.not_after
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2020-07-16 03:15:39+00:00
	*/
	"tls.server.x509.not_after": Date,

	/**
	* tls.server.x509.not_before
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: date
	* Example: 2019-08-16 01:40:25+00:00
	*/
	"tls.server.x509.not_before": Date,

	/**
	* tls.server.x509.public_key_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: RSA
	*/
	"tls.server.x509.public_key_algorithm": string,

	/**
	* tls.server.x509.public_key_curve
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: nistp521
	*/
	"tls.server.x509.public_key_curve": string,

	/**
	* tls.server.x509.public_key_exponent
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: false
	* Level: extended
	* Elasticsearch type: long
	* Example: 65537
	*/
	"tls.server.x509.public_key_exponent": number,

	/**
	* tls.server.x509.public_key_size
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 2048
	*/
	"tls.server.x509.public_key_size": number,

	/**
	* tls.server.x509.serial_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 55FBB9C7DEBF09809D12CCAA
	*/
	"tls.server.x509.serial_number": string,

	/**
	* tls.server.x509.signature_algorithm
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: SHA256-RSA
	*/
	"tls.server.x509.signature_algorithm": string,

	/**
	* tls.server.x509.subject.common_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: shared.global.example.net
	*/
	"tls.server.x509.subject.common_name": string[],

	/**
	* tls.server.x509.subject.country
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: US
	*/
	"tls.server.x509.subject.country": string[],

	/**
	* tls.server.x509.subject.distinguished_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
	*/
	"tls.server.x509.subject.distinguished_name": string,

	/**
	* tls.server.x509.subject.locality
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: San Francisco
	*/
	"tls.server.x509.subject.locality": string[],

	/**
	* tls.server.x509.subject.organization
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Example, Inc.
	*/
	"tls.server.x509.subject.organization": string[],

	/**
	* tls.server.x509.subject.organizational_unit
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"tls.server.x509.subject.organizational_unit": string[],

	/**
	* tls.server.x509.subject.state_or_province
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: California
	*/
	"tls.server.x509.subject.state_or_province": string[],

	/**
	* tls.server.x509.version_number
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 3
	*/
	"tls.server.x509.version_number": string,

	/**
	* tls.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 1.2
	*/
	"tls.version": string,

	/**
	* tls.version_protocol
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
	* Field Set: tls
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: tls
	*/
	"tls.version_protocol": string,

	/**
	* trace.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-trace.html
	* Field Set: trace
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 4bf92f3577b34da6a3ce929d0e0e4736
	*/
	"trace.id": string,

	/**
	* transaction.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-transaction.html
	* Field Set: transaction
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 00f067aa0ba902b7
	*/
	"transaction.id": string,

	/**
	* url.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: www.elastic.co
	*/
	"url.domain": string,

	/**
	* url.extension
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: png
	*/
	"url.extension": string,

	/**
	* url.fragment
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"url.fragment": string,

	/**
	* url.full
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://www.elastic.co:443/search?q=elasticsearch#top
	*/
	"url.full": string,

	/**
	* url.full.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: https://www.elastic.co:443/search?q=elasticsearch#top
	*/
	"url.full.text": string,

	/**
	* url.original
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://www.elastic.co:443/search?q=elasticsearch#top or /search?q=elasticsearch
	*/
	"url.original": string,

	/**
	* url.original.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: https://www.elastic.co:443/search?q=elasticsearch#top or /search?q=elasticsearch
	*/
	"url.original.text": string,

	/**
	* url.password
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"url.password": string,

	/**
	* url.path
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"url.path": string,

	/**
	* url.port
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: long
	* Example: 443
	*/
	"url.port": number,

	/**
	* url.query
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"url.query": string,

	/**
	* url.registered_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: example.com
	*/
	"url.registered_domain": string,

	/**
	* url.scheme
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https
	*/
	"url.scheme": string,

	/**
	* url.subdomain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: east
	*/
	"url.subdomain": string,

	/**
	* url.top_level_domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: co.uk
	*/
	"url.top_level_domain": string,

	/**
	* url.username
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
	* Field Set: url
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"url.username": string,

	/**
	* user.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.domain": string,

	/**
	* user.email
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.email": string,

	/**
	* user.full_name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Albert Einstein
	*/
	"user.full_name": string,

	/**
	* user.full_name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Albert Einstein
	*/
	"user.full_name.text": string,

	/**
	* user.group.domain
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.group.domain": string,

	/**
	* user.group.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.group.id": string,

	/**
	* user.group.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.group.name": string,

	/**
	* user.hash
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.hash": string,

	/**
	* user.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: 
	*/
	"user.id": string,

	/**
	* user.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: albert
	*/
	"user.name": string,

	/**
	* user.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: albert
	*/
	"user.name.text": string,

	/**
	* user.roles
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
	* Field Set: user
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["kibana_admin", "reporting_user"]
	*/
	"user.roles": string[],

	/**
	* user_agent.device.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: iPhone
	*/
	"user_agent.device.name": string,

	/**
	* user_agent.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Safari
	*/
	"user_agent.name": string,

	/**
	* user_agent.original
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
	*/
	"user_agent.original": string,

	/**
	* user_agent.original.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
	*/
	"user_agent.original.text": string,

	/**
	* user_agent.os.family
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: debian
	*/
	"user_agent.os.family": string,

	/**
	* user_agent.os.full
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS Mojave
	*/
	"user_agent.os.full": string,

	/**
	* user_agent.os.full.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS Mojave
	*/
	"user_agent.os.full.text": string,

	/**
	* user_agent.os.kernel
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 4.4.0-112-generic
	*/
	"user_agent.os.kernel": string,

	/**
	* user_agent.os.name
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Mac OS X
	*/
	"user_agent.os.name": string,

	/**
	* user_agent.os.name.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: Mac OS X
	*/
	"user_agent.os.name.text": string,

	/**
	* user_agent.os.platform
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: darwin
	*/
	"user_agent.os.platform": string,

	/**
	* user_agent.os.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 10.14.1
	*/
	"user_agent.os.version": string,

	/**
	* user_agent.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
	* Field Set: user_agent
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 12
	*/
	"user_agent.version": string,

	/**
	* vulnerability.category
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: ["Firewall"]
	*/
	"vulnerability.category": string[],

	/**
	* vulnerability.classification
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CVSS
	*/
	"vulnerability.classification": string,

	/**
	* vulnerability.description
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: In macOS before 2.12.6, there is a vulnerability in the RPC...
	*/
	"vulnerability.description": string,

	/**
	* vulnerability.description.text
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: text
	* Example: In macOS before 2.12.6, there is a vulnerability in the RPC...
	*/
	"vulnerability.description.text": string,

	/**
	* vulnerability.enumeration
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CVE
	*/
	"vulnerability.enumeration": string,

	/**
	* vulnerability.id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: CVE-2019-00001
	*/
	"vulnerability.id": string,

	/**
	* vulnerability.reference
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-6111
	*/
	"vulnerability.reference": string,

	/**
	* vulnerability.report_id
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 20191018.0001
	*/
	"vulnerability.report_id": string,

	/**
	* vulnerability.scanner.vendor
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Tenable
	*/
	"vulnerability.scanner.vendor": string,

	/**
	* vulnerability.score.base
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: float
	* Example: 5.5
	*/
	"vulnerability.score.base": number,

	/**
	* vulnerability.score.environmental
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: float
	* Example: 5.5
	*/
	"vulnerability.score.environmental": number,

	/**
	* vulnerability.score.temporal
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: float
	* Example: 
	*/
	"vulnerability.score.temporal": number,

	/**
	* vulnerability.score.version
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: 2
	*/
	"vulnerability.score.version": string,

	/**
	* vulnerability.severity
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
	* Field Set: vulnerability
	* Is Indexed: true
	* Level: extended
	* Elasticsearch type: keyword
	* Example: Critical
	*/
	"vulnerability.severity": string,


}

export interface EcsCoreTree {
	/**
	* @timestamp
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:34.853Z
	*/
	"@timestamp": Date,

	agent: {
		build: {
			/**
			* agent.build.original
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
			* Field Set: agent
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: metricbeat version 7.6.0 (amd64), libbeat 7.6.0 [6a23e8f8f30f5001ba344e4e54d8d9cb82cb107c built 2020-02-05 23:10:10 +0000 UTC]
			*/
			"original": string,

		}
		/**
		* agent.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
		* Field Set: agent
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 8a4f500d
		*/
		"id": string,

		/**
		* agent.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
		* Field Set: agent
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: foo
		*/
		"name": string,

		/**
		* agent.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
		* Field Set: agent
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: filebeat
		*/
		"type": string,

		/**
		* agent.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
		* Field Set: agent
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 6.0.0-rc2
		*/
		"version": string,

	}
	client: {
		/**
		* client.bytes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 184
		*/
		"bytes": number,

		/**
		* client.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		geo: {
			/**
			* client.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* client.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* client.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* client.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* client.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* client.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* client.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* client.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string,

		/**
		* client.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string,

		/**
		* client.packets
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 12
		*/
		"packets": number,

		/**
		* client.port
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 
		*/
		"port": number,

		user: {
			/**
			* client.user.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* client.user.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: albert
			*/
			"name": string,

		}
	}
	container: {
		/**
		* container.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
		* Field Set: container
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

	}
	destination: {
		/**
		* destination.bytes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 184
		*/
		"bytes": number,

		/**
		* destination.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		geo: {
			/**
			* destination.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* destination.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* destination.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* destination.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* destination.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* destination.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* destination.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* destination.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string,

		/**
		* destination.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string,

		/**
		* destination.packets
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 12
		*/
		"packets": number,

		/**
		* destination.port
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 
		*/
		"port": number,

		user: {
			/**
			* destination.user.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* destination.user.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: albert
			*/
			"name": string,

		}
	}
	dll: {
		code_signature: {
			/**
			* dll.code_signature.exists
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: boolean
			* Example: true
			*/
			"exists": boolean,

			/**
			* dll.code_signature.subject_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"subject_name": string,

		}
		/**
		* dll.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
		* Field Set: dll
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: kernel32.dll
		*/
		"name": string,

	}
	ecs: {
		/**
		* ecs.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-ecs.html
		* Field Set: ecs
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 1.0.0
		*/
		"version": string,

	}
	error: {
		/**
		* error.code
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
		* Field Set: error
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"code": string,

		/**
		* error.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
		* Field Set: error
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

		/**
		* error.message
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
		* Field Set: error
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: text
		* Example: 
		*/
		"message": string,

	}
	event: {
		/**
		* event.action
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: user-password-change
		*/
		"action": string,

		/**
		* event.category
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: authentication
		*/
		"category": string[],

		/**
		* event.created
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: date
		* Example: 2016-05-23T08:05:34.857Z
		*/
		"created": Date,

		/**
		* event.dataset
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: apache.access
		*/
		"dataset": string,

		/**
		* event.duration
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 
		*/
		"duration": number,

		/**
		* event.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 8a4f500d
		*/
		"id": string,

		/**
		* event.ingested
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: date
		* Example: 2016-05-23T08:05:35.101Z
		*/
		"ingested": Date,

		/**
		* event.kind
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: alert
		*/
		"kind": string,

		/**
		* event.module
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: apache
		*/
		"module": string,

		/**
		* event.original
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: false
		* Level: core
		* Elasticsearch type: keyword
		* Example: Sep 19 08:26:10 host CEF:0&#124;Security&#124; threatmanager&#124;1.0&#124;100&#124; worm successfully stopped&#124;10&#124;src=10.0.0.1 dst=2.1.2.2spt=1232
		*/
		"original": string,

		/**
		* event.outcome
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: success
		*/
		"outcome": string,

		/**
		* event.risk_score
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: float
		* Example: 
		*/
		"risk_score": number,

		/**
		* event.severity
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 7
		*/
		"severity": number,

		/**
		* event.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"type": string[],

	}
	file: {
		code_signature: {
			/**
			* file.code_signature.exists
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: boolean
			* Example: true
			*/
			"exists": boolean,

			/**
			* file.code_signature.subject_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"subject_name": string,

		}
	}
	host: {
		/**
		* host.architecture
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: x86_64
		*/
		"architecture": string,

		geo: {
			/**
			* host.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* host.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* host.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* host.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* host.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* host.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* host.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* host.hostname
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"hostname": string,

		/**
		* host.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

		/**
		* host.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string[],

		/**
		* host.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string[],

		/**
		* host.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"name": string,

		/**
		* host.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"type": string,

		user: {
			/**
			* host.user.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* host.user.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: albert
			*/
			"name": string,

		}
	}
	/**
	* labels
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: object
	* Example: {"application": "foo-bar", "env": "production"}
	*/
	"labels": object,

	log: {
		/**
		* log.level
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
		* Field Set: log
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: error
		*/
		"level": string,

		/**
		* log.logger
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
		* Field Set: log
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: org.elasticsearch.bootstrap.Bootstrap
		*/
		"logger": string,

		/**
		* log.original
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
		* Field Set: log
		* Is Indexed: false
		* Level: core
		* Elasticsearch type: keyword
		* Example: Sep 19 08:26:10 localhost My log
		*/
		"original": string,

	}
	/**
	* message
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: Hello World
	*/
	"message": string,

	network: {
		/**
		* network.bytes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 368
		*/
		"bytes": number,

		/**
		* network.direction
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: inbound
		*/
		"direction": string,

		/**
		* network.forwarded_ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 192.1.1.2
		*/
		"forwarded_ip": string,

		/**
		* network.packets
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 24
		*/
		"packets": number,

		/**
		* network.protocol
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: http
		*/
		"protocol": string,

		/**
		* network.transport
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: tcp
		*/
		"transport": string,

		/**
		* network.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: ipv4
		*/
		"type": string,

	}
	observer: {
		geo: {
			/**
			* observer.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* observer.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* observer.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* observer.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* observer.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* observer.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* observer.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* observer.hostname
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"hostname": string,

		/**
		* observer.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string[],

		/**
		* observer.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string[],

		/**
		* observer.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: firewall
		*/
		"type": string,

		/**
		* observer.vendor
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: Symantec
		*/
		"vendor": string,

		/**
		* observer.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"version": string,

	}
	process: {
		code_signature: {
			/**
			* process.code_signature.exists
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: boolean
			* Example: true
			*/
			"exists": boolean,

			/**
			* process.code_signature.subject_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"subject_name": string,

		}
		parent: {
			code_signature: {
				/**
				* process.parent.code_signature.exists
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: core
				* Elasticsearch type: boolean
				* Example: true
				*/
				"exists": boolean,

				/**
				* process.parent.code_signature.subject_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: core
				* Elasticsearch type: keyword
				* Example: Microsoft Corporation
				*/
				"subject_name": string,

			}
			/**
			* process.parent.pid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: long
			* Example: 4242
			*/
			"pid": number,

		}
		/**
		* process.pid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 4242
		*/
		"pid": number,

	}
	registry: {
		data: {
			/**
			* registry.data.strings
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
			* Field Set: registry
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: ["C:\rta\red_ttp\bin\myapp.exe"]
			*/
			"strings": string[],

			/**
			* registry.data.type
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
			* Field Set: registry
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: REG_SZ
			*/
			"type": string,

		}
		/**
		* registry.hive
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
		* Field Set: registry
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: HKLM
		*/
		"hive": string,

		/**
		* registry.key
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
		* Field Set: registry
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\winword.exe
		*/
		"key": string,

		/**
		* registry.path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
		* Field Set: registry
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\winword.exe\Debugger
		*/
		"path": string,

		/**
		* registry.value
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
		* Field Set: registry
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: Debugger
		*/
		"value": string,

	}
	server: {
		/**
		* server.bytes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 184
		*/
		"bytes": number,

		/**
		* server.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		geo: {
			/**
			* server.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* server.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* server.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* server.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* server.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* server.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* server.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* server.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string,

		/**
		* server.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string,

		/**
		* server.packets
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 12
		*/
		"packets": number,

		/**
		* server.port
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 
		*/
		"port": number,

		user: {
			/**
			* server.user.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* server.user.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: albert
			*/
			"name": string,

		}
	}
	service: {
		/**
		* service.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: d37e5ebfe0ae6c4972dbe9f0174a1637bb8247f6
		*/
		"id": string,

		/**
		* service.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: elasticsearch-metrics
		*/
		"name": string,

		/**
		* service.state
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"state": string,

		/**
		* service.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: elasticsearch
		*/
		"type": string,

		/**
		* service.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 3.2.4
		*/
		"version": string,

	}
	source: {
		/**
		* source.bytes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 184
		*/
		"bytes": number,

		/**
		* source.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		geo: {
			/**
			* source.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* source.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* source.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* source.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* source.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* source.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* source.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* source.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string,

		/**
		* source.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string,

		/**
		* source.packets
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 12
		*/
		"packets": number,

		/**
		* source.port
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 
		*/
		"port": number,

		user: {
			/**
			* source.user.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* source.user.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: albert
			*/
			"name": string,

		}
	}
	/**
	* tags
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: ["production", "env2"]
	*/
	"tags": string[],

	user: {
		/**
		* user.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

		/**
		* user.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: albert
		*/
		"name": string,

	}

}

export interface EcsExtendedTree {
	agent: {
		/**
		* agent.ephemeral_id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
		* Field Set: agent
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 8a4f500f
		*/
		"ephemeral_id": string,

	}
	client: {
		/**
		* client.address
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"address": string,

		as: {
			/**
			* client.as.number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 15169
			*/
			"number": number,

			organization: {
				/**
				* client.as.organization.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
				* Field Set: client
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Google LLC
				*/
				"name": string,

			}
		}
		geo: {
			/**
			* client.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

		}
		nat: {
			/**
			* client.nat.ip
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: ip
			* Example: 
			*/
			"ip": string,

			/**
			* client.nat.port
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 
			*/
			"port": number,

		}
		/**
		* client.registered_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.com
		*/
		"registered_domain": string,

		/**
		* client.subdomain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: east
		*/
		"subdomain": string,

		/**
		* client.top_level_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: co.uk
		*/
		"top_level_domain": string,

		user: {
			/**
			* client.user.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* client.user.email
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"email": string,

			/**
			* client.user.full_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Albert Einstein
			*/
			"full_name": string,

			group: {
				/**
				* client.user.group.domain
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
				* Field Set: client
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"domain": string,

				/**
				* client.user.group.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
				* Field Set: client
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"id": string,

				/**
				* client.user.group.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
				* Field Set: client
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"name": string,

			}
			/**
			* client.user.hash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"hash": string,

			/**
			* client.user.roles
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["kibana_admin", "reporting_user"]
			*/
			"roles": string[],

		}
	}
	cloud: {
		account: {
			/**
			* cloud.account.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 666777888999
			*/
			"id": string,

			/**
			* cloud.account.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: elastic-dev
			*/
			"name": string,

		}
		/**
		* cloud.availability_zone
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
		* Field Set: cloud
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: us-east-1c
		*/
		"availability_zone": string,

		instance: {
			/**
			* cloud.instance.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: i-1234567890abcdef0
			*/
			"id": string,

			/**
			* cloud.instance.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"name": string,

		}
		machine: {
			/**
			* cloud.machine.type
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: t2.medium
			*/
			"type": string,

		}
		project: {
			/**
			* cloud.project.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: my-project
			*/
			"id": string,

			/**
			* cloud.project.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: my project
			*/
			"name": string,

		}
		/**
		* cloud.provider
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
		* Field Set: cloud
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: aws
		*/
		"provider": string,

		/**
		* cloud.region
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
		* Field Set: cloud
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: us-east-1
		*/
		"region": string,

	}
	container: {
		image: {
			/**
			* container.image.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
			* Field Set: container
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"name": string,

			/**
			* container.image.tag
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
			* Field Set: container
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"tag": string[],

		}
		/**
		* container.labels
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
		* Field Set: container
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"labels": object,

		/**
		* container.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
		* Field Set: container
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"name": string,

		/**
		* container.runtime
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
		* Field Set: container
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: docker
		*/
		"runtime": string,

	}
	destination: {
		/**
		* destination.address
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"address": string,

		as: {
			/**
			* destination.as.number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 15169
			*/
			"number": number,

			organization: {
				/**
				* destination.as.organization.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
				* Field Set: destination
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Google LLC
				*/
				"name": string,

			}
		}
		geo: {
			/**
			* destination.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

		}
		nat: {
			/**
			* destination.nat.ip
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: ip
			* Example: 
			*/
			"ip": string,

			/**
			* destination.nat.port
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 
			*/
			"port": number,

		}
		/**
		* destination.registered_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.com
		*/
		"registered_domain": string,

		/**
		* destination.subdomain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: east
		*/
		"subdomain": string,

		/**
		* destination.top_level_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: co.uk
		*/
		"top_level_domain": string,

		user: {
			/**
			* destination.user.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* destination.user.email
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"email": string,

			/**
			* destination.user.full_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Albert Einstein
			*/
			"full_name": string,

			group: {
				/**
				* destination.user.group.domain
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
				* Field Set: destination
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"domain": string,

				/**
				* destination.user.group.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
				* Field Set: destination
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"id": string,

				/**
				* destination.user.group.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
				* Field Set: destination
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"name": string,

			}
			/**
			* destination.user.hash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"hash": string,

			/**
			* destination.user.roles
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["kibana_admin", "reporting_user"]
			*/
			"roles": string[],

		}
	}
	dll: {
		code_signature: {
			/**
			* dll.code_signature.status
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ERROR_UNTRUSTED_ROOT
			*/
			"status": string,

			/**
			* dll.code_signature.trusted
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"trusted": boolean,

			/**
			* dll.code_signature.valid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"valid": boolean,

		}
		hash: {
			/**
			* dll.hash.md5
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"md5": string,

			/**
			* dll.hash.sha1
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha1": string,

			/**
			* dll.hash.sha256
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha256": string,

			/**
			* dll.hash.sha512
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha512": string,

		}
		/**
		* dll.path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
		* Field Set: dll
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: C:\Windows\System32\kernel32.dll
		*/
		"path": string,

		pe: {
			/**
			* dll.pe.architecture
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: x64
			*/
			"architecture": string,

			/**
			* dll.pe.company
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"company": string,

			/**
			* dll.pe.description
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Paint
			*/
			"description": string,

			/**
			* dll.pe.file_version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 6.3.9600.17415
			*/
			"file_version": string,

			/**
			* dll.pe.imphash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 0c6803c4e922103c4dca5963aad36ddf
			*/
			"imphash": string,

			/**
			* dll.pe.original_file_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: MSPAINT.EXE
			*/
			"original_file_name": string,

			/**
			* dll.pe.product
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft® Windows® Operating System
			*/
			"product": string,

		}
	}
	dns: {
		/**
		* dns.answers
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"answers": object[],

		/**
		* dns.header_flags
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["RD", "RA"]
		*/
		"header_flags": string[],

		/**
		* dns.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 62111
		*/
		"id": string,

		/**
		* dns.op_code
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: QUERY
		*/
		"op_code": string,

		question: {
			/**
			* dns.question.class
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: IN
			*/
			"class": string,

			/**
			* dns.question.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: www.example.com
			*/
			"name": string,

			/**
			* dns.question.registered_domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: example.com
			*/
			"registered_domain": string,

			/**
			* dns.question.subdomain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: www
			*/
			"subdomain": string,

			/**
			* dns.question.top_level_domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: co.uk
			*/
			"top_level_domain": string,

			/**
			* dns.question.type
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: AAAA
			*/
			"type": string,

		}
		/**
		* dns.resolved_ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: ip
		* Example: ["10.10.10.10", "10.10.10.11"]
		*/
		"resolved_ip": string[],

		/**
		* dns.response_code
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: NOERROR
		*/
		"response_code": string,

		/**
		* dns.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: answer
		*/
		"type": string,

	}
	error: {
		/**
		* error.stack_trace
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
		* Field Set: error
		* Is Indexed: false
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"stack_trace": string,

		/**
		* error.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
		* Field Set: error
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: java.lang.NullPointerException
		*/
		"type": string,

	}
	event: {
		/**
		* event.code
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 4648
		*/
		"code": string,

		/**
		* event.end
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"end": Date,

		/**
		* event.hash
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 123456789012345678901234567890ABCD
		*/
		"hash": string,

		/**
		* event.provider
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: kernel
		*/
		"provider": string,

		/**
		* event.reason
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Terminated an unexpected process
		*/
		"reason": string,

		/**
		* event.reference
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://system.example.com/event/#0001234
		*/
		"reference": string,

		/**
		* event.risk_score_norm
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: float
		* Example: 
		*/
		"risk_score_norm": number,

		/**
		* event.sequence
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 
		*/
		"sequence": number,

		/**
		* event.start
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"start": Date,

		/**
		* event.timezone
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"timezone": string,

		/**
		* event.url
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://mysystem.example.com/alert/5271dedb-f5b0-4218-87f0-4ac4870a38fe
		*/
		"url": string,

	}
	file: {
		/**
		* file.accessed
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"accessed": Date,

		/**
		* file.attributes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["readonly", "system"]
		*/
		"attributes": string[],

		code_signature: {
			/**
			* file.code_signature.status
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ERROR_UNTRUSTED_ROOT
			*/
			"status": string,

			/**
			* file.code_signature.trusted
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"trusted": boolean,

			/**
			* file.code_signature.valid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"valid": boolean,

		}
		/**
		* file.created
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"created": Date,

		/**
		* file.ctime
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"ctime": Date,

		/**
		* file.device
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: sda
		*/
		"device": string,

		/**
		* file.directory
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /home/alice
		*/
		"directory": string,

		/**
		* file.drive_letter
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: C
		*/
		"drive_letter": string,

		/**
		* file.extension
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: png
		*/
		"extension": string,

		/**
		* file.gid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1001
		*/
		"gid": string,

		/**
		* file.group
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: alice
		*/
		"group": string,

		hash: {
			/**
			* file.hash.md5
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"md5": string,

			/**
			* file.hash.sha1
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha1": string,

			/**
			* file.hash.sha256
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha256": string,

			/**
			* file.hash.sha512
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha512": string,

		}
		/**
		* file.inode
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 256383
		*/
		"inode": string,

		/**
		* file.mime_type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mime_type": string,

		/**
		* file.mode
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 640
		*/
		"mode": string,

		/**
		* file.mtime
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"mtime": Date,

		/**
		* file.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.png
		*/
		"name": string,

		/**
		* file.owner
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: alice
		*/
		"owner": string,

		/**
		* file.path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /home/alice/example.png
		*/
		"path": string,

		pe: {
			/**
			* file.pe.architecture
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: x64
			*/
			"architecture": string,

			/**
			* file.pe.company
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"company": string,

			/**
			* file.pe.description
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Paint
			*/
			"description": string,

			/**
			* file.pe.file_version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 6.3.9600.17415
			*/
			"file_version": string,

			/**
			* file.pe.imphash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 0c6803c4e922103c4dca5963aad36ddf
			*/
			"imphash": string,

			/**
			* file.pe.original_file_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: MSPAINT.EXE
			*/
			"original_file_name": string,

			/**
			* file.pe.product
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft® Windows® Operating System
			*/
			"product": string,

		}
		/**
		* file.size
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 16384
		*/
		"size": number,

		/**
		* file.target_path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"target_path": string,

		/**
		* file.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: file
		*/
		"type": string,

		/**
		* file.uid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1001
		*/
		"uid": string,

		x509: {
			/**
			* file.x509.alternative_names
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: *.elastic.co
			*/
			"alternative_names": string[],

			issuer: {
				/**
				* file.x509.issuer.common_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Example SHA2 High Assurance Server CA
				*/
				"common_name": string[],

				/**
				* file.x509.issuer.country
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: US
				*/
				"country": string[],

				/**
				* file.x509.issuer.distinguished_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
				*/
				"distinguished_name": string,

				/**
				* file.x509.issuer.locality
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Mountain View
				*/
				"locality": string[],

				/**
				* file.x509.issuer.organization
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Example Inc
				*/
				"organization": string[],

				/**
				* file.x509.issuer.organizational_unit
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: www.example.com
				*/
				"organizational_unit": string[],

				/**
				* file.x509.issuer.state_or_province
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: California
				*/
				"state_or_province": string[],

			}
			/**
			* file.x509.not_after
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 2020-07-16 03:15:39+00:00
			*/
			"not_after": Date,

			/**
			* file.x509.not_before
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 2019-08-16 01:40:25+00:00
			*/
			"not_before": Date,

			/**
			* file.x509.public_key_algorithm
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: RSA
			*/
			"public_key_algorithm": string,

			/**
			* file.x509.public_key_curve
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: nistp521
			*/
			"public_key_curve": string,

			/**
			* file.x509.public_key_exponent
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: false
			* Level: extended
			* Elasticsearch type: long
			* Example: 65537
			*/
			"public_key_exponent": number,

			/**
			* file.x509.public_key_size
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 2048
			*/
			"public_key_size": number,

			/**
			* file.x509.serial_number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 55FBB9C7DEBF09809D12CCAA
			*/
			"serial_number": string,

			/**
			* file.x509.signature_algorithm
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: SHA256-RSA
			*/
			"signature_algorithm": string,

			subject: {
				/**
				* file.x509.subject.common_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: shared.global.example.net
				*/
				"common_name": string[],

				/**
				* file.x509.subject.country
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: US
				*/
				"country": string[],

				/**
				* file.x509.subject.distinguished_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
				*/
				"distinguished_name": string,

				/**
				* file.x509.subject.locality
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: San Francisco
				*/
				"locality": string[],

				/**
				* file.x509.subject.organization
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Example, Inc.
				*/
				"organization": string[],

				/**
				* file.x509.subject.organizational_unit
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"organizational_unit": string[],

				/**
				* file.x509.subject.state_or_province
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: California
				*/
				"state_or_province": string[],

			}
			/**
			* file.x509.version_number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 3
			*/
			"version_number": string,

		}
	}
	group: {
		/**
		* group.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
		* Field Set: group
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		/**
		* group.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
		* Field Set: group
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

		/**
		* group.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
		* Field Set: group
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"name": string,

	}
	host: {
		/**
		* host.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: CONTOSO
		*/
		"domain": string,

		geo: {
			/**
			* host.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

		}
		os: {
			/**
			* host.os.family
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: debian
			*/
			"family": string,

			/**
			* host.os.full
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS Mojave
			*/
			"full": string,

			/**
			* host.os.kernel
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 4.4.0-112-generic
			*/
			"kernel": string,

			/**
			* host.os.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS X
			*/
			"name": string,

			/**
			* host.os.platform
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: darwin
			*/
			"platform": string,

			/**
			* host.os.version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 10.14.1
			*/
			"version": string,

		}
		/**
		* host.uptime
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 1325
		*/
		"uptime": number,

		user: {
			/**
			* host.user.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* host.user.email
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"email": string,

			/**
			* host.user.full_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Albert Einstein
			*/
			"full_name": string,

			group: {
				/**
				* host.user.group.domain
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
				* Field Set: host
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"domain": string,

				/**
				* host.user.group.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
				* Field Set: host
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"id": string,

				/**
				* host.user.group.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
				* Field Set: host
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"name": string,

			}
			/**
			* host.user.hash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"hash": string,

			/**
			* host.user.roles
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["kibana_admin", "reporting_user"]
			*/
			"roles": string[],

		}
	}
	http: {
		request: {
			body: {
				/**
				* http.request.body.bytes
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
				* Field Set: http
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: long
				* Example: 887
				*/
				"bytes": number,

				/**
				* http.request.body.content
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
				* Field Set: http
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Hello world
				*/
				"content": string,

			}
			/**
			* http.request.bytes
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 1437
			*/
			"bytes": number,

			/**
			* http.request.method
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: GET, POST, PUT, PoST
			*/
			"method": string,

			/**
			* http.request.mime_type
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: image/gif
			*/
			"mime_type": string,

			/**
			* http.request.referrer
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: https://blog.example.com/
			*/
			"referrer": string,

		}
		response: {
			body: {
				/**
				* http.response.body.bytes
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
				* Field Set: http
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: long
				* Example: 887
				*/
				"bytes": number,

				/**
				* http.response.body.content
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
				* Field Set: http
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Hello world
				*/
				"content": string,

			}
			/**
			* http.response.bytes
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 1437
			*/
			"bytes": number,

			/**
			* http.response.mime_type
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: image/gif
			*/
			"mime_type": string,

			/**
			* http.response.status_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 404
			*/
			"status_code": number,

		}
		/**
		* http.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
		* Field Set: http
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1.1
		*/
		"version": string,

	}
	log: {
		file: {
			/**
			* log.file.path
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
			* Field Set: log
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: /var/log/fun-times.log
			*/
			"path": string,

		}
		origin: {
			file: {
				/**
				* log.origin.file.line
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
				* Field Set: log
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: integer
				* Example: 42
				*/
				"line": number,

				/**
				* log.origin.file.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
				* Field Set: log
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Bootstrap.java
				*/
				"name": string,

			}
			/**
			* log.origin.function
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
			* Field Set: log
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: init
			*/
			"function": string,

		}
		/**
		* log.syslog
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
		* Field Set: log
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"syslog": object,

	}
	network: {
		/**
		* network.application
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: aim
		*/
		"application": string,

		/**
		* network.community_id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1:hO+sN4H+MG5MY/8hIrXPqc4ZQz0=
		*/
		"community_id": string,

		/**
		* network.iana_number
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 6
		*/
		"iana_number": string,

		/**
		* network.inner
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"inner": object,

		/**
		* network.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Guest Wifi
		*/
		"name": string,

		vlan: {
			/**
			* network.vlan.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
			* Field Set: network
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 10
			*/
			"id": string,

			/**
			* network.vlan.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
			* Field Set: network
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: outside
			*/
			"name": string,

		}
	}
	observer: {
		/**
		* observer.egress
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"egress": object,

		geo: {
			/**
			* observer.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

		}
		/**
		* observer.ingress
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"ingress": object,

		/**
		* observer.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1_proxySG
		*/
		"name": string,

		os: {
			/**
			* observer.os.family
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: debian
			*/
			"family": string,

			/**
			* observer.os.full
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS Mojave
			*/
			"full": string,

			/**
			* observer.os.kernel
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 4.4.0-112-generic
			*/
			"kernel": string,

			/**
			* observer.os.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS X
			*/
			"name": string,

			/**
			* observer.os.platform
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: darwin
			*/
			"platform": string,

			/**
			* observer.os.version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 10.14.1
			*/
			"version": string,

		}
		/**
		* observer.product
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: s200
		*/
		"product": string,

		/**
		* observer.serial_number
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"serial_number": string,

	}
	organization: {
		/**
		* organization.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-organization.html
		* Field Set: organization
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

		/**
		* organization.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-organization.html
		* Field Set: organization
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"name": string,

	}
	package: {
		/**
		* package.architecture
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: x86_64
		*/
		"architecture": string,

		/**
		* package.build_version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 36f4f7e89dd61b0988b12ee000b98966867710cd
		*/
		"build_version": string,

		/**
		* package.checksum
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 68b329da9893e34099c7d8ad5cb9c940
		*/
		"checksum": string,

		/**
		* package.description
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Open source programming language to build simple/reliable/efficient software.
		*/
		"description": string,

		/**
		* package.install_scope
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: global
		*/
		"install_scope": string,

		/**
		* package.installed
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"installed": Date,

		/**
		* package.license
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Apache License 2.0
		*/
		"license": string,

		/**
		* package.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: go
		*/
		"name": string,

		/**
		* package.path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /usr/local/Cellar/go/1.12.9/
		*/
		"path": string,

		/**
		* package.reference
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://golang.org
		*/
		"reference": string,

		/**
		* package.size
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 62231
		*/
		"size": number,

		/**
		* package.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: rpm
		*/
		"type": string,

		/**
		* package.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1.12.9
		*/
		"version": string,

	}
	process: {
		/**
		* process.args
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["/usr/bin/ssh", "-l", "user", "10.0.0.16"]
		*/
		"args": string[],

		/**
		* process.args_count
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 4
		*/
		"args_count": number,

		code_signature: {
			/**
			* process.code_signature.status
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ERROR_UNTRUSTED_ROOT
			*/
			"status": string,

			/**
			* process.code_signature.trusted
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"trusted": boolean,

			/**
			* process.code_signature.valid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"valid": boolean,

		}
		/**
		* process.command_line
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /usr/bin/ssh -l user 10.0.0.16
		*/
		"command_line": string,

		/**
		* process.entity_id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: c2c455d9f99375d
		*/
		"entity_id": string,

		/**
		* process.executable
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /usr/bin/ssh
		*/
		"executable": string,

		/**
		* process.exit_code
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 137
		*/
		"exit_code": number,

		hash: {
			/**
			* process.hash.md5
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"md5": string,

			/**
			* process.hash.sha1
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha1": string,

			/**
			* process.hash.sha256
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha256": string,

			/**
			* process.hash.sha512
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha512": string,

		}
		/**
		* process.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ssh
		*/
		"name": string,

		parent: {
			/**
			* process.parent.args
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["/usr/bin/ssh", "-l", "user", "10.0.0.16"]
			*/
			"args": string[],

			/**
			* process.parent.args_count
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 4
			*/
			"args_count": number,

			code_signature: {
				/**
				* process.parent.code_signature.status
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: ERROR_UNTRUSTED_ROOT
				*/
				"status": string,

				/**
				* process.parent.code_signature.trusted
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: boolean
				* Example: true
				*/
				"trusted": boolean,

				/**
				* process.parent.code_signature.valid
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: boolean
				* Example: true
				*/
				"valid": boolean,

			}
			/**
			* process.parent.command_line
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: /usr/bin/ssh -l user 10.0.0.16
			*/
			"command_line": string,

			/**
			* process.parent.entity_id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: c2c455d9f99375d
			*/
			"entity_id": string,

			/**
			* process.parent.executable
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: /usr/bin/ssh
			*/
			"executable": string,

			/**
			* process.parent.exit_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 137
			*/
			"exit_code": number,

			hash: {
				/**
				* process.parent.hash.md5
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"md5": string,

				/**
				* process.parent.hash.sha1
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"sha1": string,

				/**
				* process.parent.hash.sha256
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"sha256": string,

				/**
				* process.parent.hash.sha512
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"sha512": string,

			}
			/**
			* process.parent.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ssh
			*/
			"name": string,

			pe: {
				/**
				* process.parent.pe.architecture
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: x64
				*/
				"architecture": string,

				/**
				* process.parent.pe.company
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Microsoft Corporation
				*/
				"company": string,

				/**
				* process.parent.pe.description
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Paint
				*/
				"description": string,

				/**
				* process.parent.pe.file_version
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 6.3.9600.17415
				*/
				"file_version": string,

				/**
				* process.parent.pe.imphash
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 0c6803c4e922103c4dca5963aad36ddf
				*/
				"imphash": string,

				/**
				* process.parent.pe.original_file_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: MSPAINT.EXE
				*/
				"original_file_name": string,

				/**
				* process.parent.pe.product
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Microsoft® Windows® Operating System
				*/
				"product": string,

			}
			/**
			* process.parent.pgid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 
			*/
			"pgid": number,

			/**
			* process.parent.ppid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 4241
			*/
			"ppid": number,

			/**
			* process.parent.start
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 2016-05-23T08:05:34.853Z
			*/
			"start": Date,

			thread: {
				/**
				* process.parent.thread.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: long
				* Example: 4242
				*/
				"id": number,

				/**
				* process.parent.thread.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: thread-0
				*/
				"name": string,

			}
			/**
			* process.parent.title
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"title": string,

			/**
			* process.parent.uptime
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 1325
			*/
			"uptime": number,

			/**
			* process.parent.working_directory
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: /home/alice
			*/
			"working_directory": string,

		}
		pe: {
			/**
			* process.pe.architecture
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: x64
			*/
			"architecture": string,

			/**
			* process.pe.company
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"company": string,

			/**
			* process.pe.description
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Paint
			*/
			"description": string,

			/**
			* process.pe.file_version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 6.3.9600.17415
			*/
			"file_version": string,

			/**
			* process.pe.imphash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 0c6803c4e922103c4dca5963aad36ddf
			*/
			"imphash": string,

			/**
			* process.pe.original_file_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: MSPAINT.EXE
			*/
			"original_file_name": string,

			/**
			* process.pe.product
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft® Windows® Operating System
			*/
			"product": string,

		}
		/**
		* process.pgid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 
		*/
		"pgid": number,

		/**
		* process.ppid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 4241
		*/
		"ppid": number,

		/**
		* process.start
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 2016-05-23T08:05:34.853Z
		*/
		"start": Date,

		thread: {
			/**
			* process.thread.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 4242
			*/
			"id": number,

			/**
			* process.thread.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: thread-0
			*/
			"name": string,

		}
		/**
		* process.title
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"title": string,

		/**
		* process.uptime
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 1325
		*/
		"uptime": number,

		/**
		* process.working_directory
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /home/alice
		*/
		"working_directory": string,

	}
	registry: {
		data: {
			/**
			* registry.data.bytes
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
			* Field Set: registry
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ZQBuAC0AVQBTAAAAZQBuAAAAAAA=
			*/
			"bytes": string,

		}
	}
	related: {
		/**
		* related.hash
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
		* Field Set: related
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"hash": string[],

		/**
		* related.hosts
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
		* Field Set: related
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"hosts": string[],

		/**
		* related.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
		* Field Set: related
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string[],

		/**
		* related.user
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
		* Field Set: related
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"user": string[],

	}
	rule: {
		/**
		* rule.author
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["Star-Lord"]
		*/
		"author": string[],

		/**
		* rule.category
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Attempted Information Leak
		*/
		"category": string,

		/**
		* rule.description
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Block requests to public DNS over HTTPS / TLS protocols
		*/
		"description": string,

		/**
		* rule.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 101
		*/
		"id": string,

		/**
		* rule.license
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Apache 2.0
		*/
		"license": string,

		/**
		* rule.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: BLOCK_DNS_over_TLS
		*/
		"name": string,

		/**
		* rule.reference
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://en.wikipedia.org/wiki/DNS_over_TLS
		*/
		"reference": string,

		/**
		* rule.ruleset
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Standard_Protocol_Filters
		*/
		"ruleset": string,

		/**
		* rule.uuid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1100110011
		*/
		"uuid": string,

		/**
		* rule.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1.1
		*/
		"version": string,

	}
	server: {
		/**
		* server.address
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"address": string,

		as: {
			/**
			* server.as.number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 15169
			*/
			"number": number,

			organization: {
				/**
				* server.as.organization.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
				* Field Set: server
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Google LLC
				*/
				"name": string,

			}
		}
		geo: {
			/**
			* server.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

		}
		nat: {
			/**
			* server.nat.ip
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: ip
			* Example: 
			*/
			"ip": string,

			/**
			* server.nat.port
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 
			*/
			"port": number,

		}
		/**
		* server.registered_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.com
		*/
		"registered_domain": string,

		/**
		* server.subdomain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: east
		*/
		"subdomain": string,

		/**
		* server.top_level_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: co.uk
		*/
		"top_level_domain": string,

		user: {
			/**
			* server.user.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* server.user.email
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"email": string,

			/**
			* server.user.full_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Albert Einstein
			*/
			"full_name": string,

			group: {
				/**
				* server.user.group.domain
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
				* Field Set: server
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"domain": string,

				/**
				* server.user.group.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
				* Field Set: server
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"id": string,

				/**
				* server.user.group.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
				* Field Set: server
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"name": string,

			}
			/**
			* server.user.hash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"hash": string,

			/**
			* server.user.roles
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["kibana_admin", "reporting_user"]
			*/
			"roles": string[],

		}
	}
	service: {
		/**
		* service.ephemeral_id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 8a4f500f
		*/
		"ephemeral_id": string,

		node: {
			/**
			* service.node.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
			* Field Set: service
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: instance-0000000016
			*/
			"name": string,

		}
	}
	source: {
		/**
		* source.address
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"address": string,

		as: {
			/**
			* source.as.number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 15169
			*/
			"number": number,

			organization: {
				/**
				* source.as.organization.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
				* Field Set: source
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Google LLC
				*/
				"name": string,

			}
		}
		geo: {
			/**
			* source.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

		}
		nat: {
			/**
			* source.nat.ip
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: ip
			* Example: 
			*/
			"ip": string,

			/**
			* source.nat.port
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 
			*/
			"port": number,

		}
		/**
		* source.registered_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.com
		*/
		"registered_domain": string,

		/**
		* source.subdomain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: east
		*/
		"subdomain": string,

		/**
		* source.top_level_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: co.uk
		*/
		"top_level_domain": string,

		user: {
			/**
			* source.user.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* source.user.email
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"email": string,

			/**
			* source.user.full_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Albert Einstein
			*/
			"full_name": string,

			group: {
				/**
				* source.user.group.domain
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
				* Field Set: source
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"domain": string,

				/**
				* source.user.group.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
				* Field Set: source
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"id": string,

				/**
				* source.user.group.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
				* Field Set: source
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"name": string,

			}
			/**
			* source.user.hash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"hash": string,

			/**
			* source.user.roles
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["kibana_admin", "reporting_user"]
			*/
			"roles": string[],

		}
	}
	span: {
		/**
		* span.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-span.html
		* Field Set: span
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 3ff9a8981b7ccd5a
		*/
		"id": string,

	}
	threat: {
		/**
		* threat.framework
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
		* Field Set: threat
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: MITRE ATT&CK
		*/
		"framework": string,

		tactic: {
			/**
			* threat.tactic.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: TA0002
			*/
			"id": string[],

			/**
			* threat.tactic.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Execution
			*/
			"name": string[],

			/**
			* threat.tactic.reference
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: https://attack.mitre.org/tactics/TA0002/
			*/
			"reference": string[],

		}
		technique: {
			/**
			* threat.technique.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: T1059
			*/
			"id": string[],

			/**
			* threat.technique.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Command and Scripting Interpreter
			*/
			"name": string[],

			/**
			* threat.technique.reference
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: https://attack.mitre.org/techniques/T1059/
			*/
			"reference": string[],

			subtechnique: {
				/**
				* threat.technique.subtechnique.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
				* Field Set: threat
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: T1059.001
				*/
				"id": string[],

				/**
				* threat.technique.subtechnique.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
				* Field Set: threat
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: PowerShell
				*/
				"name": string[],

				/**
				* threat.technique.subtechnique.reference
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
				* Field Set: threat
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: https://attack.mitre.org/techniques/T1059/001/
				*/
				"reference": string[],

			}
		}
	}
	tls: {
		/**
		* tls.cipher
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
		*/
		"cipher": string,

		client: {
			/**
			* tls.client.certificate
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: MII...
			*/
			"certificate": string,

			/**
			* tls.client.certificate_chain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["MII...", "MII..."]
			*/
			"certificate_chain": string[],

			hash: {
				/**
				* tls.client.hash.md5
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 0F76C7F2C55BFD7D8E8B8F4BFBF0C9EC
				*/
				"md5": string,

				/**
				* tls.client.hash.sha1
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 9E393D93138888D288266C2D915214D1D1CCEB2A
				*/
				"sha1": string,

				/**
				* tls.client.hash.sha256
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 0687F666A054EF17A08E2F2162EAB4CBC0D265E1D7875BE74BF3C712CA92DAF0
				*/
				"sha256": string,

			}
			/**
			* tls.client.issuer
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: CN=Example Root CA, OU=Infrastructure Team, DC=example, DC=com
			*/
			"issuer": string,

			/**
			* tls.client.ja3
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: d4e5b18d6b55c71272893221c96ba240
			*/
			"ja3": string,

			/**
			* tls.client.not_after
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 2021-01-01T00:00:00.000Z
			*/
			"not_after": Date,

			/**
			* tls.client.not_before
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 1970-01-01T00:00:00.000Z
			*/
			"not_before": Date,

			/**
			* tls.client.server_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: www.elastic.co
			*/
			"server_name": string,

			/**
			* tls.client.subject
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: CN=myclient, OU=Documentation Team, DC=example, DC=com
			*/
			"subject": string,

			/**
			* tls.client.supported_ciphers
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384", "..."]
			*/
			"supported_ciphers": string[],

			x509: {
				/**
				* tls.client.x509.alternative_names
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: *.elastic.co
				*/
				"alternative_names": string[],

				issuer: {
					/**
					* tls.client.x509.issuer.common_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example SHA2 High Assurance Server CA
					*/
					"common_name": string[],

					/**
					* tls.client.x509.issuer.country
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: US
					*/
					"country": string[],

					/**
					* tls.client.x509.issuer.distinguished_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
					*/
					"distinguished_name": string,

					/**
					* tls.client.x509.issuer.locality
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Mountain View
					*/
					"locality": string[],

					/**
					* tls.client.x509.issuer.organization
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example Inc
					*/
					"organization": string[],

					/**
					* tls.client.x509.issuer.organizational_unit
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: www.example.com
					*/
					"organizational_unit": string[],

					/**
					* tls.client.x509.issuer.state_or_province
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: California
					*/
					"state_or_province": string[],

				}
				/**
				* tls.client.x509.not_after
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: date
				* Example: 2020-07-16 03:15:39+00:00
				*/
				"not_after": Date,

				/**
				* tls.client.x509.not_before
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: date
				* Example: 2019-08-16 01:40:25+00:00
				*/
				"not_before": Date,

				/**
				* tls.client.x509.public_key_algorithm
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: RSA
				*/
				"public_key_algorithm": string,

				/**
				* tls.client.x509.public_key_curve
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: nistp521
				*/
				"public_key_curve": string,

				/**
				* tls.client.x509.public_key_exponent
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: false
				* Level: extended
				* Elasticsearch type: long
				* Example: 65537
				*/
				"public_key_exponent": number,

				/**
				* tls.client.x509.public_key_size
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: long
				* Example: 2048
				*/
				"public_key_size": number,

				/**
				* tls.client.x509.serial_number
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 55FBB9C7DEBF09809D12CCAA
				*/
				"serial_number": string,

				/**
				* tls.client.x509.signature_algorithm
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: SHA256-RSA
				*/
				"signature_algorithm": string,

				subject: {
					/**
					* tls.client.x509.subject.common_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: shared.global.example.net
					*/
					"common_name": string[],

					/**
					* tls.client.x509.subject.country
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: US
					*/
					"country": string[],

					/**
					* tls.client.x509.subject.distinguished_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
					*/
					"distinguished_name": string,

					/**
					* tls.client.x509.subject.locality
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: San Francisco
					*/
					"locality": string[],

					/**
					* tls.client.x509.subject.organization
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example, Inc.
					*/
					"organization": string[],

					/**
					* tls.client.x509.subject.organizational_unit
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: 
					*/
					"organizational_unit": string[],

					/**
					* tls.client.x509.subject.state_or_province
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: California
					*/
					"state_or_province": string[],

				}
				/**
				* tls.client.x509.version_number
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 3
				*/
				"version_number": string,

			}
		}
		/**
		* tls.curve
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: secp256r1
		*/
		"curve": string,

		/**
		* tls.established
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: boolean
		* Example: 
		*/
		"established": boolean,

		/**
		* tls.next_protocol
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: http/1.1
		*/
		"next_protocol": string,

		/**
		* tls.resumed
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: boolean
		* Example: 
		*/
		"resumed": boolean,

		server: {
			/**
			* tls.server.certificate
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: MII...
			*/
			"certificate": string,

			/**
			* tls.server.certificate_chain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["MII...", "MII..."]
			*/
			"certificate_chain": string[],

			hash: {
				/**
				* tls.server.hash.md5
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 0F76C7F2C55BFD7D8E8B8F4BFBF0C9EC
				*/
				"md5": string,

				/**
				* tls.server.hash.sha1
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 9E393D93138888D288266C2D915214D1D1CCEB2A
				*/
				"sha1": string,

				/**
				* tls.server.hash.sha256
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 0687F666A054EF17A08E2F2162EAB4CBC0D265E1D7875BE74BF3C712CA92DAF0
				*/
				"sha256": string,

			}
			/**
			* tls.server.issuer
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: CN=Example Root CA, OU=Infrastructure Team, DC=example, DC=com
			*/
			"issuer": string,

			/**
			* tls.server.ja3s
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 394441ab65754e2207b1e1b457b3641d
			*/
			"ja3s": string,

			/**
			* tls.server.not_after
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 2021-01-01T00:00:00.000Z
			*/
			"not_after": Date,

			/**
			* tls.server.not_before
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 1970-01-01T00:00:00.000Z
			*/
			"not_before": Date,

			/**
			* tls.server.subject
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: CN=www.example.com, OU=Infrastructure Team, DC=example, DC=com
			*/
			"subject": string,

			x509: {
				/**
				* tls.server.x509.alternative_names
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: *.elastic.co
				*/
				"alternative_names": string[],

				issuer: {
					/**
					* tls.server.x509.issuer.common_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example SHA2 High Assurance Server CA
					*/
					"common_name": string[],

					/**
					* tls.server.x509.issuer.country
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: US
					*/
					"country": string[],

					/**
					* tls.server.x509.issuer.distinguished_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
					*/
					"distinguished_name": string,

					/**
					* tls.server.x509.issuer.locality
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Mountain View
					*/
					"locality": string[],

					/**
					* tls.server.x509.issuer.organization
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example Inc
					*/
					"organization": string[],

					/**
					* tls.server.x509.issuer.organizational_unit
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: www.example.com
					*/
					"organizational_unit": string[],

					/**
					* tls.server.x509.issuer.state_or_province
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: California
					*/
					"state_or_province": string[],

				}
				/**
				* tls.server.x509.not_after
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: date
				* Example: 2020-07-16 03:15:39+00:00
				*/
				"not_after": Date,

				/**
				* tls.server.x509.not_before
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: date
				* Example: 2019-08-16 01:40:25+00:00
				*/
				"not_before": Date,

				/**
				* tls.server.x509.public_key_algorithm
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: RSA
				*/
				"public_key_algorithm": string,

				/**
				* tls.server.x509.public_key_curve
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: nistp521
				*/
				"public_key_curve": string,

				/**
				* tls.server.x509.public_key_exponent
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: false
				* Level: extended
				* Elasticsearch type: long
				* Example: 65537
				*/
				"public_key_exponent": number,

				/**
				* tls.server.x509.public_key_size
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: long
				* Example: 2048
				*/
				"public_key_size": number,

				/**
				* tls.server.x509.serial_number
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 55FBB9C7DEBF09809D12CCAA
				*/
				"serial_number": string,

				/**
				* tls.server.x509.signature_algorithm
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: SHA256-RSA
				*/
				"signature_algorithm": string,

				subject: {
					/**
					* tls.server.x509.subject.common_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: shared.global.example.net
					*/
					"common_name": string[],

					/**
					* tls.server.x509.subject.country
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: US
					*/
					"country": string[],

					/**
					* tls.server.x509.subject.distinguished_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
					*/
					"distinguished_name": string,

					/**
					* tls.server.x509.subject.locality
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: San Francisco
					*/
					"locality": string[],

					/**
					* tls.server.x509.subject.organization
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example, Inc.
					*/
					"organization": string[],

					/**
					* tls.server.x509.subject.organizational_unit
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: 
					*/
					"organizational_unit": string[],

					/**
					* tls.server.x509.subject.state_or_province
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: California
					*/
					"state_or_province": string[],

				}
				/**
				* tls.server.x509.version_number
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 3
				*/
				"version_number": string,

			}
		}
		/**
		* tls.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1.2
		*/
		"version": string,

		/**
		* tls.version_protocol
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: tls
		*/
		"version_protocol": string,

	}
	trace: {
		/**
		* trace.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-trace.html
		* Field Set: trace
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 4bf92f3577b34da6a3ce929d0e0e4736
		*/
		"id": string,

	}
	transaction: {
		/**
		* transaction.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-transaction.html
		* Field Set: transaction
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 00f067aa0ba902b7
		*/
		"id": string,

	}
	url: {
		/**
		* url.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: www.elastic.co
		*/
		"domain": string,

		/**
		* url.extension
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: png
		*/
		"extension": string,

		/**
		* url.fragment
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"fragment": string,

		/**
		* url.full
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://www.elastic.co:443/search?q=elasticsearch#top
		*/
		"full": string,

		/**
		* url.original
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://www.elastic.co:443/search?q=elasticsearch#top or /search?q=elasticsearch
		*/
		"original": string,

		/**
		* url.password
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"password": string,

		/**
		* url.path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"path": string,

		/**
		* url.port
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 443
		*/
		"port": number,

		/**
		* url.query
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"query": string,

		/**
		* url.registered_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.com
		*/
		"registered_domain": string,

		/**
		* url.scheme
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https
		*/
		"scheme": string,

		/**
		* url.subdomain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: east
		*/
		"subdomain": string,

		/**
		* url.top_level_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: co.uk
		*/
		"top_level_domain": string,

		/**
		* url.username
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"username": string,

	}
	user: {
		/**
		* user.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		/**
		* user.email
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"email": string,

		/**
		* user.full_name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Albert Einstein
		*/
		"full_name": string,

		group: {
			/**
			* user.group.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
			* Field Set: user
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* user.group.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
			* Field Set: user
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* user.group.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
			* Field Set: user
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"name": string,

		}
		/**
		* user.hash
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"hash": string,

		/**
		* user.roles
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["kibana_admin", "reporting_user"]
		*/
		"roles": string[],

	}
	user_agent: {
		device: {
			/**
			* user_agent.device.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: iPhone
			*/
			"name": string,

		}
		/**
		* user_agent.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
		* Field Set: user_agent
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Safari
		*/
		"name": string,

		/**
		* user_agent.original
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
		* Field Set: user_agent
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
		*/
		"original": string,

		os: {
			/**
			* user_agent.os.family
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: debian
			*/
			"family": string,

			/**
			* user_agent.os.full
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS Mojave
			*/
			"full": string,

			/**
			* user_agent.os.kernel
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 4.4.0-112-generic
			*/
			"kernel": string,

			/**
			* user_agent.os.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS X
			*/
			"name": string,

			/**
			* user_agent.os.platform
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: darwin
			*/
			"platform": string,

			/**
			* user_agent.os.version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 10.14.1
			*/
			"version": string,

		}
		/**
		* user_agent.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
		* Field Set: user_agent
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 12
		*/
		"version": string,

	}
	vulnerability: {
		/**
		* vulnerability.category
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["Firewall"]
		*/
		"category": string[],

		/**
		* vulnerability.classification
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: CVSS
		*/
		"classification": string,

		/**
		* vulnerability.description
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: In macOS before 2.12.6, there is a vulnerability in the RPC...
		*/
		"description": string,

		/**
		* vulnerability.enumeration
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: CVE
		*/
		"enumeration": string,

		/**
		* vulnerability.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: CVE-2019-00001
		*/
		"id": string,

		/**
		* vulnerability.reference
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-6111
		*/
		"reference": string,

		/**
		* vulnerability.report_id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 20191018.0001
		*/
		"report_id": string,

		scanner: {
			/**
			* vulnerability.scanner.vendor
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
			* Field Set: vulnerability
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Tenable
			*/
			"vendor": string,

		}
		score: {
			/**
			* vulnerability.score.base
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
			* Field Set: vulnerability
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: float
			* Example: 5.5
			*/
			"base": number,

			/**
			* vulnerability.score.environmental
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
			* Field Set: vulnerability
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: float
			* Example: 5.5
			*/
			"environmental": number,

			/**
			* vulnerability.score.temporal
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
			* Field Set: vulnerability
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: float
			* Example: 
			*/
			"temporal": number,

			/**
			* vulnerability.score.version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
			* Field Set: vulnerability
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 2
			*/
			"version": string,

		}
		/**
		* vulnerability.severity
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Critical
		*/
		"severity": string,

	}

}

export interface EcsTree {
	/**
	* @timestamp
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: date
	* Example: 2016-05-23T08:05:34.853Z
	*/
	"@timestamp": Date,

	agent: {
		build: {
			/**
			* agent.build.original
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
			* Field Set: agent
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: metricbeat version 7.6.0 (amd64), libbeat 7.6.0 [6a23e8f8f30f5001ba344e4e54d8d9cb82cb107c built 2020-02-05 23:10:10 +0000 UTC]
			*/
			"original": string,

		}
		/**
		* agent.ephemeral_id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
		* Field Set: agent
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 8a4f500f
		*/
		"ephemeral_id": string,

		/**
		* agent.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
		* Field Set: agent
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 8a4f500d
		*/
		"id": string,

		/**
		* agent.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
		* Field Set: agent
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: foo
		*/
		"name": string,

		/**
		* agent.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
		* Field Set: agent
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: filebeat
		*/
		"type": string,

		/**
		* agent.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-agent.html
		* Field Set: agent
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 6.0.0-rc2
		*/
		"version": string,

	}
	client: {
		/**
		* client.address
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"address": string,

		as: {
			/**
			* client.as.number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 15169
			*/
			"number": number,

			organization: {
				/**
				* client.as.organization.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
				* Field Set: client
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Google LLC
				*/
				"name": string,

			}
		}
		/**
		* client.bytes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 184
		*/
		"bytes": number,

		/**
		* client.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		geo: {
			/**
			* client.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* client.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* client.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* client.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* client.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* client.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

			/**
			* client.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* client.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* client.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string,

		/**
		* client.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string,

		nat: {
			/**
			* client.nat.ip
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: ip
			* Example: 
			*/
			"ip": string,

			/**
			* client.nat.port
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 
			*/
			"port": number,

		}
		/**
		* client.packets
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 12
		*/
		"packets": number,

		/**
		* client.port
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 
		*/
		"port": number,

		/**
		* client.registered_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.com
		*/
		"registered_domain": string,

		/**
		* client.subdomain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: east
		*/
		"subdomain": string,

		/**
		* client.top_level_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
		* Field Set: client
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: co.uk
		*/
		"top_level_domain": string,

		user: {
			/**
			* client.user.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* client.user.email
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"email": string,

			/**
			* client.user.full_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Albert Einstein
			*/
			"full_name": string,

			group: {
				/**
				* client.user.group.domain
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
				* Field Set: client
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"domain": string,

				/**
				* client.user.group.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
				* Field Set: client
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"id": string,

				/**
				* client.user.group.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
				* Field Set: client
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"name": string,

			}
			/**
			* client.user.hash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"hash": string,

			/**
			* client.user.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* client.user.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: albert
			*/
			"name": string,

			/**
			* client.user.roles
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-client.html
			* Field Set: client
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["kibana_admin", "reporting_user"]
			*/
			"roles": string[],

		}
	}
	cloud: {
		account: {
			/**
			* cloud.account.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 666777888999
			*/
			"id": string,

			/**
			* cloud.account.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: elastic-dev
			*/
			"name": string,

		}
		/**
		* cloud.availability_zone
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
		* Field Set: cloud
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: us-east-1c
		*/
		"availability_zone": string,

		instance: {
			/**
			* cloud.instance.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: i-1234567890abcdef0
			*/
			"id": string,

			/**
			* cloud.instance.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"name": string,

		}
		machine: {
			/**
			* cloud.machine.type
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: t2.medium
			*/
			"type": string,

		}
		project: {
			/**
			* cloud.project.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: my-project
			*/
			"id": string,

			/**
			* cloud.project.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
			* Field Set: cloud
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: my project
			*/
			"name": string,

		}
		/**
		* cloud.provider
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
		* Field Set: cloud
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: aws
		*/
		"provider": string,

		/**
		* cloud.region
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-cloud.html
		* Field Set: cloud
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: us-east-1
		*/
		"region": string,

	}
	container: {
		/**
		* container.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
		* Field Set: container
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

		image: {
			/**
			* container.image.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
			* Field Set: container
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"name": string,

			/**
			* container.image.tag
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
			* Field Set: container
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"tag": string[],

		}
		/**
		* container.labels
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
		* Field Set: container
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"labels": object,

		/**
		* container.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
		* Field Set: container
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"name": string,

		/**
		* container.runtime
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-container.html
		* Field Set: container
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: docker
		*/
		"runtime": string,

	}
	destination: {
		/**
		* destination.address
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"address": string,

		as: {
			/**
			* destination.as.number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 15169
			*/
			"number": number,

			organization: {
				/**
				* destination.as.organization.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
				* Field Set: destination
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Google LLC
				*/
				"name": string,

			}
		}
		/**
		* destination.bytes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 184
		*/
		"bytes": number,

		/**
		* destination.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		geo: {
			/**
			* destination.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* destination.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* destination.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* destination.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* destination.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* destination.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

			/**
			* destination.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* destination.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* destination.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string,

		/**
		* destination.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string,

		nat: {
			/**
			* destination.nat.ip
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: ip
			* Example: 
			*/
			"ip": string,

			/**
			* destination.nat.port
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 
			*/
			"port": number,

		}
		/**
		* destination.packets
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 12
		*/
		"packets": number,

		/**
		* destination.port
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 
		*/
		"port": number,

		/**
		* destination.registered_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.com
		*/
		"registered_domain": string,

		/**
		* destination.subdomain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: east
		*/
		"subdomain": string,

		/**
		* destination.top_level_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
		* Field Set: destination
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: co.uk
		*/
		"top_level_domain": string,

		user: {
			/**
			* destination.user.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* destination.user.email
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"email": string,

			/**
			* destination.user.full_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Albert Einstein
			*/
			"full_name": string,

			group: {
				/**
				* destination.user.group.domain
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
				* Field Set: destination
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"domain": string,

				/**
				* destination.user.group.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
				* Field Set: destination
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"id": string,

				/**
				* destination.user.group.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
				* Field Set: destination
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"name": string,

			}
			/**
			* destination.user.hash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"hash": string,

			/**
			* destination.user.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* destination.user.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: albert
			*/
			"name": string,

			/**
			* destination.user.roles
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-destination.html
			* Field Set: destination
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["kibana_admin", "reporting_user"]
			*/
			"roles": string[],

		}
	}
	dll: {
		code_signature: {
			/**
			* dll.code_signature.exists
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: boolean
			* Example: true
			*/
			"exists": boolean,

			/**
			* dll.code_signature.status
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ERROR_UNTRUSTED_ROOT
			*/
			"status": string,

			/**
			* dll.code_signature.subject_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"subject_name": string,

			/**
			* dll.code_signature.trusted
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"trusted": boolean,

			/**
			* dll.code_signature.valid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"valid": boolean,

		}
		hash: {
			/**
			* dll.hash.md5
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"md5": string,

			/**
			* dll.hash.sha1
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha1": string,

			/**
			* dll.hash.sha256
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha256": string,

			/**
			* dll.hash.sha512
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha512": string,

		}
		/**
		* dll.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
		* Field Set: dll
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: kernel32.dll
		*/
		"name": string,

		/**
		* dll.path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
		* Field Set: dll
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: C:\Windows\System32\kernel32.dll
		*/
		"path": string,

		pe: {
			/**
			* dll.pe.architecture
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: x64
			*/
			"architecture": string,

			/**
			* dll.pe.company
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"company": string,

			/**
			* dll.pe.description
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Paint
			*/
			"description": string,

			/**
			* dll.pe.file_version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 6.3.9600.17415
			*/
			"file_version": string,

			/**
			* dll.pe.imphash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 0c6803c4e922103c4dca5963aad36ddf
			*/
			"imphash": string,

			/**
			* dll.pe.original_file_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: MSPAINT.EXE
			*/
			"original_file_name": string,

			/**
			* dll.pe.product
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dll.html
			* Field Set: dll
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft® Windows® Operating System
			*/
			"product": string,

		}
	}
	dns: {
		/**
		* dns.answers
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"answers": object[],

		/**
		* dns.header_flags
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["RD", "RA"]
		*/
		"header_flags": string[],

		/**
		* dns.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 62111
		*/
		"id": string,

		/**
		* dns.op_code
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: QUERY
		*/
		"op_code": string,

		question: {
			/**
			* dns.question.class
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: IN
			*/
			"class": string,

			/**
			* dns.question.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: www.example.com
			*/
			"name": string,

			/**
			* dns.question.registered_domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: example.com
			*/
			"registered_domain": string,

			/**
			* dns.question.subdomain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: www
			*/
			"subdomain": string,

			/**
			* dns.question.top_level_domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: co.uk
			*/
			"top_level_domain": string,

			/**
			* dns.question.type
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
			* Field Set: dns
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: AAAA
			*/
			"type": string,

		}
		/**
		* dns.resolved_ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: ip
		* Example: ["10.10.10.10", "10.10.10.11"]
		*/
		"resolved_ip": string[],

		/**
		* dns.response_code
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: NOERROR
		*/
		"response_code": string,

		/**
		* dns.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-dns.html
		* Field Set: dns
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: answer
		*/
		"type": string,

	}
	ecs: {
		/**
		* ecs.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-ecs.html
		* Field Set: ecs
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 1.0.0
		*/
		"version": string,

	}
	error: {
		/**
		* error.code
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
		* Field Set: error
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"code": string,

		/**
		* error.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
		* Field Set: error
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

		/**
		* error.message
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
		* Field Set: error
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: text
		* Example: 
		*/
		"message": string,

		/**
		* error.stack_trace
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
		* Field Set: error
		* Is Indexed: false
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"stack_trace": string,

		/**
		* error.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-error.html
		* Field Set: error
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: java.lang.NullPointerException
		*/
		"type": string,

	}
	event: {
		/**
		* event.action
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: user-password-change
		*/
		"action": string,

		/**
		* event.category
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: authentication
		*/
		"category": string[],

		/**
		* event.code
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 4648
		*/
		"code": string,

		/**
		* event.created
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: date
		* Example: 2016-05-23T08:05:34.857Z
		*/
		"created": Date,

		/**
		* event.dataset
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: apache.access
		*/
		"dataset": string,

		/**
		* event.duration
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 
		*/
		"duration": number,

		/**
		* event.end
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"end": Date,

		/**
		* event.hash
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 123456789012345678901234567890ABCD
		*/
		"hash": string,

		/**
		* event.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 8a4f500d
		*/
		"id": string,

		/**
		* event.ingested
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: date
		* Example: 2016-05-23T08:05:35.101Z
		*/
		"ingested": Date,

		/**
		* event.kind
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: alert
		*/
		"kind": string,

		/**
		* event.module
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: apache
		*/
		"module": string,

		/**
		* event.original
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: false
		* Level: core
		* Elasticsearch type: keyword
		* Example: Sep 19 08:26:10 host CEF:0&#124;Security&#124; threatmanager&#124;1.0&#124;100&#124; worm successfully stopped&#124;10&#124;src=10.0.0.1 dst=2.1.2.2spt=1232
		*/
		"original": string,

		/**
		* event.outcome
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: success
		*/
		"outcome": string,

		/**
		* event.provider
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: kernel
		*/
		"provider": string,

		/**
		* event.reason
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Terminated an unexpected process
		*/
		"reason": string,

		/**
		* event.reference
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://system.example.com/event/#0001234
		*/
		"reference": string,

		/**
		* event.risk_score
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: float
		* Example: 
		*/
		"risk_score": number,

		/**
		* event.risk_score_norm
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: float
		* Example: 
		*/
		"risk_score_norm": number,

		/**
		* event.sequence
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 
		*/
		"sequence": number,

		/**
		* event.severity
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 7
		*/
		"severity": number,

		/**
		* event.start
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"start": Date,

		/**
		* event.timezone
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"timezone": string,

		/**
		* event.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"type": string[],

		/**
		* event.url
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-event.html
		* Field Set: event
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://mysystem.example.com/alert/5271dedb-f5b0-4218-87f0-4ac4870a38fe
		*/
		"url": string,

	}
	file: {
		/**
		* file.accessed
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"accessed": Date,

		/**
		* file.attributes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["readonly", "system"]
		*/
		"attributes": string[],

		code_signature: {
			/**
			* file.code_signature.exists
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: boolean
			* Example: true
			*/
			"exists": boolean,

			/**
			* file.code_signature.status
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ERROR_UNTRUSTED_ROOT
			*/
			"status": string,

			/**
			* file.code_signature.subject_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"subject_name": string,

			/**
			* file.code_signature.trusted
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"trusted": boolean,

			/**
			* file.code_signature.valid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"valid": boolean,

		}
		/**
		* file.created
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"created": Date,

		/**
		* file.ctime
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"ctime": Date,

		/**
		* file.device
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: sda
		*/
		"device": string,

		/**
		* file.directory
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /home/alice
		*/
		"directory": string,

		/**
		* file.drive_letter
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: C
		*/
		"drive_letter": string,

		/**
		* file.extension
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: png
		*/
		"extension": string,

		/**
		* file.gid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1001
		*/
		"gid": string,

		/**
		* file.group
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: alice
		*/
		"group": string,

		hash: {
			/**
			* file.hash.md5
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"md5": string,

			/**
			* file.hash.sha1
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha1": string,

			/**
			* file.hash.sha256
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha256": string,

			/**
			* file.hash.sha512
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha512": string,

		}
		/**
		* file.inode
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 256383
		*/
		"inode": string,

		/**
		* file.mime_type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mime_type": string,

		/**
		* file.mode
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 640
		*/
		"mode": string,

		/**
		* file.mtime
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"mtime": Date,

		/**
		* file.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.png
		*/
		"name": string,

		/**
		* file.owner
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: alice
		*/
		"owner": string,

		/**
		* file.path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /home/alice/example.png
		*/
		"path": string,

		pe: {
			/**
			* file.pe.architecture
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: x64
			*/
			"architecture": string,

			/**
			* file.pe.company
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"company": string,

			/**
			* file.pe.description
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Paint
			*/
			"description": string,

			/**
			* file.pe.file_version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 6.3.9600.17415
			*/
			"file_version": string,

			/**
			* file.pe.imphash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 0c6803c4e922103c4dca5963aad36ddf
			*/
			"imphash": string,

			/**
			* file.pe.original_file_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: MSPAINT.EXE
			*/
			"original_file_name": string,

			/**
			* file.pe.product
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft® Windows® Operating System
			*/
			"product": string,

		}
		/**
		* file.size
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 16384
		*/
		"size": number,

		/**
		* file.target_path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"target_path": string,

		/**
		* file.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: file
		*/
		"type": string,

		/**
		* file.uid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
		* Field Set: file
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1001
		*/
		"uid": string,

		x509: {
			/**
			* file.x509.alternative_names
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: *.elastic.co
			*/
			"alternative_names": string[],

			issuer: {
				/**
				* file.x509.issuer.common_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Example SHA2 High Assurance Server CA
				*/
				"common_name": string[],

				/**
				* file.x509.issuer.country
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: US
				*/
				"country": string[],

				/**
				* file.x509.issuer.distinguished_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
				*/
				"distinguished_name": string,

				/**
				* file.x509.issuer.locality
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Mountain View
				*/
				"locality": string[],

				/**
				* file.x509.issuer.organization
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Example Inc
				*/
				"organization": string[],

				/**
				* file.x509.issuer.organizational_unit
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: www.example.com
				*/
				"organizational_unit": string[],

				/**
				* file.x509.issuer.state_or_province
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: California
				*/
				"state_or_province": string[],

			}
			/**
			* file.x509.not_after
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 2020-07-16 03:15:39+00:00
			*/
			"not_after": Date,

			/**
			* file.x509.not_before
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 2019-08-16 01:40:25+00:00
			*/
			"not_before": Date,

			/**
			* file.x509.public_key_algorithm
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: RSA
			*/
			"public_key_algorithm": string,

			/**
			* file.x509.public_key_curve
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: nistp521
			*/
			"public_key_curve": string,

			/**
			* file.x509.public_key_exponent
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: false
			* Level: extended
			* Elasticsearch type: long
			* Example: 65537
			*/
			"public_key_exponent": number,

			/**
			* file.x509.public_key_size
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 2048
			*/
			"public_key_size": number,

			/**
			* file.x509.serial_number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 55FBB9C7DEBF09809D12CCAA
			*/
			"serial_number": string,

			/**
			* file.x509.signature_algorithm
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: SHA256-RSA
			*/
			"signature_algorithm": string,

			subject: {
				/**
				* file.x509.subject.common_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: shared.global.example.net
				*/
				"common_name": string[],

				/**
				* file.x509.subject.country
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: US
				*/
				"country": string[],

				/**
				* file.x509.subject.distinguished_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
				*/
				"distinguished_name": string,

				/**
				* file.x509.subject.locality
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: San Francisco
				*/
				"locality": string[],

				/**
				* file.x509.subject.organization
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Example, Inc.
				*/
				"organization": string[],

				/**
				* file.x509.subject.organizational_unit
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"organizational_unit": string[],

				/**
				* file.x509.subject.state_or_province
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
				* Field Set: file
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: California
				*/
				"state_or_province": string[],

			}
			/**
			* file.x509.version_number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-file.html
			* Field Set: file
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 3
			*/
			"version_number": string,

		}
	}
	group: {
		/**
		* group.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
		* Field Set: group
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		/**
		* group.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
		* Field Set: group
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

		/**
		* group.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-group.html
		* Field Set: group
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"name": string,

	}
	host: {
		/**
		* host.architecture
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: x86_64
		*/
		"architecture": string,

		/**
		* host.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: CONTOSO
		*/
		"domain": string,

		geo: {
			/**
			* host.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* host.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* host.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* host.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* host.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* host.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

			/**
			* host.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* host.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* host.hostname
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"hostname": string,

		/**
		* host.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

		/**
		* host.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string[],

		/**
		* host.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string[],

		/**
		* host.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"name": string,

		os: {
			/**
			* host.os.family
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: debian
			*/
			"family": string,

			/**
			* host.os.full
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS Mojave
			*/
			"full": string,

			/**
			* host.os.kernel
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 4.4.0-112-generic
			*/
			"kernel": string,

			/**
			* host.os.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS X
			*/
			"name": string,

			/**
			* host.os.platform
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: darwin
			*/
			"platform": string,

			/**
			* host.os.version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 10.14.1
			*/
			"version": string,

		}
		/**
		* host.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"type": string,

		/**
		* host.uptime
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
		* Field Set: host
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 1325
		*/
		"uptime": number,

		user: {
			/**
			* host.user.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* host.user.email
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"email": string,

			/**
			* host.user.full_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Albert Einstein
			*/
			"full_name": string,

			group: {
				/**
				* host.user.group.domain
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
				* Field Set: host
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"domain": string,

				/**
				* host.user.group.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
				* Field Set: host
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"id": string,

				/**
				* host.user.group.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
				* Field Set: host
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"name": string,

			}
			/**
			* host.user.hash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"hash": string,

			/**
			* host.user.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* host.user.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: albert
			*/
			"name": string,

			/**
			* host.user.roles
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-host.html
			* Field Set: host
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["kibana_admin", "reporting_user"]
			*/
			"roles": string[],

		}
	}
	http: {
		request: {
			body: {
				/**
				* http.request.body.bytes
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
				* Field Set: http
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: long
				* Example: 887
				*/
				"bytes": number,

				/**
				* http.request.body.content
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
				* Field Set: http
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Hello world
				*/
				"content": string,

			}
			/**
			* http.request.bytes
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 1437
			*/
			"bytes": number,

			/**
			* http.request.method
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: GET, POST, PUT, PoST
			*/
			"method": string,

			/**
			* http.request.mime_type
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: image/gif
			*/
			"mime_type": string,

			/**
			* http.request.referrer
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: https://blog.example.com/
			*/
			"referrer": string,

		}
		response: {
			body: {
				/**
				* http.response.body.bytes
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
				* Field Set: http
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: long
				* Example: 887
				*/
				"bytes": number,

				/**
				* http.response.body.content
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
				* Field Set: http
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Hello world
				*/
				"content": string,

			}
			/**
			* http.response.bytes
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 1437
			*/
			"bytes": number,

			/**
			* http.response.mime_type
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: image/gif
			*/
			"mime_type": string,

			/**
			* http.response.status_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
			* Field Set: http
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 404
			*/
			"status_code": number,

		}
		/**
		* http.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-http.html
		* Field Set: http
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1.1
		*/
		"version": string,

	}
	/**
	* labels
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: object
	* Example: {"application": "foo-bar", "env": "production"}
	*/
	"labels": object,

	log: {
		file: {
			/**
			* log.file.path
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
			* Field Set: log
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: /var/log/fun-times.log
			*/
			"path": string,

		}
		/**
		* log.level
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
		* Field Set: log
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: error
		*/
		"level": string,

		/**
		* log.logger
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
		* Field Set: log
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: org.elasticsearch.bootstrap.Bootstrap
		*/
		"logger": string,

		origin: {
			file: {
				/**
				* log.origin.file.line
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
				* Field Set: log
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: integer
				* Example: 42
				*/
				"line": number,

				/**
				* log.origin.file.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
				* Field Set: log
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Bootstrap.java
				*/
				"name": string,

			}
			/**
			* log.origin.function
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
			* Field Set: log
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: init
			*/
			"function": string,

		}
		/**
		* log.original
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
		* Field Set: log
		* Is Indexed: false
		* Level: core
		* Elasticsearch type: keyword
		* Example: Sep 19 08:26:10 localhost My log
		*/
		"original": string,

		/**
		* log.syslog
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-log.html
		* Field Set: log
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"syslog": object,

	}
	/**
	* message
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: text
	* Example: Hello World
	*/
	"message": string,

	network: {
		/**
		* network.application
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: aim
		*/
		"application": string,

		/**
		* network.bytes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 368
		*/
		"bytes": number,

		/**
		* network.community_id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1:hO+sN4H+MG5MY/8hIrXPqc4ZQz0=
		*/
		"community_id": string,

		/**
		* network.direction
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: inbound
		*/
		"direction": string,

		/**
		* network.forwarded_ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 192.1.1.2
		*/
		"forwarded_ip": string,

		/**
		* network.iana_number
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 6
		*/
		"iana_number": string,

		/**
		* network.inner
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"inner": object,

		/**
		* network.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Guest Wifi
		*/
		"name": string,

		/**
		* network.packets
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 24
		*/
		"packets": number,

		/**
		* network.protocol
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: http
		*/
		"protocol": string,

		/**
		* network.transport
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: tcp
		*/
		"transport": string,

		/**
		* network.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
		* Field Set: network
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: ipv4
		*/
		"type": string,

		vlan: {
			/**
			* network.vlan.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
			* Field Set: network
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 10
			*/
			"id": string,

			/**
			* network.vlan.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-network.html
			* Field Set: network
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: outside
			*/
			"name": string,

		}
	}
	observer: {
		/**
		* observer.egress
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"egress": object,

		geo: {
			/**
			* observer.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* observer.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* observer.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* observer.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* observer.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* observer.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

			/**
			* observer.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* observer.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* observer.hostname
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"hostname": string,

		/**
		* observer.ingress
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: object
		* Example: 
		*/
		"ingress": object,

		/**
		* observer.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string[],

		/**
		* observer.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string[],

		/**
		* observer.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1_proxySG
		*/
		"name": string,

		os: {
			/**
			* observer.os.family
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: debian
			*/
			"family": string,

			/**
			* observer.os.full
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS Mojave
			*/
			"full": string,

			/**
			* observer.os.kernel
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 4.4.0-112-generic
			*/
			"kernel": string,

			/**
			* observer.os.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS X
			*/
			"name": string,

			/**
			* observer.os.platform
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: darwin
			*/
			"platform": string,

			/**
			* observer.os.version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
			* Field Set: observer
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 10.14.1
			*/
			"version": string,

		}
		/**
		* observer.product
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: s200
		*/
		"product": string,

		/**
		* observer.serial_number
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"serial_number": string,

		/**
		* observer.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: firewall
		*/
		"type": string,

		/**
		* observer.vendor
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: Symantec
		*/
		"vendor": string,

		/**
		* observer.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-observer.html
		* Field Set: observer
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"version": string,

	}
	organization: {
		/**
		* organization.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-organization.html
		* Field Set: organization
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

		/**
		* organization.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-organization.html
		* Field Set: organization
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"name": string,

	}
	package: {
		/**
		* package.architecture
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: x86_64
		*/
		"architecture": string,

		/**
		* package.build_version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 36f4f7e89dd61b0988b12ee000b98966867710cd
		*/
		"build_version": string,

		/**
		* package.checksum
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 68b329da9893e34099c7d8ad5cb9c940
		*/
		"checksum": string,

		/**
		* package.description
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Open source programming language to build simple/reliable/efficient software.
		*/
		"description": string,

		/**
		* package.install_scope
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: global
		*/
		"install_scope": string,

		/**
		* package.installed
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 
		*/
		"installed": Date,

		/**
		* package.license
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Apache License 2.0
		*/
		"license": string,

		/**
		* package.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: go
		*/
		"name": string,

		/**
		* package.path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /usr/local/Cellar/go/1.12.9/
		*/
		"path": string,

		/**
		* package.reference
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://golang.org
		*/
		"reference": string,

		/**
		* package.size
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 62231
		*/
		"size": number,

		/**
		* package.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: rpm
		*/
		"type": string,

		/**
		* package.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-package.html
		* Field Set: package
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1.12.9
		*/
		"version": string,

	}
	process: {
		/**
		* process.args
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["/usr/bin/ssh", "-l", "user", "10.0.0.16"]
		*/
		"args": string[],

		/**
		* process.args_count
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 4
		*/
		"args_count": number,

		code_signature: {
			/**
			* process.code_signature.exists
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: boolean
			* Example: true
			*/
			"exists": boolean,

			/**
			* process.code_signature.status
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ERROR_UNTRUSTED_ROOT
			*/
			"status": string,

			/**
			* process.code_signature.subject_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"subject_name": string,

			/**
			* process.code_signature.trusted
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"trusted": boolean,

			/**
			* process.code_signature.valid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: boolean
			* Example: true
			*/
			"valid": boolean,

		}
		/**
		* process.command_line
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /usr/bin/ssh -l user 10.0.0.16
		*/
		"command_line": string,

		/**
		* process.entity_id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: c2c455d9f99375d
		*/
		"entity_id": string,

		/**
		* process.executable
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /usr/bin/ssh
		*/
		"executable": string,

		/**
		* process.exit_code
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 137
		*/
		"exit_code": number,

		hash: {
			/**
			* process.hash.md5
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"md5": string,

			/**
			* process.hash.sha1
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha1": string,

			/**
			* process.hash.sha256
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha256": string,

			/**
			* process.hash.sha512
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"sha512": string,

		}
		/**
		* process.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ssh
		*/
		"name": string,

		parent: {
			/**
			* process.parent.args
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["/usr/bin/ssh", "-l", "user", "10.0.0.16"]
			*/
			"args": string[],

			/**
			* process.parent.args_count
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 4
			*/
			"args_count": number,

			code_signature: {
				/**
				* process.parent.code_signature.exists
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: core
				* Elasticsearch type: boolean
				* Example: true
				*/
				"exists": boolean,

				/**
				* process.parent.code_signature.status
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: ERROR_UNTRUSTED_ROOT
				*/
				"status": string,

				/**
				* process.parent.code_signature.subject_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: core
				* Elasticsearch type: keyword
				* Example: Microsoft Corporation
				*/
				"subject_name": string,

				/**
				* process.parent.code_signature.trusted
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: boolean
				* Example: true
				*/
				"trusted": boolean,

				/**
				* process.parent.code_signature.valid
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: boolean
				* Example: true
				*/
				"valid": boolean,

			}
			/**
			* process.parent.command_line
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: /usr/bin/ssh -l user 10.0.0.16
			*/
			"command_line": string,

			/**
			* process.parent.entity_id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: c2c455d9f99375d
			*/
			"entity_id": string,

			/**
			* process.parent.executable
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: /usr/bin/ssh
			*/
			"executable": string,

			/**
			* process.parent.exit_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 137
			*/
			"exit_code": number,

			hash: {
				/**
				* process.parent.hash.md5
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"md5": string,

				/**
				* process.parent.hash.sha1
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"sha1": string,

				/**
				* process.parent.hash.sha256
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"sha256": string,

				/**
				* process.parent.hash.sha512
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"sha512": string,

			}
			/**
			* process.parent.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ssh
			*/
			"name": string,

			pe: {
				/**
				* process.parent.pe.architecture
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: x64
				*/
				"architecture": string,

				/**
				* process.parent.pe.company
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Microsoft Corporation
				*/
				"company": string,

				/**
				* process.parent.pe.description
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Paint
				*/
				"description": string,

				/**
				* process.parent.pe.file_version
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 6.3.9600.17415
				*/
				"file_version": string,

				/**
				* process.parent.pe.imphash
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 0c6803c4e922103c4dca5963aad36ddf
				*/
				"imphash": string,

				/**
				* process.parent.pe.original_file_name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: MSPAINT.EXE
				*/
				"original_file_name": string,

				/**
				* process.parent.pe.product
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Microsoft® Windows® Operating System
				*/
				"product": string,

			}
			/**
			* process.parent.pgid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 
			*/
			"pgid": number,

			/**
			* process.parent.pid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: long
			* Example: 4242
			*/
			"pid": number,

			/**
			* process.parent.ppid
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 4241
			*/
			"ppid": number,

			/**
			* process.parent.start
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 2016-05-23T08:05:34.853Z
			*/
			"start": Date,

			thread: {
				/**
				* process.parent.thread.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: long
				* Example: 4242
				*/
				"id": number,

				/**
				* process.parent.thread.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
				* Field Set: process
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: thread-0
				*/
				"name": string,

			}
			/**
			* process.parent.title
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"title": string,

			/**
			* process.parent.uptime
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 1325
			*/
			"uptime": number,

			/**
			* process.parent.working_directory
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: /home/alice
			*/
			"working_directory": string,

		}
		pe: {
			/**
			* process.pe.architecture
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: x64
			*/
			"architecture": string,

			/**
			* process.pe.company
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft Corporation
			*/
			"company": string,

			/**
			* process.pe.description
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Paint
			*/
			"description": string,

			/**
			* process.pe.file_version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 6.3.9600.17415
			*/
			"file_version": string,

			/**
			* process.pe.imphash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 0c6803c4e922103c4dca5963aad36ddf
			*/
			"imphash": string,

			/**
			* process.pe.original_file_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: MSPAINT.EXE
			*/
			"original_file_name": string,

			/**
			* process.pe.product
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Microsoft® Windows® Operating System
			*/
			"product": string,

		}
		/**
		* process.pgid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 
		*/
		"pgid": number,

		/**
		* process.pid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 4242
		*/
		"pid": number,

		/**
		* process.ppid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 4241
		*/
		"ppid": number,

		/**
		* process.start
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: date
		* Example: 2016-05-23T08:05:34.853Z
		*/
		"start": Date,

		thread: {
			/**
			* process.thread.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 4242
			*/
			"id": number,

			/**
			* process.thread.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
			* Field Set: process
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: thread-0
			*/
			"name": string,

		}
		/**
		* process.title
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"title": string,

		/**
		* process.uptime
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 1325
		*/
		"uptime": number,

		/**
		* process.working_directory
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-process.html
		* Field Set: process
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: /home/alice
		*/
		"working_directory": string,

	}
	registry: {
		data: {
			/**
			* registry.data.bytes
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
			* Field Set: registry
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ZQBuAC0AVQBTAAAAZQBuAAAAAAA=
			*/
			"bytes": string,

			/**
			* registry.data.strings
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
			* Field Set: registry
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: ["C:\rta\red_ttp\bin\myapp.exe"]
			*/
			"strings": string[],

			/**
			* registry.data.type
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
			* Field Set: registry
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: REG_SZ
			*/
			"type": string,

		}
		/**
		* registry.hive
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
		* Field Set: registry
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: HKLM
		*/
		"hive": string,

		/**
		* registry.key
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
		* Field Set: registry
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\winword.exe
		*/
		"key": string,

		/**
		* registry.path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
		* Field Set: registry
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\winword.exe\Debugger
		*/
		"path": string,

		/**
		* registry.value
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-registry.html
		* Field Set: registry
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: Debugger
		*/
		"value": string,

	}
	related: {
		/**
		* related.hash
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
		* Field Set: related
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"hash": string[],

		/**
		* related.hosts
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
		* Field Set: related
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"hosts": string[],

		/**
		* related.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
		* Field Set: related
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string[],

		/**
		* related.user
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-related.html
		* Field Set: related
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"user": string[],

	}
	rule: {
		/**
		* rule.author
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["Star-Lord"]
		*/
		"author": string[],

		/**
		* rule.category
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Attempted Information Leak
		*/
		"category": string,

		/**
		* rule.description
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Block requests to public DNS over HTTPS / TLS protocols
		*/
		"description": string,

		/**
		* rule.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 101
		*/
		"id": string,

		/**
		* rule.license
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Apache 2.0
		*/
		"license": string,

		/**
		* rule.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: BLOCK_DNS_over_TLS
		*/
		"name": string,

		/**
		* rule.reference
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://en.wikipedia.org/wiki/DNS_over_TLS
		*/
		"reference": string,

		/**
		* rule.ruleset
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Standard_Protocol_Filters
		*/
		"ruleset": string,

		/**
		* rule.uuid
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1100110011
		*/
		"uuid": string,

		/**
		* rule.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-rule.html
		* Field Set: rule
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1.1
		*/
		"version": string,

	}
	server: {
		/**
		* server.address
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"address": string,

		as: {
			/**
			* server.as.number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 15169
			*/
			"number": number,

			organization: {
				/**
				* server.as.organization.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
				* Field Set: server
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Google LLC
				*/
				"name": string,

			}
		}
		/**
		* server.bytes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 184
		*/
		"bytes": number,

		/**
		* server.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		geo: {
			/**
			* server.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* server.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* server.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* server.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* server.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* server.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

			/**
			* server.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* server.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* server.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string,

		/**
		* server.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string,

		nat: {
			/**
			* server.nat.ip
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: ip
			* Example: 
			*/
			"ip": string,

			/**
			* server.nat.port
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 
			*/
			"port": number,

		}
		/**
		* server.packets
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 12
		*/
		"packets": number,

		/**
		* server.port
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 
		*/
		"port": number,

		/**
		* server.registered_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.com
		*/
		"registered_domain": string,

		/**
		* server.subdomain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: east
		*/
		"subdomain": string,

		/**
		* server.top_level_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
		* Field Set: server
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: co.uk
		*/
		"top_level_domain": string,

		user: {
			/**
			* server.user.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* server.user.email
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"email": string,

			/**
			* server.user.full_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Albert Einstein
			*/
			"full_name": string,

			group: {
				/**
				* server.user.group.domain
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
				* Field Set: server
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"domain": string,

				/**
				* server.user.group.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
				* Field Set: server
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"id": string,

				/**
				* server.user.group.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
				* Field Set: server
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"name": string,

			}
			/**
			* server.user.hash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"hash": string,

			/**
			* server.user.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* server.user.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: albert
			*/
			"name": string,

			/**
			* server.user.roles
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-server.html
			* Field Set: server
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["kibana_admin", "reporting_user"]
			*/
			"roles": string[],

		}
	}
	service: {
		/**
		* service.ephemeral_id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 8a4f500f
		*/
		"ephemeral_id": string,

		/**
		* service.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: d37e5ebfe0ae6c4972dbe9f0174a1637bb8247f6
		*/
		"id": string,

		/**
		* service.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: elasticsearch-metrics
		*/
		"name": string,

		node: {
			/**
			* service.node.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
			* Field Set: service
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: instance-0000000016
			*/
			"name": string,

		}
		/**
		* service.state
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"state": string,

		/**
		* service.type
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: elasticsearch
		*/
		"type": string,

		/**
		* service.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-service.html
		* Field Set: service
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 3.2.4
		*/
		"version": string,

	}
	source: {
		/**
		* source.address
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"address": string,

		as: {
			/**
			* source.as.number
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 15169
			*/
			"number": number,

			organization: {
				/**
				* source.as.organization.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
				* Field Set: source
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: Google LLC
				*/
				"name": string,

			}
		}
		/**
		* source.bytes
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 184
		*/
		"bytes": number,

		/**
		* source.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		geo: {
			/**
			* source.geo.city_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Montreal
			*/
			"city_name": string,

			/**
			* source.geo.continent_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: North America
			*/
			"continent_name": string,

			/**
			* source.geo.country_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA
			*/
			"country_iso_code": string,

			/**
			* source.geo.country_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Canada
			*/
			"country_name": string,

			/**
			* source.geo.location
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: geo_point
			* Example: { "lon": -73.614830, "lat": 45.505918 }
			*/
			"location": GeoPoint,

			/**
			* source.geo.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: boston-dc
			*/
			"name": string,

			/**
			* source.geo.region_iso_code
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: CA-QC
			*/
			"region_iso_code": string,

			/**
			* source.geo.region_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: Quebec
			*/
			"region_name": string,

		}
		/**
		* source.ip
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: ip
		* Example: 
		*/
		"ip": string,

		/**
		* source.mac
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"mac": string,

		nat: {
			/**
			* source.nat.ip
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: ip
			* Example: 
			*/
			"ip": string,

			/**
			* source.nat.port
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: long
			* Example: 
			*/
			"port": number,

		}
		/**
		* source.packets
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 12
		*/
		"packets": number,

		/**
		* source.port
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: long
		* Example: 
		*/
		"port": number,

		/**
		* source.registered_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.com
		*/
		"registered_domain": string,

		/**
		* source.subdomain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: east
		*/
		"subdomain": string,

		/**
		* source.top_level_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
		* Field Set: source
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: co.uk
		*/
		"top_level_domain": string,

		user: {
			/**
			* source.user.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* source.user.email
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"email": string,

			/**
			* source.user.full_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Albert Einstein
			*/
			"full_name": string,

			group: {
				/**
				* source.user.group.domain
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
				* Field Set: source
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"domain": string,

				/**
				* source.user.group.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
				* Field Set: source
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"id": string,

				/**
				* source.user.group.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
				* Field Set: source
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 
				*/
				"name": string,

			}
			/**
			* source.user.hash
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"hash": string,

			/**
			* source.user.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* source.user.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: core
			* Elasticsearch type: keyword
			* Example: albert
			*/
			"name": string,

			/**
			* source.user.roles
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-source.html
			* Field Set: source
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["kibana_admin", "reporting_user"]
			*/
			"roles": string[],

		}
	}
	span: {
		/**
		* span.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-span.html
		* Field Set: span
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 3ff9a8981b7ccd5a
		*/
		"id": string,

	}
	/**
	* tags
	* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-base.html
	* Field Set: base
	* Is Indexed: true
	* Level: core
	* Elasticsearch type: keyword
	* Example: ["production", "env2"]
	*/
	"tags": string[],

	threat: {
		/**
		* threat.framework
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
		* Field Set: threat
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: MITRE ATT&CK
		*/
		"framework": string,

		tactic: {
			/**
			* threat.tactic.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: TA0002
			*/
			"id": string[],

			/**
			* threat.tactic.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Execution
			*/
			"name": string[],

			/**
			* threat.tactic.reference
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: https://attack.mitre.org/tactics/TA0002/
			*/
			"reference": string[],

		}
		technique: {
			/**
			* threat.technique.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: T1059
			*/
			"id": string[],

			/**
			* threat.technique.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Command and Scripting Interpreter
			*/
			"name": string[],

			/**
			* threat.technique.reference
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
			* Field Set: threat
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: https://attack.mitre.org/techniques/T1059/
			*/
			"reference": string[],

			subtechnique: {
				/**
				* threat.technique.subtechnique.id
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
				* Field Set: threat
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: T1059.001
				*/
				"id": string[],

				/**
				* threat.technique.subtechnique.name
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
				* Field Set: threat
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: PowerShell
				*/
				"name": string[],

				/**
				* threat.technique.subtechnique.reference
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-threat.html
				* Field Set: threat
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: https://attack.mitre.org/techniques/T1059/001/
				*/
				"reference": string[],

			}
		}
	}
	tls: {
		/**
		* tls.cipher
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
		*/
		"cipher": string,

		client: {
			/**
			* tls.client.certificate
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: MII...
			*/
			"certificate": string,

			/**
			* tls.client.certificate_chain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["MII...", "MII..."]
			*/
			"certificate_chain": string[],

			hash: {
				/**
				* tls.client.hash.md5
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 0F76C7F2C55BFD7D8E8B8F4BFBF0C9EC
				*/
				"md5": string,

				/**
				* tls.client.hash.sha1
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 9E393D93138888D288266C2D915214D1D1CCEB2A
				*/
				"sha1": string,

				/**
				* tls.client.hash.sha256
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 0687F666A054EF17A08E2F2162EAB4CBC0D265E1D7875BE74BF3C712CA92DAF0
				*/
				"sha256": string,

			}
			/**
			* tls.client.issuer
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: CN=Example Root CA, OU=Infrastructure Team, DC=example, DC=com
			*/
			"issuer": string,

			/**
			* tls.client.ja3
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: d4e5b18d6b55c71272893221c96ba240
			*/
			"ja3": string,

			/**
			* tls.client.not_after
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 2021-01-01T00:00:00.000Z
			*/
			"not_after": Date,

			/**
			* tls.client.not_before
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 1970-01-01T00:00:00.000Z
			*/
			"not_before": Date,

			/**
			* tls.client.server_name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: www.elastic.co
			*/
			"server_name": string,

			/**
			* tls.client.subject
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: CN=myclient, OU=Documentation Team, DC=example, DC=com
			*/
			"subject": string,

			/**
			* tls.client.supported_ciphers
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384", "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384", "..."]
			*/
			"supported_ciphers": string[],

			x509: {
				/**
				* tls.client.x509.alternative_names
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: *.elastic.co
				*/
				"alternative_names": string[],

				issuer: {
					/**
					* tls.client.x509.issuer.common_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example SHA2 High Assurance Server CA
					*/
					"common_name": string[],

					/**
					* tls.client.x509.issuer.country
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: US
					*/
					"country": string[],

					/**
					* tls.client.x509.issuer.distinguished_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
					*/
					"distinguished_name": string,

					/**
					* tls.client.x509.issuer.locality
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Mountain View
					*/
					"locality": string[],

					/**
					* tls.client.x509.issuer.organization
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example Inc
					*/
					"organization": string[],

					/**
					* tls.client.x509.issuer.organizational_unit
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: www.example.com
					*/
					"organizational_unit": string[],

					/**
					* tls.client.x509.issuer.state_or_province
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: California
					*/
					"state_or_province": string[],

				}
				/**
				* tls.client.x509.not_after
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: date
				* Example: 2020-07-16 03:15:39+00:00
				*/
				"not_after": Date,

				/**
				* tls.client.x509.not_before
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: date
				* Example: 2019-08-16 01:40:25+00:00
				*/
				"not_before": Date,

				/**
				* tls.client.x509.public_key_algorithm
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: RSA
				*/
				"public_key_algorithm": string,

				/**
				* tls.client.x509.public_key_curve
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: nistp521
				*/
				"public_key_curve": string,

				/**
				* tls.client.x509.public_key_exponent
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: false
				* Level: extended
				* Elasticsearch type: long
				* Example: 65537
				*/
				"public_key_exponent": number,

				/**
				* tls.client.x509.public_key_size
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: long
				* Example: 2048
				*/
				"public_key_size": number,

				/**
				* tls.client.x509.serial_number
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 55FBB9C7DEBF09809D12CCAA
				*/
				"serial_number": string,

				/**
				* tls.client.x509.signature_algorithm
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: SHA256-RSA
				*/
				"signature_algorithm": string,

				subject: {
					/**
					* tls.client.x509.subject.common_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: shared.global.example.net
					*/
					"common_name": string[],

					/**
					* tls.client.x509.subject.country
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: US
					*/
					"country": string[],

					/**
					* tls.client.x509.subject.distinguished_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
					*/
					"distinguished_name": string,

					/**
					* tls.client.x509.subject.locality
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: San Francisco
					*/
					"locality": string[],

					/**
					* tls.client.x509.subject.organization
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example, Inc.
					*/
					"organization": string[],

					/**
					* tls.client.x509.subject.organizational_unit
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: 
					*/
					"organizational_unit": string[],

					/**
					* tls.client.x509.subject.state_or_province
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: California
					*/
					"state_or_province": string[],

				}
				/**
				* tls.client.x509.version_number
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 3
				*/
				"version_number": string,

			}
		}
		/**
		* tls.curve
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: secp256r1
		*/
		"curve": string,

		/**
		* tls.established
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: boolean
		* Example: 
		*/
		"established": boolean,

		/**
		* tls.next_protocol
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: http/1.1
		*/
		"next_protocol": string,

		/**
		* tls.resumed
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: boolean
		* Example: 
		*/
		"resumed": boolean,

		server: {
			/**
			* tls.server.certificate
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: MII...
			*/
			"certificate": string,

			/**
			* tls.server.certificate_chain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: ["MII...", "MII..."]
			*/
			"certificate_chain": string[],

			hash: {
				/**
				* tls.server.hash.md5
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 0F76C7F2C55BFD7D8E8B8F4BFBF0C9EC
				*/
				"md5": string,

				/**
				* tls.server.hash.sha1
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 9E393D93138888D288266C2D915214D1D1CCEB2A
				*/
				"sha1": string,

				/**
				* tls.server.hash.sha256
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 0687F666A054EF17A08E2F2162EAB4CBC0D265E1D7875BE74BF3C712CA92DAF0
				*/
				"sha256": string,

			}
			/**
			* tls.server.issuer
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: CN=Example Root CA, OU=Infrastructure Team, DC=example, DC=com
			*/
			"issuer": string,

			/**
			* tls.server.ja3s
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 394441ab65754e2207b1e1b457b3641d
			*/
			"ja3s": string,

			/**
			* tls.server.not_after
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 2021-01-01T00:00:00.000Z
			*/
			"not_after": Date,

			/**
			* tls.server.not_before
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: date
			* Example: 1970-01-01T00:00:00.000Z
			*/
			"not_before": Date,

			/**
			* tls.server.subject
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
			* Field Set: tls
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: CN=www.example.com, OU=Infrastructure Team, DC=example, DC=com
			*/
			"subject": string,

			x509: {
				/**
				* tls.server.x509.alternative_names
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: *.elastic.co
				*/
				"alternative_names": string[],

				issuer: {
					/**
					* tls.server.x509.issuer.common_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example SHA2 High Assurance Server CA
					*/
					"common_name": string[],

					/**
					* tls.server.x509.issuer.country
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: US
					*/
					"country": string[],

					/**
					* tls.server.x509.issuer.distinguished_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: C=US, O=Example Inc, OU=www.example.com, CN=Example SHA2 High Assurance Server CA
					*/
					"distinguished_name": string,

					/**
					* tls.server.x509.issuer.locality
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Mountain View
					*/
					"locality": string[],

					/**
					* tls.server.x509.issuer.organization
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example Inc
					*/
					"organization": string[],

					/**
					* tls.server.x509.issuer.organizational_unit
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: www.example.com
					*/
					"organizational_unit": string[],

					/**
					* tls.server.x509.issuer.state_or_province
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: California
					*/
					"state_or_province": string[],

				}
				/**
				* tls.server.x509.not_after
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: date
				* Example: 2020-07-16 03:15:39+00:00
				*/
				"not_after": Date,

				/**
				* tls.server.x509.not_before
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: date
				* Example: 2019-08-16 01:40:25+00:00
				*/
				"not_before": Date,

				/**
				* tls.server.x509.public_key_algorithm
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: RSA
				*/
				"public_key_algorithm": string,

				/**
				* tls.server.x509.public_key_curve
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: nistp521
				*/
				"public_key_curve": string,

				/**
				* tls.server.x509.public_key_exponent
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: false
				* Level: extended
				* Elasticsearch type: long
				* Example: 65537
				*/
				"public_key_exponent": number,

				/**
				* tls.server.x509.public_key_size
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: long
				* Example: 2048
				*/
				"public_key_size": number,

				/**
				* tls.server.x509.serial_number
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 55FBB9C7DEBF09809D12CCAA
				*/
				"serial_number": string,

				/**
				* tls.server.x509.signature_algorithm
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: SHA256-RSA
				*/
				"signature_algorithm": string,

				subject: {
					/**
					* tls.server.x509.subject.common_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: shared.global.example.net
					*/
					"common_name": string[],

					/**
					* tls.server.x509.subject.country
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: US
					*/
					"country": string[],

					/**
					* tls.server.x509.subject.distinguished_name
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: C=US, ST=California, L=San Francisco, O=Example, Inc., CN=shared.global.example.net
					*/
					"distinguished_name": string,

					/**
					* tls.server.x509.subject.locality
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: San Francisco
					*/
					"locality": string[],

					/**
					* tls.server.x509.subject.organization
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: Example, Inc.
					*/
					"organization": string[],

					/**
					* tls.server.x509.subject.organizational_unit
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: 
					*/
					"organizational_unit": string[],

					/**
					* tls.server.x509.subject.state_or_province
					* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
					* Field Set: tls
					* Is Indexed: true
					* Level: extended
					* Elasticsearch type: keyword
					* Example: California
					*/
					"state_or_province": string[],

				}
				/**
				* tls.server.x509.version_number
				* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
				* Field Set: tls
				* Is Indexed: true
				* Level: extended
				* Elasticsearch type: keyword
				* Example: 3
				*/
				"version_number": string,

			}
		}
		/**
		* tls.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 1.2
		*/
		"version": string,

		/**
		* tls.version_protocol
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-tls.html
		* Field Set: tls
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: tls
		*/
		"version_protocol": string,

	}
	trace: {
		/**
		* trace.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-trace.html
		* Field Set: trace
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 4bf92f3577b34da6a3ce929d0e0e4736
		*/
		"id": string,

	}
	transaction: {
		/**
		* transaction.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-transaction.html
		* Field Set: transaction
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 00f067aa0ba902b7
		*/
		"id": string,

	}
	url: {
		/**
		* url.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: www.elastic.co
		*/
		"domain": string,

		/**
		* url.extension
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: png
		*/
		"extension": string,

		/**
		* url.fragment
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"fragment": string,

		/**
		* url.full
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://www.elastic.co:443/search?q=elasticsearch#top
		*/
		"full": string,

		/**
		* url.original
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://www.elastic.co:443/search?q=elasticsearch#top or /search?q=elasticsearch
		*/
		"original": string,

		/**
		* url.password
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"password": string,

		/**
		* url.path
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"path": string,

		/**
		* url.port
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: long
		* Example: 443
		*/
		"port": number,

		/**
		* url.query
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"query": string,

		/**
		* url.registered_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: example.com
		*/
		"registered_domain": string,

		/**
		* url.scheme
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https
		*/
		"scheme": string,

		/**
		* url.subdomain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: east
		*/
		"subdomain": string,

		/**
		* url.top_level_domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: co.uk
		*/
		"top_level_domain": string,

		/**
		* url.username
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-url.html
		* Field Set: url
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"username": string,

	}
	user: {
		/**
		* user.domain
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"domain": string,

		/**
		* user.email
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"email": string,

		/**
		* user.full_name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Albert Einstein
		*/
		"full_name": string,

		group: {
			/**
			* user.group.domain
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
			* Field Set: user
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"domain": string,

			/**
			* user.group.id
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
			* Field Set: user
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"id": string,

			/**
			* user.group.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
			* Field Set: user
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 
			*/
			"name": string,

		}
		/**
		* user.hash
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 
		*/
		"hash": string,

		/**
		* user.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: 
		*/
		"id": string,

		/**
		* user.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: core
		* Elasticsearch type: keyword
		* Example: albert
		*/
		"name": string,

		/**
		* user.roles
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user.html
		* Field Set: user
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["kibana_admin", "reporting_user"]
		*/
		"roles": string[],

	}
	user_agent: {
		device: {
			/**
			* user_agent.device.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: iPhone
			*/
			"name": string,

		}
		/**
		* user_agent.name
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
		* Field Set: user_agent
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Safari
		*/
		"name": string,

		/**
		* user_agent.original
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
		* Field Set: user_agent
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1
		*/
		"original": string,

		os: {
			/**
			* user_agent.os.family
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: debian
			*/
			"family": string,

			/**
			* user_agent.os.full
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS Mojave
			*/
			"full": string,

			/**
			* user_agent.os.kernel
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 4.4.0-112-generic
			*/
			"kernel": string,

			/**
			* user_agent.os.name
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Mac OS X
			*/
			"name": string,

			/**
			* user_agent.os.platform
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: darwin
			*/
			"platform": string,

			/**
			* user_agent.os.version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
			* Field Set: user_agent
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 10.14.1
			*/
			"version": string,

		}
		/**
		* user_agent.version
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-user_agent.html
		* Field Set: user_agent
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 12
		*/
		"version": string,

	}
	vulnerability: {
		/**
		* vulnerability.category
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: ["Firewall"]
		*/
		"category": string[],

		/**
		* vulnerability.classification
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: CVSS
		*/
		"classification": string,

		/**
		* vulnerability.description
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: In macOS before 2.12.6, there is a vulnerability in the RPC...
		*/
		"description": string,

		/**
		* vulnerability.enumeration
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: CVE
		*/
		"enumeration": string,

		/**
		* vulnerability.id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: CVE-2019-00001
		*/
		"id": string,

		/**
		* vulnerability.reference
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2019-6111
		*/
		"reference": string,

		/**
		* vulnerability.report_id
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: 20191018.0001
		*/
		"report_id": string,

		scanner: {
			/**
			* vulnerability.scanner.vendor
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
			* Field Set: vulnerability
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: Tenable
			*/
			"vendor": string,

		}
		score: {
			/**
			* vulnerability.score.base
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
			* Field Set: vulnerability
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: float
			* Example: 5.5
			*/
			"base": number,

			/**
			* vulnerability.score.environmental
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
			* Field Set: vulnerability
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: float
			* Example: 5.5
			*/
			"environmental": number,

			/**
			* vulnerability.score.temporal
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
			* Field Set: vulnerability
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: float
			* Example: 
			*/
			"temporal": number,

			/**
			* vulnerability.score.version
			* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
			* Field Set: vulnerability
			* Is Indexed: true
			* Level: extended
			* Elasticsearch type: keyword
			* Example: 2
			*/
			"version": string,

		}
		/**
		* vulnerability.severity
		* Docs: https://www.elastic.co/guide/en/ecs/1.7/ecs-vulnerability.html
		* Field Set: vulnerability
		* Is Indexed: true
		* Level: extended
		* Elasticsearch type: keyword
		* Example: Critical
		*/
		"severity": string,

	}

}