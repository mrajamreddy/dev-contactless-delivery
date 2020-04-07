// import * as d3 from "d3";
import * as d3 from "d3";
import './d3.css'

export default class HorozontalTree {

    constructor() {
        this._margin = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 20
        };
        this.svg = null;
        this.duration = 750;
        this.root = null;
        this.treemap = null;
        this._fixedDepth = 200;
        this._rectW = 300; /* Width of the rectangle */
        this._rectH = 8; /* Height of the rectangle */
    }

    // Creates a curved (diagonal) path from parent to the child nodes
    diagonal = (s, d) => {
        // const path = `M ${s.y} ${s.x}
        // C ${s.y * 1.11} ${d.x * 1.11},
        //   ${(s.y + d.y) / 2} ${d.x},
        //   ${d.y} ${d.x}`

        const path = `M ${s.y} ${s.x + 15}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y + 200} ${d.x + 15}`

        return path
    }

    // Toggle children on click.
    click = (d) => {
        if (d.children) {
            d._children = d.children;
            d.children = null;
        } else {
            d.children = d._children;
            d._children = null;
        }
        this.update(d);
    }

    // Collapse the node and all it's children
    collapse = (d) => {
        if (d.children) {
            d._children = d.children
            d._children.forEach(this.collapse)
            d.children = null
        }
    }

    update = (source, height) => {

        // Assigns the x and y position for the nodes
        var treeData = this.treemap(this.root);

        // Compute the new tree layout.
        var nodes = treeData.descendants(this.root),
            links = treeData.descendants(nodes).slice(1);

        // Normalize for fixed-depth.
        nodes.forEach(function (d) { d.y = d.depth * 600 });

        // ****************** Nodes section ***************************

        // Update the nodes...
        var node = this.svg.selectAll('g.node')
            .data(nodes, function (d) { return d.id; });

        // Enter any new modes at the parent's previous position.
        var nodeEnter = node.enter().append('g')
            .attr('class', 'node')
            .attr("transform", function (d) {
                console.log('data', d);
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on('click', () => { console.log('clicked') });

        // Add Circle for the nodes
        // nodeEnter.append('rect')
        //     .attr('class', 'nodeRect')
        //     .attr('width', "200px")
        //     .attr('height', "30px");

        nodeEnter.append("image")
        .attr('class', 'nodeRect')
        .attr("xlink:href","https://upload.wikimedia.org/wikipedia/commons/d/d8/Compass_card_(de).svg")
        .attr("width", 100)
        .attr("height", 100)

        // Add labels for the nodes
        // nodeEnter.append('text')
        //     .attr("dy", ".35em")
        //     .attr("x", function (d) {
        //         return d.children || d._children ? -40 : 40;
        //     })
        //     .attr("text-anchor", function (d) {
        //         return d.children || d._children ? "end" : "start";
        //     })
        //     .text(function (d) { return d.data.name; });

        // UPDATE
        var nodeUpdate = nodeEnter.merge(node);

        // Transition to the proper position for the node
        nodeUpdate.transition()
            .duration(this.duration)
            .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });

        // Update the node attributes and style
        nodeUpdate.select('rect.nodeRect')
            .attr('width', "200px")
            .attr('height', "30px")
            .attr('cursor', 'pointer');


        nodeUpdate.on('mouseover', (d) => {
            linkUpdate.attr('class', l => {
                return d.data.name === l.data.name ? 'link link-hover' : 'link link-stroke-dasharray';
            })
        })

        nodeUpdate.on('mouseout', (d) => {
            linkUpdate.attr('class', 'link link-stroke-dasharray');
        })


        // Remove any exiting nodes
        var nodeExit = node.exit().transition()
            .duration(this.duration)
            .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();

        // On exit reduce the node circles size to 0
        nodeExit.select('circle')
            .attr('r', 1e-6);

        // On exit reduce the opacity of text labels
        nodeExit.select('text')
            .style('fill-opacity', 1e-6);

        // ****************** links section ***************************

        // Update the links...
        var link = this.svg.selectAll('path.link')
            .data(links, function (d) { return d.id; });

        // Enter any new links at the parent's previous position.
        var linkEnter = link.enter().insert('path', "g")
            .attr("class", "link link-stroke-dasharray")
            .attr('d', (d) => {
                var o = { x: source.x0, y: source.y0 }
                return this.diagonal(o, o)
            });

        // UPDATE
        var linkUpdate = linkEnter.merge(link);

        // Transition back to the parent element position
        linkUpdate.transition()
            .duration(this.duration)
            .attr('d', (d) => { return this.diagonal(d, d.parent) });

        // Remove any exiting links
        var linkExit = link.exit().transition()
            .duration(this.duration)
            .attr('d', (d) => {
                var o = { x: source.x, y: source.y }
                return this.diagonal(o, o)
            })
            .remove();

        // Store the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });


    }

    redraw = () => {
        this.svg.attr("transform", "translate(" + d3.event.translate + ") scale(" + d3.event.scale + ")");
    }

    initHorizontalTree = (options) => {
        var treeData = options.data;

        this.root = d3.hierarchy(treeData, function (d) { return d.children; });

        // Set the dimensions and margins of the diagram
        var margin = { top: 20, right: 90, bottom: 30, left: 200 },
            width = options.width - margin.left - margin.right,
            height = options.height - margin.top - margin.bottom;

        const childernNodeWidth = parseInt((this.root.children.length * this._rectW) / 2);
        const zoom = d3.zoom()
            .scaleExtent([0.25, 1])
            .on("zoom", this.redraw);
        // const zoom = d3.zoomTransform().scale([0.25, 1]).translate([parseInt(childernNodeWidth + ((width - childernNodeWidth * 2) / 2) - this._margin.left / 2), 20]).on("zoom", this.redraw);

        console.log('d3.select(options.id)', d3.select(options.id));
        console.log('d3.select(options.id)', d3.select("#root"));
        // append the svg object to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        this.svg = d3.select(options.id).append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate("
                + margin.left + "," + margin.top + ")")
            .call(zoom);

        // declares a tree layout and assigns the size
        this.treemap = d3.tree().size([height, width]);

        // Assigns parent, children, height, depth
        this.root.x0 = height / 2;
        this.root.y0 = 0;

        // Collapse after the second level
        // this.root.children.forEach(this.collapse());

        this.update(this.root, height);
    }


}
