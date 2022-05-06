import React from 'react'
import Image from 'next/image'
import { Tile, TileBackground, TileContent, TileWrapper } from './tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './work'

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground><WorkBackground /></TileBackground>
    <TileContent>
      <Tile page={0} renderContent={({ progress }) => (
        <WorkContainer>
          <WorkLeft progress={progress}>
            <div>We Built</div>
            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Pink Panda&apos;s app</div>
          </WorkLeft>
          <WorkRight progress={progress}>
            <Image src="/assets/pinkpanda.png" layout='responsive' width={840} height={1620} alt='Pink Panda' />
          </WorkRight>
        </WorkContainer>
      )}>
      </Tile>
      <Tile page={1} renderContent={({ progress }) => (
        <WorkContainer>
          <WorkLeft progress={progress}>
            <div>We Built</div>
            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Pink Panda&apos;s app</div>
          </WorkLeft>
          <WorkRight progress={progress}>
            <Image src="/assets/pinkpanda.png" layout='responsive' width={840} height={1620} alt='Pink Panda' />
          </WorkRight>
        </WorkContainer>
      )}></Tile>
      <Tile page={2} renderContent={({ progress }) => (
        <WorkContainer>
          <WorkLeft progress={progress}>
            <div>We Built</div>
            <div className='text-4xl md:text-5xl font-semibold tracking-tight'>Pink Panda&apos;s app</div>
          </WorkLeft>
          <WorkRight progress={progress}>
            <Image src="/assets/pinkpanda.png" layout='responsive' width={840} height={1620} alt='Pink Panda' />
          </WorkRight>
        </WorkContainer>
      )}></Tile>
    </TileContent>
  </TileWrapper>
)

export default Works
