const PAWN_ASSIGNMENTS = {
    pieceName: "Pawn",
  
    pawnCellOne: {
      pawnCellStartingPosition: 1,
      readyForNextPawnMove: "Ready for Cell One Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell One Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell One",
      firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell One",
      //watches for the position of cell one's pawn(going off of array index)
      cellOnePawnOnCellOne: "Cell One Pawn is on Cell One",
      cellOnePawnOnCellTwo: "Cell One Pawn is on Cell Two",
      cellOnePawnOnCellThree: "Cell One Pawn is on Cell Three",
      cellOnePawnOnCellFour: "Cell One Pawn is on Cell Four",
      cellOnePawnOnCellFive: "Cell One Pawn is on Cell Five",
      //watches for the positions where the cell one pawn is not located 
      cellOnePawnNotOnCellOne: "Cell One Pawn is not on Cell One",
      cellOnePawnNotOnCellTwo: "Cell One Pawn is not on Cell Two",
      cellOnePawnNotOnCellThree: "Cell One Pawn not is on Cell Three",
      cellOnePawnNotOnCellFour: "Cell One Pawn is not on Cell Four",
      cellOnePawnNotOnCellFive: "Cell One Pawn is not on Cell Five",
    },
    pawnCellSix: {
      pawnCellStartingPosition: 6,
      readyForNextPawnMove: "Ready for Cell Six Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Six Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Six",
      firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Six",
      //watches for the position of cell six's pawn
      cellSixPawnOnCellOne: "Cell Six Pawn is on Cell One",
      cellSixPawnOnCellTwo: "Cell Six Pawn is on Cell Two",
      cellSixPawnOnCellThree: "Cell Six Pawn is on Cell Three",
      cellSixPawnOnCellFour: "Cell Six Pawn is on Cell Four",
      cellSixPawnOnCellFive: "Cell Six Pawn is on Cell Five",
    },
    pawnCellNine: {
      pawnCellStartingPosition: 9,
      readyForNextPawnMove: "Ready for Cell Nine Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Nine Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Nine",
      firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Nine",
    },
    pawnCellFourteen: {
      pawnCellStartingPosition: 14,
      readyForNextPawnMove: "Ready for Cell Fourteen Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Fourteen Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Fourteen",
      firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Fourteen",
    },
    pawnCellSeventeen: {
      pawnCellStartingPosition: 17,
      readyForNextPawnMove: "Ready for Cell Seventeen Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Seventeen Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Seventeen",
      firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Seventeen",
    },
    pawnCellTwentyTwo: {
      pawnCellStartingPosition: 22,
      readyForNextPawnMove: "Ready for Cell Twenty-Two Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Twenty Two Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Twenty-Two",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Twenty-Two",
    },
    pawnCellTwentyFive: {
      pawnCellStartingPosition: 25,
      readyForNextPawnMove: "Ready for Cell Twenty-Five Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Twenty Five Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Twenty-Five",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Twenty-Five",
    },
    pawnCellThirty: {
      pawnCellStartingPosition: 30,
      readyForNextPawnMove: "Not Ready for Cell Thirty Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Thirty Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Thirty",
      firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Thirty",
    },
    pawnCellThirtyThree: {
      pawnCellStartingPosition: 33,
      readyForNextPawnMove: "Ready for Cell Thirty-Three Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Thirty-Three Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Thirty-Three",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Thirty-Three",
    },
    pawnCellThirtyEight: {
      pawnCellStartingPosition: 38,
      readyForNextPawnMove: "Ready for Cell Thirty-Eight Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Thirty-Eight Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Thirty-Eight",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Thirty-Eight",
    },
    pawnCellFortyOne: {
      pawnCellStartingPosition: 41,
      readyForNextPawnMove: "Ready for Cell Forty-One Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Forty-One Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Forty-One",
      firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Forty-One",
    },
    pawnCellFortySix: {
      pawnCellStartingPosition: 46,
      readyForNextPawnMove: "Ready for Cell Forty-Six Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Forty-Six Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Forty-Six",
      firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Forty-Six",
    },
    pawnCellFortyNine: {
      pawnCellStartingPosition: 49,
      readyForNextPawnMove: "Ready for Cell Forty-Nine Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Forty-Nine Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Forty-Nine",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Forty-Nine",
    },
    pawnCellFiftyFour: {
      pawnCellStartingPosition: 54,
      readyForNextPawnMove: "Ready for Cell Fifty-Four Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Fifty-Four Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Fifty-Four",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Fifty-Four",
    },
    pawnCellFiftySeven: {
      pawnCellStartingPosition: 57,
      readyForNextPawnMove: "Ready for Cell Fifty-Seven Pawn Move",
      notReadyForNextPawnMove: "Not Ready for Cell Fifty-Seven Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Fifty-Seven",
      firstPawnMoveNotComplete:
        "First Pawn Move Not Complete for Cell Fifty-Seven",
    },
    pawnCellSixtyTwo: {
      pawnCellStartingPosition: 62,
      readyForNextPawnMove: "Ready for Cell Sixty-Two Pawn Move",
      notReadyForNextPawnMove: "Ready for Cell Sixty-Two Pawn Move",
      firstPawnMoveComplete: "First Pawn Move Complete for Cell Sixty-Two",
      firstPawnMoveNotComplete: "First Pawn Move Not Complete for Cell Sixty-Two",
    },
  };

 
  
  export const pawnAssignmentObject = PAWN_ASSIGNMENTS
 