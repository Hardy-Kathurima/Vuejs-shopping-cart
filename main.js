const app = new Vue({
  el: "#app",
  data() {
    return {
      meals: [{
          id: 1,
          name: "Chips",
          detail: "Fresh  fries",
          price: 100,
          img: "../assets/images/chips.jpg",
          quantity: 0,
        },
        {
          id: 2,
          name: "Chicken",
          detail: "Grilled chicken",
          price: 350,
          img: "../assets/images/chicken.jpg",
          quantity: 0,
        },
        {
          id: 3,
          name: "Pizza",
          detail: "Pepperoni Pizza",
          price: 600,
          img: "../assets/images/pizza.jpg",
          quantity: 0,
        },
        {
          id: 4,
          name: "Hamburger",
          detail: "Beef Burger",
          price: 150,
          img: "../assets/images/hamburger.jpg",
          quantity: 0,
        },
        {
          id: 5,
          name: "Milk shake",
          detail: "Vanilla Ice",
          price: 100,
          img: "../assets/images/milkShake.jpg",
          quantity: 0,
        },
        {
          id: 6,
          name: "Kebab",
          detail: "Hara Masala ",
          price: 130,
          img: "../assets/images/kebab.jpg",
          quantity: 0,
        },
      ],


    };
  },
  computed: {
    totalItem: function () {
      let sum = 0;
      for (let i = 0; i < this.meals.length; i++) {
        sum += (parseFloat(this.meals[i].price) * parseFloat(this.meals[i].quantity));
      }

      return sum;
    },
    totalCost() {
      return this.meals.reduce(
        (cost, meal) => cost + meal.price,
        0
      );

    },
    cart() {
      return this.meals.filter(meal => meal.quantity > 0);
    },
    totalCart() {
      return this.meals.reduce(
        (total, meal) => total + meal.quantity,
        0
      );
    },
  },
  methods: {
    updateCart(meal, updateType) {
      for (let i = 0; i < this.meals.length; i++) {
        if (this.meals[i].id === meal.id) {
          if (updateType === 'subtract') {
            if (this.meals[i].quantity !== 0) {
              this.meals[i].quantity--;
            }
          } else {
            this.meals[i].quantity++;
          }
          break;
        }
      }
    }

  }
});
$(document).ready(function () {
  $('.dropdown-trigger').dropdown({
    hover: false,
    coverTrigger: false
  });
  $('.modal').modal();

});