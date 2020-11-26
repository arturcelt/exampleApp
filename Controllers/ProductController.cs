using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using exampleApp.Models;

namespace exampleApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        // GET: api/Product
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            return rest.Products;
        }

        // GET: api/Product/5
        [HttpGet("{id}", Name = "Get")]
        public Product Get(int id)
        {
            return rest.Get(id);
        }

        // POST: api/Product
        [HttpPost]
        public Product Post([FromBody] Product product)
        {
            return rest.Save(product);
        }

        // PUT: api/Product/5
        [HttpPut("{id}")]
        public Product Put(int id, [FromBody] Product product)
        {
            return rest.Save(product);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public Product Delete(int id)
        {
            return rest.Delete(id);
        }
    }
}
