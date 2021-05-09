import React from 'react';
import Hero from '../components/Hero';

export default {
  title: 'Hero',
  component: Hero,
};

export const usage = () => (
  <Hero title="Ganhe sua liberdade para ir e vir">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
      laudantium, adipisci quo impedit beatae vitae tempore, cum aliquam
      molestias laborum atque maxime distinctio voluptatem optio! Reprehenderit
      fugit doloribus ullam maiores!
    </p>
  </Hero>
);

export const withList = () => (
  <Hero title="Ganhe sua liberdade para ir e vir">
    <ul>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
    </ul>
  </Hero>
);
