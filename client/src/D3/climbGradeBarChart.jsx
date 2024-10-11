import { useEffect } from "react";
import * as d3 from 'd3';
import PropTypes from "prop-types";

const ClimbGradeBarChart = ({ data }) => {
    useEffect(() => {
        const svg = d3.select('#barChart')
            .attr('width', 325)
            .attr('height', 225);

        svg.selectAll('*').remove(); // Clear previous drawings

        const x = d3.scaleBand()
            .domain(data.map(d => d.grade))
            .range([0, 325])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .range([225, 0]); // Inverted for y-axis

        // Create bars
        svg.append('g')
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => x(d.grade))
            .attr('y', d => y(d.count))
            .attr('width', x.bandwidth())
            .attr('height', d => 225 - y(d.count))
            .attr('fill', 'steelblue');

        // Add grade labels at the bottom of each bar
        svg.selectAll('.grade-label')
            .data(data)
            .enter()
            .append('text')
            .attr('class', 'grade-label')
            .attr('x', d => x(d.grade) + x.bandwidth() / 2) // Centered on each bar
            .attr('y', 220) // Positioned just below the x-axis
            .attr('text-anchor', 'middle')
            .text(d => d.grade);

        // Create x-axis for grades
        const xAxis = d3.axisBottom(x);
        svg.append('g')
            .attr('transform', 'translate(0, 225)')
            .call(xAxis);

        // Create y-axis for counts
        const yAxis = d3.axisLeft(y);
        svg.append('g')
            .attr('transform', 'translate(0, 0)') // Position y-axis at the left
            .call(yAxis);

        // Add y-axis label
        svg.append('text')
            .attr('transform', 'rotate(-90)')
            .attr('y', 20)
            .attr('x', -50)
            .style('text-anchor', 'middle')
            .text('Count');
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
