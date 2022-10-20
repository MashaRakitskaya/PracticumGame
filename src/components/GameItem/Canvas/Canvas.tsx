import React from 'react';

interface CanvasInitParam {
  draw: Function;
  height: number;
  width: number;
  play: boolean;
}

const Canvas = ({ draw, play, height, width }: CanvasInitParam) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    // @ts-ignore
    const context = canvas.current.getContext('2d');
    draw(context);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play]);

  // @ts-ignore
  return <canvas id="Game" ref={canvas} height={height} width={width}></canvas>;
};

export default Canvas;
