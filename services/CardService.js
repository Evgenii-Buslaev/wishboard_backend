import Card from "../models/Card";

class CardService {
  async create(card) {
    const createdCard = await Card.create(card);
    return createdCard;
  }
}

export default new CardService();
