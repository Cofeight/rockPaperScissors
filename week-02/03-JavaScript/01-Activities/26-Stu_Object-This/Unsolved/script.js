console.log(this);

function helloThis() {
  //window obj
  console.log('Inside this function, this is ' + this);
}

var child = {
  age: 10,
  ageTenYears: function () {
    //child obj
    console.log(this.age + 10);
  },
};

var investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      //investment obj
      console.log(this.initialInvestment * 1.15);
    },
  },
};
