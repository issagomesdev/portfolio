import React from 'react'
import { Box, useTheme, Button } from '@mui/material'
import { Icon } from "@iconify/react";

type PaginationComponentProps = {
    totalPages: number
    currentPage: number
    onPageChange: (page: number) => void
    siblingCount?: number
}

export const PaginationComponent: React.FC<PaginationComponentProps> = ({
    totalPages,
    currentPage,
    onPageChange,
    siblingCount = 2,
}) => {

    const theme = useTheme();

    const getPages = () => {
        const pages: number[] = []

        for (let i = currentPage - siblingCount; i < currentPage; i++) {
            if (i > 0) pages.push(i)
        }
        pages.push(currentPage)

        for (let i = currentPage + 1; i <= currentPage + siblingCount && i <= totalPages; i++) {
            pages.push(i)
        }

        return pages
    }

    const pages = getPages()

    const goToPage = (page: number) => {
        if (page < 1) page = 1
        if (page > totalPages) page = totalPages
        if (page !== currentPage) {
            onPageChange(page)
        }
    }

    return (
        <Box display="flex" width={'80%'} alignItems="center" gap={1} justifyContent={'center'} flexWrap={'wrap'} mt={2}>

            {currentPage !== 1 ? <Icon icon={'ri:arrow-left-double-fill'} onClick={() => goToPage(1)} width={theme.spacing(4)} color={theme.palette.primary.main} /> : null}

            {pages.map((page) => (
                <Button
                    key={page}
                    onClick={() => goToPage(page)}
                    sx={{
                        height: theme.spacing(4), minWidth: theme.spacing(6),
                        backgroundColor: currentPage === page ? theme.palette.primary.main : theme.palette.background.default,
                        border: '1px solid ' + theme.palette.primary.main,
                        color: currentPage === page ? theme.palette.background.paper : theme.palette.primary.main,
                    }}
                >
                    {page}
                </Button>
            ))}

            {currentPage !== totalPages ? <Icon icon={'ri:arrow-right-double-fill'} onClick={() => goToPage(totalPages)} width={theme.spacing(4)} color={theme.palette.primary.main} aria-label="" /> : null}

        </Box>
    )
}
