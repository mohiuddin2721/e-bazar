import { Box, Typography } from '@mui/material'
import React from 'react'
import { component_container, shortCartFirstBoxStyle, shortCartSecondBoxSx } from '../../Styles/ComponentStyle'
import { sortCartData } from '../../Utils/ConstantData'
import { Link } from 'react-router-dom'


function ShortCart() {
    // console.log(sortCartData)
    return (
        <Box sx={component_container} style={shortCartFirstBoxStyle}>
            {
                sortCartData?.map((data, i) =>
                    <Link to={`/shortcut/${data?.name}`} key={i}>
                        <Box 
                            className='hover:text-[#ec99aa]'
                            sx={shortCartSecondBoxSx}>
                            <img src={data?.link} className='w-[32px] h-[32px] mr-3 ml-5' alt="" />
                            <Typography>
                                {data?.name}
                            </Typography>
                        </Box>
                    </Link>
                )
            }
        </Box>
    )
}

export default ShortCart