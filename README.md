# HMK - Heavy Metal Karaoke

## Overview
In this new remote world, fans of karaoke have been trying to come up with solutions for singing over video chat. The solution we have come up with is to meet on Zoom and have the person singing share their screen and audio with their own youtube video. The one thing that doesn't solve is a signup sheet. Sure, we could just use a google sheet, but this app doesn't require anyone to have an account anywhere! It functions similarly to a Jackbox or Kahoot signup where a host creates a room, and then participants can join by entering that room code. Once people are in, they can sign up for what song they want to sing, include the youtube link so it stays handy, and see who else is signed up. The host also has the ability to edit the list if need be.

This app was started for the [MHacks 13 Beta](https://mhacks-13-beta.devpost.com/) hackathon. I chose to work solo despite being allowed a team of up to 4 because I wanted to see how far I could get by myself. I ended up with a fully functional backend, and won the Wolfram Award for Top 30 Hacks!

## MVP Goals

1. Host can create a room with its own unique, randomly generated code
1. Host can add Zoom link to room so users know where the party is
1. Users can join host's room via code
1. Users can add songs to list
1. Host can edit list
1. Mobile first

## PostMVP Goals

1. Host can mark songs as complete, greys out links
1. User authentication
1. Responsive design - desktop view
1. Dark mode/light mode
1. Random button to generate song suggestions

## Backend Planning

Ruby on Rails backend for speed during hackathon

### ERD

// ![ERD]()

## Frontend Planning

Using ReactJS because it is great for creating responsive single-page applications.

## Wireframes

// ![wireframes]()

### Component Heirarchy

// ![component-heirarchy]()

#### Component Breakdown

|  Component         | State | Description                                                      |
| :----------------: | :---: | :--------------------------------------------------------------- |
| UserHome           |       | _Home page displays user's cards in a list_ |
| CardDetail         |       | _Detailed view of individual card with progress bar_ |
| NewCard            |       | _Allows user to create new card_ |
| EditCard           |       | _Allows user to edit existing card_ |
| Login              |       | _User login screen_ |
| Signup             |       | _New user registration screen_ |
| Settings           |       | _Users can edit preferences like dark mode and color theme_ |
| Button             |       | _Reusable button_ |
| CardList           |       | _Displays the existing cards as a list_ |
| CardGrid           |       | _X-Effect Card_ |
| Motivational Quote |       | _Displays a random motivational quote from (insert API)_ |
| ProgressBar        |       | _Displays user's current progress for specific card_ |
| CardForm           |       | _Form for creating and updating existing cards_ |
| AuthForm           |       | _Form for user login and signup_ |
| Toggle             |       | _Toggle switch used for settings_ |

### MVP Tech Stack

| Library/Framework | Description |
| :--------------: | :----------------------------------------- |
| Ruby on Rails    | _Back End database_ |
| React            | _Front End_ |
| React Router     | _Front End routing_ |
| Axios            | _API calls_ |
| TailwindCSS      | _Styling_ |

### Endpoints

Admin/Auth routes:
- GET `/users`
	- Index route returning an array of all Users and associated listings
- GET `/users/:id`
	- Show route for a user requested by ID
- PUT `/users/:id`
  - Update a users info by id
- DELETE `users/:id`
  - Delete user by id

User routes:
- GET `/profile`
	- Returns logged-in user's profile
- POST `/users`
	- Create route for a new user
- GET `/cards`
  - Index route to return all cards for logged-in user
- GET `/cards/:id`
  - Returns info for specific card
- POST `/cards`
  - Create new card
- PUT `/cards/:id`
  - Edit card
- DELETE `/cards/:id`
  - Delete card
- PUT `/profile`
  - Edit user settings
- PUT `/cards/:id/days/:day_id`
  - Edit day fill color and notes

## Anticipated Challenges

1. Authentication - put in PostMVP because I anticipate this being difficult.
1. Only my second time building a full stack app by myself
1. Styling - Haven't come up with a specific design yet, so it will be hard to style with no guide
1. First time deploying to Heroku since a disaster with another app

## Changelog

<!-- for future changes -->

## Progress Notes

- Need to work through the existing state of everything to see where I am.
- Create wireframes
- Create ERD
- Create component heirarchy
- Finish filling out this readme
