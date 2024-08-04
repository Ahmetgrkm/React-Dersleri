import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';




function MUITextField() {
    return (
        <div>
            <div>
                <TextField label='isim' variant='outlined' />
                <TextField label='isim' variant='filled' />
                <TextField label='isim' variant='standard' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label='isim' variant='outlined' color='error' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label='isim' variant='outlined' color='warning' helperText='isminizi giriniz' />
                <TextField label='şifre' variant='outlined' color='error' helperText='şifrenizi giriniz' />
            </div>


            <div style={{ marginBottom: '30px' }}>
                <TextField label='isim' disabled variant='outlined' color='warning' helperText='isminizi giriniz' />

            </div>



            <div style={{ marginBottom: '30px' }}>
                <TextField inputProps={{ readOnly: true }} value="ahmed" disabled variant='outlined' color='warning' helperText='isminizi giriniz' />
            </div>

            <div style={{ marginBottom: '30px' }}>
                <TextField label="isim giriniz" InputProps={{
                    startAdornment: <InputAdornment position='start'><PersonIcon /></InputAdornment>
                }} variant='outlined' />

            </div>

            <div>
                <TextField InputProps={{
                    endAdornment: <InputAdornment position='end'><PersonIcon /></InputAdornment>
                }} variant='outlined' />
            </div>


        </div>
        //disable içindeki değerin değişmemesini sağlar
        //readOnly sadece yazılan şeyin okunmasını sağlar
        //MUI daki componentlere css verirken sx kullanırız.

    )
}

export default MUITextField