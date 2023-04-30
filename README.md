# [Project](https://rekindle.vercel.app/) - Hotline Service Tool

rekindle is an online mental health hotline service accessible to both users and hotline responders. users are encouraged to talk to trained personnel, first describing their situation to an input system; instantaneously; OpenAI natural language processing models (initially co:here) extract needed information from the user circumstance and provides a summary and a list of potential solutions. The summary of the alleged case and list of solutions are delivered to an open hotline worker/volunteer, who is informed with crucial facts and resources such as emergency phone numbers or counselling options for the user.

Try it out: https://rekindle.vercel.app/

## 1. Project Description

### App Image Previews

<details>
	<summary>Expand to view Images</summary>
	<img width="1400" alt="rekindle home page" src="https://user-images.githubusercontent.com/62491197/235338558-0842786f-f14b-4ef6-8742-331d27a5fc7d.png">
	<img width="1400" alt="rekindle caller information page" src="https://user-images.githubusercontent.com/62491197/235338582-c8db66c5-89cb-492e-969b-27d818bdc88d.png">
	<img width="1400" alt="rekindle responder dashboard" src="https://user-images.githubusercontent.com/62491197/235338584-787c320a-9fd0-4e77-b249-4a6277760136.png">
	<img width="1400" alt="rekindle caller wait page" src="https://user-images.githubusercontent.com/62491197/235338586-6fb5bca3-3b35-46bb-97b9-f67040a8f831.png">
	<img width="1400" alt="rekindle login page" src="https://user-images.githubusercontent.com/62491197/235338589-47486a04-d86b-4799-a428-9a6a6ebe74dd.png">
</details>

<br>

### Tech Stack

[React](https://reactjs.org/) | [ChakraUI](https://chakra-ui.com/) | [Next.js](https://nextjs.org/) | [Cohere](https://cohere.ai/) | [Firebase](https://firebase.google.com/) | [OpenAI](https://openai.com/)

### Contents

- [1. Project Description](#1-project-description)
- [2. Goals](#2-goals)
- [3. Integration of Tech](#3-integration-of-tech)
- [4. Next Steps](#4-next-steps)
- [5. Contributions](#5-contributions)

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
- Implemented database to store user summaries and solutions using Firebase Cloud Firestore

### [Byron Wang](https://www.linkedin.com/in/byronwang93/)

- Helped set up Firebase Cloud Firestore
- Transferred the frontend repository to utilize Next.js
