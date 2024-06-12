const swiperRooms = new Swiper('.swiper--rooms', {
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '#swiper-button-next--rooms',
      prevEl: '#swiper-button-prev--rooms',
    },
  });

  const swiperCoreFeatures = new Swiper('.swiper--facilities', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiperMenu = new Swiper('.swiper--menu', {
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '#swiper-button-next--menu',
      prevEl: '#swiper-button-prev--menu',
    },
  });

  const swiperAuto = new Swiper('.swiper--auto', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: {
      
    },  
  });