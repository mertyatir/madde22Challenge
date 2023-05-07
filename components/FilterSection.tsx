import Filter from "./Filter"

import calendarIcon from "../assets/images/Calendar.svg"
import Image from "next/image"

function FilterSection() {
  return (
    <div className="filterSectionContainer">
      <Filter />
      <div className="filterSectionDivider">
        <div className="CalendarIconContainer">
          <Image
            src={calendarIcon}
            className="calendarIcon"
            alt="Calendar Icon"
          />
        </div>
        <p className="filterSectionText"> Takvimde Gör</p>
      </div>
    </div>
  )
}

export default FilterSection
