# Microservices-foobar

### Microservices app to test orchestrator systems like k8s and ECS

The project has 3 web services:

- Web: main service that makes a request to the "foo" service and shows the hostname of foo and bar
- Foo: service that make a request to "bar" service and return the hostname of the foo and bar service as json
- Foo: service that return its hostname as json

Web ---> request to ---> Foo ---> request to ---> Bar

Web <--- return hostname <--- Foo <--- return hostname <--- Bar

