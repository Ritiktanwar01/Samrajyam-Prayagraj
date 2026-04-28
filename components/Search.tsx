import React from 'react'

function Search() {
  return (
    <section className='my-12'>
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Search Projects</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Find the perfect home that suits your lifestyle and preferences.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <input 
            type="text" 
            placeholder="Search by location, price, or amenities" 
            className="w-full sm:w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            Search
          </button>
        </div>
      </div>
    </section>
  )
}

export default Search