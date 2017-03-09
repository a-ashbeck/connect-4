/*
CONNECT 4
 */

var gamePieceArray = [];

// gamePieceArray will have three possible states 'empty', 'player1', 'player2'
// initialize gamePieceArray so that all indices are set to 'empty'
function initializeBoard() {
  var iMax = 6;
  var jMax = 7;
  for (i = 0; i < iMax; i++) {
    gamePieceArray[i] = [];

    for (j = 0; j < jMax; j++) {
       gamePieceArray[i][j] = 'empty';
    }
  }
}

// set state of cell
function setPiece(player, row, column) {
  gamePieceArray[row][column] = player;
}

// get state of cell
function getState(row, column) {
  return gamePieceArray[row][column];
}

function isBelowEmpty(row, column) {
  console.log(gamePieceArray);
  console.log(row);
  if ((gamePieceArray[row + 1][column] !== 'empty') || (row + 1 === 5)) {
    return row;
  } else {
    return isBelowEmpty(row + 1, column);

  };
}


$(document).ready(function() {
    var user = 'player1';
    initializeBoard();

    $('.cell').on('click', function() {
        var cellId = $(this).attr('id');
        var row = parseInt(cellId[0]) - 1;
        var column = parseInt(cellId[2]) - 1;
        var state = getState(row, column);
        if ((state === 'empty') && (user === 'player1')) {
            $('#' + isBelowEmpty(row, column) + 'x' + column).css({'background-color': 'red'});
            console.log('HERE!');
            setPiece(user, isBelowEmpty(row, column), column);
            user = 'player2';
        } else if ((state === 'empty') && (user === 'player2')) {
            $(this).css({'background-color': 'black'});
            setPiece(user, isBelowEmpty(row, column), column);
            user = 'player1';
        }

    });
});
