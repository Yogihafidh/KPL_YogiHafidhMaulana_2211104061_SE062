class HaloGeneric {
  constructor(user) {
    this.user = user;
  }

  SapaUser() {
    console.log(`Halo user ${this.user}`);
  }
}

const sapa = new HaloGeneric("Yogi");
sapa.SapaUser();
