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
        const actorData = context.data;

        context.system = actorData.system;
        context.flags = actorData.flags;

        return context;
    }

    activateListeners(htmlElement) {
        super.activateListeners(htmlElement);

        // Listener for shock box clicking.
        htmlElement.find('.shock-box').click(this._onShockBoxClick.bind(this));
    }

    _onShockBoxClick(event) {
        const box = event.currentTarget;
        const index = box.dataset.index;

        // Get current marks array or initialize it
        const marks = this.actor.system.physical_status.system_shock.marked_boxes || [];
        
        // Toggle the mark
        marks[index] = !marks[index];

        // Update the actor
        this.actor.update({
            'system.physical_status.system_shock.marked_boxes': marks
        });
    }
}