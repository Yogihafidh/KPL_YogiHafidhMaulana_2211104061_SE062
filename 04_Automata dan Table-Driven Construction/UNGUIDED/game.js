const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const State = {
  START: "START",
  PLAYING: "PLAYING",
  GAME_OVER: "GAME OVER",
  EXIT: "EXIT",
};

let state = State.START;

function runStateMachine() {
  console.log(`\n${state} SCREEN`);

  // Menampilkan pesan saat masuk ke setiap state
  switch (state) {
    case State.START:
      console.log(
        "Permainan dimulai! Ketik 'PLAY' untuk mulai bermain atau 'EXIT' untuk keluar."
      );
      break;
    case State.PLAYING:
      console.log(
        "Anda sedang bermain. Ketik 'LOSE' jika kalah atau 'EXIT' untuk keluar."
      );
      break;
    case State.GAME_OVER:
      console.log(
        "Game Over! Ketik 'RESTART' untuk bermain lagi atau 'EXIT' untuk keluar."
      );
      break;
  }

  rl.question("Enter Command: ", (command) => {
    switch (state) {
      case State.START:
        if (command === "PLAY") {
          state = State.PLAYING;
          console.log("\nAnda memasuki mode permainan.");
        } else if (command === "EXIT") {
          state = State.EXIT;
        }
        break;
      case State.PLAYING:
        if (command === "LOSE") {
          state = State.GAME_OVER;
          console.log("\nAnda kalah! Permainan berakhir.");
        } else if (command === "EXIT") {
          state = State.EXIT;
        }
        break;
      case State.GAME_OVER:
        if (command === "RESTART") {
          state = State.START;
          console.log("\nPermainan di-restart. Kembali ke menu awal.");
        } else if (command === "EXIT") {
          state = State.EXIT;
        }
        break;
    }

    if (state !== State.EXIT) {
      runStateMachine();
    } else {
      console.log("\nEXITING GAME... Terima kasih telah bermain!");
      rl.close();
    }
  });
}

runStateMachine();
