'use client'
import CustomGraphDropDown from '@/components/admin/CustomGraphDropDown';
import MobDashVenues from '@/components/admin/MobDashVenues'
import MobDashMenu from '@/components/MobDashMenu';
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'

function Page() {



  
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
          return 15; // Mobile view
        }
        return 20; // Above 'sm' breakpoint
      };


      const chartConfig = {
        series: [
          {
            name: "Sales",
            data: [
              { x: "Apr", y: 30, fillColor: "#6a0dad" },  // Purple
              { x: "May", y: 50, fillColor: "#8a2be2" },  // Blue-violet
              { x: "Jun", y: 25, fillColor: "#7b68ee" },  // Medium slate blue
              { x: "Jul", y: 70, fillColor: "#4169e1" },  // Royal blue
              { x: "Aug", y: 34, fillColor: "#0000ff" },  // Blue
              { x: "Sep", y: 70, fillColor: "#4682b4" },  // Steel blue
            ],
          },
        ],
        chart: {
          type: "bar",
          height: 250,
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


  
  const handleTimeIntervalChange = (interval) => {
    console.log(`Selected interval: ${interval}`);
    // Update your chart data based on the selected interval
  };




  return (
    <div className='px-2 mb-20'>
    <div className="flex items-center justify-between  bg-custom-headpurple  px-2 py-2 rounded-xl my-1 ">
      <Image src="/ProfDash.svg" width={180} height={56} alt="Profile Icon"/>
      <Image src="/AddUserIcon.svg" width={43} height={43} alt="Add User Icon"/>
    </div>
    <div className='flex items-center justify-between my-3'>
      <h1 className="text-3xl  text-gray-700 font-bold ">Dashboard</h1>
      <MobDashVenues />
    </div>
    {/* Stylish Divv */}
<div className="relative">
<img src="/Style1.svg" className=' z-2   '/>
    <div className='grid grid-cols-3  gap-y-2 p-2 gap-x-2 z-10 absolute top-0 left-4 '>
                <div className='border bg-custom-cardpeach border-gray-300 rounded-3xl  shadow-md   flex flex-col items-center justify-center  py-1 '>
                  <h1 className="text-md  ">Hard Play</h1>
                  <div className='flex items-center justify-center '>
                    <h1 className="text-md font-bold  text-2xl  ml-1" >60</h1>
                    <Image src="/Play.svg" height={40} width={40} />
                  </div>
                  <h1 className="text-lg" >Plays</h1>
                </div>

                <div className='border border-gray-300 bg-custom-cardgreen rounded-3xl  shadow-md   flex flex-col items-center justify-center   py-1 '>
                  <h1 className="text-md  ">Revenue</h1>
                  <div className='flex items-center justify-center  ml-1'>
                    <h1 className="text-md font-bold  text-2xl" >60</h1>
                    <Image src="/USD.svg" height={50} width={50} />
                  </div>
                  <h1 className="text-lg" >Dollar</h1>
                </div>


                <div className='border bg-custom-cardblue border-gray-300 rounded-3xl  shadow-md flex flex-col items-center justify-center  py-1 '>
                  <h1 className="text-md  ">Token</h1>
                  <div className='flex items-center justify-center'>
                    <h1 className="text-md font-bold  text-2xl ml-1" >60</h1>
                    <Image src="/coins.svg" height={10} width={20} />
                  </div>
                  <h1 className="text-lg" >Coin</h1>
                </div>
              </div>
</div>
{/* Cards */}

{/* <div className='flex items-center justify-between '>
  <div className='rounded-l-2xl bg-[#C9E9F0] pr-[40px] px-3  py-3 shadow-md     z-10'>
      <h1 className='text-center text-sm'>No of Arcade</h1>
    <div className='flex items-center justify-between mt-2'>
    <Image src="/GrayLocation.svg" width={27} height={34} className=''/>
    <h1 className='text-2xl font-bold '>03</h1>
    </div>
  </div>
  <div className='rounded-l-2xl bg-[#D9CAE5] pr-[40px] px-3  py-3 shadow-md  z-8'>
      <h1 className='text-center text-sm'>No of Arcade</h1>
    <div className='flex items-center justify-between mt-2'>
    <Image src="/GrayStick.svg" width={32} height={37} className=''/>
    <h1 className='text-2xl font-bold '>45</h1>
    </div>
  </div>
  <div className='rounded-2xl bg-[#FBFFE1] pr-[40px] px-3  py-3 shadow-md   z-5'>
      <h1 className='text-center text-sm'>No of Arcade</h1>
    <div className='flex items-center justify-between mt-2'>
    <Image src="/GrayManagement.svg" width={35} height={40} className=''/>
    <h1 className='text-2xl font-bold '>08</h1>
    </div>
  </div>
</div> */}


<div className="flex items-center justify-center relative mt-4">
  {/* First Card */}
  <div className="rounded-l-2xl bg-[#C9E9F0] px-3 pr-[40px] py-[6px] shadow-md z-[5] relative">
    <h1 className="text-start text-sm">No of Arcade</h1>
    <div className="flex items-center justify-between mt-2">
      <Image src="/GrayLocation.svg" width={27} height={30} alt="" />
      <h1 className="text-2xl font-bold">03</h1>
    </div>
  </div>


  {/* Middle Card */}
  <div className="rounded-l-2xl bg-[#D9CAE5] px-3 pr-[40px] py-2 shadow-md z-[8] relative -ml-6">
    <h1 className="text-start text-sm">No of Arcade</h1>
    <div className="flex items-center justify-between mt-2">
      <Image src="/GrayStick.svg" width={33} height={34} alt="" />
      <h1 className="text-2xl font-bold">45</h1>
    </div>
  </div>

  {/* Last Card */}
  <div className="rounded-2xl bg-[#FBFFE1] px-3 pr-[40px] py-1 shadow-md z-[10] relative -ml-6">
    <h1 className="text-start text-sm">No of Arcade</h1>
    <div className="flex items-center justify-between mt-2">
      <Image src="/GrayManagement.svg" width={35} height={34} alt="" />
      <h1 className="text-2xl font-bold">08</h1>
    </div>
  </div>
</div>



{/* Chart */}


<div className="   xl:mx-auto  my-5 dashboard-graph  max-w-[400px] max-h-[320px] overflow-y-hidden rounded-3xl">
  
                <div className="relative flex flex-col bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="pt-6 px-2 pb-0">
              <CustomGraphDropDown className="" onTimeIntervalChange={handleTimeIntervalChange} />
                    <div id="bar-chart"></div>
                  </div>
                </div>
  
              </div>

<MobDashMenu/>
    </div>
  )
}

export default Page
