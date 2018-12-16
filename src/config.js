
const categories = [
   'Desktop & All-in-One Computer','Digital Cameras ','Health, Fitness & Beauty','Headphones','Home Audio','Home Automation & Security']

const categoryName = categories[Math.floor(Math.random()*categories.length)]; 

const page= Math.floor(Math.random()*5)





export const API_BASE_URL =`https://api.bestbuy.com/v1/products(categoryPath.name=${categoryName}*)?apiKey=A3fUqjrVIUbZWiJcDlQcel89&sort=name.asc&show=name,image,regularPrice,url&pageSize=5&page=${page}&format=json`; 