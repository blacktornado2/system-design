

public class Main {
    public static void main(String[] args) {

    }

    public Board start() {
        return new Board();
    }

    public void move(Board board, Player player, Move move) {

    }

    // isComplete and who won the game
    public GameResult isComplete(Board board) {
        if (board instanceof TicTacToeBoard) {
            TicTacToeBoard board1 = (TicTacToeBoard) board;
            String firstCharacter = "-";

            // Check rows
            boolean rowComplete = true;
            for (int row = 0; row < 3; row++) {
                firstCharacter = board1.cells[row][0];

                for (int col = 1; col < 3; col++) {
                    if (!board1.cells[row][col].equals(firstCharacter)) {
                        rowComplete = false;
                        break;
                    }
                }
                if (rowComplete) {
                    return new GameResult(true, firstCharacter);
                }
            }

            // Check columns
            boolean colComplete = true;
            for (int col = 0; col < 3; col++) {
                firstCharacter = board1.cells[0][col];

                for (int row = 1; row < 3; row++) {
                    if (!board1.cells[row][col].equals(firstCharacter)) {
                        colComplete = false;
                        break;
                    }
                }
                if (colComplete) {
                    return new GameResult(true, firstCharacter);
                }
            }

            // Check left diagonal
            boolean diagComplete = true;
            for (int row = 1; row < 3; row++) {
                firstCharacter = board1.cells[0][0];

                if (!board1.cells[row][row].equals(firstCharacter)) {
                    diagComplete = false;
                    break;
                }
            }

            if (diagComplete) {
                return new GameResult(true, firstCharacter);
            }

            // Check right diagonal
            boolean revDiagComplete = true;
            for (int i = 1; i < 3; i++) {
                firstCharacter = board1.cells[0][2];

                if (!board1.cells[i][2 - i].equals(firstCharacter)) {
                    revDiagComplete = false;
                    break;
                }
            }
            if (revDiagComplete) {
                return new GameResult(true, firstCharacter);
            }

            // Check if any places are left
            int countOfFilledCells = 0;
            for (int row = 0; row < 3; row++) {
                for (int col = 0; col < 3; col++) {
                    if (board1.cells[row][col] != null) {
                        countOfFilledCells++;
                    }
                }
            }

            // If no one won, but the game is completed
            if (countOfFilledCells == 9) {
                return new GameResult(true, "-");
            } else {
                return new GameResult(false, "-");
            }

        } else {
            return new GameResult(false, "-");
        }
    }
}

class Board {

}

class TicTacToeBoard extends Board {
    String cells[][] = new String[3][3];
}

class Player {

}

class Move {

}

class GameResult {
    boolean isOver;
    String winner;

    GameResult(boolean isOver, String winner) {
        this.isOver = isOver;
        this.winner = winner;
    }
}