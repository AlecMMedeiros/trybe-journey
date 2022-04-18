let result = 85;
//Using Switch to give the grade.
switch (true) {
    case (result >= 90 && result < 100):
        console.log("Grade: A.");
        break;
    case (result >= 80 && result < 90):
        console.log("Grade: B.");
        break;
    case (result >= 70 && result < 80):
        console.log("Grade: C.");
        break;
    case (result >= 60 && result < 70):
        console.log("Grade: D.");
        break;
    case (result >= 50 && result < 60):
        console.log("Grade: E.");
        break;
    case (result < 50 ):
        console.log("Grade: F.");
        break;
    default:
        console.log("Invalid data.");
        break;
}
