import {defineStore} from "pinia";

export const usePathStore = defineStore('PathStore', {
    state: () => ({
        Angebotpaths: [
            {StoreID: 1, MaxPreis: 50, MinPreis: 1},
        ],
        Spielpaths: [
            {title: "Spieltitle", exact: 0},
        ],
        DealIDs: [
            {ID: "abcd"}
        ],
    }),
    getters: {
        getStoreID(state) {
            console.log("StoreID: " + state.Angebotpaths.StoreID)
            return state.Angebotpaths.StoreID
        },
        getPreisMax(state) {
            console.log("StoreMaxPreis: " + state.Angebotpaths.MaxPreis)
            return state.Angebotpaths.MaxPreis
        },
        getPreisMin(state) {
            console.log("StoreMinPreis: " + state.Angebotpaths.MinPreis)
            return state.Angebotpaths.MinPreis
        },
        getTitle(state) {
            console.log("StoreTitle: " + state.Spielpaths.title)
            return state.Spielpaths.title
        },
        getExact(state) {
            console.log("StoreExact: " + state.Spielpaths.exact)
            return state.Spielpaths.exact
        },
        getDealID(state) {
            console.log("StoreDealID: " + state.DealIDs.ID)
            return state.DealIDs.ID
        },
    },
    actions: {
        changeStoreID (newID) {
            this.Angebotpaths.StoreID = newID
            console.log("Neue StoreStoreID: " + this.Angebotpaths.StoreID)
        },
        changeMaxPreis (newMax) {
            this.Angebotpaths.MaxPreis = newMax
            console.log("Neuer StoreMaxPreis: " + this.Angebotpaths.MaxPreis)
        },
        changeMinPreis (newMin) {
            this.Angebotpaths.MinPreis = newMin
            console.log("Neuer StoreMinPreis: " + this.Angebotpaths.MinPreis)
        },
        changeTitle (newTitle) {
            this.Spielpaths.title = newTitle
            console.log("Neuer StoreTitle: " + this.Spielpaths.title)
        },
        changeExact (newExact) {
            this.Spielpaths.exact = newExact
            console.log("Neues StoreExact: " + this.Spielpaths.exact)
        },
        changeDealID (newID) {
            this.DealIDs.ID = newID
            console.log("Neue ID: " + this.DealIDs.ID)
        }
    }
})