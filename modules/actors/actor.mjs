export class HeavyGearActor extends Actor {
    
    prepareData() {
        super.prepareData();

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