<template>
  <section id="services">
    <h2 class="section-title">サービス</h2>
    <div class="services-content">
      <div class="image-container" :class="{ 'visible': isVisible }">
        <img :src="require('@/assets/images/work2.webp')" alt="サービス画像" class="service-image">
      </div>
      <div class="service-description">
        <p v-for="(content, index) in serviceContents" :key="index" :class="{ 'visible': isVisible }">
          {{ content }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      isVisible: false,
      serviceContents: [
        'AIソリューションの選定とカスタマイズ',
        'プロセスの自動化と効率化',
        'データ管理と分析の最適化',
        'AIトレーニングとサポート',
        'AI導入のリスク管理とコンプライアンスマネジメント',
        '人材育成プログラム'
      ]
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll(); // ページロード時にすぐにチェックする
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = this.$el;
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {  // 表示タイミングを遅くする
        this.isVisible = true;
      }
    }
  }
};
</script>

<style scoped>
#services {
  padding: 2em 0;
}

.services-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.image-container {
  width: 30%;
  padding-right: 20px;
  margin: 0 auto;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 1.5s ease, transform 1.5s ease;
}

.image-container.visible {
  opacity: 1;
  transform: translateX(0);
}

.service-image {
  width: 100%;
}

.service-description {
  width: 65%;
  padding-left: 20px;
  text-align: left; /* テキストを左揃えに */
}

.service-description p {
  font-size: 1.2em;
  margin-bottom: 1em;
  opacity: 0;
  transform: translateX(50px); /* 右から左にスライド */
  transition: opacity 1s ease, transform 1s ease;
}

.service-description p.visible {
  opacity: 1;
  transform: translateX(0);
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
  .image-container, .service-description {
    width: 100%;
    padding-left: 0;
  }

  .service-description {
    text-align: center;
  }
}
</style>
