# [Project](https://rekindle.vercel.app/) - Hotline Service Tool  

rekindle is an online mental health hotline service accessible to both users and hotline responders. users are encouraged to talk to trained personnel, first describing their situation to an input system; instantaneously, co:here natural language programming intelligence extracts needed information from the user circumstance and provides a summary. The summary of the alleged case is delivered to an open hotline worker/volunteer, who is informed with crucial facts and resources such as emergency phone numbers or counselling options for the user.

Try it out: https://rekindle.vercel.app/
## 1. Project Description 

### App Image Previews
<details>
	<summary>Expand to view Images</summary>
	<img width="1400" alt="Screen Shot 2022-09-18 at 7 54 00 AM" src="https://user-images.githubusercontent.com/62491197/190984112-29302c82-ad05-4e9c-9a25-606cd764acb5.png">
	<img width="1400" alt="Screen Shot 2022-09-18 at 7 54 11 AM" src="https://user-images.githubusercontent.com/62491197/190984133-019035a4-32fc-4d7d-8b51-e0cdf57202d7.png">
	<img width="1400" alt="Screen Shot 2022-09-18 at 7 54 26 AM" src="https://user-images.githubusercontent.com/62491197/190984146-50d9fdd4-b8bb-42b0-90a6-f0e5a389378e.png">


</details>

<br>

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

- ✅Create form for caller input
- ✅Display calls for admin view
- ✅Integrate Cohere AI text summarization API 
- ❌Dark mode
- ❌Speech-to-text 
- ❌Twilio Notifications
- ❌Responsive

<br/>

---
## 3. Integration of Tech

### Figma
- Used Figma to prototype the UI/UX
- [Prototype Link](https://www.figma.com/file/Gyrsv5zseQPvExfnGEtlRN/rekindle?node-id=9%3A3)

### HTML, CSS, JS
- Used Chakra-UI as a frontend React component Library
- Additionally customized styling using inline CSS

### React & Next.js
- React web framework that fast-tracks the creation of web apps

### Cohere AI Text Summarization
- Fed example training data to demonstrate task to model

### NoSQL with Firebase Cloud Firestore
- Set up collections of documents on Cloud Firestore via Firebase JavaScript SDK

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
- Initiated presets in co:here with user text summarization and artificial intelligence implementation for responses
- Contributed to UI/UX development with React and Figma

### [Trisha Sia](https://www.linkedin.com/in/trisha-sia/)
- Took leadership with UI/UX development and wireframing
- Developed HTML / CSS React elements 

### [Melvin Teo](https://www.linkedin.com/in/melvinhteo/)
- Led the development of the caller queue system with React and Next.js
- Setup/developed backend routes for handling logic for caller and operator views 
- Implemented database to store user summaries and remedies using Firebase Cloud Firestore 

### [Byron Wang](https://www.linkedin.com/in/byronwang93/)
- Helped set up Firebase Cloud Firestore
- Transferred the frontend repository to utilize Next.js