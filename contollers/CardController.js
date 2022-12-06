import CardService from "../services/CardService.js";

class CardController {
  async create(req, res) {
    try {
      const card = await CardService.create(req.body);
      res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new CardController();
