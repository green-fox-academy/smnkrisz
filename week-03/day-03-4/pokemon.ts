export class Pokemon {
    name: string;
    type: string;
    effectiveAgainst: string;

    constructor(name: string, type: string, effectiveAgainst: string) {
        this.name = name;
        this.type = type;
        this.effectiveAgainst = effectiveAgainst;
    }

    isEffectiveAgainst(pokemon: Pokemon): boolean {
        return this.effectiveAgainst === pokemon.type;
    }    
}

export function chooseEffective(pokemonOfAsh: Pokemon[], wildPokemon: Pokemon): string{
    for (let i = 0; i < pokemonOfAsh.length; i++){
        if (pokemonOfAsh[i].effectiveAgainst === wildPokemon.type){
            return pokemonOfAsh[i].name
        }
    }
    return '';
}