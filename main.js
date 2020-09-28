const app = new Vue({
  el: "#app",
  data() {
    return {
      meals: [{
          id: 1,
          name: "Chips",
          detail: "Tasty chips",
          price: 100,
          img: "../assets/images/chips.jpg",
          quantity: 0,
        },
        {
          id: 2,
          name: "Chicken",
          detail: "Tasty chicken",
          price: 350,
          img: "../assets/images/chicken.jpg",
          quantity: 0,
        },
        {
          id: 3,
          name: "Pizza",
          detail: "Tasty Pizza",
          price: 600,
          img: "../assets/images/pizza.jpg",
          quantity: 0,
        },
        {
          id: 4,
          name: "Hamburger",
          detail: "Tasty Hamburger",
          price: 150,
          img: "../assets/images/hamburger.jpg",
          quantity: 0,
        },
        {
          id: 5,
          name: "Milk shake",
          detail: "Tasty milk",
          price: 100,
          img: "../assets/images/milkShake.jpg",
          quantity: 0,
        },
        {
          id: 6,
          name: "Kebab",
          detail: "Tasty kebab",
          price: 130,
          img: "../assets/images/kebab.jpg",
          quantity: 0,
        },
      ],


    };
  },
  computed: {

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

});