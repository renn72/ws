import React, {ReactNode, useContext, useRef} from "react"
import {SizeContext} from "../utils/size-observer"

interface Props {
  children?: ReactNode
  initialOffsetX: number
  className: string
  contentWidth: number
}

const SliderContainer: React.FC<Props> = ({
  children,
  initialOffsetX,
  className,
  contentWidth,
}) => {
  const {innerWidth} = useContext(SizeContext)
  const refScrollX = useRef<number>(initialOffsetX)
  const refContainer = useRef<HTMLDivElement>(null)
  const refContent = useRef<HTMLDivElement>(null)

  const enabled = innerWidth < contentWidth

  return (
    <div
      ref={refContainer}
      className={`slider-container overflow-x-hidden whitespace-nowrap max-w-full pointer-events-none ${className}`}
    >
      <div
        ref={refContent}
        className="inline-block"
      >
        {children}
      </div>
    </div>
  )
}

interface ItemProps {
  width: number
  children?: ReactNode
}
export const SliderItem: React.FC<ItemProps> = ({children, width}) => (
  <div
    className="inline-flex justify-center items-center mx-4"
    style={{width}}
  >
    {children}
  </div>
)

export default SliderContainer
