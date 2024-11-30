import MainDashboard from '@/components/MainDashboard/MainDashboard'
import React from 'react'

// Example items for the list
const items = [
  { leftText: "Left 1", rightText: "Right 1" },
  { leftText: "Left 2", rightText: "Right 2" },
  { leftText: "Left 3", rightText: "Right 3" },
  { leftText: "Left 4", rightText: "Right 4" },
  { leftText: "Left 5", rightText: "Right 5" },
  { leftText: "Left 6", rightText: "Right 6" },
];

function Page() {
  return (
    <div>
      <MainDashboard
        middleText="RSA-93y2t3"
        imgSrc="#" // Image source for the image button
        rightText="This is some dynamic text for the right section."
        dataS1Text="123"
        dataS2Text="123"
        dataS3Text="123"
        items={items} // Passing the array of items to the Dashboard
        blockText="This is some dynamic text in the block section."
        blockImageSrc="#" // Image source for the block section
    />
    </div>
  )
}

export default Page