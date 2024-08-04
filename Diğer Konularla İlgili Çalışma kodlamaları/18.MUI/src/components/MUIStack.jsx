import { Divider, Stack } from '@mui/material'
import React from 'react'

function MUIStack() {
    return (
        <div>
            <Stack direction='row' spacing={10}
                divider={<Divider orientation='vertical' flexItem />}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>

            </Stack>
        </div>
    )
}

export default MUIStack