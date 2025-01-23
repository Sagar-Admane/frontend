import React from 'react'
import style from "./loader.module.scss"
import BarLoader from 'react-spinners/BarLoader'

function Loader() {
  return (
    <div className={style.container} >
        <BarLoader width={200} />
    </div>
  )
}

export default Loader
