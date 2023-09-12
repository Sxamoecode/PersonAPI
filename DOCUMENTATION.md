# Person CRUD API
This project is a person management system that allows users to perform CRUD (Create, Read, Update, Delete) operations on individuals. It provides functionalities to create, retrieve, edit, and delete person records based on their unique user ID.

## DOCUMENTATION
**Postman**: [Documentation](`https://documenter.##postman.com/view/23031395/2s9YC2ytCQ`)  
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23031395-ac0e58bf-a3d0-468c-9dd2-1dfd660f6697?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D23031395-ac0e58bf-a3d0-468c-9dd2-1dfd660f6697%26entityType%3Dcollection%26workspaceId%3D7b51de54-1a2d-4b7e-b317-396874e17126)
## 1. POST
**Create Person**  
`http://personapi-h2ch.onrender.com/api`  
Create a Person by entering the fullName to the request body

*Body raw (json)*  
`json`  
{
    "fullName": "Mentor joypiece"
}

## 2. GET
**Get Person**  
`http://personapi-h2ch.onrender.com/api/user_id?user_id=64ff2b49a9e4a22334d3fe84`  
Fetch Person by their _id from from database  
**Query Params**  
**user_id**: `64ff2b49a9e4a22334d3fe84`

## 3. PUT
**Edit Person**  
`http://personapi-h2ch.onrender.com/api/user_id?user_id=64ff2b49a9e4a22334d3fe84`  
Edit an already created Person and replace with new fullName passed to the request body

**Query Params**
**user_id**: 64ff2b49a9e4a22334d3fe84  
**Body raw (json)**  
`json`  
{
    "fullName": "Mentor joy"
}

## 4. DELETE
**Delete Person**  
`http://personapi-h2ch.onrender.com/api/user_id?user_id=64ff2b49a9e4a22334d3fe84`  
Delete Person by inserting their _id to the query section

**Query Params**  
**user_id**: 64ff2b49a9e4a22334d3fe84
