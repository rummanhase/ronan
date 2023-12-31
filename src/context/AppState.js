import { useEffect, useState } from "react";

import AppContext from "./AppContext";
import axios from "axios";

const AppState = ({ children }) => {
    const [user , setUser] = useState("Ronan Work") 
    const [productList , setProductList] = useState([]);
    const [mensProduct , setMensProduct] = useState([]);
    const [womensProduct , setWoensProduct] = useState([]);
    const [unisex , setUniSex] = useState([]);
    const [filteredProduct , setFilteredProduct] = useState(productList);
    const [searchText , setSearchText] = useState('');
    const [category , setCategory] = useState([])
    const [cartItems , setCartItems] = useState([]);
    const [login , setLogin] = useState(false);
    const [billing , setBilling] = useState(
     { items:[],
      total_bill:0,
      address:''}
    )


    useEffect(() => {
      const product_api_call = async () => {
          try {
              axios.request({
                  url: `https://api-ap-south-1.hygraph.com/v2/clptops8w3xqw01unbzr758z2/master` ,
                  method: 'POST',
                  data: {
                          query: `{
      
                              products(first: 99) {
                                  ageGroup
                                  category
                                  color
                                  createdAt
                                  discount
                                  fabricMaterial
                                  fabricType
                                  gender
                                  id
                                  maintainanceTips
                                  price
                                  productDiscription
                                  productName
                                  publishedAt
                                  qty
                                  size
                                  sizeDescription
                                  styleFit
                                  styleNeckline
                                  styleSleeveLength
                                  subCategory
                                  updatedAt
                                  washingInstruction
                                  image1 {
                                    url
                                  }
                                  image2 {
                                    url
                                  }
                                  image3 {
                                    url
                                  }
                                  video {
                                    fileName
                                    url
                                  }
                              }
                          
                          
                          }`
                  },
                  headers: {
                      'content-type': 'application/json',
                  }
              }).then((res) => { 
                  setProductList(res.data.data.products)
                  setFilteredProduct(res.data.data.products)
                  // console.log(res.data.data.products)
              })
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      product_api_call();
  }, []); // Empty dependency array means this effect runs once when the component mounts.
  useEffect(() => {
     
  }, [filteredProduct]);
  return (
    <AppContext.Provider
      value={{
        user , setUser,
        productList,setProductList,
        filteredProduct , setFilteredProduct,
        searchText , setSearchText,
        category , setCategory,
        cartItems , setCartItems,
        login , setLogin,
        mensProduct , setMensProduct,
        womensProduct , setWoensProduct,
        unisex , setUniSex,
        billing , setBilling
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppState;
