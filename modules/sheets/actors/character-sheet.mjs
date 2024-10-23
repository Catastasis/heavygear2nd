export class HeavyGearCharacterSheet extends ActorSheet {
    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
            classes: ["heavygear", "sheet", "actor"],
            template: "systems/heavygear2e/templates/actors/character-sheet.html",
            width: 700,
            height: 700
        })
    }

    getData() {
        const context = super.getData();
        const actorData = context.data;

        context.system = actorData.system;
        context.flags = actorData.flags;

        return context;
    }
}