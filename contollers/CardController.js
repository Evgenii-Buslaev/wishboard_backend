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

  async getAll(req, res) {
    try {
      const cards = await CardService.getAll();
      return res.json(cards);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const card = await CardService.getOne(req.params.id);
      return res.json(card);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedCard = await CardService.update(req.body);
      return res.json(updatedCard);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const deletedCard = await CardService.delete(req.body);
      return res.json(deletedCard);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new CardController();
