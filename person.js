var voornaam = 'Jesse';
var achternaam = 'de Wit';
var woonplaats = 'Tilburg';

function i18l(language) {
    switch(language) {
        case 'nl':
            return ({
                voornaam : voornaam,
                achternaam : achternaam,
                woonplaats : woonplaats
            })
            break;
            
        default:
        case 'uk':
            return ({
                firstname : voornaam,
                lastname : achternaam,
                town : woonplaats
            })
            break;
            
    }
}

module.exports = {i18l};