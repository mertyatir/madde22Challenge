"use client"

import Header from "../components/Header"
import FilterSection from "../components/FilterSection"
import ItemBoxList from "../components/ItemBoxList"
import SelectionMenu from "../components/SelectionMenu"
import { FilterProvider } from "../providers/FilterProvider"

const Home = () => {
  return (
    <div className="App">
      <FilterProvider>
        <Header />
        <SelectionMenu />
        <FilterSection />
        <ItemBoxList />
      </FilterProvider>
    </div>
  )
}

export default Home
