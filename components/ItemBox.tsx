"use client"

import React, { useState } from "react"

import { BsPlusCircle } from "react-icons/bs"

import locationIcon from "../assets/images/Frame.svg"
import addedIcon from "../assets/images/added.svg"
import Image, { StaticImageData } from "next/image"

type ItemBoxProps = {
  title: string
  infoText: string
  location: string
  img: StaticImageData
  type: string
}

function ItemBox({ title, infoText, location, img, type }: ItemBoxProps) {
  const [selected, setSelected] = useState(false)

  let backgroundColor

  switch (type) {
    case "Konser":
      backgroundColor = "#9FAE5D"
      break
    case "Stand up":
      backgroundColor = "#F19653"
      break
    case "Sinema":
      backgroundColor = "#F07266"
      break
    case "Tiyatro":
      backgroundColor = "#B77CB8"
      break
    case "Çocuk":
      backgroundColor = "#8B8000"
      break
    default:
      backgroundColor = "#9FAE5D"
  }

  return (
    <div className="itemBoxContainer">
      <div className="dateContainer">
        <span className="bannerText" style={{ background: backgroundColor }}>
          {type}
        </span>
        <div className="innerDateContainer">
          <span className="dateText">7</span>
          <span className="dateText">Eylül</span>
          <span className="dateText">Salı</span>
          <span className="dateText">21:15</span>
        </div>
        <div className="eventImageContainer">
          <Image src={img} alt="EventImage1" />
        </div>
      </div>

      <div className="otherHalfofBox">
        <div className="informationContainer">
          <p className="informationHeaderText">{title}</p>

          <p id="itemBoxLocationText">
            {" "}
            <Image src={locationIcon} id="locationIcon" alt="Location Icon" />
            {location}
          </p>

          <p className="infoTextContainer" style={{ textAlign: "left" }}>
            {infoText}
          </p>
        </div>
        <div className="buttonSectionContainer">
          <p className="informationItemButtonText">Bilet Al</p>

          <button
            type="button"
            id="addToCalendarButton"
            onClick={() => {
              setSelected(!selected)
            }}
          >
            <span className="addToCalendarText"></span>
            {selected ? (
              <Image
                src={addedIcon}
                alt="Added Icon"
                style={{ marginRight: 5 }}
              />
            ) : (
              <BsPlusCircle size={20} style={{ marginRight: 5 }} />
            )}

            {selected ? "Takvime Eklendi" : "Takvime Ekle"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemBox
