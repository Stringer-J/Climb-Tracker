import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import PropTypes from "prop-types";

const ClimbGradePieChart = ({ data }) => {
    const ref = useRef();

    useEffect(() => {
        const width = 300;
        const height = 300;
        const radius = Math.min(width, height) / 2;

        const svg = d3.select(ref.current)
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const color = d3.scaleOrdinal(d3.schemeCategory10);

        const pie = d3.pie().value(d => d.count);
        const arc = d3.arc().innerRadius(0).outerRadius(radius);

        const arcs = svg.selectAll('.arc')
            .data(pie(data))
            .enter()
            .append('g')
            .attr('class', 'arc');

        arcs.append('path')
            .attr('d', arc)
            .attr('fill', d => color(d.data.grade));

        arcs.append('text')
            .attr('transform', d => `translate(${arc.centroid(d)})`)
            .attr('dy', '.35em')
            .attr('text-anchor', 'middle')
            .text(d => d.data.grade);
    }, [data]);

    return <svg ref={ref}></svg>;
};

ClimbGradePieChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            grade: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ClimbGradePieChart;
