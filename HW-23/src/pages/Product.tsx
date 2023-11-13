import React from "react";
import monitor from './11.png'
import { Container, Grid, TextField, Button, Typography, Rating } from '@mui/material/';
import Item from '@mui/material/ListItem'
import './product.style.css'


const Product = () => {
    return (
        <Container maxWidth="lg">
            <div className="inv"></div>
            <Grid container spacing={0.5}>
                <Grid item xs={5} md={5}>
                    <img src={monitor} alt="monitor" width={400}></img>
                    <h3>สินค้าคงเหลือใน Stock (55/100)</h3>
                    <div className="box-review-main"><p>Review</p></div>
                    <div className="box-review">
                        <Typography component="legend">Markky Richboy</Typography>
                        <Rating name="read-only" value={5} readOnly />
                    </div>
                    <div className="box-review">
                        <Typography component="legend">Mamba Black</Typography>
                        <Rating name="read-only" value={4} readOnly />
                    </div>
                    <div className="box-review">
                        <Typography component="legend">Asab Sosa</Typography>
                        <Rating name="read-only" value={3} readOnly />
                    </div>
                    <div className="box-review">
                        <Typography component="legend">Johnny Weswell</Typography>
                        <Rating name="read-only" value={5} readOnly />
                    </div>
                </Grid>
                <Grid item xs={7} md={7}>
                    <div className="box-name">
                        <h1>Gigabyte 24F2</h1>
                        <p> &nbsp; &nbsp; &nbsp;จอมอนิเตอร์สำหรับเล่นเกม G24F 2 ขนาด23.8นิ้ว
                            ได้รับการออกแบบมาเพื่อให้คุณได้รับประสบการณ์การเล่นเกมที่ราบรื่น ด้วยเทคโนโลยี AMD FreeSync Premium
                            ป้องกันการฉีกขาดของหน้าจอ ช่วยลดการกระตุกของภาพ รองรับการเล่นเกมอย่างราบรื่นไร้ที่ติ และยังมี Flicker Free
                            Technology ลดการกะพริบของหน้าจอ สิ่งนี้จะช่วยลดอาการปวดตาและเอฟเฟกต์ความเสียหายอื่นๆ ต่อดวงตาของคุณ
                            แถมสะดวกด้วยพอร์ตเชื่อมต่อ HDMI และ DisplayPort อีกทั้งยังมีพอร์ต USB ให้ใช้งานอีกด้วย</p>
                        <h2>ราคา : 4590 ฿</h2>
                        <label>จำนวนสินค้าที่ต้องการ : </label>
                        <TextField id="outlined-number" type="number" size="small" />
                        <Button variant="contained" href="/checkout" size="medium">Add to Cart</Button>
                    </div>
                    <div className="box-data-main">
                        <p>Specifications</p>
                    </div>
                    <div className="box-data">
                        <p>Maximum Resolution :1920x1080(FHD)</p>
                    </div>
                    <div className="box-data">
                        <p>Screen Size : 23.8"</p>
                    </div>
                    <div className="box-data">
                        <p>Refresh Rate : 165/180 Hz</p>
                    </div>
                    <div className="box-data">
                        <p>Color Gamut : 95% DCI-P3, 125% sRGB</p>
                    </div>

                </Grid>
            </Grid>
        </Container>

    )
}

export default Product