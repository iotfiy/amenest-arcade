'use client'
import DashVenues from '@/components/admin/DashVenues';
import Image from 'next/image'
import React, { useEffect } from 'react'
import "./Chart.css"

function Page() {

  const arcades = [
    {
      id: 1,
      name: "Arcade 1",
      coins: 200,
      revenue: 5000
    },
    {
      id: 2,
      name: "Arcade 2",
      coins: 350,
      revenue: 7000
    },
    {
      id: 3,
      name: "Arcade 3",
      coins: 120,
      revenue: 3000
    },
    {
      id: 4,
      name: "Arcade 4",
      coins: 450,
      revenue: 9000
    },
    {
      id: 5,
      name: "Arcade 1",
      coins: 200,
      revenue: 5000
    },
    {
      id: 6,
      name: "Arcade 2",
      coins: 350,
      revenue: 7000
    },
    {
      id: 7,
      name: "Arcade 3",
      coins: 120,
      revenue: 3000
    },
    {
      id: 8,
      name: "Arcade 4",
      coins: 450,
      revenue: 9000
    }
  ];





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
              { x: "Apr", y: 150, fillColor: "#6a0dad" },  // Purple
              { x: "May", y: 240, fillColor: "#8a2be2" },  // Blue-violet
              { x: "Jun", y: 500, fillColor: "#7b68ee" },  // Medium slate blue
              { x: "Jul", y: 320, fillColor: "#4169e1" },  // Royal blue
              { x: "Aug", y: 500, fillColor: "#0000ff" },  // Blue
              { x: "Sep", y: 350, fillColor: "#4682b4" },  // Steel blue
            ],
          },
        ],
        chart: {
          type: "bar",
          height: 300,
          toolbar: {
            show: false,
          },
         
          stroke: {
            show: true,
            width: 6, // Border thickness
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
            borderRadius: 20,
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
          yaxis:{
            lines: {
              show: true,
            }
          },
          xaxis: {
            lines: {
              show: false,
            },
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






  return (

      <div className='flex xl:flex-row flex-col mt-5 justify-around items-center'>
        {/* <div className='flex flex-col min-w-[850px] justify-center items-center'> */}
        <div className='flex flex-col  justify-center items-center'>
          <div className='bg-custom-headpurple flex rounded-full items-center justify-between p-2 xl:w-[800px] w-[250px] '>
            <h1 className='ml-3 font-bold text-xl'>Dashboard</h1>
            <div className='flex'>
              <Image src="/dash1.svg" height={100} width={100} />
    
            </div>
          </div>

          {/* Cards */}
          <div className="grid  md:grid-cols-3   sm:grid-cols-2 grid-cols-1 my-10 pt-10 sm:ml-[5px]  gap-y-20 xl:max-w-[850px] xl:max-h-[500px] overflow-y-auto ">
            {arcades.map((arcade) => (
              <div key={arcade.id} className="bg-white border  border-black shadow-md rounded-xl w-[230px] mx-5 relative p-5 flex flex-col items-center justify-center gap-y-3 ">
                <div className="z-[-1] bg-custom-headpurple px-3  flex items-center justify-around absolute top-[-35px] left-0 rounded-t-xl py-3">
                  <h1 className="font-mono text-sm">SH-KHI-A001</h1>
                  <div className="text-sm ml-3">ARCADE ID</div>
                </div>
                <div className="flex items-center justify-center">
                  <h1 className="text-2xl">
                    Coins: <span className="font-bold">{arcade.coins}</span>
                  </h1>
                  <Image src="/coins.svg" className="m-2" height={43} width={33} />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">
                    Revenue: <span className="font-bold">{arcade.revenue}</span>
                  </h1>
                </div>
                <button className="bg-custom-headpurple px-7 text-white border border-black py-1 rounded-xl">
                  Play
                </button>
                <div className="absolute bottom-2 right-2">
                  <Image src="/coinsBag.svg" height={59} width={59} className="" />
                </div>
              </div>
            ))}
          </div>
      </div>


        <div className='w-[260px] sm:w-[450px] xl:w-[500px]'>
          <div>
            <div >
              <DashVenues className="" />
            </div>

            <div className='bg-white border my-2 border-black rounded-xl  mt-2 w-[250px] sm:w-[450px] xl:w-[450px] '>
              <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-y-auto gap-y-2   p-2 gap-x-2 '>
                <div className='border border-gray-300 rounded-3xl shadow-md   flex flex-col items-center justify-center py-4 gap-y-3'>
                  <h1 className="text-xl">Hard Play</h1>
                  <div className='flex items-center '>
                    <h1 className="text-md font-bold  text-2xl" >60</h1><Image src="/USD.svg" height={50} width={50} />
                  </div>
                  <h1 className="text-lg" >Plays</h1>
                </div>

                <div className='border border-gray-300 rounded-3xl shadow-md   flex flex-col items-center justify-center py-4 gap-y-3'>
                  <h1 className="text-xl">Revenue</h1>
                  <div className='flex items-center '>
                    <h1 className="text-md font-bold  text-2xl" >60</h1><Image src="/USD.svg" height={50} width={50} />
                  </div>
                  <h1 className="text-lg" >Dollar</h1>
                </div>


                <div className='border border-gray-300 rounded-3xl shadow-md   flex flex-col items-center justify-center py-4 gap-y-3'>
                  <h1 className="text-xl">Token</h1>
                  <div className='flex items-center '>
                    <h1 className="text-md font-bold  text-2xl" >60</h1><Image src="/USD.svg" height={50} width={50} />
                  </div>
                  <h1 className="text-lg" >Coin</h1>
                </div>
              </div>

              

              {/* Chart */}
              <div className="  xl:mx-auto  dashboard-graph  max-w-[400px] max-h-[350px] overflow-y-hidden">
                <div className="relative flex flex-col bg-white bg-clip-border text-gray-700 shadow-md">

                  <div className="pt-6 px-2 pb-0">
                    <div id="bar-chart"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

// <div>
//   Hello
// </div>



  )
}

export default Page