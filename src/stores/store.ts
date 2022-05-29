import { Writable, writable } from 'svelte/store'
import { LanguageLabels } from '../interfaces';
import type { Language } from '../interfaces'


const urlParams = new URLSearchParams(window.location.search);
let initialLanguage = urlParams.get('lang') as Language
if (!Object.keys(LanguageLabels).includes(initialLanguage)) {
    initialLanguage = 'en'
}

const lang: Writable<Language> = writable(initialLanguage)
lang.subscribe((sub) => {
//   window.location.search = 'lang='+sub
})

// window.location.hash='#1.1'


export { lang }