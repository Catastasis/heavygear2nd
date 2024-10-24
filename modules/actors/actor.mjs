export class HeavyGearActor extends Actor {
    
    prepareData() {
        super.prepareData();
        const actorData = this.system;

        if (this.type === "Character") {
            this.prepareCharacterData();
        }

    }

    prepareBaseData() {

    }

    prepareDerivedData() {

    }

    prepareCharacterData() {
        // TODO
    }

}