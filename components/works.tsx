import React from 'react'
import { TileBackground, TileContent, TileWrapper } from './tile'

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent>Foo</TileContent>
    <TileContent>Bar</TileContent>
    <TileContent>Gold</TileContent>
  </TileWrapper>
)

export default Works
