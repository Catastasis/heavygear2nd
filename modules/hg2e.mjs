// Custom actor and item classes.
import { HeavyGearActor } from "./actors/actor.mjs";
import { HeavyGearItem } from "./items/item.mjs";
import { HeavyGearCharacterSheet } from "./sheets/actors/character-sheet.mjs";
import { HeavyGearNPCSheet } from "./sheets/actors/npc-sheet.mjs";
import { HeavyGearVehicleSheet } from "./sheets/actors/vehicle-sheet.mjs";
import { HeavyGearInfantrySheet } from "./sheets/actors/infantry-sheet.mjs";
import { HeavyGearItemSheet } from "./sheets/items/item-sheet.mjs";
import { HEAVYGEAR } from "./helpers/config.mjs";

// Hook into the system initialization to override some settings.
Hooks.once('init', function() {
    game.heavygear = {
        HeavyGearActor,
        HeavyGearItem,
    };

    CONFIG.HEAVYGEAR = HEAVYGEAR;

    // TODO override initiative with the Heavy Gear rules.
    // CONFIG.Combat.initiative

    // Custom Document classes.
    CONFIG.Actor.documentClass = HeavyGearActor;
    CONFIG.Item.documentClass = HeavyGearItem;

    CONFIG.ActiveEffect.legacyTransferral = false;

    // Unregister the Foundry default sheet applications and replace them with the custom ones.
    Actors.unregisterSheet('core', ActorSheet);
    Actors.registerSheet('heavygear', HeavyGearCharacterSheet, {
        makeDefault: true,
        label: "HEAVYGEAR.SheetLabels.Actor",
        types: ["Character"],
    });

    console.log("hg2e | Sheets registered:", Actors.registeredSheets);

    Items.unregisterSheet('core', ItemSheet);
    Items.registerSheet('heavygear', HeavyGearItemSheet, {
        makeDefault: true,
        label: "HEAVYGEAR.SheetLabels.Item",
    });

    // Preload Handlebars templates.
    return preloadHandlebarsTemplate();
});