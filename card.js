
function Card(name, rank, suit, id){ // Class

  /* Initializer */
  this.name = name;
  this.x = this.x_dst = 300;
  this.y = this.y_dst = 250;
  this.width = 200;
  this.height = 100;
  this.rank = rank;
  this.suit = suit;
  this.id = id; // ID of this card (int)
  this.selected = false;
  this.gray = false;
  this.pair = []; // 以毒攻毒 (Card list)
  this.immune = []; // 免疫 (Card list)
  this.annotation = ""; // 註解 (String)
  this.annotation2 = ""; // Lymphocyte (String)
  this.immuneEffective = []; // 免疫生效數字 (int array)
  this.media = []; // media for disease (string array)
  this.pathogenType = ""; // pathogen type: bacteria, virus, parasites (string)
  this.bigMark = ""; // big mark, 免疫生效用 (string)

  /* Functions */
  this.copy = function(id){ // copy a card; need to input new id (Card)
    c = new Card();
    c.name = this.name;
    c.x = c.x_dst = this.x;
    c.y = c.y_dst = this.y;
    c.width = this.width;
    c.height = this.height;
    c.rank = this.rank;
    c.suit = this.suit;
    c.id = id; // ID of c card (int)
    c.selected = this.selected;
    c.gray = this.gray;
    c.pair = this.pair; // 以毒攻毒 (Card list)
    c.immune = this.immune; // 免疫 (Card list)
    c.annotation = this.annotation; // 註解 (String)
    c.annotation2 = this.annotation2; // Lymphocyte (String)
    c.immuneEffective = this.immuneEffective; // 免疫生效數字 (int array)
    c.media = this.media; // media for disease (string array)
    c.pathogenType = this.pathogenType; // pathogen type: bacteria, virus, parasites (string)
    c.bigMark = this.bigMark; // big mark, 免疫生效用 (string)
    return c;
  }
}  
