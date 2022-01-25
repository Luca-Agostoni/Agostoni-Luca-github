
import React from "react";

export const useReposDetails = () => {
    const [openDetail, setOpenDetail] = React.useState(false);
    
    const handleOpen = () => setOpenDetail(true); 
    const handleClose = () => setOpenDetail(false);
    return {openDetail, handleClose, handleOpen};
}