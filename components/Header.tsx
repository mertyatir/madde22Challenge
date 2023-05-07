import logo from "../assets/images/Exclude.svg"
import Image from "next/image"

const Header = () => {
  return (
    <>
      <Image src={logo} className="App-logo" alt="logo" />
      <h2 className="heading">ETKİNLİKLER</h2>
    </>
  )
}

export default Header
