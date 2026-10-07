export interface PokemonType {
    type1: string,
    type2?: string
}

export interface PokemonStat {
    name: string,
    value: number
}

export default interface Pokemon {
    pokemon_name: string,
    pokemon_image: string,
    pokemon_id?: number,
    types?: PokemonType,
    height?: number,
    weight?: number,
    abilities?: string[],
    stats?: PokemonStat[],
    description?: string,
}