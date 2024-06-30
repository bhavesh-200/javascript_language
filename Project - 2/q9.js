function calculateGPA(grades) {
    const gradePoints = {
        'A': 4.0,
        'B': 3.0,
        'C': 2.0,
        'D': 1.0,
        'F': 0.0
    };
    let totalPoints = 0;
    for (let grade of grades) {
        totalPoints += gradePoints[grade];
    }
    return totalPoints / grades.length;
}
