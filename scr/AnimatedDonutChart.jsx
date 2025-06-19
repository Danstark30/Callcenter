import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import anime from 'animejs';

/**
 * AnimatedDonutChart
 * @param {Object} props
 * @param {number} props.value - Valor actual (porcentaje, 0-100)
 * @param {string} props.label - Etiqueta a mostrar en el centro
 * @param {string} props.color - Color principal del anillo
 */
export default function AnimatedDonutChart({ value = 75, label = 'Progreso', color = '#3b82f6' }) {
  const ref = useRef();
  const size = 180;
  const stroke = 24;
  const radius = (size - stroke) / 2;
  const center = size / 2;
  const background = '#e5e7eb';

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll('*').remove();

    // Fondo
    svg.append('circle')
      .attr('cx', center)
      .attr('cy', center)
      .attr('r', radius)
      .attr('fill', 'none')
      .attr('stroke', background)
      .attr('stroke-width', stroke);

    // Arco de progreso
    const arc = d3.arc()
      .innerRadius(radius)
      .outerRadius(radius)
      .startAngle(0);

    const foreground = svg.append('path')
      .attr('fill', 'none')
      .attr('stroke', color)
      .attr('stroke-width', stroke)
      .attr('stroke-linecap', 'round')
      .attr('d', arc({ endAngle: 0 }))
      .attr('transform', `translate(${center},${center})`);

    // Animación con anime.js
    anime({
      targets: { angle: 0 },
      angle: (value / 100) * 2 * Math.PI,
      duration: 1200,
      easing: 'easeInOutCubic',
      update: anim => {
        foreground.attr('d', arc({ endAngle: anim.animations[0].current }));
      }
    });

    // Etiqueta central
    svg.append('text')
      .attr('x', center)
      .attr('y', center + 8)
      .attr('text-anchor', 'middle')
      .attr('font-size', '2.5rem')
      .attr('font-weight', '700')
      .attr('fill', color)
      .text(`${value}%`);

    svg.append('text')
      .attr('x', center)
      .attr('y', center + 38)
      .attr('text-anchor', 'middle')
      .attr('font-size', '1rem')
      .attr('fill', '#6b7280')
      .text(label);
  }, [value, color, label]);

  return (
    <svg ref={ref} width={size} height={size} style={{ display: 'block', margin: '0 auto' }} />
  );
} 