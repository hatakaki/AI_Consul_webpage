<template>
    <section id="achievements" class="achievements-section">
      <h2 class="section-title">実績</h2>
      <div class="achievements-content">
        <div class="achievement-item" v-for="(achievement, index) in achievements" :key="index">
          <h3>{{ achievement.title }}</h3>
          <p>{{ achievement.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AchievementsSection',
    data() {
      return {
        achievements: [
          { title: 'プロジェクトA', description: 'プロジェクトAは、AIを活用してプロセスを最適化し、効率を向上させました。' },
          { title: 'プロジェクトB', description: 'プロジェクトBでは、データ分析を通じてビジネスインサイトを得ることに成功しました。' },
          { title: 'プロジェクトC', description: 'プロジェクトCは、AI導入によってリスク管理とコンプライアンスを強化しました。' },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .achievements-section {
    padding: 3em 1em;
    background-color: #f0f0f0;
    text-align: center;
  }
  
  .achievements-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  
  .achievement-item {
    width: 30%;
    margin-bottom: 2em;
  }
  
  .achievement-item h3 {
    font-size: 1.5em;
    margin-bottom: 0.5em;
    color: #333;
  }
  
  .achievement-item p {
    font-size: 1em;
    color: #666;
  }
  
  /* レスポンシブデザイン */
  @media (max-width: 768px) {
    .achievement-item {
      width: 45%;
    }
  }
  
  @media (max-width: 480px) {
    .achievement-item {
      width: 100%;
    }
  }
  </style>
  