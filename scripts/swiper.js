const swiperRooms = new Swiper('.swiper--rooms', {
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '#swiper-button-next--rooms',
      prevEl: '#swiper-button-prev--rooms',
    },
  });

  if (window.innerWidth < 1000) {
    const swiperCoreFeatures = new Swiper('.swiper--facilities', {
      direction: 'horizontal',
      loop: true,
    
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }     

  const swiperMenu = new Swiper('.swiper--menu', {
    direction: 'horizontal',
    loop: true,
  
    navigation: {
      nextEl: '#swiper-button-next--menu',
      prevEl: '#swiper-button-prev--menu',
    },
  });

  const swiperAuto = new Swiper('.swiper--auto', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: {
      
    },  
  });