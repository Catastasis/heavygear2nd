export class HeavyGearItemSheet extends ItemSheet {
    /** @override */
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ['heavygear', 'sheet', 'item'],
        width: 520,
        height: 480,
        tabs: [
          {
            navSelector: '.sheet-tabs',
            contentSelector: '.sheet-body',
            initial: 'description',
          },
        ],
      });
    }
}