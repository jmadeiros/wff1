"use client"

import { useEffect, useRef } from "react"

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    let offset = 0

    const draw = () => {
      // Dark background (almost black)
      ctx.fillStyle = "#080808"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw waves with semi-transparent colors
      drawWave(ctx, offset, "rgba(255, 107, 0, 0.3)", 0.8, 100) // Orange with transparency
      drawWave(ctx, offset * 0.8, "rgba(227, 27, 35, 0.25)", 0.6, 150) // Red with transparency
      drawWave(ctx, offset * 0.6, "rgba(155, 81, 224, 0.2)", 0.5, 200) // Purple with transparency
      drawWave(ctx, offset * 0.4, "rgba(47, 128, 237, 0.15)", 0.4, 250) // Blue with transparency

      offset += 0.005
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 opacity-80" />
}

function drawWave(ctx: CanvasRenderingContext2D, offset: number, color: string, amplitude: number, baseY: number) {
  const width = ctx.canvas.width
  const height = ctx.canvas.height

  ctx.beginPath()
  ctx.moveTo(0, height)

  for (let x = 0; x < width; x++) {
    const y =
      baseY + Math.sin(x * 0.002 + offset) * amplitude * 150 + Math.sin(x * 0.005 + offset * 1.3) * amplitude * 75

    ctx.lineTo(x, y)
  }

  ctx.lineTo(width, height)
  ctx.lineTo(0, height)
  ctx.closePath()

  ctx.fillStyle = color
  ctx.fill()
}

