function makeUser() {
    return {
      name: "David",
      ref: this
    };
  }
  
  let user = makeUser();
  
  console.log( user.ref.name ); // undefined