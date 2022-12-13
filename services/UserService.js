import User from "../models/User.js";

class UserService {
  async create(user) {
    const createdUser = await User.create(user);
    return createdUser;
  }

  async getAll() {
    const users = await User.find();
    return users;
  }

  async getOne(id) {
    if (!id) {
      throw new Error("Не указан ID");
    }
    const user = await User.findById(id);
    return user;
  }

  async login(user) {
    const { name, password } = user;
    const users = await User.find();
    const logged_user = users.find(
      (user) => user.name === name && user.password === password
    );
    return logged_user || "Такой пользователь не найден";
  }

  async update(user) {
    if (!user._id) {
      throw new Error("Не указан ID");
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });
    return updatedUser;
  }

  async delete(user) {
    if (!user._id) {
      throw new Error("Не указан ID");
    }
    const deletedUser = await User.findByIdAndDelete(user._id, user);
    return deletedUser;
  }
}

export default new UserService();
