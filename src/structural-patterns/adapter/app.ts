import { CountriesRepository } from './countries-repository';
import { Continent } from './econtinent';
import { RestCountries } from './rest-countries';
import { RestCountriesAdapter } from './rest-countries-adapter';

export let countriesRepo = new CountriesRepository();

// countriesRepo.allByCurrency('EUR').then((euroCountries) => {
//     console.log('Euro Countries', euroCountries);
// });

// countriesRepo.allByContinent(Continent.NorthAmerica).then((northAmerica) => {
//     console.log(`Number of north american countries: ${northAmerica.length}`);
// });

// (async () => {
//     const result = await Promise.all([
//         countriesRepo.allByCurrency('EUR'),
//         countriesRepo.allByContinent(Continent.NorthAmerica)
//     ]);
//     const euroCountries = await countriesRepo.allByCurrency('EUR');
//     const northAmericaCountries = await countriesRepo.allByContinent(
//         Continent.NorthAmerica
//     );

//     result.forEach((countries) => {
//         console.log(countries);
//     });

//     console.log('Euro Countries', euroCountries);
//     console.log(
//         `Number of north american countries: ${northAmericaCountries.length}`
//     );
// })();

(async () => {
    const restCountriesRepo = new RestCountriesAdapter(new RestCountries());

    try {
        restCountriesRepo.allByCurrency('EUR').then((euroCountries) => {
            console.log('Euro Countries', euroCountries);
        });

        restCountriesRepo
            .allByContinent(Continent.NorthAmerica)
            .then((northAmerica) => {
                console.log(
                    `Number of north american countries: ${northAmerica.length}`
                );
            });
    } catch (error: any) {
        console.log('error:', error.message);
    }
})();
