import { defineStore } from 'pinia'

export const useRickAndMortyStore = defineStore('rickAndMorty', () => {
    function addCharacter(_character: Character) {
        // add character to the list
    }

    return {
        addCharacter,
    }
})
