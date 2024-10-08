import { defineStore } from 'pinia';
import { rearrangeLetters } from '../utils/fileOperations';

export const useFileStore = defineStore('counter', {
  state: () => ({
    fileContent: '',
  }),
  getters: {
    getFileContent: (state) => {
      return state.fileContent;
    },
  },
  actions: {
    setFileContent(fileContent: string) {
      this.fileContent = fileContent;
    },
    shuffleFileContent() {
      this.fileContent = rearrangeLetters(this.fileContent);
    },
  },
});
