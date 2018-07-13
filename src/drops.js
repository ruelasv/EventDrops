import drop from './drop';

export default (config, xScale) => {
    const {
        metaballs,
        label: { text: labelText, padding: labelPadding, width: labelWidth },
        line: { color: lineColor, height: lineHeight },
    } = config;

    return function(selection) {
        const drops = selection.selectAll('.drops').data(d => d);

        console.log(drops.data());
        // const lines = selection.selectAll('.drop-line').data(d => d);
        // lines.exit().remove();
        // const g = lines
        //     .enter()
        //     .append('g')
        //     .classed('drop-line', true)
        //     .attr('fill', lineColor)
        //     .attr(
        //         'transform',
        //         (_, index) =>
        //             `translate(${labelWidth}, ${index * lineHeight +
        //                 lineHeight / 2})`
        //     );
        // g
        //     .append('line')
        //     .classed('line-separator', true)
        //     .attr('x1', labelWidth)
        //     .attr('x2', '100%')
        //     .attr('y1', () => lineHeight)
        //     .attr('y2', () => lineHeight);
        // g
        //     .append('text')
        //     .attr('x', labelWidth - labelPadding)
        //     .attr('y', lineHeight / 2)
        //     .attr('dy', '0.25em')
        //     .attr('text-anchor', 'end')
        //     .text(labelText);
        // // if (metaballs) {
        // //     drops.style('filter', 'url(#metaballs)');
        // // }
        // lines.call(drop(config, xScale));
    };
};