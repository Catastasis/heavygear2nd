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
        const AGI = systemData.attributes.AGI.value || 0;
        const BLD = systemData.attributes.BLD.value || 0;
        const FIT = systemData.attributes.FIT.value || 0;
        const PSY = systemData.attributes.PSY.value || 0;
        const WIL = systemData.attributes.WIL.value || 0;

        // Secondary traits
        // STR = (BLD + FIT) ÷ 2, round towards 0
        systemData.secondary_traits.STR.value = Math.trunc((BLD + FIT) / 2);
        
        // HEA = (FIT + PSY + WIL) ÷ 3, round to nearest
        systemData.secondary_traits.HEA.value = Math.round((FIT + PSY + WIL) / 3);
        
        // STA = (5 × (BLD + HEA)) + 25, minimum 10
        const staBase = (5 * (BLD + systemData.secondary_traits.HEA.value)) + 25;
        systemData.secondary_traits.STA.value = Math.max(10, staBase);
        
        // UD (Unarmed Damage) = 3 + HTH + STR + BLD, minimum 1
        // Note: Need to handle HTH skill once implemented
        const hthSkill = 0; // Placeholder until skills are implemented
        const udBase = 3 + hthSkill + systemData.secondary_traits.STR.value + BLD;
        systemData.secondary_traits.UD.value = Math.max(1, udBase);
        
        // AD (Armed Damage) = 3 + Melee + STR + BLD, minimum 1
        // Note: Need to handle Melee skill once implemented
        const meleeSkill = 0; // Placeholder until skills are implemented
        const adBase = 3 + meleeSkill + systemData.secondary_traits.STR.value + BLD;
        systemData.secondary_traits.AD.value = Math.max(1, adBase);
        
        // Physical Status calculations
        // Flesh Wound = STA ÷ 2, round up
        systemData.physical_status.flesh_wound.score = Math.ceil(systemData.secondary_traits.STA.value / 2);
        
        // Deep Wound = STA
        systemData.physical_status.deep_wound.score = systemData.secondary_traits.STA.value;
        
        // Instant Death = STA × 2
        systemData.physical_status.instant_death.score = systemData.secondary_traits.STA.value * 2;
        
        // System Shock = 5 + HEA, minimum 1
        systemData.physical_status.system_shock.shock_threshold = 
        Math.max(1, 5 + systemData.secondary_traits.HEA.value);

        // Calculate the amount of system shock this character has accrued.
        // Every light wound inflicts 1 point; every deep wound inflicts 2.
        systemData.physical_status.system_shock.current_shock = 
            systemData.physical_status.flesh_wound.amount + 
            (systemData.physical_status.deep_wound.amount * 2);

        // Check whether system shock has exceeded the threshold. This should warn the character is entering shock.
        if (systemData.physical_status.system_shock.current_shock > systemData.physical_status.system_shock.shock_threshold) {
            // TODO implement chunky salsa rules.
            this.element?.classList.add('system-shock-exceeded');
        };
    };
}