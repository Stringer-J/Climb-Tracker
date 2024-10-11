import { useEffect } from "react";
import * as d3 from 'd3';
import PropTypes from "prop-types";

const ClimbGradeBarChart = ({ data }) => {
    useEffect(() => {
        const svg = d3.select('#barChart')
            .attr('width', 500)
            .attr('height', 300);

        svg.selectAll('*').remove(); // Clear previous drawings

        const x = d3.scaleBand()
            .domain(data.map(d => d.grade))
            .range([0, 500])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .range([300, 0]);

        svg.append('g')
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => x(d.grade))
            .attr('y', d => y(d.count))
            .attr('width', x.bandwidth())
            .attr('height', d => 300 - y(d.count))
            .attr('fill', 'steelblue');

        svg.append('g')
            .attr('transform', 'translate(0, 300)')
            .call(d3.axisBottom(x));

        svg.append('g')
            .call(d3.axisLeft(y));
    }, [data]);

    return <svg id="barChart"></svg>;
};

ClimbGradeBarChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            grade: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ClimbGradeBarChart;