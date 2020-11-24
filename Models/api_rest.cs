using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exampleApp.Models
{
    public static class api_rest
    {
        private static List<Product> Products = new List<Product>
        {
            new Product  { id = 1,  }
        };

        public static Product Get(int id)
        {
            Product product = Products.Where(T => T.id == id).SingleOrDefault();

            return product;
        }

    }
}
