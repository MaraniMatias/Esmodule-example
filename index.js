// index.js

import { 
  helloWold,
  fruits as crops, 
  multiply as product 
} from "./module.js";

const log = `product: ${product(2, 11)} fruit: ${crops[2]}.`

console.log(log, helloWold);

