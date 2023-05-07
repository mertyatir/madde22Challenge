import searchIcon from "../assets/images/Search.svg"
import Image from "next/image"

function SearchBar() {
  return (
    <div className="searchContainer">
      <div className="searchIconContainer">
        <Image src={searchIcon} className="searchIcon" alt="searchIcon" />
      </div>
      <input
        type="text"
        placeholder="Etkinlik Ara"
        name="searchTerm"
        className="input"
      />
    </div>
  )
}

export default SearchBar
