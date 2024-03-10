# Answers to Questions

## 1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

Products are organized into categories. Each product belongs to one category, but each category can contain multiple products within it.

## 2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

To ensure each product is correctly categorized, we connect the "category_id" field of each product to the "id" field of a category. This means that every product must be associated with a valid category from the category list. By enforcing this connection, we ensure that products are properly categorized.
