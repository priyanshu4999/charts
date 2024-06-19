import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import zoomPlugin from 'chartjs-plugin-zoom';
import { useRef, useState } from 'react';

Chart.register(zoomPlugin);

const data = { x: [1, 2, 3, 4, 45, 56, 7, 8, 8], y: [1, 2, 3, 4, 45, 56, 7, 8, 8] };

export default function LineChart() {
  const chartRef = useRef(null);
  const [panEnabled, setPanEnabled] = useState(true);
  const [zoomEnabled, setZoomEnabled] = useState(true);

  const handleResetZoom = () => {
    if (chartRef.current) {
      chartRef.current.resetZoom();
    }
  };

  return (
    <div>
      <Line
        ref={chartRef}
        data={{
          labels: data.x,
          datasets: [{
            label: 'My First Dataset',
            data: data.y,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        }}
        options={{
          plugins: {
            zoom: {
              pan: {
                enabled: panEnabled,
                mode: 'xy'
              },
              zoom: {
                drag: {
                  enabled: !panEnabled,//zoomEnabled
                  mode: 'xy'
                },
                
              }
            }
          }
        }}
      />
      <div>
        <button onClick={handleResetZoom}>Reset Zoom</button>
        <label>
          <input 
            type="checkbox" 
            checked={panEnabled} 
            onChange={(e) => setPanEnabled(e.target.checked)} 
          />
          Enable Pan
        </label>
        <label>
          <input 
            type="checkbox" 
            checked={!panEnabled}//{zoomEnabled} 
            onChange={(e) =>setPanEnabled(!e.target.checked) /*setZoomEnabled(e.target.checked)*/} 
          />
          Enable Zoom
        </label>
      </div>
    </div>
  );
}
