import React from 'react'
import CardType from '../../../partials/CardType'

const Types = () => {
  return (
    <>
       {/* Types */}
       <section id='types' className="bg-white py-16" >
        <div className="container mx-auto px-4 py-4">
          <h3 className="font-bold text-2xl text-center ">Popular <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Milk Tea</span> Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 mt-10">
              <CardType background={"bg-pink-200"} icon={"🥛"} type={"Classic Milk Tea"} description={"The original blend of black tea, milk, and sweetness that started it all."}/>
              <CardType background={"bg-purple-200"} icon={"🍯"} type={"Honeydew Milk Tea"} description={"Refreshing melon flavor combined with creamy milk for a summer favorite."}/>
              <CardType background={"bg-yellow-100"} icon={"🍵"} type={"Matcha Milk Tea"} description={"Earthy green tea powder blended with milk for an antioxidant boost."}/>
          </div>
        </div>
       </section>
    </>
  )
}

export default Types
