<template>
  <div id="home">
    <div class="intro-text" v-show="!showMainContent">
      <h1 class="core-message">AI統合型BPMが企業成長の確かな道標へ。</h1>
    </div>
    <div class="video-background-container" v-show="showMainContent">
      <video autoplay muted loop id="background-video" ref="backgroundVideo">
        <source :src="require('@/assets/videos/Business_46285-446732353.mp4')" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="overlay" v-show="showMainContent || !showMainContent">
      <h1 class="core-message">AI統合型BPMが企業成長の確かな道標へ。</h1>
      <h1 class="company-name" v-show="showCompanyName">会社名</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMainContent: false,
      showCompanyName: false,
    };
  },
  mounted() {
    // コアメッセージ表示後、3秒後に動画を再生し、会社名を表示
    setTimeout(() => {
      this.showMainContent = true;
      this.showCompanyName = true;
      this.$refs.backgroundVideo.playbackRate = 0.8; // 動画の再生速度を少し遅くする
    }, 3000); // 3秒後に動画と会社名を表示
  }
};
</script>

<style scoped>
#home {
  position: relative;
  width: 100%;
  height: 80vh; /* 背景動画の縦のサイズを少し小さく設定 */
  overflow: hidden;
}

.intro-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; /* 動画の高さに合わせて調整 */
  background-color: #333; /* 背景をグレーに */
  color: white;
  font-size: 3rem;
  opacity: 0;
  animation: fadeIn 2.5s ease forwards; /* コアメッセージをぼやっと浮かび上がらせる */
}

.video-background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
  will-change: transform;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
  padding: 20px;
  box-sizing: border-box;
}

.core-message {
  font-size: 3rem;
  text-align: center;
}

.company-name {
  font-size: 4rem;
  text-align: center;
  margin-top: 20px; /* コアメッセージと会社名の間に余白を追加 */
  opacity: 0;
  animation: fadeIn 2.5s ease forwards;
  animation-delay: 3s; /* 会社名を3秒後に浮かび上がらせる */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* レスポンシブデザイン */
@media (max-width: 768px) {
  .core-message, .company-name {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .core-message, .company-name {
    font-size: 2rem;
  }
}
</style>
