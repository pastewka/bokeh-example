import {ColumnDataSource, Grid, LinAlg, Line, LinearAxis, Range1d, Plot, Plotting} from '@bokeh/bokehjs';

// create some data and a ColumnDataSource
const x = LinAlg.linspace(-0.5, 20.5, 10);
const y = x.map(function (v) { return v * 0.5 + 3.0; });
const source = new ColumnDataSource({ data: { x: x, y: y } });

// create some ranges for the plot
const xdr = new Range1d({ start: -0.5, end: 20.5 });
const ydr = new Range1d({ start: -0.5, end: 20.5 });

// make the plot
const plot = new Plot({
    title: "BokehJS Plot",
    x_range: xdr,
    y_range: ydr,
    width: 400,
    height: 400,
    background_fill_color: "#F2F2F7"
});

// add axes to the plot
const xaxis = new LinearAxis({ axis_line_color: null });
const yaxis = new LinearAxis({ axis_line_color: null });
plot.add_layout(xaxis, "below");
plot.add_layout(yaxis, "left");

// add grids to the plot
const xgrid = new Grid({ ticker: xaxis.ticker, dimension: 0 });
const ygrid = new Grid({ ticker: yaxis.ticker, dimension: 1 });
plot.add_layout(xgrid);
plot.add_layout(ygrid);

// add a Line glyph
const line = new Line({
    x: { field: "x" },
    y: { field: "y" },
    line_color: "#666699",
    line_width: 2
});
plot.add_glyph(line, source);

Plotting.show(plot);