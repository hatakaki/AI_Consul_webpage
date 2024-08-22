<template>
  <section id="team" class="team-section">
    <h2>メンバー紹介</h2>
    <div class="team-container">
      <div 
        class="team-member" 
        v-for="(member, index) in teamMembers" 
        :key="index" 
        :class="{ 'visible': isVisible(index) }"
      >
        <img :src="require('@/assets/images/京都の人.png')" alt="チームメンバー">
        <h3>{{ member.name }}</h3>
        <p>{{ member.role }}</p>
        <p>{{ member.bio }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      teamMembers: [
        { name: '佐藤 太郎', role: 'CEO', bio: '20年以上の業界経験を持ち、ビジネス戦略のエキスパート。' },
        { name: '鈴木 花子', role: 'CTO', bio: '技術開発のリーダーであり、AIとデータ分析に精通。' },
        { name: '高橋 一郎', role: 'COO', bio: 'オペレーションとプロセス改善の専門家。' },
      ],
      visibleIndices: []
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
      if (rect.top < window.innerHeight * 0.75 && rect.bottom > 0) {
        this.teamMembers.forEach((_, index) => {
          setTimeout(() => {
            this.visibleIndices.push(index);
          }, index * 500); // 各メンバーの表示タイミングを遅らせる
        });
      }
    },
    isVisible(index) {
      return this.visibleIndices.includes(index);
    }
  }
};
</script>

<style scoped>
.team-section {
  padding: 3em 1em;
  background-color: #f9f9f9;
}

.team-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.team-member {
  width: 250px;
  text-align: center;
  margin-bottom: 2em;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1.5s ease, transform 1.5s ease; /* エフェクトの時間を長く設定 */
}

.team-member.visible {
  opacity: 1;
  transform: translateY(0);
}

.team-member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 1em;
}

.team-member h3 {
  margin: 0.5em 0;
  font-size: 1.2em;
  color: #333;
}

.team-member p {
  margin: 0;
  font-size: 1em;
  color: #666;
}
</style>
