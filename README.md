# Person Management System
## HNG STAGE 2 PROJECT 
This project is a person management system that allows users to perform CRUD (Create, Read, Update, Delete) operations on individuals. It provides functionalities to create, retrieve, edit, and delete person records based on their unique user ID.

## Features

1. **Create a Person**
   - Endpoint:  `/api` 
   - Method:  `POST` 
   - Description: This feature allows users to create a new person record by providing necessary information such as full name, age, address, etc. The system assigns a unique user ID to each person upon creation.

2. **Get a Person**
   - Endpoint:  `/api/api?user_id={{}}` 
   - Method:  `GET` 
   - Description: This feature allows users to retrieve information about a specific person by providing their user ID. The system returns the person's details, including full name, age, address, etc.

3. **Edit a Person**
   - Endpoint:  `/person/api?user_id={{}}` 
   - Method:  `PUT` 
   - Description: This feature enables users to update the details of a person by specifying their user ID. Users can modify attributes such as full name, age, address, etc. The system updates the person's information accordingly.

4. **Delete a Person**
   - Endpoint:  `/person/api?user_id={{}}` 
   - Method:  `DELETE` 
   - Description: This feature allows users to delete a person record from the system by providing their user ID. Once deleted, the person's information is permanently removed from the database.

## Technologies Used

- Programming Language: Javascript
- Framework: Expresss Js
- Database: Mongodb
- API Testing Tool: Postman

## Setup and Usage

- Clone reppository: `git clone https://github.com/PersonAPI`
- Add a `.env` file to root of the repository
- Install all dependencies: `npm install`
- To start `npm run start`
## Author
[Sxamoecode](https://github/Sxamoecode)
## License
[Github](https://github.com)

