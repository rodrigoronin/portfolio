import TypeIt from "typeit";

import "./variables.css";
import "./index.css";

new TypeIt(".animated", {
  speed: 100,
  startDelay: 500,
  loop: true,
})
  .delete()
  .type("Front-end", { delay: 1000 })
  .delete()
  .type("Back-end", { delay: 1000, startDelay: 500 })
  .delete()
  .type("Fullstack", { delay: 1000 })
  .delete()
  .type("Game", { delay: 1000 })
  .delete()
  .type("Mobile", { delay: 1000 })
  .go();
