function App() {
  return (
    <div className="container">

      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./prosciutto.jpg",
    soldOut: false,
  },
];
// header

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>)
}

//MENU
function Menu() {

  const pizzas = pizzaData;
  const numpizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>


      {numpizza > 0 ?
        <>
          <p>Authentic Italian cuisine.6 creative dishes to choose from . All from our stone oven. All organic ,All delicious.</p>
          <ul className="pizzas">
            {pizzas.map(pizza =>
              <Pizza objName={pizza} key={pizza.name} />

            )}


          </ul>
        </> : (<p>We are working on Our Menu .Plz Come Later</p>)}
    </main>)
}
// MENU.DATA
function Pizza({ objName }) {
  return (
    <li className={`pizza ${objName.soldOut ? "sold-out" : ""}`}>
      <img src={objName.photoName} alt={objName.name} />
      <div>
        <h3>{objName.name}</h3>
        <p>{objName.ingredients}</p>
        <span>{objName.soldOut ? "SOLD OUT" : objName.price + 3}</span>
      </div>
    </li>)
}

//FOOTER
function Footer() {

  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;


  return (
    <footer className="footer">
      {isOpen ? <Order closeHour={closeHour} /> : (<p>We are Happy to Welcome you between {openHour}:00 and {closeHour}:00.</p>)}
    </footer>)
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are Open until {closeHour}:00. Come visit us or order Online.</p>
      <button className="btn">Order</button>
    </div>
  )
}


export default App;
