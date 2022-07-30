import { Country } from './country';
import { Continent } from './econtinent';
import fileNamesManipulation from './filenames-manipulation';
import fs from 'fs';
import { ICountriesRepository } from './icountries-repository';

export class CountriesRepository implements ICountriesRepository {
    async all(): Promise<Country[]> {
        return Promise.all(
            [
                Continent.Africa,
                Continent.Asia,
                Continent.Europe,
                Continent.NorthAmerica,
                Continent.SouthAmerica
            ].map((continent) => this.allByContinent(continent))
        ).then((results) => {
            let consolidated: Country[] = [];
            results.forEach((result) => {
                consolidated.push(...result);
            });

            return consolidated;
        });
    }

    async allByContinent(continent: Continent): Promise<Country[]> {
        return new Promise<Country[]>((resolve, reject) => {
            fs.readFile(
                this.continentToFileName(continent),
                'utf-8',
                (err, data) => {
                    if (err) {
                        reject(err);
                    } else {
                        let countries: Country[] = JSON.parse(data);
                        resolve(countries);
                    }
                }
            );
        });
    }

    async allByCurrency(currency: string): Promise<Country[]> {
        let all = await this.all();
        return all.filter((country) => country.currency === currency);
    }

    private continentToFileName(continent: Continent): string {
        let prefix: string = 'src/structural-patterns/adapter/countries/';
        return prefix + fileNamesManipulation.fileNames[Continent[continent]];
    }
}
