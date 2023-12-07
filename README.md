
https://hygraph.com/docs/api-reference/content-api/pagination

{
  posts(first: 6) {
    id
  }
}

api_playground 

query Products {
  products {
    ageGroup
    category
    color
    createdAt
    fabricMaterial
    fabricType
    gender
    id
    maintainanceTips
    price
    productDiscription
    productName
    publishedAt
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
}
