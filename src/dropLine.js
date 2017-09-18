import drop from './drop';

export default (config, width) =>
    selection => {
        const {
            label: {
                padding: labelPadding,
                width: labelWidth,
            },
            line: {
                color: lineColor,
                height: lineHeight,
            },
            drop: {
                radius: dropRadius,
            },
        } = config;

        const xScale = d3
            .scaleTime()
            .domain([config.range.start, config.range.end])
            .range([0, width - labelWidth]);

        const lines = selection.selectAll('.drop-line').data(d => d);

        const g = lines
            .enter()
            .append('g')
            .classed('drop-line', true)
            .attr('fill', lineColor)
            .attr(
                'transform',
                (_, index) => `translate(0, ${index * lineHeight})`
            );

        g
            .append('line')
            .classed('line-separator', true)
            .attr('x1', labelWidth)
            .attr('x2', width)
            .attr('y1', () => lineHeight)
            .attr('y2', () => lineHeight);

        g
            .append('text')
            .attr('x', labelWidth - labelPadding)
            .attr('y', lineHeight / 2)
            .attr('dy', '0.25em')
            .attr('text-anchor', 'end')
            .text(d => d.name);

        g
            .append('g')
            .classed('drops', true)
            .attr(
                'transform',
                () => `translate(${labelWidth}, ${lineHeight / 2})`
            )
            .call(drop(config, xScale));

        lines.exit().remove();
    };