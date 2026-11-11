// ==================================================================
// EDIT THIS FILE ONLY. Do not change any other file in this project.
// Complete every function below. Each function must return its result.
// ==================================================================


// Step 1: Import mongoose here.



// Step 2: Write your MongoDB connection URI here.
//         Database name: league



// Step 3: Create the schema and the model here.
//         Model name: Player   (Mongoose saves it in the "players" collection)
//         Fields: name (String), team (String), role (String), runs (Number)



// Step 4: Connect to MongoDB inside this function.
//         After connecting, print: Connected to MongoDB
export async function connectDB() {

}


// Return all the players in the collection.
export async function getAllPlayers() {

}


// team comes from the "Search by team" box on the page, for example "Lions".
// Return the players whose team matches it.
export async function findPlayersByTeam(team) {

}


// minRuns is a number typed on the page, for example 550.
// Return the players whose runs are greater than or equal to minRuns.
export async function findPlayersByMinRuns(minRuns) {

}


// Return the 3 players with the most runs, highest first.
export async function getTopThreeRunScorers() {

}


// player comes from the "Add Player" form, for example:
//   { name: "Riya", team: "Tigers", role: "Batter", runs: 300 }
// Save it in the database and return the saved player.
export async function addPlayer(player) {

}
