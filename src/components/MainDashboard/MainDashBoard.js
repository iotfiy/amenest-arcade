'use client';  // This marks the component as a Client Component

import { useState, useEffect } from 'react';
// import GameSelection from '@/components/admin/ArcadeDropDown';
import "./MainDashboard.css";

const MainDashboard = props => {
  // const [data, setData] = useState({
  //   section1: 123,
  //   section2: 456,
  //   section3: 789,
  // });

  const handlePlayClick = () => {
    console.log('Play button clicked');
  };
  const handleStopClick = () => {
    console.log('Stop button clicked');
  };
  const handleShutClick = () => {
    console.log('Shut Clicked button clicked');
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
            data: props.chartData, // Pass data from parent
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
          categories: props.chartData.map((item) => item.x), // Dynamically set categories from x values
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
          borderColor: "#c0c0c0",
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: true, // Optionally keep or remove grid lines on the y-axis
            },
          },
          padding: {
            top: 6,
            right: 0,
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          theme: "dark",
        },
      };
      
      const chart = new ApexCharts(document.querySelector("#bar-chart"), chartConfig);
      
      chart.render();
      
    };

    loadScript();
  }, [props.chartData]);

  const handleImageClick = () => {
    // Handle the image click event (e.g., navigate, open a modal, etc.)
    console.log('Image clicked');
    // Example: window.location.href = '/newPage'; // Redirect to a new page
  };

  document.querySelectorAll('.value-button').forEach((button) => {
    button.addEventListener('click', (event) => {
      const timeFrame = event.target.getAttribute('data-value');
      console.log(`Time frame selected: ${timeFrame}`);
      updateGraph(timeFrame);
    });
  });
  
  function updateGraph(timeFrame) {
    // Logic to update the graph based on the selected time frame
    console.log(`Graph updated for time frame: ${timeFrame}`);
    // Example: Change the chart's data dynamically based on the time frame
  }
  

  return (
    // body
    // <div className="dashboard-container">
      

      <div className="dashboard-main">
        {/* Clickable image button above the dashboard-right */}
  <div className="image-button-container">
    <button onClick={handleImageClick} className="image-button">
      <img src={props.imgSrc} alt="Clickable Image" className="image-button-img" />
    </button>
  </div>

      
        <div className="dashboard-middle">
          {/* Text Section Above the Graph */}
          <div className="text-section">
            <h3>ARCADE ID</h3>
            <p>{props.middleText}</p>
          </div>

          {/* Graph Section */}
          <div className="dashboard-graph">
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md" style={{borderRadius: "54px",height: "441px"}}>
              
              <div className="pt-6 px-2 pb-0">
                <div id="bar-chart"></div>
              </div>
            </div>
          </div>
          
          <div class="graph-info-section">
    <div class="graph-values">
      <button class="value-button" data-value="Live">Live</button>
      <button class="value-button" data-value="1h">1h</button>
      <button class="value-button" data-value="6h">6h</button>
      <button class="value-button" data-value="12h">12h</button>
      <button class="value-button" data-value="1d">1d</button>
      <button class="value-button" data-value="7d">7d</button>
      <button class="value-button" data-value="1m">1m</button>
    </div>
  </div>

          {/* Play button under the graph */}
          <div className='flex items-center justify-around'>
  <button onClick={handlePlayClick} className="play-button">Play</button>
  <button onClick={handleStopClick} className="play-buttonS ">Stop</button>
  <button onClick={handleShutClick} className="play-buttonD">Shut Down</button>
          </div>
        </div>

        {/* New Block Section under the Graph */}
        <div className="dashboard-right">
  {/* Text section above the data sections */}
  <div className="text-section">
    <h3>Venue Detail :</h3>
    <p>{props.rightText}</p>
  </div>

  {/* Data sections container (arranged in a row) */}
  <div className="data-sections-container">
    <div className="data-section data_s1">
      <h3>Coins</h3>
      <p className='first_input'>{props.dataS1Text} <img src="/Play.svg" alt="Icon" class="icon" /></p>
      <p>coins/day</p>
    </div>
    <div className="data-section data_s2">
      <h3>Revenue</h3>
      <p className='first_input'>{props.dataS2Text} <img src="/Play.svg" alt="Icon" class="icon" /></p>
      <p>dollars/day</p>
    </div>
    <div className="data-section data_s3">
      <h3>Hard Play</h3>
      <p className='first_input'>{props.dataS3Text} <img src="/Play.svg" alt="Icon" class="icon play_icon" /></p>
      <p>plays</p>
    </div>
  </div>

  {/* New middle section with scrollable content */}
  <div className="middle-section">
    <h3>Managers Detail :</h3>
    <div className="scrollable-content">
      {/* Map over the items passed via props */}
      {props.items.map((item, index) => (
                <p key={index}>
                  <span className="left-text">{item.leftText}</span>
                  <span className="right-text">{item.rightText}</span>
                </p>
              ))}
    </div>
  </div>

  {/* Block section below the middle section */}
  <div className="block-section">
  <div className="text_container">
  <div className="text">
    <h3>API Key:</h3>
    <p>{props.blockText}</p>
  </div>
  {/* Button placed directly below the text */}
  <a href={props.blockImageSrc} download>
      <button className="qr_button">Download QR</button>
    </a>
    </div>
  <div className="image">
    <img src={props.blockImageSrc} alt="Image description" />
  </div>
</div>
        </div>
      </div>
  );
};

export default MainDashboard;