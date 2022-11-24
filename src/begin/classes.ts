class Animal {
    private name: string;
    constructor(name: string) {
        this.name = name
    }

    public move(distanceInmeters: number) {
        console.log(`${this.name} moved ${distanceInmeters}m.`);
        
    }
}