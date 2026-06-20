function getProductsOnPage(products, count, page) {
    let firstProductsIndex = count * page - count
    let lastProductsIndex = firstProductsIndex + count
    const productsOnPage = products.slice(firstProductsIndex, lastProductsIndex)
    return productsOnPage
}

export { getProductsOnPage }