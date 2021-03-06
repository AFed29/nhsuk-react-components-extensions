/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { RibbonLink } from '../src';

const stories = storiesOf('RibbonLink', module);

stories
  .add('Cool Ribbon', () => (
    <div className="ribbonlink-demo">
      <RibbonLink flavour="cool">Cool Ribbon</RibbonLink>
    </div>
  ))
  .add('Mild Ribbon', () => (
    <div className="ribbonlink-demo">
      <RibbonLink flavour="mild">Mild Ribbon</RibbonLink>
    </div>
  ))
  .add('Hot Ribbon', () => (
    <div className="ribbonlink-demo">
      <RibbonLink flavour="hot">Hot Ribbon</RibbonLink>
    </div>
  ))
  .add('RibbonLink Bar', () => (
    <RibbonLink.Bar className="ribbonlink-demo">
      <RibbonLink flavour="cool">Cool Ribbon</RibbonLink>
      <RibbonLink flavour="mild">Mild Ribbon</RibbonLink>
      <RibbonLink flavour="hot">Hot Ribbon</RibbonLink>
    </RibbonLink.Bar>
  ));
