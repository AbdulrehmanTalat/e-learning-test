import React from "react"
import style from "./css/Header_Background.module.css"
import { Button } from "@material-ui/core"
import Typical from 'react-typical'
import cx from "classnames"
export const Header_Background = () => {
  return (
    <div>
      <section className={style.section}>
        <div className={cx("row", style.content)}>
          <div>

            <h2>
              <Typical
                steps={['', 1000, 'Training Innovative', 500]}
                loop={Infinity}
                wrapper="p"
              />
            </h2>
            <h2>
              <Typical
                steps={['', 1000, 'Software Developers', 500]}
                loop={Infinity}
                wrapper="p"
              />
            </h2>
            <div className={style.btns}>
              <Button className={style.theme_btn}>Learn More</Button> &nbsp;{"  "}
              <Button variant="outlined" className={style.theme_btn1} >Apply Now</Button>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Header_Background
