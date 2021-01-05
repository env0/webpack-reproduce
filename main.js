export class Model {
    constructor() {
        if (!new.target.isInitialized) {
            throw 'oh no';
        }
    }
}

new Model();