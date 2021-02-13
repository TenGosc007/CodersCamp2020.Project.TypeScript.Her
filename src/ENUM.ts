//Enum for number of actions
enum ActionPointsEnum {
    MOVE = -1,
    STRESSCARD = 4,
    CLUE = 2
}

//Reward from solving the puzzle
enum PuzzleReward{
    EVIDENCE,
    PROGRESSPOINT
}

//Content on board
enum BoardContent{
    PUZZLE,
    CLUE,
    NOTHING
}

//State of the board
enum BoardState{
    PENDING,
    EXPLORED
}

//Game ending
enum ENDING{
    WORSTENDING,
    MEDIUMENDING1,
    MEDIUMENDING2,
    BESTENDING
}

//Location
enum LOCATION{
    FIRST = 1,
    SECOND = 2,
    THIRD = 3
}

export {LOCATION, ENDING, BoardState, PuzzleReward, ActionPointsEnum, BoardContent};