import {create} from 'zustand'
import { devtools, persist } from "zustand/middleware";

export const LanguageSupportedMap = {
    ar:'Arabic',
    bn:'Bengali',
    bho:'Bhojpuri',
    zh:'Chinese',
    en:'English',
    fr:'French',
    de:'German',
    gu:'Gujarati',
    hi:'Hindi',
    kn:'Kannada',
    ko:'Korean',
    ml:'Malayalam',
    mr:'Marathi',
    sa:'Sanskrit',
    ta:'Tamil',
    te:'Telungu'
}

const LANGUAGES_IN_FREE = 2

export const useLanguageStore = create()
(devtools((set,get)=>({
    language:'en',
    setLanguage:(language) => set({language}),
    getLanguage: (isPro) => {
        // if(isPro)
        return Object.keys(LanguageSupportedMap)

        // return Object.keys(LanguageSupportedMap).slice(0,LANGUAGES_IN_FREE)
    },
    getNotSupportedLanguage: (isPro) => {
        if(isPro)
        return [];

        return Object.keys(LanguageSupportedMap).slice(LANGUAGES_IN_FREE)
    }
})))