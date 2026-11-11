# CA Lab Exam - Section 3MCA03 - Set D

**Cricket League Players**

## Your task

The web page and the Express server are ready. The database part is missing. Complete it using Mongoose.

- Edit only **database.js**. The comments in it tell you what to write.
- Do not change any other file.

## Steps

1. Open this project folder in VS Code and open a terminal in it.
2. Install the packages:

   ```
   npm install
   npm install mongoose
   ```

3. Make sure MongoDB is running, then add the sample data (see below).
4. Complete **database.js**.
5. Start the server:

   ```
   node index.js
   ```

6. Open **http://localhost:3000** in your browser.

After every change to database.js, stop the server with Ctrl + C and start it again.

## Database details

- **Database:** league
- **Collection:** players
- **Fields:** name (text), team (text), role (text), runs (number)

## Sample data

Open mongosh, paste these commands and press Enter. Paste them only once.

```
use league
db.players.insertMany([
  { name: "Aditya", team: "Tigers", role: "Batter", runs: 612 },
  { name: "Bharat", team: "Eagles", role: "Bowler", runs: 145 },
  { name: "Chetan", team: "Lions", role: "All-rounder", runs: 388 },
  { name: "Dev", team: "Tigers", role: "Bowler", runs: 97 },
  { name: "Eshan", team: "Eagles", role: "Batter", runs: 705 },
  { name: "Farhan", team: "Lions", role: "Batter", runs: 534 },
  { name: "Gaurav", team: "Tigers", role: "All-rounder", runs: 421 },
  { name: "Harsh", team: "Eagles", role: "All-rounder", runs: 502 },
  { name: "Irfan", team: "Lions", role: "Bowler", runs: 120 },
  { name: "Jatin", team: "Tigers", role: "Batter", runs: 559 },
  { name: "Kunal", team: "Eagles", role: "Batter", runs: 476 },
  { name: "Lokesh", team: "Lions", role: "All-rounder", runs: 689 }
])
```

## Show this output to the examiner

1. **Terminal.** Run node index.js.  
   Expected: Connected to MongoDB, then Server running at http://localhost:3000
2. **Show all.** Click "Show All Players".  
   Expected: 12 players.
3. **Search.** Choose Lions and click Search.  
   Expected: 4 players: Chetan, Farhan, Irfan, Lokesh.
4. **Filter.** Type 550 in "Runs at least" and click Filter.  
   Expected: 4 players: Aditya, Eshan, Jatin, Lokesh.
5. **Top 3 Run Scorers.** Click "Top 3 Run Scorers".  
   Expected: Eshan (705), Lokesh (689), Aditya (612), in this order.
6. **Add Player.** Fill the form with Name: your own name, Team: Tigers, Role: Batter, Runs: 300. Click "Add Player".  
   Expected: The message "Player saved" appears and the list shows 13 players, including your name.
