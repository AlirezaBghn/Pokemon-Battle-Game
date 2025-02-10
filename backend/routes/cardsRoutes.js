import express from "express";
const router = express.Router();

// Define 18 cards with image URLs and powers between 100 to 10
const cards = [
  {
    id: 1,
    name: "Aerodactyl",
    power: 100,
    image: "http://localhost:5005/uploads/1739108314258-726498757.gif ",
  },
  {
    id: 2,
    name: "Archen-",
    power: 90,
    image: "http://localhost:5005/uploads/1739108338907-895546452.gif ",
  },
  {
    id: 3,
    name: "Aggron-",
    power: 80,
    image: "http://localhost:5005/uploads/1739108329438-444459974.gif ",
  },
  {
    id: 4,
    name: "Tyranitar-",
    power: 70,
    image: "http://localhost:5005/uploads/1739108508264-247912264.gif ",
  },
  {
    id: 5,
    name: "Aurorus-",
    power: 60,
    image: "http://localhost:5005/uploads/1739108357974-645171904.gif ",
  },
  {
    id: 6,
    name: "Bastiodon",
    power: 50,
    image: "http://localhost:5005/uploads/1739108372589-333889852.gif ",
  },
  {
    id: 7,
    name: "Baxcalibur",
    power: 40,
    image: "http://localhost:5005/uploads/1739108381106-950815798.gif ",
  },
  {
    id: 8,
    name: "Cranidos",
    power: 30,
    image: "http://localhost:5005/uploads/1739108390377-728368653.gif ",
  },
  {
    id: 9,
    name: "Blastoise",
    power: 20,
    image: "http://localhost:5005/uploads/1739108398198-645373693.gif ",
  },
  {
    id: 10,
    name: "Dracozolt",
    power: 100,
    image: "http://localhost:5005/uploads/1739108414178-413213070.gif ",
  },
  {
    id: 11,
    name: "Lapras",
    power: 90,
    image: "http://localhost:5005/uploads/1739108421758-866211661.gif ",
  },
  {
    id: 12,
    name: "Leafeon",
    power: 80,
    image: "http://localhost:5005/uploads/1739108431428-440906974.gif ",
  },
  {
    id: 13,
    name: "Mega-garchomp",
    power: 70,
    image: "http://localhost:5005/uploads/1739108442838-278167118.gif ",
  },
  {
    id: 14,
    name: "Meganium-growl",
    power: 60,
    image: "http://localhost:5005/uploads/1739108452044-337983415.gif ",
  },
  {
    id: 15,
    name: "Nidoking",
    power: 50,
    image: "http://localhost:5005/uploads/1739108462593-125137829.gif ",
  },
  {
    id: 16,
    name: "Feraligatr.",
    power: 40,
    image: "http://localhost:5005/uploads/1739108470100-629098993.gif ",
  },
  {
    id: 17,
    name: "Pidgeotto",
    power: 30,
    image: "http://localhost:5005/uploads/1739108487022-48683352.gif ",
  },
  {
    id: 18,
    name: "Tropius-meganium",
    power: 20,
    image: "http://localhost:5005/uploads/1739108500794-997868218.gif ",
  },
];

router.get("/", (req, res) => {
  res.json(cards);
});

export default router;
