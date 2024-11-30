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

      const getBorderRadius = () => {
        if (window.innerWidth < 640) {  // 'sm' breakpoint is 640px
          return 10; // Mobile view
        }
        return 20; // Above 'sm' breakpoint
      };


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
            borderRadius: getBorderRadius(),
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

      <div className='flex xl:flex-row flex-col mt-5 justify-around items-center bg-cover bg-center z-0  ' >
        {/* <div className='flex flex-col min-w-[850px] justify-center items-center'> */}
        <div className='flex flex-col  justify-center items-center'>
          <div className='bg-custom-headpurple flex rounded-full items-center justify-between p-2 xl:w-[800px] sm:w-full  xs:w-[320px] w-[250px] relative'>
            <h1 className='ml-3 font-bold text-2xl md:block hidden '>Dashboard</h1>
            {/* <div className='flex'> */}
            
              {/* <Image src="/dash1.svg" height={100} width={100} />
              <Image src="/dash2.svg" height={100} width={100} />
              <Image src="/dash3.svg" height={100} width={100} /> */}
              {/* <div className='rounded-full bg-white px-5 py-2'>
                ok
              </div>
    
            </div> */}
            


          <div className=" p-10 flex items-center ">
            <div className="absolute xs:right-[2px] right-[2px] sm:right-2 z-20   border-[7px]  border-custom-headpurple rounded-full bg-purple-300 xs:pr-[10px] xs:px-5  xs:py-1 sm:px-5   p-3">
            <div className='text-sm text-start sm:flex items-center justify-left sm:space-x-1'> 
            <div className='' >No. Of  </div>
            <h1> Manager</h1>
            </div>
              <div className='flex  items-center sm:justify-around justify-start'>
                  <Image src="/ManagDash.svg" height={40} width={40} className='sm:w-[40px] sm:h-[40px] w-[20px] h-[20px]'/>
                  <h1 className='text-2xl ml-2 font-bold text-gray-700'>08</h1>
              </div>
            </div>
            <div className="absolute xs:right-[105px] right-[80px] sm:right-[130px]   z-10  border-[7px] border-custom-headpurple rounded-full bg-purple-300   sm:pr-[60px] xs:pr-[10px] xs:px-5 xs:py-1 sm:px-5 p-3">
            <div className='text-sm text-start sm:flex items-center justify-left sm:space-x-1'> 
            <div className='' >No. Of  </div>
            <h1> Arcade</h1>
            </div>
              <div className='flex items-center sm:justify-around justify-start'>
                  <Image src="/ManagDash.svg" height={40} width={40} className='sm:w-[40px] sm:h-[40px] w-[20px] h-[20px]'/>
                  <h1 className='text-2xl ml-2 font-bold text-gray-700'>08</h1>
              </div>
            </div>
            <div className="absolute xs:right-[210px]  sm:right-[250px]   right-[160px]  z-8  border-[7px] border-custom-headpurple rounded-full bg-purple-300  sm:pr-[110px] xs:pr-[10px] xs:px-5 xs:py-1 sm:px-5 px-4 p-3">
            <div className='text-sm text-start sm:flex items-center justify-left sm:space-x-1'> 
            <div className='' >No. Of  </div>
            <h1> Venues</h1>
            </div>
              <div className='flex  items-center sm:justify-around justify-start'>
                  <Image src="/ManagDash.svg" height={40} width={40} className='sm:w-[40px] sm:h-[40px] w-[20px] h-[20px]'/>
                  <h1 className='text-2xl ml-2 font-bold text-gray-700'>08</h1>
              </div>
            </div>
          </div>

          </div>

          {/* Cards */}
          <div className=" grid  md:grid-cols-3   sm:grid-cols-2 grid-cols-1 my-10 pt-10 sm:ml-[5px]  gap-y-20 xl:max-w-[850px] xl:max-h-[500px] overflow-y-auto ">
            {arcades.map((arcade) => (
              <div key={arcade.id} className="bg-white border  border-black shadow-md rounded-xl w-[230px] mx-5 relative p-5 flex flex-col items-center justify-center gap-y-3 ">
                <div className="z-[-1] bg-custom-headpurple px-3  flex items-center justify-around absolute top-[-35px] left-0 rounded-t-xl py-3">
                  <h1 className="font-mono text-sm text-white ">SH-KHI-A001</h1>
                  <div className="text-sm ml-3  text-white font-mono ">ARCADE ID</div>
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

            <div className=' bg-white  border my-2 border-black rounded-2xl  mt-2 w-[250px] sm:w-[450px] xl:w-[450px] '>
              <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-y-auto gap-y-2    p-2 gap-x-2 '>
                <div className='border bg-custom-cardpeach border-gray-300 rounded-xl shadow-md   flex flex-col items-center justify-center sm:py-4 py-2 sm:gap-y-3'>
                  <h1 className="text-xl">Hard Play</h1>
                  <div className='flex items-center '>
                    <h1 className="text-md font-bold  text-2xl" >60</h1><Image src="/USD.svg" height={50} width={50} />
                  </div>
                  <h1 className="text-lg" >Plays</h1>
                </div>

                <div className='border border-gray-300 bg-custom-cardgreen rounded-xl shadow-md   flex flex-col items-center justify-center sm:py-4 py-2 sm:gap-y-3'>
                  <h1 className="text-xl">Revenue</h1>
                  <div className='flex items-center '>
                    <h1 className="text-md font-bold  text-2xl" >60</h1><Image src="/USD.svg" height={50} width={50} />
                  </div>
                  <h1 className="text-lg" >Dollar</h1>
                </div>


                <div className='border bg-custom-cardblue border-gray-300 rounded-xl shadow-md flex flex-col items-center justify-center sm:py-4 py-2 sm:gap-y-3'>
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