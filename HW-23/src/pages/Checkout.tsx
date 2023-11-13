import React from "react";
import { TextField, Button , FormControl , FormControlLabel , FormLabel , Radio ,RadioGroup} from '@mui/material/';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem'
import './COF.css'


const Checkout = () => {
    return (
        <div className="">
            <div className="top-checkout">
                <h2>Checkout Form</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aperiam modi dolores alias, saepe beatae inventore esse consequatur nisi dignissimos.</p>
            </div>
            <div className="main-checkout">
                <div className="main-left">
                    <h3>Addess</h3>
                    <Grid container spacing={0.5}>
                        <Grid item xs={6} md={6}>
                            <Item><TextField fullWidth id="outlined-basic" label="ชื่อจริง" variant="outlined" /></Item>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Item><TextField fullWidth id="outlined-basic" label="นามสกุล" variant="outlined" /></Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0.5}>
                        <Grid item xs={12} md={12}>
                            <Item><TextField fullWidth id="outlined-basic" label="ที่อยู่อาศัย" variant="outlined" /></Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0.5}>
                        <Grid item xs={6} md={6}>
                            <Item><TextField fullWidth id="outlined-basic" label="แขวง/ตำบล" variant="outlined" /></Item>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Item><TextField fullWidth id="outlined-basic" label="เขต/อำเภอ" variant="outlined" /></Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0.5}>
                        <Grid item xs={6} md={6}>
                            <Item><TextField fullWidth id="outlined-basic" label="จังหวัด" variant="outlined" /></Item>
                        </Grid>
                        <Grid item xs={6} md={6}>
                            <Item><TextField fullWidth id="outlined-basic" label="รหัสไปรษณีย์" variant="outlined" /></Item>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={1} md={1.5}>
                            <Item><Button fullWidth variant="contained">บันทึก</Button></Item>
                        </Grid>
                        <Grid item xs={1} md={1.5}>
                            <Item><Button fullWidth variant="outlined">ยกเลิก</Button></Item>
                        </Grid>
                    </Grid>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label"><h3>Payment</h3></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="ชำระเงินผ่านธนาคาร" />
                            <FormControlLabel value="male" control={<Radio />} label="ชำระผ่าน QR Code" />
                            <FormControlLabel value="other" control={<Radio />} label="ชำระผ่านบัตรเครดิต / เดบิต" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className="main-right">
                    <h3>Your Cart</h3>

                </div>
            </div>
        </div>
    )
}

export default Checkout