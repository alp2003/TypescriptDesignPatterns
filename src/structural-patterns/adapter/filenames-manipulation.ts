import { Continent } from './econtinent';

class FilenamesManipulation {
    constructor(private _fileNames: { [key: string]: string } = {}) {
        _fileNames[Continent.Africa] = 'africa.json';
        _fileNames[Continent.Asia] = 'asia.json';
        _fileNames[Continent.Europe] = 'europe.json';
        _fileNames[Continent.NorthAmerica] = 'northAmerica.json';
        _fileNames[Continent.SouthAmerica] = 'southAmerica.json';
    }

    public get fileNames() {
        return this._fileNames;
    }
}

export default new FilenamesManipulation();
