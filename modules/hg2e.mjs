// Custom actor and item classes.
import { HeavyGearActor } from "./actors/actor.mjs";
import { HeavyGearItem } from "./items/item.mjs";
import { HeavyGearCharacterSheet } from "./sheets/actors/character-sheet.mjs";
// import { HeavyGearNPCSheet } from "./sheets/actors/npc-sheet.mjs";
// import { HeavyGearVehicleSheet } from "./sheets/actors/vehicle-sheet.mjs";
// import { HeavyGearInfantrySheet } from "./sheets/actors/infantry-sheet.mjs";
import { HeavyGearItemSheet } from "./sheets/items/item-sheet.mjs";
// import { HEAVYGEAR } from "./helpers/config.mjs";
import { registerHandlebarsHelpers } from "./helpers/handlebars.mjs"
import { HeavyGearRollEngine } from "./helpers/roll-engine.mjs"

// Hook into the system initialization to override some settings.
Hooks.once('init', function() {
    console.log("hg2e | Initializing system.");

    registerHandlebarsHelpers();
    console.log("hg2e | Handlebars helpers initialized.");

    game.heavygear = {
        HeavyGearActor,
        HeavyGearItem,
    };

    // CONFIG.HEAVYGEAR = HEAVYGEAR;

    // TODO override initiative with the Heavy Gear rules.
    // CONFIG.Combat.initiative

    // Custom Document classes.
    CONFIG.Actor.documentClass = HeavyGearActor;
    CONFIG.Item.documentClass = HeavyGearItem;
    console.log("hg2e | Document classes configured.");

    CONFIG.ActiveEffect.legacyTransferral = false;

    // Unregister the Foundry default sheet applications and replace them with the custom ones.
    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet('heavygear', HeavyGearCharacterSheet, {
        makeDefault: true,
        label: "HEAVYGEAR.SheetLabels.Actor",
        types: ["Character"],
    });
    console.log("hg2e | Actor sheets configured.");

    Items.unregisterSheet('core', ItemSheet);
    Items.registerSheet('heavygear', HeavyGearItemSheet, {
        makeDefault: true,
        label: "HEAVYGEAR.SheetLabels.Item",
    });

    // Get our roll engine nice and prepped.
    CONFIG.Dice.rolls.push(HeavyGearRollEngine);

    console.log("hg2e | Item sheets configured.");
    console.log("hg2e | Reactor online. Sensors online. Weapons online. All systems nominal.");
});