angular.module('starter.services', [])

.factory('Menu', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var menu = [
    {
      id: 1,
      title: "男装",
      url: "#/category",
      submenu: [
          {
            id: 1,
            title: "登录",
            url: "#/login",
          },
          {
            id: 2,
            title: "注册",
            url: "#/register",
          },
          {
            id: 3,
            title: "男夹克",
            url: "#/category",
          }
      ]
    },
    {
      id: 2,
      title: "女装",
      submenu: [
          {
            id: 1,
            title: "女衬衫"
          },
          {
            id: 2,
            title: "女卫衣"
          },
          {
            id: 3,
            title: "女夹克"
          }
      ]
    }

  ]; 


  return {
    all: function() {
      return menu;
    },
    get: function(menuId) {
      for (var i = 0; i < menu.length; i++) {
        if (menu[i].id === parseInt(menuId)) {
          return menu[i];
        }
      }
      return null;
    }
  };
})


.factory('Product', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var products = [
    {
      id: 1,
      name: "2017夏季新不规则宽松显瘦蝙蝠袖",
      price: 30,
      sale_price: 20,
      thumb: "img/list/p_1.jpg",
      images: [
        "img/detail/d_1.jpg",
        "img/detail/d_2.jpg",
        "img/detail/d_3.jpg"
      ],
      description: "这件设计那么特别又好看，穿法很多，腰带是一起的哦，每套LOOK都是我自己平时爱穿的那种型下摆的设计真是我穿过的衬衫里很好看的一件！难得可以穿出那么多种味道的白衬衫，错过有没有太可惜？",
      reviews: [
        {
          avatar: "img/avatar.jpg",
          name: "小美",
          content: "这衣服真好看",
          stars: 4
        }
      ]
    },
    {
      id: 2,
      name: "夏季新款韩版短袖t恤套装女",
      price: 30,
      sale_price: null,
      thumb: "img/list/p_1.jpg",
      images: [
        "img/detail/d_1.jpg",
        "img/detail/d_2.jpg",
        "img/detail/d_3.jpg"
      ]
    },
    {
      id: 3,
      name: "2017夏装新款韩版圆领短袖t恤套装",
      price: 30,
      sale_price: null,
      thumb: "img/list/p_1.jpg",
      images: [
        "img/detail/d_1.jpg",
        "img/detail/d_2.jpg",
        "img/detail/d_3.jpg"
      ]
    },
    {
      id: 4,
      name: "2017夏季新不规则宽松显瘦蝙蝠袖",
      price: 30,
      sale_price: 20,
      thumb: "img/list/p_1.jpg",
      images: [
        "img/detail/d_1.jpg",
        "img/detail/d_2.jpg",
        "img/detail/d_3.jpg"
      ]
    },
    {
      id: 5,
      name: "555夏季新款韩版短袖t恤套装女",
      price: 30,
      sale_price: null,
      thumb: "img/list/p_1.jpg",
      images: [
        "img/detail/d_1.jpg",
        "img/detail/d_2.jpg",
        "img/detail/d_3.jpg"
      ]
    },
    {
      id: 6,
      name: "666夏装新款韩版圆领短袖t恤套装",
      price: 30,
      sale_price: null,
      thumb: "img/list/p_1.jpg",
      images: [
        "img/detail/d_1.jpg",
        "img/detail/d_2.jpg",
        "img/detail/d_3.jpg"
      ]
    }
  ];

  return {
    all: function() {
      return products;
    },
    get: function(productId) {
      for (var i = 0; i < products.length; i++) {
        if (products[i].id === parseInt(productId)) {
          return products[i];
        }
      }
      return null;
    }
  };
})

;