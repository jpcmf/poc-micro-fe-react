export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  longDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Shape 1',
    price: 5.99,
    description: 'A wheel fidget spinner that spins wheels',
    image: 'http://localhost:8080/shape1.jpg',
    longDescription:
      'Our Wheel Spinner is fun, functional, and maybe just a little bit strange. It allows you to spin your wheels with ease-- making it great for stress relief or just entertainment. This fidget spinner is handcrafted using brass and then plated in gold or rose gold to ensure the finest quality spinning action, making it the best way to get your wheels moving.',
  },
  {
    id: 2,
    name: 'Shape 2',
    price: 8.99,
    description: 'A solid steel of rainbow fidget spinning goodness.',
    image: 'http://localhost:8080/shape2.jpg',
    longDescription:
      'The Solid Rainbow fidget spinner is a hit. Its full metal body is made from a single piece of steel that takes hours to cut and machine. The center body has been treated with an electroplated natural copper finish that will tarnish over time as it touches your skin, just as the copper toys from the 70s did. The rainbow finish on the outer ring can be customized using various methods, including leaving it raw to see the natural finish on the stainless steel or applying a colored powder coat finish.',
  },
  {
    id: 3,
    name: 'Shape 3',
    price: 7.99,
    description: 'A winged dragon of a spinner.',
    image: 'http://localhost:8080/shape3.jpg',
    longDescription:
      'The Dragon Spinner is a new take on an ancient toy. Made of durable polycarbonate, it is strong enough to withstand the force generated by its razor-sharp spinning capabilities. It also features our signature edition design to make it one-of-a-kind — and one that you and your friends will love. What better way to relieve stress and anxiety than with a simple fidget spinner?',
  },
  {
    id: 4,
    name: 'Shape 4',
    price: 7.99,
    description: 'Flaming rainbow fun for all ages.',
    image: 'http://localhost:8080/shape4.jpg',
    longDescription:
      'Rainbow Flames are small (1.5″ in diameter or approx. 46mm) fidget spinner toys. They are fun for people of all ages, including adults and kids. Kids love to play with Rainbow Flames because they are easy to spin and they come in assorted colors, like blue, green, red, white, purple and yellow possible combinations. Rainbow Flames fidget spinners are great for killing time; perfect for daydreaming, calming nerves, focusing attention & relaxing; better than nail biting & knuckle cracking. Rainbow Flames fidget spinners can be successfully incorporated into therapy sessions as fidget toys',
  },
  {
    id: 5,
    name: 'Shape 5',
    price: 8.99,
    description: 'Flaming rainbow fun for all ages.',
    image: 'http://localhost:8080/shape2.jpg',
    longDescription:
      'Rainbow Flames are small (1.5″ in diameter or approx. 46mm) fidget spinner toys. They are fun for people of all ages, including adults and kids. Kids love to play with Rainbow Flames because they are easy to spin and they come in assorted colors, like blue, green, red, white, purple and yellow possible combinations. Rainbow Flames fidget spinners are great for killing time; perfect for daydreaming, calming nerves, focusing attention & relaxing; better than nail biting & knuckle cracking. Rainbow Flames fidget spinners can be successfully incorporated into therapy sessions as fidget toys',
  },
  {
    id: 6,
    name: 'Shape 6',
    price: 9.99,
    description: 'Flaming rainbow fun for all ages.',
    image: 'http://localhost:8080/shape4.jpg',
    longDescription:
      'Rainbow Flames are small (1.5″ in diameter or approx. 46mm) fidget spinner toys. They are fun for people of all ages, including adults and kids. Kids love to play with Rainbow Flames because they are easy to spin and they come in assorted colors, like blue, green, red, white, purple and yellow possible combinations. Rainbow Flames fidget spinners are great for killing time; perfect for daydreaming, calming nerves, focusing attention & relaxing; better than nail biting & knuckle cracking. Rainbow Flames fidget spinners can be successfully incorporated into therapy sessions as fidget toys',
  },
];

export default products;
