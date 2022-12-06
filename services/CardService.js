import Card from "../models/Card.js";

class CardService {
  async create(card) {
    const createdCard = await Card.create(card);
    return createdCard;
  }
}

export default new CardService();
