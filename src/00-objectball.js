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

//get player's stats
function playerStats(playerName) {     
    const player = returnPlayer(playerName);
    return player || undefined
}
console.log('The stats are:', playerStats('Bismak Biyombo'))

//Find largest shoe-sized player's rebounds
function bigShoeRebounds(){
    const collectionOne = [     //collecting players into one array
        ...Object.values(match.home.players),
        ...Object.values(match.away.players)
    ];
    if (!collectionOne.length) return 0;
    const largeSizePlayer = collectionOne.reduce((acc, player) =>
        player.shoe > acc.shoe ? player : acc, collectionOne[0]);
    return largeSizePlayer.rebounds;
}
console.log('the bigfoot has:', bigShoeRebounds())

//find the player with most points
const collectionTwo = [     //collecting players into one array
    ...Object.entries(match.home.players),
    ...Object.entries(match.away.players)
];
function mostPointsScored() {
    if (!collectionTwo.length) return 0;
    const topScorer = collectionTwo.reduce((acc, [playerName, stats]) =>
        stats.points > acc[1].points ? [playerName, stats] : acc, collectionTwo[0]);
    return topScorer[0];  
}
console.log('Most points:', mostPointsScored())

//Team with most points
const winningTeam = () => {
    const teams = [match.home, match.away];
    if (!teams.length) return 'Undefined teams.';
    const topTeam = teams.reduce( (acc, team) => {
        const allPoints = Object.values(team.players).reduce((amount, player) => {
            return amount + player.points;
        }, 0);
        return allPoints > acc.points ? {nameOfTeam: team.teamName, points: allPoints} : acc;   
    }, {nameOfTeam: teams[0].teamName, points: Object.values(teams[0].players).reduce((amount, player) =>
            amount + player.points, 0)})
    return topTeam.nameOfTeam;
}
console.log('the winning team is:', winningTeam())

//Finding the player with longest name
const playerWithLongestName = () => {
    const namingCollection = [     //collecting players into one array
        ...Object.keys(match.home.players),
        ...Object.keys(match.away.players)
    ];
    if (!namingCollection.length) return undefined
    return namingCollection.reduce((acc, playerName) => 
        playerName.length > acc.length ? playerName : acc,namingCollection);
}
console.log('this player is:', playerWithLongestName())

//finding if longnamedplayers has most steals
const doesLongNameStealATon = () => {
    if (!collectionTwo.length) return undefined; //Reusing collection in mostPointsScored()
    const longNamedPlayer = playerWithLongestName();
    if (longNamedPlayer === 'undefined players') return undefined;
            //get the longnamedplayer's steals
    const topSteals = collectionTwo.reduce((acc, [, stats]) => 
        stats.steals > acc ? stats.steals : acc, 0);
            //find players with most steals
    const longNamedPlayerSteals = collectionTwo.reduce((acc, [playerName, stats]) =>
        playerName === longNamedPlayer ? stats.steals : acc, 0);
    return longNamedPlayerSteals === topSteals;
}
console.log('Does longnamed players have most steals:', doesLongNameStealATon())