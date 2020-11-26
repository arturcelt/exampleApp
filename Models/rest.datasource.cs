using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace exampleApp.Models
{
    public static class rest
    {
        private static List<Product> Sampleproducts = new List<Product>
        {
            new Product { id = 1, name = "Kajak", category = "Sporty wodne", price = 275M },
            new Product { id = 2, name = "Kamizelka ratunkowa", category = "Sporty wodne", price = 48.95M },
            new Product { id = 3, name = "Piłka", category = "Piłka nożna", price = 19.50M },
            new Product { id = 4, name = "Flagi narożne", category = "Piłka nożna", price = 34.95M },
            new Product { id = 5, name = "Stadion", category = "Piłka nożna", price = 79500M },
            new Product { id = 6, name = "Czapka", category = "Szachy", price = 16M },
            new Product { id = 7, name = "Niestabilne krzesło", category = "Szachy", price = 29.95M },
            new Product { id = 8, name = "Ludzka szachownica", category = "Szachy", price = 75M },
            new Product { id = 9, name = "Błyszczący król", category = "Szachy", price = 1200M }
        };

        public static Product Get(int id)
        {
            Product product = Sampleproducts.Where(T => T.id == id).SingleOrDefault();

            return product;
        }

        public static IEnumerable<Product> Products
        {
            get
            {
                return Sampleproducts;
            }
        }

        public static Product Save(Product product)
        {
            if(product.id == null)
            {
                product.id = GenerateProductId();
                Sampleproducts.Add(product);
                return product;
            } else
            {
                Product productEdit = Sampleproducts.Where(T => T.id == product.id).SingleOrDefault();
                productEdit.name = product.name;
                productEdit.category = product.category;
                productEdit.price = product.price;
                return productEdit;
            }
        }

        public static Product Delete(int id)
        {
            Product product = Sampleproducts.Where(T => T.id == id).SingleOrDefault();
            if(product != null)
            {
                Sampleproducts.Remove(product);
            }
            return product;
        }

        private static int GenerateProductId()
        {
            int? maxId = Sampleproducts.Max(T => T.id);
            if(maxId == null)
            {
                return 1;
            }
            else
            {
                return (int)++maxId;
            }
        }

    }
}
