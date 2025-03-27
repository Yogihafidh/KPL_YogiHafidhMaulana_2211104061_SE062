class DataGeneric {
  constructor(data) {
    this.data = data;
  }

  PrintData() {
    console.log(`Data yang tersimpan adalah: ${this.data}`);
  }
}

// Contoh penggunaan
const data = new DataGeneric("NIM_PRAKTIKAN");
data.PrintData();
