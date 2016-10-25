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
function getState(column, row) {
  return gamePieceArray[column][row];
}


$(document).ready(function() {
    var user = 1;
    initializeBoard();

    $('.cell').on('click', function() {
        var cellId = $(this).attr('id');
        var column = parseInt(cellId[0]) - 1;
        var row = parseInt(cellId[2]) - 1;
        var state = getState(column, row);
        if (state === 'empty') {
            $(this).css({'background-color': 'red'});
        }
    });
});
