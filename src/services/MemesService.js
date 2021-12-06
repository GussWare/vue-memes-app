class MemesService {

    constructor() {

    }

    async getAll() {
        const response  = await fetch("https://api.imgflip.com/get_memes");
        const result    = await response.json();

        return result;
    }
}

export default new MemesService();