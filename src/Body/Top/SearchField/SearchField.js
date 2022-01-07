import { Search } from '@mui/icons-material';
import './SearchField.css';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';


export const SearchField = () => {

    return(
        <div className="divSearch">
            <FormControl variant="standard" className="searchField">
                <Input className="inputt" id="input-with-icon-adornment"
                    startAdornment={
                        <Search/>
                    }
                />
            </FormControl>
        </div>
    );
}