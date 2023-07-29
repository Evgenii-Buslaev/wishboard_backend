import UserService from "../services/UserService.js";

class UserController {
  async create(req, res) {
    try {
      const user = await UserService.create(req.body);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getOne(req, res) {
    try {
      const user = await UserService.getOne(req.params.id);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async login(req, res) {
    try {
      const user = await UserService.login(req.body);
      return res.json(user);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
      const updatedUser = await UserService.update(req.body);
      return res.json(updatedUser);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const deletedUser = await UserService.delete(req.body);
      return res.json(deletedUser);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new UserController();
