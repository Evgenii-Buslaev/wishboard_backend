import { v4 as uuidv4 } from "uuid";
import * as path from "path";

class FilesService {
  saveFile(file) {
    try {
      const fileName = uuidv4() + ".jpg";
      const filePath = path.resolve("static", fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
      console.log(e);
    }
  }
}

export default new FilesService();
