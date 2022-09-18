# [Project](https:) - Helpline Express Tool  
## [insert project banner]

Helpline wait-times are no joke, with call center agents sometimes being overwhelmed. Rekindle offers a solution, sending summaries to agents in advance to better allow them to focus on caller safety. [Project] is a full stack app wanting to help people seek help quicker. Over the past X years and heightened by the pandemic, over Y people have called to a help line, where the average wait time is Z minutes. 

Try it out: https://.vercel.app/
## 1. Project Description 

### App Image Previews
<details>
	<summary>Expand to view Images</summary>
	drag and drop 

</details>

### Tech Stack
[React](https://reactjs.org/) | [ChakraUI](https://chakra-ui.com/) | [Next.js](https://nextjs.org/) | [Cohere](https://cohere.ai/) | [Firebase](https://firebase.google.com/)  

### Contents

-   [1. Project Description](#1-project-description)
-   [2. Goals](#2-goals)
-   [3. Integration of Tech](#3-integration-of-tech)
-   [4. Next Steps](#4-next-steps)
-   [5. Contributions](#5-contributions)

<br/>

---
## 2. Goals

### Goals

- ✅Caller View
- ✅Admin View
- ✅Preserve Call Order 

### Stretch Goals

- ❌Dark mode
- ❌Speech-to-text 
- ❌Twilio Notifications

<br/>

---
## 3. Integration of Tech

### HTML, CSS, JS
- Used Chakra-UI as a frontend React component Library
- Additionally customized styling using inline CSS

### React 
- Used React to Create the App and setup structure following best React practices:
  - Components, and pages folder.
  - Utility folder that contains commonly used functions
  - React Prevents DOM injection attacks, and virtual DOM structure reduces page load times by eliminating unnecessary updates
 - Build composable reusable React components
  - Used Chakra factory function to convert all components to chakra components which allow passing chakra props for us in inline styling
  - Minimized code repetition
- Used Redux to track state
  - Eliminates the need to pass state as props
- Used Local Storage to store user-specific data
  - Stores light/dark mode flags
  - Stores user session information 

### Next.js
- Set up Express server using NodeJS
- Setup APIs using Express for:
  - Getting, Adding, Updating, Removing user data
  - Getting, Adding, Updating, Removing order data
  - Getting, Adding, Updating, Removing payments information 
- How the server helps:
  - Facilitate communication between the front end and the database to store, change, and retrieve information from MongoDB 
  - Keeps implementation and data hidden from clients, therefore being more secure than not using a server

### Cohere AI Text Summarization
- Fed example training data to demonstrate task to model. 

### NoSQL with Firebase Cloud Firestore
- Set up collections in MongoDB for storing Order and User information so that data is persisted
  - MongoDB’s NoSQL eliminates the need for relations between tables.
  - Lower latency for reading/writing to large databases.
  - Data stored as JSON.
  - Horizontal scaling rather than vertical scaling.
- Built a scalable schema design in MongoDB enabling the storage and lookup of:
  - Real-time orders
  - User data

### Release Engineering
- Deployed frontend on Vercel
  - Better performance and faster compared to Heroku
  - No need to awaken Dyno (from Heroku) resulting in crashed applications, slower bootup, and slower user experience.

<br/>

---

## 4. Next Steps
- Integrate speech-to-text capabilities for callers
- Develop a notification system that will email/SMS users about their queue position update
- Security features
  - Protected/Authenticated Endpoints
  - Encryption of Environmental Variables 
- Customer support section in the form of a chat bot for immediate interaction

<br/>

---

## 5. Contributions

### [Janaye Cheong](https://www.linkedin.com/in/janaye-cheong-105513/)
- Developed a responsive front-end for Profile, Login, Help, and Account pages including interactive components for user accessibility and better user experience such as light/dark mode, toasts, Google OAuth, Google reverse geolocation,  and subtle styling. 
- Took leadership in setting up scalable MongoDB schema and directing data flow along with associated backend endpoints.
- Coordinated and scheduled meetings, weekly scrums, sprint retros, and sprint planning.
- Deployed application and implemented dynamic routing for profiles.

### [Trisha Sia](https://www.linkedin.com/in/trisha-sia/)
- Led the overall UI/UX development. Designed the overall App flow and build major UI elements for all pages
- Build the dashboard, manage orders, and view group order pages, and the associated components.
- Create backend routes and integrated API to the frontend for managing group orders, removing users from orders, and deleting orders. 

### [Melvin Teo](https://www.linkedin.com/in/melvinhteo/)
- Led the development of the caller queue system with React and Next.js
- Setup/developed backend routes for handling logic for caller and operator views 
- Implemented database to store user summaries and remedies using Firebase Cloud Firestore 

### [Byron Wang](https://www.linkedin.com/in/byronwang93/)
- Designed and implemented the whole payment workflow on the front end to allow users to add credit cards and pay for existing orders using saved credit cards, including the payment page and touching on the order management pages as well
- Designed and implemented the api routes that facilitate communication between the front end and Stripe API, doing things such as redirecting the user to an external Stripe link, creating users/accounts/payments on the Stripe side, and setting up Stripe configurations
- Created the New Group Order form and sort/filter system on the Dashboard

