import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-100'>
         <div className='space-y-3 text-xs text-gray-800'>
            <h5 className='font-bold '>Support</h5>
                <p>Help Center</p>
                <p>AirCover</p>
                <p>Supporting people with disabilites</p>
                <p>Cancellation Options</p>
                <p>COVID-19 Response</p>
        </div>
        <div className='space-y-3 text-xs text-gray-800'>
            <h5 className='font-bold '>Community</h5>
                <p>Airbnb.org disaster relief housing</p>
                <p>Comabating discrimination</p>
                <p>Neighborhood Concerns</p>
                <p>Issue Reporting</p>
                <p>Connect with Hosts</p>
        </div>
        <div className='space-y-3 text-xs text-gray-800'>
            <h5 className='font-bold '>Hosting</h5>
                <p>Airbnb your home</p>
                <p>AirCover for Hosts</p>
                <p>Hosting Resources</p>
                <p>Community Forum</p>
                <p>Airbnb Apartments</p>
        </div>
        <div className='space-y-3 text-xs text-gray-800'>
            <h5 className='font-bold '>Airbnb</h5>
                <p>Newsroom</p>
                <p>New Features</p>
                <p>Letter from our founders</p>
                <p>Careers</p>
                <p>Gift Cards</p>
        </div>
    </div>
  )
}

export default Footer;