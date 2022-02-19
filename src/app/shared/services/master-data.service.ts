import { Injectable } from "@angular/core";

@Injectable()
export class MasterDataService {
    private wordsList: Object;

    getWordsCount(key) {
        return this.wordsList[key];
    }

    setWordsCount(key, value) {
        const map = value.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
        const keysArray = Array.from(map.keys());

        let countList = []
        keysArray.forEach(element => {
            countList.push({
                word: element,
                count: map.get(element)
            })
        });

        countList.sort((a, b) => {
            return b.count - a.count
        });
        this.wordsList = this.wordsList ? this.wordsList : {};
        this.wordsList[key] = countList.slice(0, 10);
        console.log(this.wordsList);

        return this.wordsList[key];
    }
}