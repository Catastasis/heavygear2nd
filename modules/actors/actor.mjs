export class HeavyGearActor extends Actor {
    
    prepareData() {
        super.prepareData();

    }

    prepareBaseData() {

    }

    prepareDerivedData() {
        const actorData = this;
        const flags = actorData.flags.boilerplate || {};
        console.log("hg2e - Character | Prepared sheet derived data for " + this.name);
        console.log("DEBUG INFO");
        console.log("Actor name: " + this.name);
        console.log("Actor type: " + this.type);
        console.log(this.system);
        
        this._prepareCharacterData(actorData);
    }

    _prepareCharacterData(actorData) {
        if (actorData.type !== "Character") return;

        const systemData = actorData.system;
        const FIT = systemData.attributes.FIT.value;
        const PSY = systemData.attributes.PSY.value;
        const WIL = systemData.attributes.WIL.value;

        systemData.secondary_traits.HEA.value = Math.round((FIT + PSY + WIL) /3);
    };
}