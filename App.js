import { readdir, stat } from 'node:fs/promises';
import path from 'path';
import readline from 'readline';

export class App {
  constructor() {
    this.stdio = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  readCommand() {
    this.stdio.prompt();
    this.stdio.on('line', (input) => {
      const [mit, command, directoryPath] = input.split(' ');
      if (command === 'list') this.list(directoryPath);
    });
  }

  async list(directoryPath) {
    try {
      const fileList = await readdir(directoryPath);
      fileList.forEach(async (file, index) => {
        const filePath = path.join(directoryPath, file);
        try {
          const stats = await stat(filePath);
          console.log(
            `${index + 1}. ${file} ${(stats.size / 1024).toFixed(2)}KB`
          );
        } catch (err) {
          console.log(`Error getting file stats: ${err}`);
        }
      });
    } catch (err) {
      console.error(err);
    }
  }
}
