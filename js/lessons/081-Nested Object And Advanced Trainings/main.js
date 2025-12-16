user = {
  theName: "Abdelrahman",
  theAge: 25,
  skills: ["Python", "DE", "ML", "frontend"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },

  // Methods
  checkAv: function () {
    if (user.available === true) {
      return `Open to work`;
    } else {
      return `Not free`;
    }
  },
};

console.log(user.theName);
console.log(user.skills.join(" ")); // Python DE ML frontend
console.log(user.skills[0]); // Python
console.log(user.addresses.egypt); // egypt object
console.log(user.addresses.egypt["one"]); // Cairo
console.log(user.addresses.egypt["two"]); // Giza

console.log(user.checkAv());
