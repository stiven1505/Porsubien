module.exports = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  serverRuntimeConfig: {
    secret:
      "porsubien6161asdawd1256161xfqwe1631sadw",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "production"
      
        ? "http://www.porsubien.com/api" // development api
        : "http://www.porsubien.com/api", // production api 
        
        
  },
};
