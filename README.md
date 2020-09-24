# :page_with_curl: Unc Software Online Test

This is the API repository of the UncSoftware Test. All the source code and requirements are described here. Check the required steps below :point_down:

## :ok_hand: What you should do

- [ ] **Create a React or React Native**

  - Your can choose JavaScript or TypeScript

- [ ] **Create a page to register a new customer in the database**

  - This page must have these input fields:
    - Name (_required_)
    - Email (_required_)
    - Phone (_required_)
    - Birth Date (_required_)
    - Postal Code
    - Street Name
    - Neighborhood
    - City
    - State
  - You should create a button to send a request to the API
  - The page should handle errors returned from the API
  - After save a customer you should clear all input fields
  - A loading indicator must appear while the API is processing your request

**:computer: If your project is a website**

- [ ] Your website should work well in a cellphone, tablet and in the web (responsiveness)

**:vibration_mode: If your project is a React Native app**

- [ ] Create a splash screen for your project (a splash screen is shown when the app is opening)

## :globe_with_meridians: How to consume the API

- This API is running at: http://unicodesoftware.ddns.net:3333
- You can also clone this project and run in your computer

The file `insomnia.json` in the root of the project contain all the methods below. You can import this file in your Insomnia to test requests.

**Methods**

Route | Method | Explanation
--- | --- | --- | ---
/customers:id | GET | Get all customers or a single one if you put the id in the route (ex: `/customers/abc123` will return only one customer)
/customers | PATCH | Edit a customer
/customers | POST | Save a new customer
/customers:id | DELETE | Delete a customer

**Customer Data**

Field | Type | Explanation
--- | --- | ---
id | uuid | Customer ID (uuid4)
name | string | Customer name
email | string | Customer email
phone | string | Customer phone
birthDate | string | Customer birth date
postalCode | string | Customer postal code (CEP in Brazil)
streetName | string | Customer street name
neighborhood | string | Customer neighborhood (Bairro in Brazil)
city | string | Customer city
state | string | Customer State (SP, RJ, MS)
createdAt | timestamp | Creation date
updatedAt | timestamp | Last update date

## :-1: What you should not do

- [ ] Don't use UI kits such as Material UI, React Bootstrap
- [ ] Don't use React templates

## :star: Differentials

- [ ] Setup Eslint and Prettier in your project
- [ ] A beautiful design and great usability
- [ ] Automated tests
- [ ] TypeScript

## :rocket: How to submit your project to us

:email: Send an email to us with the url of your repository:

PS: If your project is a website you can deploy to the GitHub Pages, Firebase Hosting or others to help us testing.

- Email: contato@unicodesoftware.com.br
- Subject: UNC Online Test
- Message: Put here the URL of your repository in GitHub or GitLab

We will analyze your project and give you feedback faster as we can.

## :poop: If you find a problem in the API

Create an issue in this project and our team will fix as fast as we can.
