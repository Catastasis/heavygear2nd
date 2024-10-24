export const registerHandlebarsHelpers = () => {
    Handlebars.registerHelper('times', function(n, block) {
        var accum = '';
        for(var i = 0; i < n; ++i)
            accum += block.fn({index: i});
        return accum;
    });

    Handlebars.registerHelper('lt', function(a, b) {
        return a < b;
    });

    Handlebars.registerHelper('lookup', function(arr, idx) {
        return arr[idx];
    });
};