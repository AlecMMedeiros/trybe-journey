/*Write a program that takes the name of a chess
piece and returns the moves it makes.*/
let piece = "PAn";
let pieceLowered = piece.toLowerCase();

switch (pieceLowered) {
    case "king":
        console.log("move one square in any direction, so long as that square is not attacked by an enemy piece. Additionally, kings are able to make a special move, known as castling.");
        break;
    case "queen":
        console.log("Move diagonally, horizontally, or vertically any number of squares. They are unable to jump over pieces.");
        break;
    case "rooks":
        console.log("Move horizontally or vertically any number of squares. They are unable to jump over pieces. Rooks move when the king castles.");
        break;
    case "bishop":
        console.log("Move diagonally any number of squares. They are unable to jump over pieces.");
        break;
    case "knight":
        console.log("Move in an ‘L’ shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically. They are the only piece able to jump over other pieces.");
        break;
    case "pawn":
        console.log("Move vertically forward one square, with the option to move two squares if they have not yet moved. Pawns are the only piece to capture different to how they move. The pawns capture one square diagonally in a forward direction.");
        break;
    default:
        console.log("Please, the valid inputs are: king, queen, rooks, bishop, knight or pawn. Try again using one of them.");
        break;
}


