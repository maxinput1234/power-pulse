import React from 'react'

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About PowerPulse</h1>
      <p className='mb-4 text-slate-700'>PowerPulse is a cutting-edge IoT-based smart energy solution designed to provide real-time insights into electricity consumption across residential, commercial, and industrial settings.</p>
      <p className='mb-4 text-slate-700'>
        The system integrates an Website for on-site data display and a relay for home automation control, making energy monitoring and management seamless and efficient.
      </p>
      <p className='mb-4 text-slate-700'>Voltage and current readings are collected through I2C interfacing with Arduino, and data is transmitted to an AWS cloud server via a WiFi module. This enables remote access and real-time energy insights, empowering users to make informed decisions and optimize energy usage.</p>
    </div>
  )
}
