function *colors() {
 yield 'red';
 yield 'blue';
 yield 'green';   
}

// function *TeamIterator(team) {
//     // console.log('Team iterator ....');
//     yield team.lead;
//     yield team.manager;
//     yield team.engineer;
//     yield team.testingTeam;
// }

// function *TestingTeamIterator(team) {
//     // console.log('Testing team iterator .....');
//     yield team.lead;
//     yield team.tester;
// }

module.exports = {
    colors,
    TeamIterator
}


