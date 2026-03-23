
import {useNavigate} from 'react-router';
import Box from "@mui/material/Box";
import { IconButton, Menu, MenuItem,} from "@mui/material";
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';

import logo from "../../assets/images/logo2.png";
import ButtonLayout from "../../components/buttons/ButtonLayout.tsx";


const menuPages = [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/About'},
    {name: 'MakeUp', path: '/Portfolio'},
];


export default function Header() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box sx={{display: 'flex',
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 10px",
                boxShadow: 'none',
                outline: 'none',
            }}>
                <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}}>
                    <IconButton
                        id="demo-positioned-button"
                        aria-controls={open ? 'demo-positioned-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <MenuIcon></MenuIcon>
                    </IconButton>
                    <Menu
                        id="demo-positioned-menu"
                        aria-labelledby="demo-positioned-button"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        {menuPages.map((menuItem) => (
                            <MenuItem onClick={() => navigate(menuItem.path)}>{menuItem.name}</MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box
                    sx={{display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer"}}
                    onClick={() => navigate('/')}
                >
                    <img height={90} src={logo} style={{margin: '5px'}}/>
                </Box>

                <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                    {menuPages.map((page) => (
                        <ButtonLayout
                            key={page.name}
                            name={page.name}
                            onClick={() => navigate(page.path)}
                        />
                    ))}
                </Box>
            </Box>
        </>
    );
}
