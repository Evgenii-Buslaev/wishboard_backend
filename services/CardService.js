import Card from "../models/Card.js";
import FilesService from "./FilesService.js";

class CardService {
  async create(card, picture) {
    const fileName = FilesService.saveFile(picture);
    const createdCard = await Card.create({ ...card, picture: fileName });
    return createdCard;
  }

  async getAll() {
    const cards = await Card.find();
    return cards;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Не указан ID");
    }
    const card = await Card.findById(id);
    return card;
  }

  async update(card) {
    if (!card._id) {
      throw new Error("Не указан ID");
    }
    const updatedCard = await Card.findByIdAndUpdate(card._id, card, {
      new: true,
    });
    return updatedCard;
  }

  async delete(card) {
    if (!card._id) {
      throw new Error("Не указан ID");
    }
    const deletedCard = await Card.findByIdAndDelete(card._id, card);
    return deletedCard;
  }
}

export default new CardService();
