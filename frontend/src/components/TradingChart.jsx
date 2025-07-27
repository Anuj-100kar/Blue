import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

const TradingChart = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        background: { color: '#0f172a' },
        textColor: '#d1d5db',
      },
      grid: {
        vertLines: { color: '#334155' },
        horzLines: { color: '#334155' },
      },
      crosshair: {
        mode: 0,
      },
      priceScale: {
        borderColor: '#334155',
      },
      timeScale: {
        borderColor: '#334155',
        timeVisible: true,
      },
    });

    const candleSeries = chart.addCandlestickSeries({
      upColor: '#4ade80',
      downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#4ade80',
      wickDownColor: '#ef4444',
    });

    candleSeries.setData([
      { time: '2023-07-01', open: 396, high: 408, low: 390, close: 406 },
      { time: '2023-07-02', open: 406, high: 410, low: 402, close: 407 },
      { time: '2023-07-03', open: 407, high: 414, low: 405, close: 412 },
      { time: '2023-07-04', open: 412, high: 420, low: 408, close: 416 },
      { time: '2023-07-05', open: 416, high: 422, low: 410, close: 419 },
    ]);

    return () => chart.remove();
  }, []);

  return (
    <div className="bg-[#0f172a] p-4 rounded-lg">
      <div ref={chartContainerRef} className="w-full h-[400px]" />
    </div>
  );
};

export default TradingChart;
