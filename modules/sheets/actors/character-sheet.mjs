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

        return context;
    }

    activateListeners(htmlElement) {
        super.activateListeners(htmlElement);

        // We don't actually need this.
        // htmlElement.find('.shock-box').click(this._onShockBoxClick.bind(this));
    }

/*  A holdover from a first implementation where you would click the system shock boxes to add to it.
 *  This needs to be taken out the back and shot.

    _onShockBoxClick(event) {
        const box = event.currentTarget;
        const index = box.dataset.index;

        // Get current marks array or initialize it
        const marks = this.actor.system.physical_status.system_shock.marked_boxes || [];
        const newMarks = [... marks];
        newMarks[index] = !newMarks[index];

        // Update the actor
        this.actor.update({
            'system.physical_status.system_shock.marked_boxes': newMarks
        });
    }
*/
}