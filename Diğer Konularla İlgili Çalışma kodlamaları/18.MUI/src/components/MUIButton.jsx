import React from 'react'
import { Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MUIButton() {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Button variant='text'>kaydol</Button>
                <Button variant='contained'>kaydol</Button>
                <Button variant='outlined'>kaydol</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button color='primary'>giriş yap</Button>
                <Button color='error'>giriş yap</Button>
                <Button color='info'>giriş yap</Button>
                <Button color='secondary'>giriş yap</Button>
                <Button color='success' variant='contained'>giriş yap</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button size='small' variant='contained' color='warning'>Geri Dön</Button>
                <Button size='medium' variant='contained' color='warning'>Geri Dön</Button>
                <Button size='large' variant='contained' color='warning'>Geri Dön</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button size='small' variant='contained'
                    color='warning' startIcon={<AddCircleIcon />}>Geri Dön</Button>

                <Button size='small' onClick={() => alert("button çalıştı")} variant='contained'
                    color='warning' endIcon={<AddCircleIcon />}>Geri Dön</Button>

            </div>



        </div>
    )
}

export default MUIButton