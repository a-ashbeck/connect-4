/*
CONNECT 4
 */

var gamePieceArray = [];

// gamePieceArray will have three possible states 'empty', 'player1', 'player2'
// initialize gamePieceArray so that all indices are set to 'empty'
function initializeBoard() {
  var iMax = 6;
  var jMax = 5;
  for (i = 0; i < iMax; i++) {
    gamePieceArray[i] = [];

    for (j = 0; j < jMax; j++) {
       gamePieceArray[i][j] = 'empty';
    }
  }
}

// set state of cell
function setPiece(player, column, row) {
  gamePieceArray[column][row] = player;
}

// get state of cell
function getPiece(column, row) {
  return gamePieceArray[column][row];
}


// $(document).ready(function() {
//     var user = 1;
//
//     $('.cell').onClick(
//         if (user === 1) {
//             $(this).css({'background-color': 'red'});
//             user = 2;
//         } else {
//             $(this).css({'background-color': 'black'});
//             user = 1;
//         };
//     );
//
// });
