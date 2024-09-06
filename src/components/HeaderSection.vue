<template>
  <header class="app-header">
    <nav class="navbar">
      <div class="logo-container">
        <img src="@/assets/images/logo.webp" alt="Logo" class="logo">
      </div>
      <ul class="nav-links">
        <li><a href="#home">ホーム</a></li>
        <li><a href="#about">会社概要</a></li>
        <li><a href="#services">サービス</a></li>
        <li><a href="#achievements">実績</a></li> <!-- 実績セクションを追加 -->
        <li><a href="#team">メンバー紹介</a></li>
        <li><a href="#contact">お問い合わせ</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
};
</script>

<style scoped>
body {
  margin: 0; /* ページ全体の余白をなくす */
  padding: 0;
}

.app-header {
  position: fixed; /* 固定表示にして、背景動画の上に重ねる */
  top: 0;
  width: 100%;
  background-color: rgba(51, 51, 51, 0.7); /* 背景色に70%の透明度を追加 */
  z-index: 10; /* 背景動画より前に表示 */
  padding: 1em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* 影を追加してヘッダーを強調 */
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 50px;
  margin-right: 20px;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  color: #fff; /* 白い文字 */
  text-decoration: none;
  font-weight: bold;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
