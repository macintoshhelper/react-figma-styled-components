import * as React from 'react';
import { Page, Frame } from 'react-figma';
// @ts-ignore
import styled from 'styled-components/primitives';
import chroma from 'chroma-js';

// take a hex and give us a nice text color to put over it
const textColor = (hex) => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 4) {
    return '#FFF';
  }
  return chroma(hex)
    .darken(3)
    .hex();
};

const SwatchTile = styled.View`
  height: 250px;
  width: 250px;
  border-radius: 4px;
  margin: 4px;
  background-color: ${props => props.hex};
  justify-content: center;
  align-items: center;
`;

const SwatchName = styled.Text`
  color: ${props => textColor(props.hex)};
  font-size: 16px;
  /* line-height: 20px; */
  font-weight: bold;
`;

const Ampersand = styled.Text`
  color: #f3f3f3;
  font-size: 120px;
  font-family: Helvetica;
  /* line-height: 144px; */
`;

const Swatch = ({ name, hex }: { name: string, hex: string, key?: string }) => (
  <SwatchTile name={`Swatch ${name}`} hex={hex}>
    <SwatchName name="Swatch Name" hex={hex}>
      {name}
    </SwatchName>
    <Ampersand name="Ampersand" hex={hex}>
      &
    </Ampersand>
  </SwatchTile>
);

const Artboard = styled(Frame)`
  padding-top: 40px;
  padding-bottom: 40px;
  flex-direction: row;
  flex-wrap: wrap;
  width: ${(96 + 8) * 4}px;
  justify-content: center;
`;


export const App = () => {

  const colors = {
    Classic: '#12f24E',
    Neue: '#21304E',
    White: '#ffffff',
  };


  return (
    <Page isCurrent name="Page X">
      <Artboard>
        {Object.keys(colors).map(color => (
          <Swatch key={color} name={color} hex={colors[color]} />
        ))}
      </Artboard>
    </Page>
  );
};
