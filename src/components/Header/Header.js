import {createTheme, debounce, MenuItem, TextField, ThemeProvider } from '@material-ui/core'
import React from 'react'
import './Header.css'
import countries from '../../data/Category'
const Header = ({ setCategory, category, word, setWord, setMeanings, LightMode }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode ? "#000" : '#ffff'
            },
            type: LightMode ? "light" : "dark",
        },
    });

    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
        setMeanings([]);
    };

    const handleText = debounce((text) => {
        setWord(text);
    }, 500)

    return (
        <div className="header">
            <span className="title">{word ? word : "Gloxary" }</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        className="search" 
                        label="Search a word" 
                        // value={word}
                        onChange={(e) => handleText(e.target.value)}
                    />
                    <TextField
                        className="select"
                        select
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e)}
                        helperText="Please select one"
                    >
                        {
                            countries.map((option) => (
                                <MenuItem 
                                    key={option.label} 
                                    value={option.label}
                                >
                                {option.value}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
