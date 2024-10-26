import { HeavyGearRollEngine } from "/systems/heavygear2e/modules/helpers/roll-engine.mjs";

export class HeavyGearCharacterSheet extends ActorSheet {
    constructor(... args) {
        super(... args);
        this.isEditing = false;
    }

    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["heavygear2e", "sheet", "actor"],
            template: "systems/heavygear2e/templates/actors/character-sheet.html",
            width: 800,
            height: 700
        })
    }

    getData() {
        const context = super.getData();
        context.isEditing = this.isEditing;
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
    
        // Lock button
        html.find('.toggle-edit').click(ev => {
            this.isEditing = !this.isEditing;
            this.render();
        });
    
        // Only bind roll listeners when NOT editing
        if (!this.isEditing) {
            html.find('.rollable').click(async (ev) => {
                const element = ev.currentTarget;
                const rollType = element.dataset.rollType;
                const attribute = element.dataset.attribute;
                
                if (rollType === "attribute") {
                    const value = this.getAttributeValue(attribute);
                    const roll = new HeavyGearRollEngine(
                        2,              // Always 2 dice for raw attribute rolls
                        value,          // Attribute value
                        5,              // Hardcoded threshold for test values.
                        `${attribute} Roll` // Label
                    );
                    await roll.evaluate();
                    await roll.toMessage({
                        speaker: ChatMessage.getSpeaker({ actor: this.actor })
                    });
                }
            });
        }
    }

    getAttributeValue(attribute) {
        // Check primary attributes first
        if (this.actor.system.attributes[attribute]) {
            return this.actor.system.attributes[attribute].value;
        }
        // Then check secondary
        if (this.actor.system.secondary_traits[attribute]) {
            return this.actor.system.secondary_traits[attribute].value;
        }
        return 0;
    }
}