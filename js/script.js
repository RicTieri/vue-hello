const { createApp } = Vue;

createApp({
    data() {
        return {
            title: 'Planetary Vue',
            image_src: './img/earth-space-black-background-atmosphere-blue-planet-5k-8k-12016x12016-2152.jpg',
            caption: 'view of Earth from the universe'
        }
    },
}).mount('#app');