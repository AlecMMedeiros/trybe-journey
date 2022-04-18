/*
Make a program that defines three constants with the values of
the three internal angles of a triangle. Return true if the angles
represent the angles of a triangle and false otherwise. If any angle
is invalid, the program should return an error message.
*/
const angle1 = 30;
const angle2 = 100;
const angle3 = "30";
let sumAngles = angle1 + angle2 + angle3;
//Running the check using If and Else:
if (angle1 < 0 || angle2 < 0 || angle3 < 0 || Number.isFinite(sumAngles) == false) {
    console.log("Please, check your input data.")
} else {
    if (true) {
        console.log(sumAngles == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0)
    }
}
//Running the check using Switch:
switch (true) {
    case (sumAngles == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0):
        console.log(sumAngles == 180 && angle1 > 0 && angle2 > 0 && angle3 > 0)
        break;

    default:
        console.log("Please, check your input data.")
        break;

}
