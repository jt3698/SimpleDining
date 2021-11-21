# SimpleDining

## Inspiration
During this pandemic, we notice how more and more restaurants are shifting towards contactless service with QR codes leading to digital menus. However, unlike the takeout and delivery apps we all have grown accustomed to, there isn’t a central hub for those dining-in. As the world begins to climb back to ‘normalcy’, we see an opportunity for restaurants to make the most out of the circumstances. 

## What it does
Our project aims to help restaurant owners grow their business by having a platform that provides them with not only the tools to create a digital dining experience but also incentivizes feedback from customers. Paired with the digital ordering system, restaurants will now have a lot more options to receive direct and specific feedback, which includes, but are not limited to, food, service, ambience, etc. These avenues will certainly help restaurants find what works and what doesn’t and boost them towards success.

## How we built it
We used React to develop the frontend for the business side web-based application, while we decided to use React-Native for developing the frontend for the customer mobile application. We used a Golang backend for both applications. We chose Golang because we wanted to prioritize speed and efficiency for a smooth user experience.

For user authentication, we utilized Google’s Firebase Auth as well as Twilio’s verification API. These tools helped us create a secure and scalable authentication service ready for production.
To store user information, reviews and much more, we hosted our database on MongoDB Atlas, which removed a lot of the hassle of setting up databases. 

To ensure a smooth development and deployment, we containerized our applications with Docker and made use of Linode’s amazing cloud hosting to run a Kubernetes instance that helped in organizing the multiple services that we used in our application. 

## Challenges we ran into
A lot of the technologies we used were completely new for our team and we often ran into syntax issues as well as many other problems we would not have come across had we had more experience with these technologies. Another problem was that due to time constraints, we had to drop some of the features we initially intended to write.

## Accomplishments that we're proud of
- Learning new technologies quickly.

- Good project management.

- Great teamwork

## What's next for SimpleDining
We hope that this project gets great feedback in this hackathon. Nevertheless, we want to continue to develop this project. There are a lot of things that need polishing and it would be a fun and educational challenge to try to get this project fully up and running. We thought of several new ideas that could be implemented to the project after, but did not have the time to during the hack. We truly believe in the idea and we would love to see it through. 
