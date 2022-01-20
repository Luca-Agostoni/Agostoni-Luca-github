import SearchIcon from '@mui/icons-material/Search';
import './SearchField.css';
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));



export const SearchField = (props) => {
  
  const searchFiltered = (props) => {
    const searchData = document.getElementById("search").value;
    props.setSearchDataOut(searchData);
  }

  return(
    <div className="divSearch">
            <Search className="searchSlot">
                <SearchIconWrapper className='iconSlot'>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  onChange={() =>searchFiltered(props)}
                  id="search"
                  className="inputTextField"
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
    </div>
  );  
}