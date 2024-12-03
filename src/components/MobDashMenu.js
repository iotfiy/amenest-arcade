import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function MobDashMenu() {
  return (
  
    <div className="bg-custom-headpurple flex items-center justify-around py-2 rounded-full  fixed bottom-0 z-30 mb-2">
    {/* Link 1 */}
    <Link
      href="/"
      className="hover:rounded-full hover:bg-gray-500 h-[50px] w-[50px] flex items-center justify-center"
    >
      <Image src="/WhiteHome.svg" height={33} width={33} alt="Home" />
    </Link>
  
    {/* Link 2 */}
    <Link
      href="/"
      className="hover:rounded-full hover:bg-gray-500 h-[50px] w-[50px] flex items-center justify-center"
    >
      <Image src="/WhiteStick.svg" height={38} width={32} alt="Stick" />
    </Link>
  
    {/* Link 3 */}
    <Link
      href="/"
      className="hover:rounded-full hover:bg-gray-500 h-[50px] w-[50px] flex items-center justify-center"
    >
      <Image src="/WhiteManagement.svg" height={30} width={34} alt="Management" />
    </Link>
  
    {/* Link 4 */}
    <Link
      href="/"
      className="hover:rounded-full hover:bg-gray-500 h-[50px] w-[50px] flex items-center justify-center"
    >
      <Image src="/WhiteController.svg" height={28} width={34} alt="Controller" />
    </Link>
  
    {/* Link 5 */}
    <Link
      href="/"
      className="hover:rounded-full hover:bg-gray-500 h-[50px] w-[50px] flex items-center justify-center"
    >
      <Image src="/WhiteLocation.svg" height={15} width={20} alt="Location" />
    </Link>
  
    {/* Link 6 */}
    <Link
      href="/"
      className="hover:rounded-full hover:bg-gray-500 h-[50px] w-[50px] flex items-center justify-center"
    >
      <Image src="/WhiteBot.svg" height={47} width={47} alt="Bot" />
    </Link>
  </div>
  
  
  )
}

export default MobDashMenu