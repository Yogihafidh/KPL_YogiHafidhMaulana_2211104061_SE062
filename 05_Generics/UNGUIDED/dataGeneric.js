class DataGeneric {
  constructor(data) {
    this.data = data;
  }

  PrintData() {
    console.log(`Data yang tersimpan adalah: ${this.data}`);
  }
}

// Contoh penggunaan
const data = new DataGeneric("2211104061");
data.PrintData();
