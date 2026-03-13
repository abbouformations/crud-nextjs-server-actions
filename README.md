This is an example for application developped with Next.js 16 using "Server Actions".
The application communicate with a API backend (http://localhost:8080/customers). This backend application is available in GITHUB : https://github.com/abbouformations/customer-service.git.
GET ==> all customers : http://localhost:8080/customers
GET ==> customer by id : http://localhost:8080/customers/id
POST ==> new customer : http://localhost:8080/customers {"identityref:"IDENTITY_REF","firstanme":"FIRST_NAME","lastname":"LAST_NAME","username":"USER_NAME"}
PUT ==> update a customer : http://localhost:8080/customers/id {"identityref:"IDENTITY_REF","firstanme":"FIRST_NAME","lastname":"LAST_NAME","username":"USER_NAME"}
DELETE ==> delete a customer : http://localhost:8080/customers/id

