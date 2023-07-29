'use client'

import { useContext, useEffect, useRef } from 'react'

let rect = {x: 0, y: 0, width: 100, height: 100}



export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  function draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = 'rgba(0, 0, 200, 0.5)'
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
    // console.log(1)
    requestAnimationFrame(()=>draw(ctx))
  }

  useEffect(()=>{
    if (canvasRef.current) {
      let canvas = canvasRef.current
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const ctx = canvas.getContext('2d')
      if (ctx) {
        draw(ctx)
      }
    }
  }, [draw])

  return (
    <main>
      <canvas ref={canvasRef} className='w-screen h-screen' />
    </main>
  )
}
