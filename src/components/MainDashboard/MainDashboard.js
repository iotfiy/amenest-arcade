'use client';  // This marks the component as a Client Component

import { useState, useEffect } from 'react';
import GameSelection from '@/components/admin/ArcadeDropDown';
import "./MainDashboard.css";

const MainDashboard = () => {
  const [data, setData] = useState({
    section1: 123,
    section2: 456,
    section3: 789,
  });

  const handlePlayClick = () => {
    console.log('Play button clicked');
  };

  useEffect(() => {
    // Dynamically load the ApexCharts script
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/apexcharts";
      script.async = true;
      script.onload = () => renderChart();
      document.body.appendChild(script);
    };

    const renderChart = () => {
      const chartConfig = {
        series: [
          {
            name: "Sales",
            data: [
              { x: "Apr", y: 50, fillColor: "#6a0dad" },  // Purple
              { x: "May", y: 40, fillColor: "#8a2be2" },  // Blue-violet
              { x: "Jun", y: 300, fillColor: "#7b68ee" },  // Medium slate blue
              { x: "Jul", y: 320, fillColor: "#4169e1" },  // Royal blue
              { x: "Aug", y: 500, fillColor: "#0000ff" },  // Blue
              { x: "Sep", y: 350, fillColor: "#4682b4" },  // Steel blue
          ],
          },
        ],
        chart: {
          type: "bar",
          height: 400,
          toolbar: {
            show: false,
          },
          borderRadius: 10, // Optional: Add rounded corners to the chart container
    stroke: {
      show: true,
      width: 10, // Border thickness
      colors: ['#2c509a'], // Border color (blue in this case)
    },
        },
        title: {
          show: "",
        },
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            columnWidth: "90%",
            borderRadius: 39,
          },
        },
        xaxis: {
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          labels: {
            style: {
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400,
            },
          },
          categories: [
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
        },
        yaxis: {
          labels: {
            style: {
              colors: "#616161",
              fontSize: "12px",
              fontFamily: "inherit",
              fontWeight: 400,
            },
          },
        },
        grid: {
          show: true,
          borderColor: "#dddddd",
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: true,
            },
          },
          padding: {
            top: 5,
            right: 20,
          },
        },
        fill: {
          opacity: 0.8,
        },
        tooltip: {
          theme: "dark",
        },
      };
      
      const chart = new ApexCharts(document.querySelector("#bar-chart"), chartConfig);
      
      chart.render();
      
    };

    loadScript();
  }, []);

  const handleImageClick = () => {
    // Handle the image click event (e.g., navigate, open a modal, etc.)
    console.log('Image clicked');
    // Example: window.location.href = '/newPage'; // Redirect to a new page
  };

  return (
    // body
    // <div className="dashboard-container">
      

      <div className="dashboard-main">
        {/* Clickable image button above the dashboard-right */}
  <div className="image-button-container">
    <button onClick={handleImageClick} className="image-button">
      <img src="#" alt="Clickable Image" className="image-button-img" />
    </button>
  </div>

      
        <div className="dashboard-middle">
          {/* Text Section Above the Graph */}
          <div className="text-section">
            <h3>ARCADE ID</h3>
            <p>RSA-93y2t3</p>
          </div>

          {/* Graph Section */}
          <div className="dashboard-graph">
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{borderRadius: "54px",height: "441px"}}>
              
              <div className="pt-6 px-2 pb-0">
                <div id="bar-chart"></div>
              </div>
            </div>
          </div>
          {/* Play button under the graph */}
  <button className="play-button">Play</button>
        </div>

        {/* New Block Section under the Graph */}
        <div className="dashboard-right">
  {/* Text section above the data sections */}
  <div className="text-section">
    <h3>Venue Detail :</h3>
    <p>Quick summary of the current dashboard data and stats.</p>
  </div>

  {/* Data sections container (arranged in a row) */}
  <div className="data-sections-container">
    <div className="data-section data_s1">
      <h3>Coins</h3>
      <p>123</p>
      <p>coins/day</p>
    </div>
    <div className="data-section data_s2">
      <h3>Revenue</h3>
      <p>123</p>
      <p>dollars/day</p>
    </div>
    <div className="data-section data_s3">
      <h3>Hard Play</h3>
      <p>123</p>
      <p>plays</p>
    </div>
  </div>

  {/* New middle section with scrollable content */}
  <div className="middle-section">
    <h3>Managers Detail :</h3>
    <div className="scrollable-content">
      {/* Multiple text blocks */}
      <p>      <span className="left-text">Left Side Text</span>
      <span className="right-text">Right Side Text</span></p>
      <p>      <span className="left-text">Left Side Text</span>
      <span className="right-text">Right Side Text</span></p>
      <p>      <span className="left-text">Left Side Text</span>
      <span className="right-text">Right Side Text</span></p>
      <p>      <span className="left-text">Left Side Text</span>
      <span className="right-text">Right Side Text</span></p>
      <p>      <span className="left-text">Left Side Text</span>
      <span className="right-text">Right Side Text</span></p>
      {/* Add as many text blocks as needed */}
    </div>
  </div>

  {/* Block section below the middle section */}
  <div className="block-section">
  <div className="text">
    <h3>API Key:</h3>
    <p>Here is some text in the block section.</p>
  </div>
  <div className="image">
    <img src="#" alt="Image description" />
  </div>
</div>
        </div>
      </div>
  );
};

export default MainDashboard;
