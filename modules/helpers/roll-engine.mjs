export class HeavyGearRollEngine extends Roll {
    constructor(skill, attribute, threshold, label = "Unlabeled Roll") {
        super(`${skill}d6kh1 + @attribute`, { attribute });
        
        this.options = {
            label,
            attribute,
            threshold
        };
    }

    async evaluate() {
        await super.evaluate();
        
        // Calculate results
        const results = this.terms[0].results;
        const highest = Math.max(...results.map(d => d.result));
        const numSixes = results.filter(d => d.result === 6).length;
        const sixBonus = Math.max(0, numSixes - 1);
        const total = this.total + sixBonus;
        
        // Store in options for template access
        this.options.highest = highest;
        this.options.sixBonus = sixBonus;
        this.options.total = total;
        this.options.success = total >= this.options.threshold;
        
        return this;
    }

    // Send to chat
    async toMessage(messageData={}) {
        const content = await renderTemplate("systems/heavygear2e/templates/chat/roll.html", {
            options: this.options,
            terms: this.terms
        });

        return ChatMessage.create({
            ...messageData,
            content: content,
            sound: CONFIG.sounds.dice
        });
    }
}