/* Tutorial 4
    Example 3 JavaScript code
*/

const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];

const cLastNameResults = studentList.filter( x => x.lastName.startsWith("C")).map(x=> {
    return {
        FirstName: x.firstName,
        LastName: x.lastName,
        minScore: Math.min.apply(null, x.scores),
        maxScore: Math.max.apply(null, x.scores),
        avgGrade: x.scores.reduce((sum, grade) => sum + grade, 0) / x.scores.length
    };
});

console.log(cLastNameResults)