# Facade Pattern

Using an External Service or API
Authentication Services
Mail Chimp
Stripe

Your Application
||
HTTP Client
||
FACADE -> we need making something that api can't give straight
||
Service
||
Service Restful Api

Facade Abstract logic break down (handleSignUp | checkIfMilestoneReached | milestoneReached)

Out case service get stuff from api users, todos, comments
we want api get user by id with his todos and his comments

Facade will hold api of service as data member
and adding member that implements our needs
