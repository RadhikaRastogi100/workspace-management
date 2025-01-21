import {
  Button,
  Card,
  CardContent,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

interface ProductProps {
  title: string;
  brand: string;
  description: string;
  category: string;
  price: number;
  rating: number;
}

const ShowJsonList = () => {
  const [productList, setProductList] = useState<ProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchVal, setSearchVal] = useState("");

  const productPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProductList(data?.products);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * productPerPage;
  const endIndex = startIndex + productPerPage;

  // Filter the workspace data for the current page
  const paginatedProduct = productList.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const onHandleSearch = (e: any) => {
    e.preventDefault();
    const searchValue = searchVal.trim().toLowerCase();
    if (searchValue == "") {
      setProductList(productList);
    } else {
      const filteredList = productList?.filter((product) =>
        product.title?.toLowerCase().includes(searchValue)
      );
      setProductList(filteredList);
    }
  };
  console.log("productList-----", productList);

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ height: "50%", padding: "0px 0px 20px 13px" }}
      >
        <Grid item xs={11}>
          <input
            type="string"
            placeholder="Search Product"
            style={{ width: "100%", height: "100%" }}
            onChange={(e) => setSearchVal(e.target.value)}
            value={searchVal}
          />
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            onClick={onHandleSearch}
            endIcon={<FilterAltOutlinedIcon />}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      {paginatedProduct?.map((product: any) => {
        return (
          <>
            <Card
              style={{ marginBottom: "1rem", width: "50%", margin: "25px" }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "700" }}>
                  {product?.title}
                </Typography>
                <Typography variant="body2">
                  {`DESCRIPTION: ${product?.description}`}
                </Typography>
                <Typography variant="body2">{`CATEGORY: ${product?.category}`}</Typography>
                <Typography variant="body2">{`PRICE: ${product?.price}`}</Typography>
                <Typography variant="body2">{`BRAND: ${product?.brand}`}</Typography>
                <Typography variant="body2">{`RATING: ${product?.rating}`}</Typography>
              </CardContent>
            </Card>
          </>
        );
      })}

      {/* Pagination */}
      <Stack spacing={2} alignItems="center" mt={4}>
        <Pagination
          count={Math.ceil(productList.length / productPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
    </>
  );
};

export default ShowJsonList;
