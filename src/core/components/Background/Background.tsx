import React, { useEffect, useRef, useState } from 'react';
import styles from './Background.module.css';
import Colors from '../../theme/Colors';
import ShootingStar from '../../domain/ShootingStar';

function roundRect(
  ctx: any,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number,
  fill = true,
  stroke = false,
): void {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }
}

function resizeCanvas(canvas: any) {
  const { width, height } = canvas.getBoundingClientRect();
  if (canvas.width !== width || canvas.height !== height) {
    const { devicePixelRatio: ratio = 1 } = window;
    const context = canvas.getContext('2d');
    // eslint-disable-next-line no-param-reassign
    canvas.width = width * ratio;
    // eslint-disable-next-line no-param-reassign
    canvas.height = height * ratio;
    context.scale(ratio, ratio);
    return true;
  }
  return false;
}

function Background() {
  const boundWidth = window.innerWidth;
  const boundHeight = document.body.offsetHeight || window.innerHeight;
  const canvasRef = useRef(null);
  const [shootingStars] = useState([
    new ShootingStar(boundWidth, boundHeight, 0),
    new ShootingStar(boundWidth, boundHeight, 6000),
    new ShootingStar(boundWidth, boundHeight, 12000),
    new ShootingStar(boundWidth, boundHeight, 18000),
    new ShootingStar(boundWidth, boundHeight, 24000),
    new ShootingStar(boundWidth, boundHeight, 30000),
  ]);

  const draw = (ctx: any, canvas: any, frameCount: number, stars: ShootingStar[]) => {
    let { length } = stars;
    resizeCanvas(canvas);
    ctx.fillStyle = Colors.White;
    ctx.fillRect(0, 0, boundWidth, boundHeight);

    ctx.fillStyle = Colors.NebulaLightGray;
    ctx.shadowBlur = 100;
    ctx.shadowColor = Colors.NebulaGray;

    // eslint-disable-next-line no-plusplus
    while (length--) {
      stars[length].update();
      if (stars[length].active && !stars[length].isOut()) {
        ctx.fillStyle = Colors.NebulaDarkGray;
        ctx.strokeStyle = Colors.NebulaLightGray;
        ctx.lineWidth = stars[length].size;
        ctx.beginPath();
        ctx.moveTo(stars[length].x, stars[length].y);
        ctx.lineTo(
          stars[length].x + stars[length].len,
          stars[length].y - stars[length].len,
        );
        ctx.stroke();

        ctx.fillStyle = Colors.NebulaLightGray;
        ctx.shadowBlur = 100;
        ctx.shadowColor = Colors.NebulaGray;
        roundRect(ctx,
          stars[length].x - 1.5,
          stars[length].y - 1.5, 3, 3, 1.5);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    let frameCount = 0;
    let animationFrameId: any;

    if (canvas) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const context = canvas.getContext('2d');
      const render = () => {
        // eslint-disable-next-line no-plusplus
        frameCount++;
        draw(context, canvas, frameCount, shootingStars);
        animationFrameId = window.requestAnimationFrame(render);
      };
      render();
    }

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);

  return (
    <canvas ref={canvasRef} className={styles.Canvas} />
  );
}

export default Background;
