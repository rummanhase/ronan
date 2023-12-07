import React, { useContext, useState, useEffect } from 'react';
import "../styling/SideBar.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import AppContext from '../../context/AppContext';

function SideBar() {
  const [input , setInput] = useState('')
  const {
    searchText,
    setSearchText,
    filteredProduct,
    setFilteredProduct,
    category,
    setCategory
  } = useContext(AppContext)

  useEffect(() => {
    console.log('Category has been updated:', category);
    // Perform any additional actions here
  }, [category]);

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSearch = () => {
    setSearchText(input)
    // console.log('SearchText:', searchText);
    // console.log('Category (inside handleSearch):', category);
  }

  const handleCategoryChange = (newCategory) => {
    // console.log(`Category before change:`, category);
    // Toggle the selected category in the state
    setCategory((prevCategories) => {
      if (!prevCategories.includes(newCategory)) {
        return prevCategories.filter((prevCategory) => prevCategory !== newCategory);
      } else {
        return [...prevCategories, newCategory];
      }
    });
  };

  // console.log('Category (outside useEffect):', category);

  return (
    <div className='sidebar-container'>
       <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Input"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />
        <Button variant="outline-secondary" id="button-addon2"
          onClick={handleSearch}
        >
          Search
        </Button>
      </InputGroup>
      <div className='category-filters'>
        <Form.Label>Categories</Form.Label>
        <label>
          <input
            type='checkbox'
            checked={category.includes('men\'s clothing')}
            onChange={() => handleCategoryChange('men\'s clothing')}
          />
          Women's Clothing
        </label>
        <label>
          <input
            type='checkbox'
            checked={category.includes('men\'s clothing')}
            onChange={() => handleCategoryChange('men\'s clothing')}
          />
          Men's Clothing
        </label>
        <label>
          <input
            type='checkbox'
            checked={category.includes('men\'s clothing')}
            onChange={() => handleCategoryChange('men\'s clothing')}
          />
          Kids Clothing
        </label>

        {/* ... Other checkboxes for different categories */}
      </div>
    </div>
  )
}

export default SideBar;
