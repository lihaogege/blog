import React from 'react';
import styles from './styles.module.less'
import BackDrop from "../../ui/BackDrop/BackDrop";
import { AutoComplete } from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {setSearchFlag} from "../../../store/search";

const mockVal = (str: string, repeat = 1) => ({
    value: str.repeat(repeat),
});

const Search = () => {
   const {searchFlag} =  useSelector((state:any)=> state.search)
    const dispatch = useDispatch()
    const [value, setValue] = React.useState('');
    const [options, setOptions] = React.useState<{ value: string }[]>([]);

    const onSearch = (searchText: string) => {
        setOptions(
            !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
        );
    };
    const onSelect = (data: string) => {
        console.log('onSelect', data);
    };
    const onChange = (data: string) => {
        setValue(data);
    };

    if(!searchFlag){
        return (
            <div/>
        );
    }

    const searchFlagHandler = (flag:boolean)=>{
        dispatch(setSearchFlag(flag))
    }

    return (
        <BackDrop isOpen={searchFlagHandler}>
            <div className={styles.searchModal}>
                <div className={styles.searchBar}>
                    <AutoComplete
                        options={options}
                        style={{ width: 200 }}
                        onSelect={onSelect}
                        onSearch={onSearch}
                        placeholder="input here"
                    />
                </div>
                <div className={styles.searchContainer}>
                    <h1>文章</h1>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
            </div>
        </BackDrop>
    );
};

export default Search;