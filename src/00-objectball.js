//Keeping stats of a match with a home team and away team
//gameobject() returns an object with the two teams' values

const match = gameObject()
function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }

            }

        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
            }
        }
    }
}

//Helper functions for playerName and TeamName
function returnPlayer(playerName) {
    return match.home.players[playerName] || 
    match.away.players[playerName] || undefined;
}
function returnTeam(teamName) {
    return [match.home, match.away].find(team => 
        team.teamName === teamName) || undefined;
}

//Function Building  
function numPointsScored(playerName) { //Get points
    const player = returnPlayer(playerName);
    return player ? player.points : undefined;
}
console.log('The points are:',numPointsScored('Alan Anderson'))

function shoeSize(playerName) {      //get shoe size
    const player = returnPlayer(playerName);
    return player ? player.shoe : undefined
}
console.log('The shoe size is:',shoeSize('Alan Anderson'))

function teamColors(teamName) {       //get an array of team's colors
    const team = returnTeam(teamName);
    return team ? team.colors : undefined;
}
console.log('The team colors are:', teamColors('Harambee'))

const teamNames = () =>                //get an array of teamNames
    [match.home.teamName, match.away.teamName];
console.log('Teamnames are:', teamNames())

function playerNumbers(teamName) {     //get jersey numbers
    const team = returnTeam(teamName);
    return team ? Object.values(team.players).map(p => p.number) : undefined
}
console.log('Jersey Numbers are:', playerNumbers('Charlotty'))

//get an object of player's stats
function playerStats(playerName) {
    const match = gameObject();
    for (const team of [match.home, match.away]) {
        if (team.players[playerName]) {
            return team.players[playerName];
        }
    }
    return `${playerName}'s stats not found!`;
}

//Find largest shoe-sized player's rebounds
function bigShoeRebounds(){
    const match = gameObject();
    let bigFootPlayer = null;
    let biggestSize = -Infinity;

    for (const team of [match.home, match.away]) {
        const listOfPlayers = Object.values(team.players);
        for (const player of listOfPlayers) {
            if(player.shoe > biggestSize) {
                biggestSize = player.shoe;
                bigFootPlayer = player;
            }
        }
    }
    return bigFootPlayer ? bigFootPlayer.rebounds : undefined;
}

//find the player with most points
function mostPointsScored() {
    const match = gameObject();
    let bestPlayer = null;
    let mostPoints = - Infinity;

    for (const team of [match.home, match.away]) {
        const listOfPlayers = Object.entries(team.players);
        for (const [playerName, stats] of listOfPlayers) {
            if (stats.points > mostPoints) {
                mostPoints = stats.points;
                bestPlayer = playerName;
            }
        }
    }
    return bestPlayer || undefined;
}

//Team with most points
const winningTeam = () => {
    const match = gameObject();
    let bestTeam = null;
    let maxPoints = -Infinity;

    for (const team of [match.home, match.away]) {
        let teamTotalPoints = 0;
        const listOfPlayers = Object.values(team.players);
        for (const player of listOfPlayers) {
            teamTotalPoints += player.points;
        }
        if (teamTotalPoints > maxPoints) {
            maxPoints = teamTotalPoints;
            bestTeam = team.teamName;
        }
    }
    return bestTeam || undefined;
}

//Finding the player with longest name
const playerWithLongestName = () => {
    const match = gameObject();
    let moreCharsName = "";


    for (const team of [match.home, match.away]) {
        const playerNames = Object.keys(team.players)
        for (const playerName of playerNames) {

            if(playerName.length > moreCharsName.length) {
             moreCharsName = playerName;
        }
        }
    }
    
    return moreCharsName || undefined;
}

//
const doesLongNameStealATon = () => {
    const match = gameObject();
    const maxNamePlayer = playerWithLongestName();

    if (!maxNamePlayer) {
        return false
    };

    let maxNamePlayerSteals = 0;
    let maxSteals = 0;

    for (const team of [match.home, match.away]) { //checking max steals in all teams
        if (team.players[maxNamePlayer]) {
            maxNamePlayerSteals = team.players[maxNamePlayer].steals;
        }
        for (const stats of Object.values(team.players)) { //checking among of players 
            if (stats.steals > maxSteals) {
                maxSteals = stats.steals;
            }
        }
    }
    return maxNamePlayerSteals === maxSteals

}