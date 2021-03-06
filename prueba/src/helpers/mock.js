const productos = [
  {
    id: "1",
    name: "MacBook Air",
    price: 25999,
    procesador: "Chip M1",
    storage: "256 GB",
    imageUrl:
      "https://ishopmx.vtexassets.com/arquivos/ids/168166-300-300?v=637757898076600000&width=300&height=300&aspect=true",
    ram: "8 GB RAM",
    size: '13.3"',
    color: "Space Gray",
    battery: "Hasta 18 horas",
    os: "macOS",
    category: "Mac",
    stock: 20,
  },
  {
    id: "2",
    name: "MacBook Air",
    price: 25999,
    procesador: "Chip M1",
    storage: "256 GB",
    imageUrl:
      "https://ishopmx.vtexassets.com/arquivos/ids/168170-300-300?v=637757898236770000&width=300&height=300&aspect=true",
    ram: "8 GB RAM",
    size: '13.3"',
    color: "Gold",
    battery: "Hasta 18 horas",
    os: "macOS",
    category: "Mac",
    stock: 20,
  },
  {
    id: "3",
    name: "MacBook Air",
    price: 32699,
    procesador: "Chip M1",
    storage: "512 GB",
    imageUrl:
      "https://ishopmx.vtexassets.com/arquivos/ids/168167-300-300?v=637757898118200000&width=300&height=300&aspect=true",
    ram: "8 GB RAM",
    size: '13.3"',
    color: "Space Gray",
    battery: "Hasta 18 horas",
    os: "macOS",
    category: "Mac",
    stock: 20,
  },
  {
    id: "4",
    name: "iPad (9a Gen)",
    price: 8999,
    procesador: "Chip A13 BIONIC",
    storage: "64 GB",
    imageUrl:
      "https://ishopmx.vtexassets.com/arquivos/ids/172447-1200-auto?v=637771675093500000&width=1200&height=auto&aspect=true",
    ram: "6 GB RAM",
    size: '10.1"',
    color: "Space Gray",
    battery: "",
    os: "iOS",
    category: "iPad",
    stock: 6,
  },
  {
    id: "5",
    name: "iPad Air",
    price: 16499,
    procesador: "Chip A14 BIONIC",
    storage: "64 GB",
    imageUrl:
      "https://ishopmx.vtexassets.com/arquivos/ids/168724-1200-auto?v=637757920995130000&width=1200&height=auto&aspect=true",
    ram: "6 GB RAM",
    size: '10.9"',
    color: "Space Gray",
    battery: "Hasta 16 horas",
    os: "iOS",
    category: "iPad",
    stock: 6,
  },
  {
    id: "6",
    name: "iPhone 13",
    price: 28999,
    procesador: "Chip A15 BIONIC",
    storage: "512 GB",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_798438-MLA48036040032_102021-F.webp",
    ram: "",
    size: '6.1"',
    color: "Stelar White",
    battery: "Hasta 28 horas",
    os: "iOS",
    category: "iPhone",
    stock: 6,
  },
  {
    id: "7",
    name: "iPhone 13",
    price: 20999,
    procesador: "Chip A15 BIONIC",
    storage: "128 GB",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_812997-MLA48035925370_102021-F.webp",
    ram: "",
    size: '6.1"',
    color: "Sierra Blue",
    battery: "Hasta 28 horas",
    os: "iOS",
    category: "iPhone",
    stock: 6,
  },
  {
    id: "8",
    name: "iPhone 13",
    price: 20999,
    procesador: "Chip A15 BIONIC",
    storage: "128 GB",
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_883191-MLA48035763913_102021-F.webp",
    ram: "",
    size: '6.1"',
    color: "Midnight Blue",
    battery: "Hasta 28 horas",
    os: "iOS",
    category: "iPhone",
    stock: 6,
  },
];

export const getFetch = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  } else {
    reject("error");
  }
});
