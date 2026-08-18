import Product from "../models/products.js";

const resolvers = {
  Query: {
    products: async () => {
      return await Product.find();
    },

    product: async (_, { id }) => {
      return await Product.findById(id);
    },
  },

  Mutation: {
    createProduct: async (_, args) => {
      const product = new Product(args);

      return await product.save();
    },

    updateProduct: async (_, { id, ...updates }) => {
      return await Product.findByIdAndUpdate(
        id,
        updates,
        {
          new: true,
          runValidators: true,
        }
      );
    },

    deleteProduct: async (_, { id }) => {
      return await Product.findByIdAndDelete(id);
    },
  },
};

export default resolvers;