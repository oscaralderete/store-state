# Stores and $state() in Svelte 5

This is a simple example demonstrating how **Svelte stores** and **$state()** work. In the new Svelte 5, they can coexist without any issues, though the recommended approach is to use **$state()**.

In this example, I'm using both to "cache" fetched data from an external API:

**[https://fakestoreapi.com/products](https://fakestoreapi.com/products)**  
**[https://fakestoreapi.com/users](https://fakestoreapi.com/users)**

Traditionally, every time a user clicks on **Products** or **Users**, the external APIs would be fetched. This is very inefficient. As I've already mentioned, this example "caches" the external data using **stores** and **$states**.

Can this be applied on a production site? Absolutely! For example, on my page:

**[https://wpe.oscaralderete.com/blog](https://wpe.oscaralderete.com/blog)**

This approach works well. However, depending on the number of records, you might need to extend the storage/state assignment to accommodate paginated information.

If you examine the code, you'll notice that the fetch function is (conditionally) repeated in **Products → Product details** and **Users → User detail**. This is not a violation of the DRY principle but rather a fallback for situations where a visitor lands directly on your site through a product detail or user detail link, such as:

**[http://mysite.com/products/lorem-ipsum](http://mysite.com/products/lorem-ipsum)**  
**[http://mysite.com/users/john-doe](http://mysite.com/users/john-doe)**

Enjoy the code!