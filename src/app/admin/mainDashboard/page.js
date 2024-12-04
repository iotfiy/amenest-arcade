import MainDashboard from '@/components/MainDashboard/MainDashboard'
import React from 'react'

// Example items for the list


function Page() {
  const items = [
  { leftText: "Left 1", rightText: "Right 1" },
  { leftText: "Left 2", rightText: "Right 2" },
  { leftText: "Left 3", rightText: "Right 3" },
  { leftText: "Left 4", rightText: "Right 4" },
  { leftText: "Left 5", rightText: "Right 5" },
  { leftText: "Left 6", rightText: "Right 6" },
];

const chartData = [
  { x: "Apr", y: 50, fillColor: "#6a0dad" },
  { x: "May", y: 40, fillColor: "#8a2be2" },
  { x: "Jun", y: 300, fillColor: "#7b68ee" },
  { x: "Jul", y: 320, fillColor: "#4169e1" },
  { x: "Aug", y: 500, fillColor: "#0000ff" },
  { x: "Sep", y: 350, fillColor: "#4682b4" },
];

  return (
    <div>
      <MainDashboard
        middleText="RSA-93y2t3"
        chartData={chartData} // Pass data as prop
        imgSrc="/Manager.svg" // Image source for the image button
        rightText="This is some dynamic text for the right section."
        dataS1Text="123"
        dataS2Text="123"
        dataS3Text="123"
        items={items} // Passing the array of items to the Dashboard
        blockText="This is some dynamic text in the block section."
        blockImageSrc="/QrCode.svg" // Image source for the block section
    />
    </div>
  )
}

export default Page