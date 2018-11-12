/*
*  Seed the database with some dummy content. 
*/

import { Promise } from "meteor/promise";
import Users from "meteor/vulcan:users";
import { createMutator } from "meteor/vulcan:core";
import Categories from "../modules/category/collection";
import Products from "../modules/product/collection";
import Customers from "../modules/customer/collection";
import CreditCards from "../modules/creditcard/collection";
import ShoppingCarts from "../modules/shoppingcart/collection";
import ProductOnCarts from "../modules/productoncart/collection";

const seedDataCategory = [
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Games"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Electronics & Health"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Computers, Grocery & Home"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Tools"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Clothing, Movies & Shoes"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Books"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Industrial"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Sports"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Garden & Industrial"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Books"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Garden & Industrial"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Health"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Outdoors & Shoes"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Baby"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Home, Kids & Shoes"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Baby, Clothing & Toys"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Home"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Books & Sports"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Automotive & Tools"
  },
  {
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    name: "Games & Sports"
  }
];

const seedDataProduct = [
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "1498160611",
    name: "Practical Copper Table",
    description:
      "Aut ut temporibus inventore autem nemo. Aperiam dolorem est quisquam qui qui. Eius sit dolore.",
    price: 55394
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "1105735338",
    name: "Enormous Granite Shirt",
    description:
      "Tenetur nemo vitae. Aperiam adipisci error est. Non ipsa facere corporis sed nam. Et repudiandae repellendus similique rerum repudiandae.",
    price: 43745
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "182716249X",
    name: "Sleek Aluminum Plate",
    description:
      "Sunt minus eos natus. Quasi ut tempora eligendi modi repellat. Voluptatem occaecati eum. Asperiores ipsum voluptatem nostrum quisquam. Omnis aut et.",
    price: 32079
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "194197600X",
    name: "Sleek Linen Plate",
    description:
      "Eius voluptatem nobis. In sed velit. Incidunt repellendus sunt sit. Nesciunt consequatur sequi consequatur amet sint quidem. Est at ut sed consectetur aut sit.",
    price: 18217
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "1909200174",
    name: "Practical Concrete Coat",
    description:
      "Fugiat tempora est cumque. Qui omnis qui iusto ea non. Odio quidem non. Quo voluptate rerum et doloribus modi excepturi dolorem.",
    price: 54945
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "0993728650",
    name: "Mediocre Copper Hat",
    description:
      "Tempora dolorem dolore distinctio possimus debitis nihil ipsa. Id et nostrum impedit aliquid tempora. Qui non enim quia nemo quidem commodi beatae. Sed corrupti illo iure error.",
    price: 20358
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "0932946682",
    name: "Synergistic Iron Clock",
    description:
      "Modi aut aut totam eius unde. Autem maxime sit velit enim. Molestiae eos mollitia.",
    price: 35540
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "139155552X",
    name: "Heavy Duty Paper Chair",
    description:
      "Dolor aut assumenda ea enim laborum. Repellendus eveniet quis. In laudantium enim qui. Laudantium et magnam consequatur expedita omnis nihil.",
    price: 84019
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "0860918750",
    name: "Synergistic Aluminum Pants",
    description:
      "Dignissimos vel officiis facere porro. Voluptatem rerum velit. Non id quia ut sequi ab enim. Debitis quo fugiat est voluptatibus.",
    price: 81472
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "0116854235",
    name: "Fantastic Wooden Chair",
    description:
      "Consequatur est perspiciatis hic. Id voluptatum aut non autem quod rem. Mollitia similique autem beatae praesentium sed. Ea consequuntur sapiente quia officiis eum.",
    price: 91815
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "0483943215",
    name: "Ergonomic Bronze Bench",
    description:
      "Ut neque aspernatur impedit rem vero. Facere aliquam similique magnam a aspernatur dolor quibusdam. Laboriosam aut qui qui architecto corporis minima reiciendis. Reprehenderit commodi sequi.",
    price: 52909
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "1715556984",
    name: "Synergistic Linen Knife",
    description:
      "Laborum fugiat ea inventore laboriosam. Voluptatem sequi ad. Qui consectetur consectetur nemo quasi. Reiciendis fuga vitae temporibus laboriosam eos.",
    price: 55122
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "0905808339",
    name: "Durable Granite Chair",
    description:
      "Provident consequuntur reprehenderit porro est. Possimus cumque optio neque voluptatem ab. Rerum soluta debitis impedit et nihil culpa. Ut laboriosam voluptatem omnis nostrum.",
    price: 9740
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "1974688372",
    name: "Sleek Wooden Watch",
    description:
      "Explicabo doloribus unde et ad nihil beatae deserunt. Non suscipit iusto vel minima est minus cumque. Nobis occaecati quaerat eum. Accusantium ut eveniet recusandae. Eaque ab maiores et delectus dolorum soluta.",
    price: 92049
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "0856864951",
    name: "Intelligent Rubber Bench",
    description:
      "Nemo laudantium distinctio et consequatur facere. Et ut molestias aut tempore odit. Aperiam adipisci explicabo nulla qui quis in. Itaque ea dolore voluptatem beatae aut ullam sit.",
    price: 75900
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "080130458X",
    name: "Lightweight Marble Car",
    description:
      "Quia ut fuga quibusdam. Facilis fuga expedita a minima iusto rerum non. Temporibus in rerum ea modi et quasi. Qui quas sunt et necessitatibus voluptatum.",
    price: 67681
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "0920269605",
    name: "Enormous Marble Clock",
    description:
      "Voluptas qui dolores distinctio omnis assumenda. Eos fugiat minima vitae. A deleniti et. Facere vel esse ut est autem occaecati. Autem aspernatur ut.",
    price: 81540
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "0938041843",
    name: "Small Paper Keyboard",
    description:
      "Repellat earum vel. Quia qui aut similique. Ullam iusto rerum sit dolorem. Voluptatibus et aliquam officiis in.",
    price: 91927
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "0008003467",
    name: "Sleek Wooden Bottle",
    description:
      "Voluptatibus non unde magnam libero et aliquid et. Dolorum voluptatum sed et non. Maxime blanditiis vel ut. Doloremque et repellendus vel alias et explicabo harum. Quasi ad sit.",
    price: 43303
  },
  {
    categoryId: "YYYYYYYY",
    picture: "https://fakeimg.pl/150x150/?text=Picture&font=lobster",
    sku: "1356829783",
    name: "Incredible Marble Computer",
    description:
      "Cupiditate molestiae molestiae neque similique tempora. Ratione tenetur sunt. Repellendus deleniti quae ea quisquam. Veniam sint dolor praesentium voluptatem qui.",
    price: 32784
  }
];

const seedDataCustomer = [
  {
    typeId: "Normal",
    emailaddress: "raquel.islas@hotmail.com",
    fullname: "Sr. Roberto Leal Leal",
    phonenumber: "(665) 595 6630",
    address1: "Muelle Teocaltiche 77552",
    address2: "Bajada Baja California Sur 50802 Interior ?9",
    city: "Epitacio Huerta",
    state: "Hidalgo",
    postalcode: "98833",
    country: "Gambia"
  },
  {
    typeId: "Normal",
    emailaddress: "samuel.galicia@gmail.com",
    fullname: "Srita. Ramiro Segura Segura",
    phonenumber: "(245) 262 2956",
    address1: "Calle Guillermina Carrera 9291",
    address2: "Bajada Querétaro S/N",
    city: "Villahermosa",
    state: "Durango",
    postalcode: "13563",
    country: "Islandia"
  },
  {
    typeId: "Normal",
    emailaddress: "enrique.aparicio@gmail.com",
    fullname: "Dr. Daniel Mercado Mercado",
    phonenumber: "468 815 7510",
    address1: "Jardines Leonardo 30",
    address2: "Huerta Gómez Palacio 91",
    city: "Zongolica",
    state: "Baja California",
    postalcode: "53700",
    country: "Malaui"
  },
  {
    typeId: "Normal",
    emailaddress: "maribel.cisneros@prodigy.net.mx",
    fullname: "Ing. Alfredo Román Román",
    phonenumber: "55 5539 3030",
    address1: "Quinta Teapa 77 Apartamento 05",
    address2: "Plaza Reyna 34341",
    city: "Minatitlán",
    state: "Yucatán",
    postalcode: "04312",
    country: "Botsuana"
  },
  {
    typeId: "Normal",
    emailaddress: "rodrigo.ávalos@gmail.com",
    fullname: "Héctor Anaya Anaya",
    phonenumber: "785 087 7351",
    address1: "Privada Eduardo 455",
    address2: "Glorieta Beatriz 8 Interior ?4",
    city: "Coronango",
    state: "Zacatecas",
    postalcode: "12443",
    country: "Australia"
  },
  {
    typeId: "Normal",
    emailaddress: "armando.rivas@hotmail.com",
    fullname: "Felipe Trujillo Trujillo",
    phonenumber: "55 8174 3920",
    address1: "Lago Gilberto Garduño 9026 Depto. 266",
    address2: "Rampa Campeche 1 Piso 6",
    city: "Chavinda",
    state: "Aguascalientes",
    postalcode: "59880",
    country: "Islas Malvinas"
  },
  {
    typeId: "VIP",
    emailaddress: "catalina.lópez@gmail.com",
    fullname: "Sr. Bertha Cervantes Cervantes",
    phonenumber: "33-8507-8486",
    address1: "Rampa Armando 492",
    address2: "Muelle Campeche 9895 Piso 9",
    city: "Vanegas",
    state: "Campeche",
    postalcode: "30890",
    country: "Ecuador"
  },
  {
    typeId: "VIP",
    emailaddress: "adriana.nava@prodigy.net.mx",
    fullname: "Srita. Angélica Téllez Téllez",
    phonenumber: "774 702 8175",
    address1: "Rincón Tecamac 76829",
    address2: "Arroyo San Nicolás de los Garza 68373 Apartamento 13",
    city: "Gómez Palacio",
    state: "Quintana Roo",
    postalcode: "40001",
    country: "Malí"
  },
  {
    typeId: "Normal",
    emailaddress: "omar.enríquez@yahoo.com",
    fullname: "Jaime Soto Soto",
    phonenumber: "55-1867-9855",
    address1: "Subida Copalillo 10854",
    address2: "Lago Chiapas S/N",
    city: "Uruachi",
    state: "Baja California Sur",
    postalcode: "15826",
    country: "Fiyi"
  },
  {
    typeId: "Normal",
    emailaddress: "sergio.toledo@gmail.com",
    fullname: "Ing. Julia Sotelo Sotelo",
    phonenumber: "(81) 4058 8132",
    address1: "Monte Lidia 851 9ª Planta",
    address2: "Grupo Araceli 5",
    city: "Tocatlan",
    state: "Puebla",
    postalcode: "13085",
    country: "Ecuador"
  },
  {
    typeId: "Normal",
    emailaddress: "javier.de los santos@hotmail.com",
    fullname: "Srita. Martín Jaramillo Jaramillo",
    phonenumber: "997 808 2998",
    address1: "Conjunto Veracruz 299 Depto. 986",
    address2: "Paseo San Marcos 3 Piso 9",
    city: "Hocaba",
    state: "Nayarit",
    postalcode: "88151",
    country: "Lituania"
  },
  {
    typeId: "VIP",
    emailaddress: "olivia.cruz@yahoo.com",
    fullname: "Dolores Sánchez Sánchez",
    phonenumber: "(634) 041 9687",
    address1: "Explanada Petra 5 Interior ?8",
    address2: "Calle Lolotla 3 Interior ?4",
    city: "Matamoros",
    state: "Oaxaca",
    postalcode: "30577",
    country: "Etiopía"
  },
  {
    typeId: "Normal",
    emailaddress: "manuela.vega@gmail.com",
    fullname: "Sonia Velázquez Velázquez",
    phonenumber: "55 4845 9169",
    address1: "Glorieta Saric 4500 Planta alta",
    address2: "Quinta Sergio 8 Planta alta",
    city: "López",
    state: "Oaxaca",
    postalcode: "09966",
    country: "Uganda"
  },
  {
    typeId: "Normal",
    emailaddress: "jorge luis.del ángel@yahoo.com",
    fullname: "Isabel Villalobos Villalobos",
    phonenumber: "475 097 0685",
    address1: "Rincón Morelos 45",
    address2: "Lago Lorena S/N",
    city: "Tonatico",
    state: "Ciudad de México",
    postalcode: "64923",
    country: "Islas Marshall"
  },
  {
    typeId: "Normal",
    emailaddress: "luis alberto.ávila@prodigy.net.mx",
    fullname: "Rubén Alcántara Alcántara",
    phonenumber: "(453) 562 4022",
    address1: "Monte San Luis Potosí S/N",
    address2: "Sector Irapuato 947",
    city: "Uruachi",
    state: "Nuevo León",
    postalcode: "66097",
    country: "Indonesia"
  },
  {
    typeId: "VIP",
    emailaddress: "petra.ordoñez@gmail.com",
    fullname: "Ing. Edith Robles Robles",
    phonenumber: "(779) 812 4877",
    address1: "Grupo Celia Huerta 98 Planta baja",
    address2: "Avenida José Arredondo 76 Planta baja",
    city: "Nuevo Zoquiapam",
    state: "Hidalgo",
    postalcode: "11939",
    country: "Japón"
  },
  {
    typeId: "VIP",
    emailaddress: "marcos.nieto@gmail.com",
    fullname: "Gregorio Piña Piña",
    phonenumber: "55 3653 8869",
    address1: "Plaza Yucatán 749 Interior 281",
    address2: "Rincón Tepoztlan S/N",
    city: "Xicohtzinco",
    state: "Yucatán",
    postalcode: "44567",
    country: "Fiyi"
  },
  {
    typeId: "Normal",
    emailaddress: "verónica.vázquez@gmail.com",
    fullname: "Dr. Gustavo Mondragón Mondragón",
    phonenumber: "(81) 8330 4416",
    address1: "Huerta Francisco 40626",
    address2: "Muelle Guerrero 8238 Int. 6",
    city: "San Buenaventura",
    state: "Ciudad de México",
    postalcode: "59452",
    country: "Nepal"
  },
  {
    typeId: "Normal",
    emailaddress: "gilberto.díaz@hotmail.com",
    fullname: "Ofelia Carrasco Carrasco",
    phonenumber: "81 5957 6417",
    address1: "Plaza Esther 201 Interior 544",
    address2: "Escalinata Erongaricuaro 61414",
    city: "Cozumel",
    state: "Coahuila",
    postalcode: "65205",
    country: "Croacia"
  },
  {
    typeId: "Normal",
    emailaddress: "eva.sotelo@prodigy.net.mx",
    fullname: "Leonardo Ponce Ponce",
    phonenumber: "661 766 8605",
    address1: "Calle Alfonso 2459 Interior ?0",
    address2: "Glorieta Campeche 093",
    city: "Mazatepec",
    state: "Colima",
    postalcode: "63391",
    country: "Estonia"
  }
];

const seedDataCreditCard = [
  {
    customerId: "YYYYYYYY",
    cardname: "Srita. Maribel Parra Parra",
    cardnumber: "1211-1221-1234-2201",
    expirationdate: "2011-10-12",
    cvv: "815"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Sra. Araceli de la Rosa de la Rosa",
    cardnumber: "1228-1221-1221-1431",
    expirationdate: "2012-11-12",
    cvv: "063"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Cristina Islas Islas",
    cardnumber: "1234-2121-1221-1211",
    expirationdate: "2011-10-12",
    cvv: "026"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Socorro Beltrán Beltrán",
    cardnumber: "1234-2121-1221-1211",
    expirationdate: "2015-11-11",
    cvv: "355"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Marcos Salas Salas",
    cardnumber: "1234-2121-1221-1211",
    expirationdate: "2011-10-12",
    cvv: "270"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Rigoberto Carmona Carmona",
    cardnumber: "1211-1221-1234-2201",
    expirationdate: "2015-11-11",
    cvv: "641"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Ing. Eduardo Mercado Mercado",
    cardnumber: "1212-1221-1121-1234",
    expirationdate: "2012-11-12",
    cvv: "367"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Juan Carlos Andrade Andrade",
    cardnumber: "1211-1221-1234-2201",
    expirationdate: "2012-11-12",
    cvv: "397"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Sr. Rodrigo Suárez Suárez",
    cardnumber: "1211-1221-1234-2201",
    expirationdate: "2012-11-12",
    cvv: "501"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Susana Núñez Núñez",
    cardnumber: "1212-1221-1121-1234",
    expirationdate: "2013-9-12",
    cvv: "875"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Dr. Saúl Solano Solano",
    cardnumber: "1212-1221-1121-1234",
    expirationdate: "2012-11-12",
    cvv: "132"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Sra. Omar Esquivel Esquivel",
    cardnumber: "1212-1221-1121-1234",
    expirationdate: "2011-10-12",
    cvv: "288"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Mercedes Peña Peña",
    cardnumber: "1212-1221-1121-1234",
    expirationdate: "2015-11-11",
    cvv: "312"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Teresa Juárez Juárez",
    cardnumber: "1212-1221-1121-1234",
    expirationdate: "2015-11-11",
    cvv: "586"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Teresa Granados Granados",
    cardnumber: "1211-1221-1234-2201",
    expirationdate: "2011-10-12",
    cvv: "874"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Raúl Méndez Méndez",
    cardnumber: "1228-1221-1221-1431",
    expirationdate: "2012-11-12",
    cvv: "684"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Sra. Elizabeth Granados Granados",
    cardnumber: "1228-1221-1221-1431",
    expirationdate: "2011-10-12",
    cvv: "120"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Ernesto Báez Báez",
    cardnumber: "1234-2121-1221-1211",
    expirationdate: "2015-11-11",
    cvv: "809"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Sr. Daniel Gallardo Gallardo",
    cardnumber: "1234-2121-1221-1211",
    expirationdate: "2013-9-12",
    cvv: "450"
  },
  {
    customerId: "YYYYYYYY",
    cardname: "Sara Téllez Téllez",
    cardnumber: "1234-2121-1221-1211",
    expirationdate: "2015-11-11",
    cvv: "563"
  }
];

const seedDataShoppingCart = [
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 1812,
    taxamount: 85560,
    discountamount: 60320,
    totalamount: 31670
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 32687,
    taxamount: 42146,
    discountamount: 91072,
    totalamount: 35504
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 41682,
    taxamount: 3997,
    discountamount: 72432,
    totalamount: 95062
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 55712,
    taxamount: 46355,
    discountamount: 47434,
    totalamount: 37101
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 78683,
    taxamount: 81571,
    discountamount: 75068,
    totalamount: 80938
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 98695,
    taxamount: 36427,
    discountamount: 96957,
    totalamount: 54453
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 59813,
    taxamount: 83284,
    discountamount: 93562,
    totalamount: 86627
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 32589,
    taxamount: 54616,
    discountamount: 24011,
    totalamount: 67831
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 73832,
    taxamount: 13403,
    discountamount: 94857,
    totalamount: 54827
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 40012,
    taxamount: 47538,
    discountamount: 41223,
    totalamount: 89801
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 33317,
    taxamount: 14638,
    discountamount: 63313,
    totalamount: 5062
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 57535,
    taxamount: 83917,
    discountamount: 97354,
    totalamount: 85581
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 66059,
    taxamount: 12267,
    discountamount: 8459,
    totalamount: 16919
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 47859,
    taxamount: 77351,
    discountamount: 5801,
    totalamount: 22527
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 44000,
    taxamount: 69131,
    discountamount: 3190,
    totalamount: 83821
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 59779,
    taxamount: 19206,
    discountamount: 25762,
    totalamount: 6205
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 15987,
    taxamount: 87123,
    discountamount: 64724,
    totalamount: 17426
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 80511,
    taxamount: 43193,
    discountamount: 35279,
    totalamount: 84226
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 97457,
    taxamount: 35821,
    discountamount: 20150,
    totalamount: 54540
  },
  {
    customerId: "YYYYYYYY",
    productsoncartId: "YYYYYYYY",
    subtotal: 11309,
    taxamount: 92832,
    discountamount: 23718,
    totalamount: 51598
  }
];

const seedDataProductOnCart = [
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 57535,
    quantity: 5520,
    total: 60957
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 69822,
    quantity: 8074,
    total: 36591
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 94432,
    quantity: 2585,
    total: 20090
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 61493,
    quantity: 5556,
    total: 99423
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 89934,
    quantity: 4709,
    total: 11906
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 16058,
    quantity: 6353,
    total: 21823
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 86869,
    quantity: 1932,
    total: 36639
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 32815,
    quantity: 2667,
    total: 86970
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 11426,
    quantity: 5239,
    total: 69735
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 5945,
    quantity: 9300,
    total: 20903
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 60103,
    quantity: 1005,
    total: 57231
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 78743,
    quantity: 5276,
    total: 89836
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 5462,
    quantity: 4564,
    total: 25474
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 90085,
    quantity: 4372,
    total: 50085
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 45373,
    quantity: 2957,
    total: 90930
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 63975,
    quantity: 3318,
    total: 86366
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 3356,
    quantity: 6584,
    total: 97032
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 11102,
    quantity: 2024,
    total: 97165
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 74411,
    quantity: 6519,
    total: 68900
  },
  {
    shoppingcartId: "YYYYYYYY",
    productId: "YYYYYYYY",
    price: 25976,
    quantity: 3602,
    total: 20559
  }
];

const createUser = async (username, email) => {
  const user = {
    username,
    email,
    isDummy: true
  };
  return createMutator({
    collection: Users,
    document: user,
    validate: false
  });
};

const createDummyUsers = async () => {
  // eslint-disable-next-line no-console
  console.log("// inserting dummy users…");
  return Promise.all([
    createUser("efuentes", "efuentes@softtek.com"),
    createUser("javier.perezb", "javier.perezb@softtek.com"),
    createUser("normaysel.carbajal", "normaysel.carbajal@softtek.com"),
    createUser("raul.moctezuma", "raul.moctezuma@softtek.com")
  ]);
};

// eslint-disable-next-line no-undef
Vulcan.removeGettingStartedContent = () => {
  Users.remove({ "profile.isDummy": true });
  // eslint-disable-next-line no-console
  console.log("// Getting started content removed");
};

Meteor.startup(() => {
  if (Users.find().fetch().length === 0) {
    Promise.await(createDummyUsers());
  }
  const currentUser = Users.findOne(); // just get the first user available

  if (Categories.find().fetch().length === 0) {
    // eslint-disable-next-line no-console
    console.log("// creating dummy Category");
    Promise.awaitAll(
      seedDataCategory.map(document =>
        createMutator({
          action: "category.create",
          collection: Categories,
          document,
          currentUser,
          validate: false
        })
      )
    );
  }

  if (Products.find().fetch().length === 0) {
    // eslint-disable-next-line no-console
    console.log("// creating dummy Product");
    Promise.awaitAll(
      seedDataProduct.map(document =>
        createMutator({
          action: "product.create",
          collection: Products,
          document,
          currentUser,
          validate: false
        })
      )
    );
  }

  if (Customers.find().fetch().length === 0) {
    // eslint-disable-next-line no-console
    console.log("// creating dummy Customer");
    Promise.awaitAll(
      seedDataCustomer.map(document =>
        createMutator({
          action: "customer.create",
          collection: Customers,
          document,
          currentUser,
          validate: false
        })
      )
    );
  }

  if (CreditCards.find().fetch().length === 0) {
    // eslint-disable-next-line no-console
    console.log("// creating dummy CreditCard");
    Promise.awaitAll(
      seedDataCreditCard.map(document =>
        createMutator({
          action: "creditcard.create",
          collection: CreditCards,
          document,
          currentUser,
          validate: false
        })
      )
    );
  }

  if (ShoppingCarts.find().fetch().length === 0) {
    // eslint-disable-next-line no-console
    console.log("// creating dummy ShoppingCart");
    Promise.awaitAll(
      seedDataShoppingCart.map(document =>
        createMutator({
          action: "shoppingcart.create",
          collection: ShoppingCarts,
          document,
          currentUser,
          validate: false
        })
      )
    );
  }

  if (ProductOnCarts.find().fetch().length === 0) {
    // eslint-disable-next-line no-console
    console.log("// creating dummy ProductOnCart");
    Promise.awaitAll(
      seedDataProductOnCart.map(document =>
        createMutator({
          action: "productoncart.create",
          collection: ProductOnCarts,
          document,
          currentUser,
          validate: false
        })
      )
    );
  }
});
