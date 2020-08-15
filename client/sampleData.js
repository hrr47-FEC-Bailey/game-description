const faker = require('faker');

const desc = {
  about: faker.lorem.paragraphs(2),
  mature_content: faker.lorem.paragraph(),
};

const specifications = {
  minimum: {
    os: "Windows 7/8.1/10 (64-bit Version)",
    processor: "Intel i5-2400/AMD FX-8320",
    memory: "8 GB RAM",
    graphics: "NVIDIA GTX 470 1GB /AMD HD 7870 2GB",
    storage: "12 GB available space"
  },
  recommended: {
    os: "Windows 7/8.1/10 (64-bit Version)",
    processor: "Intel i5-750/AMD Phenom II X4-945",
    memory: "8 GB RAM",
    graphics: "NVIDIA GTX 780 3GB /AMD R9 290 4GB",
    storage: "12 GB available space"
  },
}

module.exports = {
  desc,
  specifications,
}