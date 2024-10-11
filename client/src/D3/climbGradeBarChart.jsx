import { useEffect } from "react";
import * as d3 from 'd3';
import PropTypes from "prop-types";

const ClimbGradeBarChart = ({ data }) => {
    useEffect(() => {
        const svgWidth = 500;
        const svgHeight = 300; // Increased height for more space
        const barWidth = 330; // Width allocated for bars

        const svg = d3.select('#barChart')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

        svg.selectAll('*').remove(); // Clear previous drawings

        const x = d3.scaleBand()
            .domain(data.map(d => d.grade))
            .range([0, barWidth])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.count)])
            .range([svgHeight - 40, 20]); // Added more space for the top

        // Create bars
        svg.append('g')
            .selectAll('rect')
            .data(data)
            .enter()
            .append('rect')
            .attr('x', d => x(d.grade) + (svgWidth - barWidth) / 2) // Centering bars
            .attr('y', d => y(d.count))
            .attr('width', x.bandwidth())
            .attr('height', d => svgHeight - 40 - y(d.count)) // Adjusted for y scaling
            .attr('fill', 'steelblue');

        // Create x-axis for grades
        const xAxis = d3.axisBottom(x);
        svg.append('g')
            .attr('transform', `translate(${(svgWidth - barWidth) / 2}, ${svgHeight - 35})`) // Center x-axis
            .call(xAxis);

        // Create y-axis for counts with whole numbers
        const yAxis = d3.axisLeft(y).ticks(d3.max(data, d => d.count)); // Using ticks for whole numbers
        svg.append('g')
            .attr('transform', `translate(${(svgWidth - barWidth) / 2}, 0)`) // Center y-axis
            .call(yAxis);
    }, [data]);

    return <svg id="barChart" className="barChart" width="100%" height="100%" viewBox="0 0 500 260"></svg>;

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


