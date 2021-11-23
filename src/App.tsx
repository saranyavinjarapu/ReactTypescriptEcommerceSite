import { useState } from "react";
import { useQuery } from "react-query";
// Components

import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
// Styles
import { Wrapper } from "./App.styles";

//Types

/*since its typescript, we want to type the structure of data we get back from api
so we specify the type as seen below, we use "export" as we will be using it in other
components as well..please note that all the properties below come from api except for
amount property, we need amount to keep track and hence we added it as extra...*/

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

/*we need to type the return type of the getProducts function
 we use Promise as we are using async/await and its called generic in typescript
 so we can provide it with a type we want like below
 Promise<CartItemType[]> - "promise" represents generic, "CartItemType" represents
return and "[]" represents array as data from api will be an array
*/

const getProducts = async (): Promise<CartItemType[]> => {
  /*inside await is for fetching data from api and outside await is for
  converting to json */
  return await (await fetch("https://fakestoreapi.com/products")).json();
};

const App = () => {
  /* we will use useQuery hook here , we can type return type of data returned hence
  we types "<carttypeitem"> and "[]" as data comes back as array
  then we have to put in query key which is a string, we can name it whatever we want 
  and here we are calling it "products" and we have fetcing function "getProducts"*/
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = () => null;
  const handleAddToCart = () => null;
  const handleRemoveToCart = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div> Something went wrong</div>;

  return <div className="App">start</div>;
};

export default App;
