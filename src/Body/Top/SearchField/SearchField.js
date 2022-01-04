import { Search } from '@mui/icons-material';
import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import './SearchField.css';

export const SearchField = () => {
    return(
        <div className="divSearch">
            <Box className="searchField" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <Search sx={{ color: 'action.active', mr: 1, my: 0.1 }} />
                <TextField id="input-with-sx" label="Cerca" variant="standard" />
            </Box>
            {/* Cerca:
           <input className="searchBar" type="text"></input> */}
        </div>
    );
}