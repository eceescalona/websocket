## node-typescript-websockets

#-- Assignment: 
Backend Development Task (WebSockets)

#-- Objective:
Evaluate backend skills by implementing a WebSocket-based real-time event logger that tracks and stores user activity.

#-- Requirements:
Tech Stack (Recommended but open to alternatives):

● Backend: Node.js with TypeScript, WebSockets

● Database: Redis (for in-memory storage) or PostgreSQL with TimescaleDB (for persistence)

● Deployment: Local execution with a simple script

#-- User Stories:

1. Event Logging API:

○ Implement a WebSocket server that listens for user activity events (e.g., login, logout, file_open, file_save).

○ The event payload should include a timestamp, user ID, and event type.

2. Store Events:

○ Save received events in Redis (for short-term storage).

○ Provide an API endpoint (/events/recent) to retrieve the last 10 events for a given user ID.

3. Real-Time Updates:

○ Clients should be able to subscribe to event updates in real-time via WebSocket.

## How to run the app?
#-- Setup and start the server
cd server
npm install # or yarn install
npm start # or yarn start

## Credits
Ernesto Carmona Escalona

## Thoughts
#-- User Stories:

I think I'm missing this part, I feel like I should make a client but I don't have the time.
Do I have to make a client?, please let me know.