// Holds Mock Data for Demo

export const trucks = [
    {
        "uuid": "0",
        "posts": [],
        "owner": "b411aaa0-7358-483a-a52c-cd2c433da888",
        "title": "Kunal's Tacos",
        "description": "Yummy tacos by Kunal",
        "genre": "Mexican",
        "email": "kunal.k@hotmail.com",
        "phone": "1446696155",
        "followers": "400",
        "image": "https://imgur.com/0H81G4l.jpg",
        "menu": [
          {
            title: "Steak Tacos",
            price: "6.50",
            description: "3 delicious steak tacos. Cooked fresh on the grill.",
            extra: "Toppings: Pico de Gallo, Cheese, Lettuce, Tomatoes, Onions, Guacamole (+$0.50)"
          },
          {
            title: "Chicken Tacos",
            price: "5.50",
            description: "3 delicious chicken tacos. Cooked fresh on the grill.",
            extra: "Toppings: Pico de Gallo, Cheese, Lettuce, Tomatoes, Onions, Guacamole (+$0.50)"
          },
          {
            title: "Chips and Salsa",
            price: "3.50",
            description: "Chips and Salsa, not much more to it.",
          },
          {
            title: "Tacos al Pastor",
            price: "8.40",
            description: "Our famous al Pastor, straight from the skewer.",
            extra: "Toppings: Pico de Gallo, Cheese, Lettuce, Tomatoes, Onions, Guacamole (+$0.50)"
          },
        ],
    },
    {
        "uuid": "1",
        "posts": [],
        "owner": "b411aaa0-7358-483a-a52c-cd2c433da888",
        "title": "Kogi",
        "description": "The original taco truck.",
        "genre": "Asian",
        "email": "info@kogitruck.com",
        "phone": "9256874473",
        "followers": "1,255",
        "image": "https://imgur.com/JTjBHFv.jpg",
        "menu": [
          {
            title: "Korean BBQ Tacos",
            price: "9.50",
            description: "The original KBBQ Tacos.",
            extra: "Corn Tortilla, Kimchi, Beef"
          },
          {
            title: "Spicy Pork Tacos",
            price: "6.50",
            description: "Three spicy pork tacos.",
          },
          {
            title: "Chocolate Tres Leches Cake",
            price: "3.50",
            description: "Delicious Chocolate Cake desert.",
            extra: "Comes with Whipped Cream.  Ice Cream +$0.50"
          },
          {
            title: "Blackjack Quesadillas",
            price: "4.50",
            description: "Caramelized onions and spicy pork married together with melting cheddar and jack cheeses.",
          },

        ]
    },
    {
        "uuid": "2",
        "posts": [],
        "owner": "00ad8927-8df2-4e65-9aef-6e43c5a27ad7",
        "title": "Armando's",
        "description": "USC's best kept secret",
        "genre": "Tacos",
        "email": "contact@armandos.com",
        "phone": "3334421141",
        "followers": "3,134",
        "image": "https://imgur.com/DiWInAX.jpg",
        "menu": [
          {
            title: "French Fries",
            price: "3.50"
          },
          {
            title: "Cheeseburger",
            price: "4.50",
            description: "Just your standard Cheese Burger, cooked fresh on the grill.",
            extra: "Lettuce, Tomatoes, Onions, Avocado (+$.50)"
          },
          {
            title: "Asada Fries",
            price: "8.50",
            description: "Crispy french fries covered with carne asada, guacamole, shredded cheese, & sour cream."
          },
          {
            title: "California Burrito",
            price: "5.50",
            description: "Carne Asada, crsipy french fries, guacamole, shredded cheese, sour cream, & our delicious avocado salsa wrapped in a flour tortilla."
          },
        ]
    },
    {
        "uuid": "3",
        "posts": [],
        "owner": "04f2b783-3fb0-4a92-8516-2b688ec4101d",
        "title": "Bob's Burgers",
        "description": "Local burger food truck.",
        "genre": "American / Burgers",
        "email": "bob@gmail.com",
        "phone": "1442229985",
        "followers": "684",
        "image": "https://imgur.com/UPCdBUL.jpg",
        "menu": [
          {
            title: "100% Angus Beef Burger",
            description: "Bob's Famous 100% Angus Beef, now available on his new food truck!",
            extra: "Lettuce, Tomatoes, Onions",
            price: "10.50"
          },
          {
            title: "Cheeseburger",
            price: "9.75",
            extra: "Choose: Cheddar, Swiss, or American"
          },
          {
            title: "Truffle Fries",
            price: "4.50",
            description: "Fresh french fries topped with parmesean and truffle oil."
          }
        ]
    }
]

export const posts = [
  {
      "uuid": "0",
      "truck": "1",
      "start_time": "2017-11-12T22:00:00Z",
      "end_time": "2017-11-12T23:00:00Z",
      "latitude": 34.023563,
      "longitude": -118.27887
  },
  {
      "uuid": "4",
      "truck": "0",
      "start_time": "2017-11-12T22:00:00Z",
      "end_time": "2017-11-12T23:00:00Z",
      "latitude": 34.023203,
      "longitude": -118.291640
  },
  {
      "uuid": "1",
      "truck": "2",
      "start_time": "2017-11-12T22:00:00Z",
      "end_time": "2017-11-12T23:00:00Z",
      "latitude": 34.024203,
      "longitude": -118.294640
  },
  // {
  //     "uuid": "2",
  //     "truck": "3",
  //     "start_time": "2017-11-12T22:00:00Z",
  //     "end_time": "2017-11-12T23:00:00Z",
  //     "latitude": 34.025430,
  //     "longitude": -118.288701
  // }
]
