import { HeavyGearRollEngine } from "/systems/heavygear2e/modules/helpers/roll-engine.mjs";

export class HeavyGearCharacterSheet extends ActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["heavygear2e", "sheet", "actor"],
            template: "systems/heavygear2e/templates/actors/character-sheet.html",
            width: 700,
            height: 700
        })
    }

    getData() {
        const context = super.getData();

        context.system = this.actor.system;
        context.flags = this.actor.flags;

        context.shockThresholdPosition = 
        (context.system.physical_status.system_shock.shock_threshold * 5) + '%';
        context.currentShockWidth = 
        (context.system.physical_status.system_shock.current_shock * 5) + '%';

        return context;
    }

    activateListeners(html) {
        super.activateListeners(html);
        // Test implementation of the roll mechanic. Still missing the fumble logic.
        html.find('.roll-test').click(async (ev) => {
            const roll = new HeavyGearRollEngine(
                2,              // skill
                3,              // attribute
                5,              // threshold
                "Test Roll"     // label
            );
            
            await roll.evaluate();
            await roll.toMessage({
                speaker: ChatMessage.getSpeaker({ actor: this.actor })
            });
        });
    }
}