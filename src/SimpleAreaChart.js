// URL: https://beta.observablehq.com/@mbostock/d3-area-chart
// Title: D3 Area Chart
// Author: Mike Bostock (@mbostock)
// Version: 93
// Runtime version: 1

const m0 = {
  id: "87e37d7b508e7300@93",
  variables: [
    {
      inputs: ["md"],
      value: function(md) {
        return md`
# D3 Area Chart

AAPL stock price. Data: Yahoo Finance
        `;
      }
    },
    {
      name: "chart",
      inputs: [
        "d3",
        "DOM",
        "width",
        "height",
        "data",
        "area",
        "xAxis",
        "yAxis"
      ],
      value: function(d3, DOM, width, height, data, area, xAxis, yAxis) {
        const svg = d3.select(DOM.svg(width, height));

        svg
          .append("path")
          .datum(data)
          .attr("fill", "steelblue")
          .attr("d", area);

        svg.append("g").call(xAxis);

        svg.append("g").call(yAxis);

        return svg.node();
      }
    },
    {
      name: "height",
      value: function() {
        return 500;
      }
    },
    {
      name: "margin",
      value: function() {
        return { top: 20, right: 20, bottom: 30, left: 30 };
      }
    },
    {
      name: "x",
      inputs: ["d3", "data", "margin", "width"],
      value: function(d3, data, margin, width) {
        return d3
          .scaleTime()
          .domain(d3.extent(data, d => d.date))
          .range([margin.left, width - margin.right]);
      }
    },
    {
      name: "y",
      inputs: ["d3", "data", "height", "margin"],
      value: function(d3, data, height, margin) {
        return d3
          .scaleLinear()
          .domain([0, d3.max(data, d => d.value)])
          .nice()
          .range([height - margin.bottom, margin.top]);
      }
    },
    {
      name: "xAxis",
      inputs: ["height", "margin", "d3", "x", "width"],
      value: function(height, margin, d3, x, width) {
        return g =>
          g.attr("transform", `translate(0,${height - margin.bottom})`).call(
            d3
              .axisBottom(x)
              .ticks(width / 80)
              .tickSizeOuter(0)
          );
      }
    },
    {
      name: "yAxis",
      inputs: ["margin", "d3", "y", "data"],
      value: function(margin, d3, y, data) {
        return g =>
          g
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y))
            .call(g => g.select(".domain").remove())
            .call(g =>
              g
                .select(".tick:last-of-type text")
                .clone()
                .attr("x", 3)
                .attr("text-anchor", "start")
                .attr("font-weight", "bold")
                .text(data.y)
            );
      }
    },
    {
      name: "area",
      inputs: ["d3", "x", "y"],
      value: function(d3, x, y) {
        return d3
          .area()
          .x(d => x(d.date))
          .y0(y(0))
          .y1(d => y(d.value));
      }
    },
    {
      name: "data",
      inputs: ["require"],
      value: async function(require) {
        return Object.assign(
          (await require("@observablehq/aapl")).map(({ date, close }) => ({
            date,
            value: close
          })),
          { y: "$ Close" }
        );
      }
    },
    {
      name: "d3",
      inputs: ["require"],
      value: function(require) {
        return require("d3@5");
      }
    }
  ]
};

const notebook = {
  id: "87e37d7b508e7300@93",
  modules: [m0]
};

export default notebook;
