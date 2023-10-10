import React from 'react';
import InputField from "../../components/inputfeild/InputFeild";
import Button from "../../components/button/Button";
import searchicon from '../../assets/homepageimages/search-normal.png';

const Bookmark: React.FC = () => {
    const handleSearch = () => {
    }
    return (

        <div>
            <div className="search-container">
                <img src={searchicon} alt="search" />
                <InputField
                    label={''}
                    type={''}
                    placeholder={'Search for movies or TV series'}
                    className="feild-style"
                />
                <Button label="search" className="search-button" onClick={handleSearch} />
            </div>

        </div>
    )
}

export default Bookmark;
