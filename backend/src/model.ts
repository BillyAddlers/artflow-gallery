import * as enmap from "enmap"

export class Model extends enmap.default {
    constructor(name: string) {
        super(name);
    }

    public getDataFromID(id: string) {
        let data: Data
        const rawdog = this.get(id)
        if (!rawdog) {
            data = this.createNewDataFromTemplate()
            this.set(data.id, data)
        } else {
            data = {
                id: rawdog.id,
                name: rawdog.name,
                category: rawdog.category,
                artist: rawdog.artist,
                year: rawdog.year,
                pricetag: rawdog.pricetag
            }
        }
        return data
    }

    private createNewDataFromTemplate() {
        const data: Data = {
            id: this.generateUID(),
            name: "John Doe",
            category: "Null",
            artist: "Null",
            year: 2024,
            pricetag: 1000
        }

        return data
    }

    getDataFromName(name: string) {
        return this.findAll("name", name)
    }

    public setNewData(data: Data) {
        const newID = this.generateUID()
        const oldData = this.get(newID)
        if (!oldData) {
            this.set(newID, data)
        }
        console.log(`DEBUG: Data saved as ${newID} and name ${data.name}`)
    }

    public generateUID() {
        const timestamp = new Date().getTime()
        const randomized = Math.floor(Math.random() * 1000000);
        const uid = parseInt(`${timestamp}${randomized}`)
        return uid.toString()
    }
}
