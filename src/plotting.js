import {ColumnDataSource, Plotting} from '@bokeh/bokehjs';

// set up some data
const M = 100;
const xx = [];
const yy = [];
const colors = [];
const radii = [];
for (let y = 0; y <= M; y += 4) {
    for (let x = 0; x <= M; x += 4) {
        xx.push(x);
        yy.push(y);
        colors.push(Plotting.color([50+2*x, 30+2*y, 150]));
        radii.push(Math.random() * 0.4 + 1.7)
    }
}

// create a data source
const source = new ColumnDataSource({
    data: { x: xx, y: yy, radius: radii, colors: colors }
});

// make the plot and add some tools
const tools = "pan,crosshair,wheel_zoom,box_zoom,reset,save";
const p = Plotting.figure({ title: "Colorful Scatter", tools: tools });

// call the circle glyph method to add some circle glyphs
const circles = p.circle({ field: "x" }, { field: "y" }, { field: "radius" }, {
    source: source,
    radius: radii,
    fill_color: { field: "colors" },
    fill_alpha: 0.6,
    line_color: null
});

// show the plot
Plotting.show(p);